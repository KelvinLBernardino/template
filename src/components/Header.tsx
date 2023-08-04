'use client'

import { useState } from 'react'
import { FaUserCircle } from 'react-icons/fa'

import { menuItems } from '@/data'
import { headerProps } from '@/interface'

const Header: React.FC<headerProps> = ({ title }) => {
  const [showMenu, setShowMenu] = useState<boolean>(false)

  const toggleMenu = () => {
    setShowMenu((prev) => !prev)
  }

  return (
    <header className="flex items-center justify-between p-4 bg-primary text-white">
      <div className="w-20 h-10 bg-white flex items-center justify-center rounded-full">
        <p className="text-primary">Logo</p>
      </div>

      <div className="text-xl font-bold">{title}</div>

      <div className="relative">
        <button
          onClick={toggleMenu}
          className="focus:outline-none"
          aria-label="Menu"
        >
          <FaUserCircle className="w-8 h-8" />
        </button>
        {showMenu && (
          <div className="absolute right-0 p-4 pb-2 bg-white rounded shadow-lg">
            {menuItems.map((item, index) => (
              <p
                key={index}
                className="block px-4 py-2 mb-2 rounded-md text-white bg-primary hover:bg-secondary cursor-pointer"
              >
                {item.text}
              </p>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
