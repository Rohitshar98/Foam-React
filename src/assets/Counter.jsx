function App ()  {
   const [count, setCount] =  useState(0)



       useEffect(() => {
       },)
  return (
    <>
    <h1>Rohit SHarma {count} </h1>
<button onClick={() => setCount((c) => c + 2)}>enter</button>
<button onClick={() => setCount((c) => c - 1)}> exit</button>
    </>

)
}