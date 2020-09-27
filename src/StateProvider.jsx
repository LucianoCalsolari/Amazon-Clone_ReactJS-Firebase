import React, { createContext, useContext, useReducer } from "react"

//Prepara o datalayer
export const StateContext = createContext()

//prepara nosso app e providencia o data layer
export const StateProvider = ({ reducer, initialState, children }) => (
     <StateContext.Provider value = { useReducer(reducer, initialState) } > { children } 
     </StateContext.Provider>
)

//Sobe os dados do data layer
export const useStateValue = () => useContext(StateContext)