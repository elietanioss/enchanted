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

/** Build a WhatsApp cart order URL with all items pre-filled */
export function buildCartOrderURL(items: Array<{
  product: { name: string; price: number | null }
  selectedSize: string | null
  quantity: number
}>): string {
  const lines = items.map(({ product, selectedSize, quantity }) => {
    const price = product.price != null ? `$${(product.price * quantity).toFixed(2)}` : 'Price TBD'
    const size = selectedSize ? ` — Size ${selectedSize}` : ''
    return `• ${product.name}${size} × ${quantity} — ${price}`
  })

  const total = items.reduce((sum, { product, quantity }) => {
    return sum + (product.price ?? 0) * quantity
  }, 0)

  const message = [
    "Hi! I'd like to place an order from Enchanted Style 💫",
    '',
    'Items:',
    ...lines,
    '',
    `Total: $${total.toFixed(2)}`,
    '',
    'Please confirm availability!',
  ].join('\n')

  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`
}
