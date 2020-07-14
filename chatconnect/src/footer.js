import React, {useState} from 'react'

function Footer(props){
    const [text,setText] = useState('')

    return <footer className="footer">
        <input 
          className="text-input" 
          value={text} 
          onChange={
            e=> setText(e.target.value)
          }
          placeholder="Type your message here!"
          onKeyPress={e=> {
            if(e.key ==='Enter' && text) {
              props.onSend(text)
              setText('')
            }
          }}
        />
        <button
          className="send-button" 
          onClick={() => {
            if (text){
              props.onSend(text)
              setText('')
            }
          }}
        />
  </footer>
}

export default Footer

/*type="image" 
id="send" 
src="https://cdn.pixabay.com/photo/2018/02/04/01/54/paper-planes-3128885_1280.png" 
alt="Submit" 
width='40' 
height='30'*/