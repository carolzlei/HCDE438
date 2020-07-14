import React, {useState, useRef} from 'react'

function NamePicker(props){
    const [editName, setEditName] = useState(false)
    const [name, setName] = useState('')
    const [editing, setEditing] = useState(false)


    return <div className="input-username">

        <input value={name} 
            placeholder="username"
            className="nameinput"
            onChange={
                e=> setName(e.target.value)
            }
            onKeyPress={e=> {
                if(e.key ==='Enter' && name) {
                    setName('')
                }
            }}
        />
        <div>{name}</div>
    </div>

}

export default NamePicker
