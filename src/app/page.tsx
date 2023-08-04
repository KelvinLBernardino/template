'use client'

import * as Components from '@/components'
import * as Data from '@/data'

const App = () => {
  return (
    <Components.Base>
      <Components.Header title="Gestão de Tarefas" />
      <Components.Container>
        <Components.NavBar data={Data.menuNav} />
        {/* <Components.Table
          title="Minha Tabela"
          columns={Data.userColumns}
          rows={Data.userRows}
          menuAction={Data.tableMenuAction}
        /> */}
        <Components.Form />
      </Components.Container>
    </Components.Base>
  )
}

export default App
