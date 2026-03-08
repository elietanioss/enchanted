'use client'
import { usePathname, useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { cn } from '@/lib/utils'
import Logo from '@/components/public/Logo'

const navItems = [
  { label: 'Dashboard', href: '/admin/dashboard', icon: '⬡' },
  { label: 'Products', href: '/admin/products', icon: '◈' },
  { label: 'Categories', href: '/admin/categories', icon: '◉' },
  { label: 'Orders', href: '/admin/orders', icon: '◎' },
]

interface AdminSidebarProps {
  isOpen?: boolean
  onClose?: () => void
}

export default function AdminSidebar({ isOpen = false, onClose }: AdminSidebarProps) {
  const pathname = usePathname()
  const router = useRouter()

  const handleLogout = async () => {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push('/admin/login')
    router.refresh()
  }

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      <aside className={cn(
        'fixed inset-y-0 left-0 z-50 w-64 bg-surface border-r border-border flex flex-col transition-transform duration-300',
        'md:static md:translate-x-0 md:z-auto md:shrink-0',
        isOpen ? 'translate-x-0' : '-translate-x-full'
      )}>
        {/* Logo */}
        <div className="p-6 border-b border-border flex items-start justify-between">
          <div>
            <Logo className="h-8 w-auto" />
            <p className="text-muted text-xs mt-1 tracking-widest uppercase">Admin Panel</p>
          </div>
          {/* Close button — mobile only */}
          <button
            onClick={onClose}
            className="md:hidden text-muted hover:text-foreground p-1 -mr-1 mt-0.5 transition-colors"
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 p-4 space-y-1">
          {navItems.map(item => (
            <a
              key={item.href}
              href={item.href}
              onClick={onClose}
              className={cn(
                'admin-nav-item flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium',
                pathname.startsWith(item.href)
                  ? 'active bg-gold/10 text-gold border-l-2 border-gold'
                  : 'text-muted hover:bg-foreground/5 hover:text-foreground border-l-2 border-transparent'
              )}
            >
              <span className="text-lg">{item.icon}</span>
              {item.label}
            </a>
          ))}
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-border">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm text-muted hover:text-red-400 hover:bg-red-500/10 transition-colors"
          >
            <span>↪</span>
            Sign Out
          </button>
        </div>
      </aside>
    </>
  )
}
