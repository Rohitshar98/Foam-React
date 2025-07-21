
const App = () => {
  const users = [
   

        {
      "image": "rohit THakur.jpg",
      "username": "Rohit Thakur",
      "profession": "Electrical Engineer",
      "city": "Faridabad",
      "age": "27"
    },

    
 
  ]
  return (
    <div>
      <div style={{ padding: "6px", display: "flex", flexWrap: "wrap", backgroundColor:"black", height:"100vh", width:"200vh"}}>
        {users.map((val, id) => {
          return <Card key={id} username={val.username} age={val.age}
            profession={val.profession} city={val.city} image={val.image} />
        }
        )}