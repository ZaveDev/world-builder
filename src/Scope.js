import React, { useContext, useState } from "react"

const ScopeContext = React.createContext()

export default function Scope({ children }) {
  const [property, setProperty] = useState("word")

  const root = {
    get: {
      property,

    },
    set: {
      setProperty,

    }
  }

  return (
    <ScopeContext.Provider value={root}>
      {children}
    </ScopeContext.Provider>
  )
}

export function useScope() {
  return useContext(ScopeContext)
}
