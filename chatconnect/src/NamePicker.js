import React, {useState, useEffect} from 'react'
import {MdFace} from 'react-icons/md';
import {TiTick} from 'react-icons/ti';


function NamePicker(props){
    const [name, setName] = useState('')
    const [editName, setEditName] = useState(false)

    // when this component loads, run this piece of code ONCE 
    useEffect(()=>{
        const storedName = localStorage.getItem('name') //localStorage is a built-in js storage
        if(storedName) { // if name exists
          setName(storedName) // set name to storedName
          props.saveName(storedName) //save the name 
        }
    }, [])

    return <div className="name-picker">

        {editName && <>
            <input value={name} 
                placeholder="username"
                onChange={
                    e=> setName(e.target.value)
                }
                onKeyPress={e=> {
                    if(e.key ==='Enter' && name) {
                        setName(e.target.value)
                        setEditName(!editName)
                    }
                }}
            />
            <TiTick
                size={20} 
                color="grey"
                onClick={()=> {  //another double brackets is needed because there are now more than two lines
                    setEditName(!editName)
                    props.saveName(name) //this sends the username to the app itself
                    localStorage.setItem('name',name)
                }}
            />
        </>}

        {!editName && <>
            <div>{name}</div>
            <MdFace
                size={20} 
                color = "grey" 
                onClick={()=> { 
                    setEditName(!editName)
                }}
            />
        </>}
    </div>
}

export default NamePicker
