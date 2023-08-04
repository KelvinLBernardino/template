import { IconType } from 'react-icons'

export interface TableRowUserTypes {
  uuid: number
  name: string
  age: number
  email: string
}

export interface TableColumnUserTypes {
  key: string
  label: string
  name: keyof TableRowUserTypes
  hide: boolean
}

export interface menuActionType {
  title: string
  icon: IconType
}

export interface TablePropsTypes {
  title: string
  columns: TableColumnUserTypes[]
  rows: TableRowUserTypes[]
  menuAction: menuActionType[]
}
