"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const menuItems = [
  {
    name: "Home",
    href: "/"
  },
  {
    name: "About",
    href: "/about"
  },
  {
    name: "Blog",
    href: "/blog"
  },
  {
    name: "Contact",
    href: "/contact"
  }
]

export default function Header() {
  const pathname = usePathname()

  return (
    <header>
      <ul className="flex items-center justify-center gap-x-5 py-20">
        {menuItems.map(item => {
                    
          const isActive = pathname === item.href
                            
          return (
            <li className={isActive ? "text-orange-400" : "text-slate-400"} key={item.name}>
            <Link href={item.href}>
              {item.name}
            </Link>
          </li>
          )
        }          
        )}
      </ul>
    </header>
  )
}
