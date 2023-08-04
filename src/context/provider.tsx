'use client'
import React, { ReactNode } from 'react'

import { Provider } from 'react-redux'
import { store } from './store'

/**
 * Componente de Provedores que envolve a aplicação com o Redux `Provider`.
 * @component
 * @param {object} props - Propriedades do componente.
 * @param {React.ReactNode} props.children - Os elementos filho a serem renderizados dentro do componente.
 * @returns {JSX.Element} Retorna o componente Providers envolvendo os elementos filho com o `Provider` do Redux.
 *
 */

const Providers: React.FC<{ children: ReactNode }> = ({
  children,
}: {
  children: React.ReactNode
}): JSX.Element => {
  return <Provider store={store}>{children}</Provider>
}

export default Providers
