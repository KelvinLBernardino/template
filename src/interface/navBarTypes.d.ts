import { IconType } from 'react-icons'

export interface SubMenuItem {
  title: string
  onClick: string
}

export interface MenuItemProps {
  title: string
  subItems: SubMenuItem[]
  icon: IconType
  onClick: string
}

export interface MenuProps {
  data: MenuItemProps[]
}
