# CSS

cascading style sheet

**elements**
```css 
img {
     /*all these stles apply to every <img> */
}
```

***classes*** 
`class-name{}`
**id**
`#my-elements{}`

**rules**
```css
.my-wrappy .my-class{
    /*will apply onluy to "my-class" elements
    that are WITHIN "my-wrapper"*/
}

.class-one, .class-two{
    /* applies to both classes*/
}

.class-one > .child {
    /* only direct children */
}

.class-one.class-two {
    /* must have BOTH of these classes */
}
```

### pseudoselectors 
```css 
.my-class:hover{}
.my-class:focus{}

.my-class:first-child{
    /* only the first child WITHIN my-class */
}
.my-class:nth-child(3){
    /* only the third child WITHIN my-class */
}
```

### units 
-  `px`
- `%`: percentage of the elements parents
- `vw` /`vh`: percentage viewwidth or view height
- `rem`: ratio of the root font-size

### some basic css rules
```css 
.class{
    color: blue; /* for text color */
    background: red; /* background color */
    width: 10px;
    height: 10%;
    margin: 20px; /* outside the element */ 
    padding: 20px;  /* inside the element */
    font-size: 10px;
    font-family: 'Avenir', Helvetica;
}

```

### position 
- `relative` : default or all elements. They will be arranged based on their siblings.
- `absolute` : removes the element from the "flow" of the siblings. Instead it bceomes positioned based on its closest parents that has "relative" positioning. You can use `top`, `bottom`, `left`, and `right` to move it around precisely. (faster for browser because it does not need to render all its siblings and recalculate)
- Note: either "relative" or "absolute" positioning gives you the ability to use the z-index, which helps you arrange the layering of the elements (you can even do this with entire pages)

### display 
-`block` (default)
-`inline-block` (satck horizontally)
-`none`(hide)
-`flex` !!!!!

### flexbox
Here is a cheatsheet [link]{https://css-tricks.com/snippets/css/a-guide-to-flexbox/}
```css
.parent{
    display:flex;
    flex-direction:column; /* or row */
    align-items:center; /* flex-start, flex-end, space-between, space-evenly  */
    justify-content:center;
    flex:1;
    flex-wrap:wrap; /* allows your children to wrap */
}
```

### responsive CSS

**media queries and REM** 
```css 
html{
    font-size:15px; /* mobile default maybe */
}
@media (min-width:400px){
    html{
        font-size:19px; /* tablet maybe */
    }
}
@media (min-width:768px){
    html{
        font-size:21px; /* desktop maybe */
    }
}

.header{
    padding:.2rem; 
    height:2.5rem;
}
```
- these are the standard three media sizes, mobile, tablet at 400 px and desktop at 768
- you can use `rem` units to scale other elements on
your page in relation to the `font-size` on your <html> element