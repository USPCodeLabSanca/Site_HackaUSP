'use client'

import { useTheme } from 'next-themes'
import { FiMoon, FiSun } from 'react-icons/fi'

export const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme(resolvedTheme === 'light' ? 'dark' : 'light')}
      aria-label="Alternar entre tema claro e escuro"
      className="flex h-8 w-8 items-center justify-center rounded-md border border-white/10 light:border-black/15 text-white light:text-neutral-900 hover:bg-white/10 light:hover:bg-black/10 transition-colors cursor-pointer"
    >
      {/* No escuro mostra o sol (vai pro claro); no claro mostra a lua (vai pro escuro) */}
      <FiSun className="block light:hidden" size={16} />
      <FiMoon className="hidden light:block" size={16} />
    </button>
  )
}