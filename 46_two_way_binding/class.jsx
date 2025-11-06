//   const renderUser = user.map((user, index) => {
//     return <li key={index}>{user.name}</li>;
//   });
//   return (
//     <div>
//       <h1>User List</h1>
//       <ul>{renderUser}</ul> we can render directly but for readabliity we do this
//     </div>
//   );
// };

//   return (
//     <div>
//       <h1>User List</h1>
//       <ul> this is how we directly render 
//         {user.map((user, index) => (
//           <li key={index}>{user.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default App; 

// import React, { useState } from "react";

// const App = () => {
//   const [user, setUser] = useState([
//     {
//       name: "John",
//       age: 23,
//     },
//     {
//       name: "Ankur",
//       age: 24,
//     },
//     {
//       name: "Ayush",
//       age: 25,
//     },
//   ]);

//   const renderUser = user.map((user, index) => {
//     return <li key={index}>{user.name}</li>;
//   });
//   return (
//     <div>
//       <h1>User List</h1>
//       <ul>{renderUser}</ul>
//     </div>
//   );
// };

// export default App;


// two way binding is just for form element 


/* This is form one input */
// import { useState } from "react"

// const App = () => {

//   const handleSubmit = (e) => {
//     e.preventDefault()
//   }
//   const [fullName, setfullName] = useState("")
  
//   const changeHandler = (e) => {
//       setfullName(e.target.value)
//   }

//   console.log(fullName)
//   return (
//     <div>
//       <h1>Register User</h1>
//       <form onSubmit={handleSubmit} action="">
//          <input 
//          onChange={changeHandler}
//          value={fullName}
//          type="text" 
//          placeholder='Enter full name' 
//          />
//          <input 
//          type="number" 
//          placeholder='Enter your age' 
//          />
//          <button type="submit">Submit</button>
//       </form>
//     </div>
//   )
// }

// export default App

// components ka naam hamesha capital letter se start hota hai 
// aise children j

{/* <Read 
    users={users} - these are attribute in react called props
    setUsers={setUsers} - these are attribute in react called props
  /> */}
