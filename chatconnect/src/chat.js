import React, {useState} from 'react'

function Chat(props){
    const [text,setText] = useState('')
    //const [name, setName] = useState('')

    //style={{ flexDirection: props.isMe?'row-reverse':'row'}}
    return <div className="chat">   
        <div>
            <div className="msg-name">
                {props.name || 'User'}
            </div>
            <div className="message">
                {props.text}
            </div>
        </div>
    </div>
}

export default Chat
