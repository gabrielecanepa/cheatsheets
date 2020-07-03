import React, { useCallback, useState } from 'react'
import ReactDOM from 'react-dom'
​
const Counter = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount)
​
  const incrementCounter = useCallback(() => setCount(count + 1), [])
​
  return (
    <div>
      <p>{'Hello! The count is'}</p>
      <p>{count}</p>
    </div>
  )
}
​
const counterElement = document.getElementById('component')
const initCounter = () => ReactDOM(component, <Counter initialCount={Math.rand()} />)
​
export default initCounter
