// ============================================================
// ENCHANTED STYLE — WhatsApp Integration
// ============================================================

export const WHATSAPP_PHONE = '96181351084'

/** Build a WhatsApp URL with product pre-fill message */
export function buildWhatsAppURL(productName: string): string {
  const message = `Hi! I'm interested in ${productName} from Enchanted Style 💫`
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`
}

/** Direct WhatsApp link (for floating button) */
export const WHATSAPP_FLOAT_URL = `https://wa.me/${WHATSAPP_PHONE}`
