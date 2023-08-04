import React, { ReactNode } from 'react'

/**
 * Componente base para layout flexível com uma única coluna, ocupando toda a altura da tela.
 *
 * @component
 * @param {object} props - Propriedades do componente.
 * @param {React.ReactNode} props.children - Os elementos filho a serem renderizados dentro do componente.
 * @returns {JSX.Element} Retorna o componente base com os elementos filho renderizados dentro de uma div flexível.
 *
 */

const Base: React.FC<{ children: ReactNode }> = ({
  children,
}: {
  children: React.ReactNode
}): JSX.Element => {
  return <div className="flex h-screen flex-col">{children}</div>
}

export default Base
