'use client'

import { useState } from 'react'
import { FaAngleUp, FaAngleDown } from 'react-icons/fa'

import { useAppSelector, useAppDispatch } from '@/context/hooks'
import { setSelectedMenu } from '@/context/modules'
import { MenuItemProps, MenuProps } from '@/interface'

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const navBarContext = useAppSelector((state) => state.navBar)

  const [isOpen, setIsOpen] = useState(false)

  const dispatch = useAppDispatch()

  const handleItemClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <button
        className="flex items-center justify-between w-full px-4 py-2 text-left hover:bg-gray-100 focus:outline-none"
        onClick={handleItemClick}
      >
        <span className="flex items-center justify-between">
          <props.icon className="mr-4" />
          {props.title}
        </span>
        <span>{isOpen ? <FaAngleDown /> : <FaAngleUp />}</span>
      </button>
      {isOpen && (
        <ul className="px-4">
          {props.subItems.map((subItem, index) => (
            <li
              key={index}
              className={`py-2 px-8 cursor-pointer ${
                navBarContext.item === props.onClick &&
                navBarContext.subItem === subItem.onClick &&
                'bg-gray-200'
              } hover:bg-gray-100`}
              onClick={() =>
                dispatch(
                  setSelectedMenu({
                    item: props.onClick,
                    subItem: subItem.onClick,
                  }),
                )
              }
            >
              {subItem.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

const Menu: React.FC<MenuProps> = (props) => {
  return (
    <div className="w-1/6 bg-gray-300">
      {props.data.map((element, index) => (
        <MenuItem key={index} {...element} />
      ))}
    </div>
  )
}

export default Menu
