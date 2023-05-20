"use client"

import { setupStore } from "@/store/store"
import { SessionProvider } from "next-auth/react"
import { Provider } from "react-redux"

type Props = {
  children?: React.ReactNode;
}

export const NextAuthProvider = ({ children }: Props) => {
  return <SessionProvider>{children}</SessionProvider>
}

const store = setupStore()

export const StoreProvider = ({children}: Props) => {
  return <Provider store={store}>{children}</Provider>
}