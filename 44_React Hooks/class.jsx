// app kya return kar raha hai ek div toh app jaha bhi call hoga vaha vo div aa jayega 
// app function component hai 
const App = () => {
  // here you can write js logic what ever you want to do
  return (
    <div>App</div>
  )
}// ye ek anynonimus fat arrow function hai jise hum app naam ke variable mein save kar rahe hai yane App ab ek function hai
// and ek chij function return karta hai vo kaha aa jata hai jaha vo call kiya ho to abhi 
// XML -> user defined tags
// alias - duplicate
// function call is replaced by it's return value
// a function componet always return html
// we can write  anything after return 
// we can only return single data/entity/variable/value
// there must be a single return in function and that must be the last one 
<></> /* this are called fragment tags or empty tags */


/* Event listners */
// like in js we do bocument.addEventListner('click' -> is a event listner
// ,(e)=>{} -> event handler
// )
// onClick={handleClick()} - event listner
/* <h1>{2+3}</h1> curly braces ke andar jo bhi hoga use react direct chala deta hai */
// instead of calling the event handler function we just write it like this onClick={handleClick} like that just give referance

// non parametrized function
{/* <button onClick={handleClick}>Click</button>  in this case the function handleclick call on button click  */}

// parametrized function  
/* <button onClick={handleParemeter("Hello")}>Click(params)<button> in this case the function will by default because we put argument in the handleParams function*/