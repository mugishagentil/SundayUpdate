import React, {useContext} from "react"
import {UserContext} from './ComponentA'
import ComponentD from "./ComponentD"
export default function ComponentC(){
    const user = useContext(UserContext)
    return(
        <div className="box">
            <h3>Component C</h3>
            <p>Keep Learning Code{user}</p>
            <ComponentD/>
        </div>
    )
}