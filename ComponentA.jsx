import React, { createContext, useState } from "react"
import ComponentB from "./ComponentB"
export const UserContext = createContext();
export default function ComponentA(){
    const [User, setUser] = useState('Mayor')
    return(
        <div className="box">
            <h1>Component A</h1>
            <p>Hello: {User}</p>
            <UserContext.Provider value={User}>
            <ComponentB user={User}/>
            </UserContext.Provider>
        </div>
    )
}