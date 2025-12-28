import Image from 'next/image'

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/917856815038"
      className="fixed bottom-5 right-5 w-[76px] h-[76px] p-3 bg-[#25d366] rounded-full flex items-center justify-center cursor-pointer z-[99999] shadow-[0_8px_24px_rgba(0,0,0,0.28),0_0_24px_rgba(37,211,102,0.45)] hover:scale-110 transition-transform"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        width={60}
        height={60}
        className="w-full h-full drop-shadow-[0_3px_3px_rgba(0,0,0,0.25)]"
      />
    </a>
  )
}

