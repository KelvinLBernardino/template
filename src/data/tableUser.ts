import { uniqueId } from 'lodash'

import {
  TableColumnUserTypes,
  TableRowUserTypes,
  menuActionType,
} from '@/interface'

import { BiSolidShow, BiSolidEditAlt, BiSolidTrashAlt } from 'react-icons/bi'

export const userColumns: TableColumnUserTypes[] = [
  {
    key: uniqueId(),
    label: 'Uuid',
    name: 'uuid',
    hide: true,
  },
  {
    key: uniqueId(),
    label: 'Nome',
    name: 'name',
    hide: false,
  },
  {
    key: uniqueId(),
    label: 'Idade',
    name: 'age',
    hide: false,
  },
  {
    key: uniqueId(),
    label: 'Email',
    name: 'email',
    hide: false,
  },
]

export const userRows: TableRowUserTypes[] = [
  { uuid: 1, name: 'John Doe', age: 30, email: 'john@example.com' },
  { uuid: 2, name: 'Jane Smith', age: 25, email: 'jane@example.com' },
  { uuid: 3, name: 'Bob Johnson', age: 40, email: 'bob@example.com' },
]

export const tableMenuAction: menuActionType[] = [
  {
    title: 'Mostrar',
    icon: BiSolidShow,
  },
  {
    title: 'Editar',
    icon: BiSolidEditAlt,
  },
  {
    title: 'Excluir',
    icon: BiSolidTrashAlt,
  },
]
