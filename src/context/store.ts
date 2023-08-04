import { configureStore } from '@reduxjs/toolkit'
import navBarReducer from '@/context/modules/NavBar'

/**
 * Configura e cria a store do Redux com o reducer fornecido.
 * @type {import('@reduxjs/toolkit').Store}
 */

export const store: import('@reduxjs/toolkit').Store = configureStore({
  reducer: {
    navBar: navBarReducer,
  },
})

// Tipo para o estado raiz (root state) da store do Redux.
export type RootState = ReturnType<typeof store.getState>

// Tipo para o dispatcher de ações (actions) da store do Redux.
export type AppDispatch = typeof store.dispatch
