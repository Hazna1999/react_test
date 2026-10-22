import {useState} from 'react'  

function Liveinput() {
  const [text, setText] = useState('')

    function handleChange(event)
    {
        setText(event.target.value)
    }


  return (
    <div>
      <input
        type="text"
        value = {text}
        onChange={handleChange}
        placeholder="Type Something..."
      />
      <p>You entered: {text}</p>
    </div>
  )
}

export default Liveinput