"use client"

import Link from "next/link"
import { useState } from "react"

const menu = [
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
    name: "Dashboard",
    href: "/dashboard"
  },
   {
    name: "Setting",
    href: "/dashboard/settings"
  },
   {
    name: "Profile",
    href: "/dashboard/settings/profile"
  }
]

export default function Header() {
const [toggle, setToggle] = useState(false)

  return (
    <header className="py-4">
          <nav>
            <ul className="flex items-start justify-center gap-x-3">
              {
                menu.map((item) => (
                  <Link href={item.href} key={item.name}>
                    <li>
                      {item.name}
                    </li>
                  </Link>
                ))
              }

            </ul>
          </nav>
        </header>
  )
}
