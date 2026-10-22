
import { useState } from 'react'

function Counterapp() {
  const [count, setCount] = useState(0)

  function handleIncrement() {
    setCount(count + 1)
  }

  function handleDecrement() {
    setCount(count - 1)
  }

  function handleReset() {
    setCount(0)
  }

  return (
    <div style={{
      textAlign: 'center',
      padding: '40px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1>Counter App</h1>

      <div style={{
        fontSize: '80px',
        fontWeight: 'bold',
        color: count > 0 ? 'green' : count < 0 ? 'red' : 'black',
        margin: '20px'
      }}>
        {count}
      </div>

      <div>
        <button
          onClick={handleDecrement}
          style={{ fontSize: '24px', margin: '10px', padding: '10px 24px' }}
        >
          -
        </button>

        <button
          onClick={handleReset}
          style={{ fontSize: '18px', margin: '10px', padding: '10px 24px' }}
        >
          Reset
        </button>

        <button
          onClick={handleIncrement}
          style={{ fontSize: '24px', margin: '10px', padding: '10px 24px' }}
        >
          +
        </button>
      </div>

      <p style={{ color: 'gray', marginTop: '20px' }}>
        {count === 0 ? "Start clicking!" : `You are at ${count} ⁠`}
      </p>
    </div>
  )
}

export default Counterapp