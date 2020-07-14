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