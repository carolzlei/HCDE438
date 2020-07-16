import React from 'react'

function Chat(props){
    //const [text,setText] = useState('')
    //const [name, setName] = useState('')

    return <div className="chat">  

        {props.isMe && <>
            <div className="sent">
                <div className="my-name">
                    {props.name}
                </div>
                <div className="sent-message">
                    {props.text}
                </div>
            </div>
        </>}
        
        {!props.isMe && <>
            <div className="received">
                <div className="msg-name">
                    {props.name || 'User'}
                </div>
                <div className="received-message">
                    {props.text}
                </div>
            </div>
        </>}

    </div>
}

export default Chat


