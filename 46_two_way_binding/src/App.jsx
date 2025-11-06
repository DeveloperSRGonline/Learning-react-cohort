import React, { useState } from 'react'
import Create from './components/Create'
import Read from './components/Read'

const App = () => {
  const [userData, setUserData] = useState([])

  const handleUserSubmit = (data) => {
    console.log("Data recieved" , data)
    setUserData([...userData,data])
  }

   return (
    <>
      <Create onSubmit={handleUserSubmit} />
      <Read users={userData}/>
    </>
  )
}

export default App