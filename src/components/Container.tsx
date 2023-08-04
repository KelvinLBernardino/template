import React, { ReactNode } from 'react'

/**
 * Componente container para layout flexível com uma única linha, ocupando toda a largura da tela.
 *
 * @component
 * @param {object} props - Propriedades do componente.
 * @param {React.ReactNode} props.children - Os elementos filho a serem renderizados dentro do componente.
 * @returns {JSX.Element} Retorna o componente container com os elementos filho renderizados dentro de uma div flexível.
 *
 */

const Container: React.FC<{ children: ReactNode }> = ({
  children,
}: {
  children: React.ReactNode
}): JSX.Element => {
  return <div className="flex h-screen flex-row">{children}</div>
}

export default Container
