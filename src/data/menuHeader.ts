import { headerMenuItemType } from '@/interface'

export const menuItems: headerMenuItemType[] = [
  {
    text: 'Perfil',
    onClick: () => console.log('Perfil'),
  },
  {
    text: 'Configurações',
    onClick: () => console.log('Configurações'),
  },
  {
    text: 'Sair',
    onClick: () => console.log('Sair'),
  },
]
