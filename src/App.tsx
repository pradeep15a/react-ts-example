import React, { useState } from 'react'
import './App.css'
import { Person, Country } from './Person'

function App() {
  const [isStudent, setIsStudent] = useState<boolean>(true);

  const toggle = ()  => {
    setIsStudent((prevState) => (!prevState));
  }

  return (
    <div className="App">
      <Person 
          name='Pradeep'
          age={19}
          email='pradeep@gmail.com'
          isStudent={isStudent}
          friends={[
            {
              name: "Hello1",
              age: 18,
              email: "pradeep@gmail.com",
            },
            {
              name: "Hello2",
              age: 18,
              email: "pradeep@gmail.com",
            }
          ]}
          country={Country.India}
      />
      <button onClick={toggle}>
        {isStudent ? "Not a Student ?" : "Are you a student?"}
      </button>
    </div>
  )
}

export default App
