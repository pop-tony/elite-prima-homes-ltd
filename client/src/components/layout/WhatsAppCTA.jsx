
import { MessageCircle } from 'lucide-react'
export default function WhatsAppCTA(){
  return (
    <a href="https://wa.me/233241234567" target="_blank" className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-white text-[12px] font-bold shadow-luxe hover:scale-[1.03] transition-luxe">
      <MessageCircle size={16}/> WhatsApp Us
    </a>
  )
}
