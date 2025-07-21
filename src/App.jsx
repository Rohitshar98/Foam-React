import React, { useCallback, useState } from 'react'


function App() {

  const [length, setLength] = useState(5)
  const [numb, setNumb] = useState(false)
  const [word, setWord] = useState(false)
  const [password, setPassword] = useState("")


  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numb) str += "0123456789"
    if (word) str += "!@#$%^&*()_+"

    for (let i = 1; i <= array.length; i++) {
      let word = Math.floor(Math.random() * str.length + 1)
      pass = str.charAt(word)

    }

    setPassword(pass)


  }, [length, numb, word, setPassword])

  return (
    <div style={{
      backgroundColor: " grey", margin: "50px", padding: "40px", alignItems: "center", justifyContent: "center",
      textAlign: "center", width: "full"
    }}>

      <div style={{
        boxShadow: "revert-layer", rounded: "large" >
          <input
            type='text'
            value={password}
            placeholder="password"
            readOnly />
      }}></div>

    <button style={{ backgroundColor: "blue", fontSize: "50px" }}>copy</button>



      <div style={{ display: "flex", textAlign: "justify", gap: "20" }}>
        <div style={{ textAlign: "center", gap: "10" }}>
          <input
            type='range'
            min={5}
            max={50}
            value={length}
            style={{ cursor }}
            onChange={(e) => { setLength(e.target.value) }} />
          <label>length:{length}</label>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "10" }}>
          <input
            type='checkbox'
            defaultChecked={numb}
            id="numberInput"
            onChange={() => {
              setNumb((prev) => !prev);
            }} />
          <label>numb:{numb}</label>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "10" }}>
          <input
            type='checkbox'
            defaultChecked={word}
            id="numberInput"
            onChange={() => {
              setWord((prev) => !prev);
            }} />
          <label htmlFor='wordInput'>words</label>
        </div>
      </div>
    </div>
  )
}

export default App