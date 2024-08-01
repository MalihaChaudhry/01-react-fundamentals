// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import {useState, useRef} from 'react'

function UsernameForm({onSubmitUsername}) {
  const [inputValue, setInputValue] = useState('')
  const inputRef = useRef('')

  function handleSubmit(event) {
    event.preventDefault()
    onSubmitUsername(inputRef.current.value)
  }

  function handleChange(event) {
    setInputValue(event.target.value.toLowerCase())
  }

  return (
    <form onSubmit={event => handleSubmit(event)}>
      <div>
        <label htmlFor="name">Username:</label>
        <input
          onChange={handleChange}
          value={inputValue}
          type="text"
          id="name"
          ref={inputRef}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
