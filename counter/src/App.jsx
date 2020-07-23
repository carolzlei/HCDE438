import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

//the goal of React is to make web develop reactive 
//It is a combniation between JS, html and css 
//The primary elements of React are components, states, props

const counterZ = [{ //this is normal JS
  label:'Add One', n:1, initial:5  //always use colons because this is key:value pair
},{ 
  label:'Minus Three', n:-3, initial:0
},{ 
  label:'Add Ten', n:10, initial:0
}]

function App() {
  return (
    <div className='App'>
      {counterZ.map((c,i)=>{
        return <Counter key = {i} //React needs to have a "key"
          label={c.label} n={c.n} initial={c.initial} // {...c} is the shorthand for this
          />
      })}
    </div>
  );
}

function Counter(props){ // this is jsx, the mashup of HTML and js
  const {label, n, initial} = props // this line deconstructs the props 
  const [counter, setCount] = useState(initial||0)

 // component function has a capital name and returns HTML
 // if counter === 10 then have a certain html element, <> React fragment </>face
 // after the word return the language is HTML and some JS
  return <div style={{marginTop:25}}>
    {counter === 10 &&  <> 
      <span> TEN TEN TEN </span>
      <br >
      </br>
    </>}


    <button onClick={() => setCount(counter+n)} > 
      {label}
    </button>
    <div>
      {counter}
      {counter%2 == 0 ? ' is even' : ' is odd'} 
    </div>
  </div>
}
// this is comment about {counter%2 == 0 ? ' is even' : ' is odd'} 
// the format of this is {true or false statement ? "pass" : "fail"}

function add(a,b){  // this is just a normal function, this is just javascript
  return a+b
}

export default App;