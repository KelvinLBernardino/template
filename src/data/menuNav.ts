import { FaUserAlt } from 'react-icons/fa'
import { MenuItemProps } from '@/interface'

export const menuNav: MenuItemProps[] = [
  {
    title: 'Membros',
    subItems: [
      { title: 'Cadastrar', onClick: 'Cadastrar' },
      { title: 'Visualizar', onClick: 'Visualizar' },
    ],
    icon: FaUserAlt,
    onClick: 'Membros',
  },
  {
    title: 'Item 2',
    subItems: [
      { title: 'Subitem 4', onClick: 'SubItem 4' },
      { title: 'Subitem 5', onClick: 'SubItem 5' },
      { title: 'Subitem 6', onClick: 'SubItem 6' },
    ],
    icon: FaUserAlt,
    onClick: 'Item 2',
  },
  {
    title: 'Item 3',
    subItems: [
      { title: 'Subitem 7', onClick: 'SubItem 7' },
      { title: 'Subitem 8', onClick: 'SubItem 8' },
      { title: 'Subitem 9', onClick: 'SubItem 9' },
    ],
    icon: FaUserAlt,
    onClick: 'Item 3',
  },
]
