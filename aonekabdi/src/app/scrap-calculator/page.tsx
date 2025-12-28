'use client'

import { useState, useEffect, useCallback } from 'react'
import CalculatorBanner from '@/app/components/Calculator/CalculatorBanner'
import CalculatorItems from '@/app/components/Calculator/CalculatorItems'
import CalculatorSummary from '@/app/components/Calculator/CalculatorSummary'
import AdminModal from '@/app/components/Calculator/AdminModal'
import LoginModal from '@/app/components/Calculator/LoginModal'

interface Item {
  id: string
  label: string
  unit: 'kg' | 'pc'
  price: number
}

const DEFAULT_ITEMS: Item[] = [
  { id: 'newspaper', label: 'Newspaper', unit: 'kg', price: 8 },
  { id: 'copy', label: 'Copy', unit: 'kg', price: 12 },
  { id: 'book', label: 'Book', unit: 'kg', price: 10 },
  { id: 'magazine', label: 'Magazine', unit: 'kg', price: 6 },
  { id: 'copy_book_mix', label: 'Copy + Book Mix', unit: 'kg', price: 10 },
  { id: 'cartoon', label: 'Cartoon', unit: 'kg', price: 10 },
  { id: 'iron', label: 'Iron', unit: 'kg', price: 20 },
  { id: 'cutting_iron', label: 'Cutting Iron', unit: 'kg', price: 17 },
  { id: 'tina', label: 'Tina', unit: 'kg', price: 15 },
  { id: 'steel', label: 'Steel', unit: 'kg', price: 30 },
  { id: 'al_cast', label: 'Aluminium (Cast)', unit: 'kg', price: 80 },
  { id: 'al_beat', label: 'Aluminium (Beat)', unit: 'kg', price: 70 },
  { id: 'plastic_black', label: 'Plastic (Black)', unit: 'kg', price: 1 },
  { id: 'plastic_hard', label: 'Plastic (Hard)', unit: 'kg', price: 3 },
  { id: 'plastic_soft', label: 'Plastic (Soft)', unit: 'kg', price: 10 },
  { id: 'bottle_quarter', label: 'Bottle (Quarter)', unit: 'pc', price: 0.5 },
  { id: 'bottle_full', label: 'Bottle (Full)', unit: 'pc', price: 1 },
  { id: 'beer_bottle', label: 'Beer Bottle', unit: 'pc', price: 1 },
  { id: 'computer', label: 'Computer', unit: 'pc', price: 100 },
  { id: 'cpu', label: 'CPU', unit: 'pc', price: 150 },
  { id: 'ups', label: 'U.P.S', unit: 'pc', price: 150 },
  { id: 'battery_black', label: 'Battery (Black Dry)', unit: 'kg', price: 70 },
  { id: 'battery_liquid', label: 'Battery (Liquid)', unit: 'kg', price: 80 },
  { id: 'tyre', label: 'Tyre (4+6 Wheeler only)', unit: 'kg', price: 10 },
  { id: 'tube', label: 'Tube', unit: 'kg', price: 10 },
  { id: 'fridge_big', label: 'Frize (Big)', unit: 'pc', price: 400 },
  { id: 'fridge_small', label: 'Frize (Small)', unit: 'pc', price: 200 },
]

function loadItems(): Item[] {
  if (typeof window === 'undefined') return DEFAULT_ITEMS
  const raw = localStorage.getItem('scrap_items_v1')
  if (raw) {
    try {
      const parsed = JSON.parse(raw)
      if (Array.isArray(parsed) && parsed.every((it) => it.id && it.label && it.unit))
        return parsed
    } catch (e) {
      // ignore
    }
  }
  return DEFAULT_ITEMS
}

function saveItems(items: Item[]) {
  if (typeof window === 'undefined') return
  localStorage.setItem('scrap_items_v1', JSON.stringify(items))
  const priceObj: Record<string, number> = {}
  for (const it of items) priceObj[it.id] = Number(it.price || 0)
  localStorage.setItem('scrap_prices_v1', JSON.stringify(priceObj))
}

export default function ScrapCalculatorPage() {
  const [items, setItems] = useState<Item[]>(DEFAULT_ITEMS)
  const [quantities, setQuantities] = useState<Record<string, number>>({})
  const [prices, setPrices] = useState<Record<string, number>>({})
  const [discount, setDiscount] = useState(0)
  const [tax, setTax] = useState(0)
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false)
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)

  useEffect(() => {
    const loadedItems = loadItems()
    setItems(loadedItems)
    const loadedPrices: Record<string, number> = {}
    for (const it of loadedItems) loadedPrices[it.id] = Number(it.price || 0)
    setPrices(loadedPrices)

    const loadedDiscount = Number(localStorage.getItem('scrap_discount') || 0)
    const loadedTax = Number(localStorage.getItem('scrap_tax') || 0)
    setDiscount(loadedDiscount)
    setTax(loadedTax)

    // Load saved quantities
    const savedQty = localStorage.getItem('scrap_quantities_v1')
    if (savedQty) {
      try {
        setQuantities(JSON.parse(savedQty))
      } catch (e) {
        // ignore
      }
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('scrap_quantities_v1', JSON.stringify(quantities))
  }, [quantities])

  const handleQuantityChange = (id: string, quantity: number) => {
    setQuantities((prev) => ({ ...prev, [id]: quantity }))
  }

  const calculateSubtotal = () => {
    let subtotal = 0
    for (const item of items) {
      const qty = quantities[item.id] || 0
      subtotal += qty * (prices[item.id] || 0)
    }
    return subtotal
  }

  const subtotal = calculateSubtotal()
  const afterDiscount = Math.max(0, subtotal - discount)
  const taxAmount = afterDiscount * (tax / 100)
  const grandTotal = afterDiscount + taxAmount

  const handleClear = () => {
    if (confirm('Clear all entered quantities?')) {
      setQuantities({})
    }
  }

  const handleAdminClick = () => {
    setIsLoginModalOpen(true)
  }

  const handleLoginSuccess = () => {
    setIsAdminModalOpen(true)
  }

  const handleAdminSave = (updatedItems: Item[], updatedDiscount: number, updatedTax: number) => {
    setItems(updatedItems)
    saveItems(updatedItems)
    const updatedPrices: Record<string, number> = {}
    for (const it of updatedItems) updatedPrices[it.id] = Number(it.price || 0)
    setPrices(updatedPrices)
    setDiscount(updatedDiscount)
    setTax(updatedTax)
    localStorage.setItem('scrap_discount', String(updatedDiscount))
    localStorage.setItem('scrap_tax', String(updatedTax))
  }

  const handleReset = () => {
    setItems(DEFAULT_ITEMS)
    saveItems(DEFAULT_ITEMS)
    const defaultPrices: Record<string, number> = {}
    for (const it of DEFAULT_ITEMS) defaultPrices[it.id] = Number(it.price || 0)
    setPrices(defaultPrices)
    setDiscount(0)
    setTax(0)
    localStorage.setItem('scrap_discount', '0')
    localStorage.setItem('scrap_tax', '0')
    alert('Reset to defaults')
  }

  const handleScreenshot = async () => {
    const enteredItems = items.filter((it) => (quantities[it.id] || 0) > 0)
    if (enteredItems.length === 0) {
      alert('No items entered. Please enter quantities to capture a screenshot.')
      return
    }

    try {
      const html2canvas = (await import('html2canvas')).default

      const formatMoney = (n: number) =>
        '₹ ' +
        Number(n).toLocaleString('en-IN', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })

      // Create screenshot element
      const snap = document.createElement('div')
      snap.style.position = 'fixed'
      snap.style.left = '-9999px'
      snap.style.top = '0'
      snap.style.width = '820px'
      snap.style.background = '#fff'
      snap.style.color = '#000'
      snap.style.padding = '18px'
      snap.style.borderRadius = '8px'
      snap.style.fontFamily = 'Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial'

      const now = new Date()
      snap.innerHTML = `
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">
          <div style="font-weight:900;font-size:20px">Aone Kabadi — Scrap Calculation</div>
          <div style="font-size:12px;color:#333">${now.toLocaleString()}</div>
        </div>
        <table style="width:100%;border-collapse:collapse;font-size:14px">
          <thead>
            <tr>
              <th style="padding:8px 10px;border-bottom:1px solid #eee;text-align:left;font-weight:800;background:#fafafa">Item</th>
              <th style="padding:8px 10px;border-bottom:1px solid #eee;text-align:left;font-weight:800;background:#fafafa">Unit</th>
              <th style="padding:8px 10px;border-bottom:1px solid #eee;text-align:right;font-weight:800;background:#fafafa">Qty</th>
              <th style="padding:8px 10px;border-bottom:1px solid #eee;text-align:right;font-weight:800;background:#fafafa">Price/unit</th>
              <th style="padding:8px 10px;border-bottom:1px solid #eee;text-align:right;font-weight:800;background:#fafafa">Total</th>
            </tr>
          </thead>
          <tbody>
            ${enteredItems
              .map((item) => {
                const qty = quantities[item.id] || 0
                const price = prices[item.id] || 0
                const total = qty * price
                return `
              <tr>
                <td style="padding:8px 10px;border-bottom:1px solid #eee">${item.label}</td>
                <td style="padding:8px 10px;border-bottom:1px solid #eee">${item.unit}</td>
                <td style="padding:8px 10px;border-bottom:1px solid #eee;text-align:right">${
                  item.unit === 'pc'
                    ? Number(qty).toLocaleString('en-IN')
                    : Number(qty).toLocaleString('en-IN', { maximumFractionDigits: 2 })
                }</td>
                <td style="padding:8px 10px;border-bottom:1px solid #eee;text-align:right">${formatMoney(price)}${
                  item.unit === 'pc' ? '/pc' : '/kg'
                }</td>
                <td style="padding:8px 10px;border-bottom:1px solid #eee;text-align:right">${formatMoney(total)}</td>
              </tr>
            `
              })
              .join('')}
          </tbody>
        </table>
        <div style="margin-top:12px;display:flex;justify-content:flex-end;flex-direction:column;gap:6px;max-width:400px;margin-left:auto">
          <div style="display:flex;justify-content:space-between">
            <div style="font-size:12px;color:#9a9a9a">Subtotal</div>
            <div style="text-align:right">${formatMoney(subtotal)}</div>
          </div>
          <div style="display:flex;justify-content:space-between">
            <div style="font-size:12px;color:#9a9a9a">Discount</div>
            <div style="text-align:right">${formatMoney(discount)}</div>
          </div>
          <div style="display:flex;justify-content:space-between">
            <div style="font-size:12px;color:#9a9a9a">GST</div>
            <div style="text-align:right">${formatMoney(taxAmount)}</div>
          </div>
          <div style="display:flex;justify-content:space-between">
            <div style="font-size:12px;color:#9a9a9a">Grand Total</div>
            <div style="text-align:right;font-weight:900;font-size:16px">${formatMoney(grandTotal)}</div>
          </div>
        </div>
      `

      document.body.appendChild(snap)

      const canvas = await html2canvas(snap, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#fff',
        logging: false,
      })

      canvas.toBlob((blob) => {
        if (blob) {
          const url = URL.createObjectURL(blob)
          const a = document.createElement('a')
          a.href = url
          a.download = 'scrap-calculation.png'
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

  const handleExport = () => {
    const data = {
      items,
      discount,
      tax,
      quantities,
    }
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'scrap_prices_and_items.json'
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
            const validatedItems = obj.items.map((it: any) => ({
              id: it.id || `item_${Date.now()}`,
              label: it.label || 'Unnamed',
              unit: it.unit || 'kg',
              price: Number(it.price) || 0,
            }))
            setItems(validatedItems)
            saveItems(validatedItems)
            const updatedPrices: Record<string, number> = {}
            for (const it of validatedItems) updatedPrices[it.id] = Number(it.price || 0)
            setPrices(updatedPrices)

            if (obj.discount !== undefined) {
              setDiscount(Number(obj.discount) || 0)
              localStorage.setItem('scrap_discount', String(obj.discount || 0))
            }
            if (obj.tax !== undefined) {
              setTax(Number(obj.tax) || 0)
              localStorage.setItem('scrap_tax', String(obj.tax || 0))
            }
            if (obj.quantities) {
              setQuantities(obj.quantities)
            }
            alert('Imported values applied.')
          }
        } catch (e) {
          alert('Import failed. Invalid JSON.')
        }
      }
      reader.readAsText(file)
    }
    input.click()
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#f6fbf8] via-white to-[#f0fdf4]">
      <CalculatorBanner />

      <div className="container mx-auto max-w-7xl px-4 py-8">
        <p className="text-gray-600 mb-6 text-center">
          Enter quantities (kg) or pieces. Prices are controlled by admin. Totals update instantly.
        </p>

        <div className="grid lg:grid-cols-[1fr_360px] gap-6">
          <CalculatorItems
            items={items}
            quantities={quantities}
            prices={prices}
            onQuantityChange={handleQuantityChange}
          />

          <CalculatorSummary
            subtotal={subtotal}
            discount={discount}
            tax={taxAmount}
            grandTotal={grandTotal}
            onClear={handleClear}
            onAdminClick={handleAdminClick}
            onScreenshot={handleScreenshot}
            onExport={handleExport}
            onImport={handleImport}
          />
        </div>
      </div>

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onSuccess={handleLoginSuccess}
      />

      <AdminModal
        isOpen={isAdminModalOpen}
        onClose={() => setIsAdminModalOpen(false)}
        items={items}
        discount={discount}
        tax={tax}
        onSave={handleAdminSave}
        onReset={handleReset}
      />
    </main>
  )
}



