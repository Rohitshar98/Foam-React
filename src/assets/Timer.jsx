import React, { useEffect, useState } from 'react'

const Timer = () => {
    const [count, setCount] = useState(0)
    const [data, setData] = useState(0)

    useEffect(() => {
    }, [data,count])
  return (
    <div>
        <p>i've rendered {count}</p>
        <h1>i hv rendered{data}</h1>
        <button onClick={() => setCount((c) => c + 1)}>+</button>
        <button onClick={() => setData((c) => c + 2)}>+</button>
        <p>{data}</p>
    </div>
  )
}

export default Timer