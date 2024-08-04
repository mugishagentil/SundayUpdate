import React, {useContext} from "react"
import {UserContext} from './ComponentA'
import ComponentC from "./ComponentC"
export default function ComponentB(){
    const user = useContext(UserContext)
    return(
        <div className="box">
            <h2>Component B</h2>
            <p>How Are You Doing: {user}</p>
            <ComponentC/>
        </div>
    )
}