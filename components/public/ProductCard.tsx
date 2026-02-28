'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { formatPrice } from '@/lib/utils'
import { buildWhatsAppURL } from '@/lib/whatsapp'
import type { Product } from '@/types'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    cardRef.current.style.transform = `rotateY(${x * 15}deg) rotateX(${-y * 15}deg) scale3d(1.02, 1.02, 1.02)`
  }

  const handleMouseLeave = () => {
    if (!cardRef.current) return
    cardRef.current.style.transform = 'rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)'
  }

  return (
    <div
      ref={cardRef}
      className="product-card-inner rounded-xl overflow-hidden bg-[#161616] border border-[#2a2a2a] group cursor-pointer transition-transform duration-200"
      style={{ perspective: '1000px' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Image section */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={product.image_url || '/placeholder.jpg'}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />

        {/* Featured badge */}
        {product.is_featured && (
          <span className="absolute top-2 left-2 bg-[#c9a84c] text-black text-xs px-2 py-1 uppercase tracking-wider font-medium rounded z-10">
            Featured
          </span>
        )}

        {/* Shine overlay */}
        <div className="product-card-shine rounded-xl" />
      </div>

      {/* Content section */}
      <div className="p-4">
        {/* Category name */}
        {product.category?.name && (
          <p className="text-xs text-white/40 uppercase tracking-widest mb-1">
            {product.category.name}
          </p>
        )}

        {/* Product name */}
        <h3 className="font-display text-white text-lg leading-tight mb-2">
          {product.name}
        </h3>

        {/* Price */}
        <p className="text-[#c9a84c] font-medium">
          {formatPrice(product.price)}
        </p>

        {/* Sizes */}
        {product.sizes && product.sizes.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-2">
            {product.sizes.map((size) => (
              <span
                key={size}
                className="text-[10px] text-white/50 border border-white/20 px-1.5 py-0.5 rounded uppercase tracking-wide"
              >
                {size}
              </span>
            ))}
          </div>
        )}

        {/* WhatsApp CTA */}
        <a
          href={buildWhatsAppURL(product.name)}
          target="_blank"
          rel="noopener noreferrer"
          data-hover
          className="mt-3 w-full flex items-center justify-center gap-2 bg-[#c9a84c] hover:bg-[#f0d060] text-black text-xs uppercase tracking-widest font-semibold py-2.5 rounded-lg transition-all duration-200 active:scale-95"
        >
          <svg
            className="w-4 h-4 fill-current flex-shrink-0"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
          Order via WhatsApp
        </a>
      </div>
    </div>
  )
}
