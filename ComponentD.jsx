import React, {useContext} from "react"
import {UserContext} from './ComponentA'
export default function ComponentD(){
    const user = useContext(UserContext)
    return(
        <div className="box">
            <h4>Component D</h4>
            <p>Bye: {user}👋</p>
        </div>
    )
}