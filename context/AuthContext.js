import { createContext, useState, useEffect, useContext } from 'react'

const AuthContext = createContext()

export function AuthContextProvider({children}) {
    <AuthContext.Provider>
        {children}
    </AuthContext.Provider>
}