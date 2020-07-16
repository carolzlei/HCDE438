React is a javascript library for building interfaces 

It is based off of javascript, html and css

### Javascript
- 


### making components

```js
// a Person component that shows the person's name
// fontSize of the name is dependent on the person's age
// Props are assessed through dot notation "props.name"
function Person(props){
    return<div style={{fontSize:props.age}}> 
        {props.name} 
    </div>
}
```

### use a component, rendering components
```js 
// props: name, age
// CAPITAL P Persons
<Person name="alice" age={30}/>
//<Component prop value prop value ...>
```

### looping over components using .map()
```js
function App(){
    const people=['Alice', 'Bob', 'Casey', 'Diana']
    return <div>
        {people.map((item, index)=>{
            // "key" is something that React needs
            return <Person key={index} name={item} />
        })}
    </div>
}
```

### useState 
```js 
// "state" lets you handle changes on your site in an intelligent way
function Counter(){
    const [count, setCount] - useState(0)
    return <button onClick={()=> setCount(count+1)}>
        You clicked on me {count} times!
    </button>
}
```

### conditionally rendering components
```js 
// you can use && to render a ompoenent based on some javascript condition
function App(){
    return<div>
        {1+2===2 && <WillRender />}
        {1+1===3 && <WontRender />}
    </div>
}

function App(){
    const [editing, setEditing] = useState(false)
    return <div>
        {1+1===2 ? <WillRender /> : <WontRender />}
    </div>

}
```

### useEffect
```js
function App(){
    useEffect(()=>{
        //run some code once on startup
    }, [] )
    return <div>hello world</div>
}
```

**dor use useEffect more dynamically**
```js
function Person(props){
    useEffect(()=>{
        // this code will run EVERY time that persons "age changes
    }, [props.age])
    return <div>{props.age}</div>
}
```

### Sample Code: Counter

```js
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
  return <div>
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
```