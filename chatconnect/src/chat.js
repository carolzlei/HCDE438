import React, {useState} from 'react'

function Chat(props){
    const [text,setText] = useState('')
    //const [name, setName] = useState('')

    return <div className="chat">
        <div className="message">
            {props.text}
        </div>
    </div>
}

export default Chat
