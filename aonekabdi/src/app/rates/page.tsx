'use client'

import { useState, useEffect, useMemo } from 'react'
import RatesHero from '@/app/components/Rates/RatesHero'
import RatesTable from '@/app/components/Rates/RatesTable'
import RatesCards from '@/app/components/Rates/RatesCards'
import RatesAdminModal from '@/app/components/Rates/RatesAdminModal'
import LoginModal from '@/app/components/Calculator/LoginModal'

interface RateItem {
  idKey: string
  sl: number
  name: string
  unit: 'kg' | 'pc'
  rate: number
}

const DEFAULT_RATES: RateItem[] = [
  { idKey: 'newspaper', sl: 1, name: 'Newspaper', unit: 'kg', rate: 8 },
  { idKey: 'copy', sl: 2, name: 'Copy', unit: 'kg', rate: 10 },
  { idKey: 'book', sl: 3, name: 'Book', unit: 'kg', rate: 10 },
  { idKey: 'magazine', sl: 4, name: 'Magazine', unit: 'kg', rate: 6 },
  { idKey: 'copy_book_mix', sl: 5, name: 'Copy + Book Mix', unit: 'kg', rate: 10 },
  { idKey: 'cartoon', sl: 6, name: 'Cartoon', unit: 'kg', rate: 10 },
  { idKey: 'iron', sl: 7, name: 'Iron', unit: 'kg', rate: 20 },
  { idKey: 'cutting_iron', sl: 8, name: 'Cutting Iron', unit: 'kg', rate: 17 },
  { idKey: 'tina', sl: 9, name: 'Tina', unit: 'kg', rate: 15 },
  { idKey: 'steel', sl: 10, name: 'Steel', unit: 'kg', rate: 30 },
  { idKey: 'aluminium_cast', sl: 11, name: 'Aluminium (Cast)', unit: 'kg', rate: 80 },
  { idKey: 'aluminium_beat', sl: 12, name: 'Aluminium (Beat)', unit: 'kg', rate: 70 },
  { idKey: 'plastic_black', sl: 13, name: 'Plastic (Black)', unit: 'kg', rate: 1 },
  { idKey: 'plastic_hard', sl: 14, name: 'Plastic (Hard)', unit: 'kg', rate: 3 },
  { idKey: 'plastic_soft', sl: 15, name: 'Plastic (Soft)', unit: 'kg', rate: 10 },
  { idKey: 'bottle_quarter', sl: 16, name: 'Bottle (Quarter)', unit: 'pc', rate: 0.5 },
  { idKey: 'bottle_full', sl: 17, name: 'Bottle (Full)', unit: 'pc', rate: 1 },
  { idKey: 'beer_bottle', sl: 18, name: 'Beer Bottle', unit: 'pc', rate: 1 },
  { idKey: 'computer', sl: 19, name: 'Computer', unit: 'pc', rate: 100 },
  { idKey: 'cpu', sl: 20, name: 'CPU', unit: 'pc', rate: 150 },
  { idKey: 'ups', sl: 21, name: 'U.P.S', unit: 'pc', rate: 150 },
  { idKey: 'battery_black_dry', sl: 22, name: 'Battery (Black Dry)', unit: 'kg', rate: 70 },
  { idKey: 'battery_liquid', sl: 23, name: 'Battery (Liquid)', unit: 'kg', rate: 80 },
  { idKey: 'tyre', sl: 24, name: 'Tyre (4+6 Wheeler only)', unit: 'kg', rate: 10 },
  { idKey: 'tube', sl: 25, name: 'Tube', unit: 'kg', rate: 8 },
  { idKey: 'frize_big', sl: 26, name: 'Frize (Big)', unit: 'pc', rate: 400 },
  { idKey: 'frize_small', sl: 27, name: 'Frize (Small)', unit: 'pc', rate: 200 },
]

function loadItems(): RateItem[] {
  if (typeof window === 'undefined') return DEFAULT_RATES
  const raw = localStorage.getItem('rates_items_v1')
  if (raw) {
    try {
      const parsed = JSON.parse(raw)
      if (Array.isArray(parsed)) {
        return parsed.map((it, idx) => ({
          idKey: it.idKey || `item_${idx}`,
          sl: idx + 1,
          name: it.name || 'Unnamed',
          unit: (it.unit || 'kg') as 'kg' | 'pc',
          rate: Number(it.rate) || 0,
        }))
      }
    } catch (e) {
      // ignore
    }
  }
  return DEFAULT_RATES
}

function saveItems(items: RateItem[]) {
  if (typeof window === 'undefined') return
  localStorage.setItem('rates_items_v1', JSON.stringify(items))
}

export default function RatesPage() {
  const [items, setItems] = useState<RateItem[]>(DEFAULT_RATES)
  const [searchTerm, setSearchTerm] = useState('')
  const [viewMode, setViewMode] = useState<'table' | 'cards'>('cards')
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false)
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)

  useEffect(() => {
    const loadedItems = loadItems()
    setItems(loadedItems)

    // Try to fetch from backend API
    if (typeof window !== 'undefined' && window.location.protocol !== 'file:') {
      fetch('/api/rates', { cache: 'no-cache' })
        .then((r) => {
          if (!r.ok) throw new Error('bad-response')
          return r.json()
        })
        .then((json) => {
          const remote = json?.rates || json
          if (!remote) return

          const rateMap: Record<string, number> = {}
          if (Array.isArray(remote)) {
            remote.forEach((it: any) => {
              if (it.idKey) rateMap[it.idKey] = Number(it.rate)
            })
          } else {
            Object.keys(remote).forEach((k) => {
              rateMap[k] = Number(remote[k])
            })
          }

          // Update rates in DOM
          Object.keys(rateMap).forEach((key) => {
            const elements = document.querySelectorAll(`[data-key="${key}"]`)
            elements.forEach((el) => {
              const item = loadedItems.find((it) => it.idKey === key)
              const unit = item?.unit || 'kg'
              const formatted =
                unit === 'pc'
                  ? '₹ ' + Number(rateMap[key]).toLocaleString('en-IN') + '/pc'
                  : '₹ ' + Number(rateMap[key]).toLocaleString('en-IN') + ' /kg'
              el.textContent = formatted
            })
          })
        })
        .catch((err) => {
          console.warn('Backend fetch skipped/failed — using local rates.', err)
        })
    }
  }, [])

  const filteredItems = useMemo(() => {
    if (!searchTerm.trim()) return items
    const term = searchTerm.toLowerCase()
    return items.filter((item) => item.name.toLowerCase().includes(term))
  }, [items, searchTerm])

  const handleAdminClick = () => {
    setIsLoginModalOpen(true)
  }

  const handleLoginSuccess = () => {
    setIsAdminModalOpen(true)
  }

  const handleAdminSave = (updatedItems: RateItem[]) => {
    setItems(updatedItems)
    saveItems(updatedItems)
  }

  const handleReset = () => {
    setItems(DEFAULT_RATES)
    saveItems(DEFAULT_RATES)
    alert('Reset to defaults')
  }

  const handleExport = () => {
    const data = { items }
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'rates_export.json'
    document.body.appendChild(a)
    a.click()
    a.remove()
    URL.revokeObjectURL(url)
  }

  const handleImport = () => {
    const input = document.createElement('input')
    input.type = 'file'
    input.accept = 'application/json'
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0]
      if (!file) return

      const reader = new FileReader()
      reader.onload = () => {
        try {
          const obj = JSON.parse(reader.result as string)
          if (obj.items && Array.isArray(obj.items)) {
            const validatedItems = obj.items.map((it: any, idx: number) => ({
              idKey: it.idKey || `item_${Date.now()}_${idx}`,
              sl: idx + 1,
              name: it.name || 'Unnamed',
              unit: (it.unit || 'kg') as 'kg' | 'pc',
              rate: Number(it.rate) || 0,
            }))
            setItems(validatedItems)
            saveItems(validatedItems)
            alert('Imported items applied.')
          } else {
            alert('Import failed: invalid format (expected { items: [...] })')
          }
        } catch (e) {
          alert('Import failed: invalid JSON')
        }
      }
      reader.readAsText(file)
    }
    input.click()
  }

  const handleScreenshot = async () => {
    if (filteredItems.length === 0) {
      alert('No items to capture')
      return
    }

    try {
      const html2canvas = (await import('html2canvas')).default

      const snap = document.createElement('div')
      snap.style.position = 'fixed'
      snap.style.left = '-9999px'
      snap.style.top = '0'
      snap.style.width = '900px'
      snap.style.background = '#fff'
      snap.style.color = '#000'
      snap.style.padding = '18px'
      snap.style.borderRadius = '8px'
      snap.style.fontFamily = 'Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial'

      const header = document.createElement('div')
      header.style.display = 'flex'
      header.style.justifyContent = 'space-between'
      header.style.alignItems = 'center'
      header.style.marginBottom = '12px'
      header.innerHTML = `<div style="font-weight:900;font-size:18px">Aone Kabadi — Rates</div><div style="font-size:12px;color:#333">${new Date().toLocaleString()}</div>`
      snap.appendChild(header)

      const table = document.createElement('table')
      table.style.width = '100%'
      table.style.borderCollapse = 'collapse'
      table.innerHTML =
        '<thead><tr><th style="padding:8px;border-bottom:1px solid #ddd;text-align:left;font-weight:800">Item</th><th style="padding:8px;border-bottom:1px solid #ddd;text-align:left;font-weight:800">Unit</th><th style="padding:8px;border-bottom:1px solid #ddd;text-align:right;font-weight:800">Rate</th></tr></thead>'
      const tbody = document.createElement('tbody')
      filteredItems.forEach((r) => {
        const tr = document.createElement('tr')
        const td1 = document.createElement('td')
        td1.textContent = r.name
        td1.style.padding = '8px'
        td1.style.borderBottom = '1px solid #ddd'
        const td2 = document.createElement('td')
        td2.textContent = r.unit
        td2.style.padding = '8px'
        td2.style.borderBottom = '1px solid #ddd'
        const td3 = document.createElement('td')
        td3.style.textAlign = 'right'
        td3.style.padding = '8px'
        td3.style.borderBottom = '1px solid #ddd'
        td3.textContent =
          r.unit === 'pc'
            ? '₹ ' + Number(r.rate).toLocaleString('en-IN')
            : '₹ ' + Number(r.rate).toLocaleString('en-IN') + ' /kg'
        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        tbody.appendChild(tr)
      })
      table.appendChild(tbody)
      snap.appendChild(table)

      document.body.appendChild(snap)

      const canvas = await html2canvas(snap, { scale: 2, backgroundColor: '#fff' })
      canvas.toBlob((blob) => {
        if (blob) {
          const url = URL.createObjectURL(blob)
          const a = document.createElement('a')
          a.href = url
          a.download = 'rates_screenshot.png'
          document.body.appendChild(a)
          a.click()
          a.remove()
          URL.revokeObjectURL(url)
        }
        snap.remove()
      }, 'image/png')
    } catch (err) {
      alert('Screenshot failed: ' + err)
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#f6fbf8] via-white to-[#f0fdf4]">
      <div className="container mx-auto max-w-7xl px-4 py-8">
        <RatesHero
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          viewMode={viewMode}
          onViewModeChange={setViewMode}
          onAdminClick={handleAdminClick}
        />

        <div className="mt-6">
          {viewMode === 'table' ? (
            <RatesTable items={filteredItems} />
          ) : (
            <RatesCards items={filteredItems} />
          )}
        </div>
      </div>

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onSuccess={handleLoginSuccess}
      />

      <RatesAdminModal
        isOpen={isAdminModalOpen}
        onClose={() => setIsAdminModalOpen(false)}
        items={items}
        onSave={handleAdminSave}
        onReset={handleReset}
        onExport={handleExport}
        onImport={handleImport}
        onScreenshot={handleScreenshot}
      />
    </main>
  )
}


