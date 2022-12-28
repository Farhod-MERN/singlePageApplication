import { useState } from "react"

const Search = ({cb = Function.prototype})=>{
    const [value, setValue] = useState("")
    
    const handleKey = (e)=>{
        if(e.key === "Enter"){
            handleSubmit()
        }
    }
    const handleSubmit = ()=>{
        cb(value)
    }
    const reset = ()=>{
        setValue("")
    }
    return(
        <div className="row">
            <div className="input-field col s12">
                <input 
                type="search" 
                name="search" 
                id="search-field"
                placeholder="Search meal ..."
                onChange={(e)=> setValue(e.target.value)}
                value={value}
                onKeyDown = {handleKey}
                />
                <span onClick={reset} className="close-btn"><i class="material-icons">cancel</i></span>
                <button 
                className="btn btn-search pink"
                style={{position: "absolute", top: "4px", right: "15px", borderRadius : "10px"}}
                onClick = {handleSubmit}
                ><i className="material-icons">search</i></button>
            </div>
        </div>
    )
}
export {Search}