// we only see number and string in the view
// Json - javascript object notation - array of objects
// forEach - kuchh bhi return nahi karta - iska yaha kuchh kaam nahi hai
// map - ek copied array return karta hai
// import React from 'react'

// const App = () => {
//   let n = 12;// nuber
//   let s = "Hello"// string
//   // reserved keywords
//   let b = true;// boolean
//   let nu = null;// null
//   let un = undefined;// undefined
//   // heterogeous array
//   let arr = [<h1>Hello</h1>,10, "Hello", true, null, undefined]
//   // object
//   let obj = {
//     name:"John",
//     age:30,
//     city:"New York"
//   }
//   return (
//     <>
//       <h1>Datatypes</h1>
//       <h2>Number : {n}</h2>
//       <h2>String : {s}</h2>
//       {/* cannot see boolean in view */}
//       <h2>Boolean : {b}</h2>
//       {/* cannot see null in view */}
//       <h2>Null : {nu}</h2>
//       {/* cannot see undefined in view */}
//       <h2>Undefined : {un}</h2>
//       {/* printing array */}
//       <h2>Array : {arr}</h2>
//       {/* it will print all the values by concatinating all the values */}
//       {/* printing object */}
//       <h2>Object : {obj.name} | {obj.age} | {obj.city}</h2>
//     </>
//   )
// }

// export default App

// for the uniqueness we put index in key 
// jo bhi logic wala kaam hai vo return ke pehele karna and return mein sirf show kar dena acchi practice hai...

// import React from "react";

// const App = () => {
//   // array of objects
//   let arr = [
//     { name: "John", age: 30, city: "New York" },
//     { name: "Jane", age: 25, city: "London" },
//     { name: "Bob", age: 40, city: "Paris" },
//   ];
//   // converting into array of jsx elements
//   const data = arr.map((item, index) => {
//     return <li key={index}>Name : {item.name} | Age : {item.age} | City : {item.city}</li>
//   });
//   console.log(data)
//   return (
//     <>
//       <h1>Rendering Json</h1>
//       <ol>{data}</ol>
//     </>
//   );
// };

// export default App;


// react compare changes and reflect on view
// but currently react don't know any changes 
// now what i have to do is i have to use variable given by react which is useState 

// [username, setUsername] - This is the array destructuring 
// useState("John") - inside this we set initial value


import React, { useState } from 'react'

const App = () => {
  // using useState
  const [username, setUsername] = useState("John");
  // username is read only hai & and setUsername is we will use to change the things
  const ChangeHandler = () => {
    setUsername("Roy");
    // console.log(username)// John ? heyyye😕 
    // because its an setUsername is an async code so it run later than console.log that why we get john instead of Roy
    // that why use console.log outside the function 
  }
  console.log(username)
  return (
    <div>
      <h1>Hello {username}</h1>
       <button onClick={ChangeHandler}>ChangeName</button>
    </div>
  )
}

export default App