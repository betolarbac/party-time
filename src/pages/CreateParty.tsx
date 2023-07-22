/* eslint-disable @typescript-eslint/no-misused-promises */
import axios from "axios";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

export default function ComponentName(){
  const [data, setData] = useState("");
  const [data2, setData2] = useState("");
  const [data3, setData3] = useState("");
  const [budget, setBudget] = useState(Number);

  const navigate = useNavigate()

  const handleSubmit = async () => {
    const response = await axios.post('http://localhost:3000/api/parties/', {
      "title": data,
      "author": data2,
      "description": data3,
      "budget": 10000,
      "image": "https://alphaconvites.com.br/wp-content/uploads/2023/01/festa-antes-formatura-scaled-1-2048x1367.jpg",
      "services": [
        {
        "name": "serviços da festa 3",
        "description": "descrição teste 3",
        "price": 4000,
        "image": "https://alphaconvites.com.br/wp-content/uploads/2023/01/festa-antes-formatura-scaled-1-2048x1367.jpg"
        },
        {
        "name": "serviços da festa 3",
        "description": "descrição teste 2",
        "price": 4000,
        "image": "https://alphaconvites.com.br/wp-content/uploads/2023/01/festa-antes-formatura-scaled-1-2048x1367.jpg"
        }
        
      ]
    });
    console.log(response.data);

    return navigate("/");
  }
  

    return(
        <>

      <form onSubmit={handleSubmit}>
      <input type="text" onChange={e => setData( e.target.value )} />
      <input type="text" onChange={e => setData2( e.target.value )} />
      <input type="text" onChange={e => setData3( e.target.value )} />
      <input type="number" value={budget} onChange={e => setBudget(Number(e.target.value))} />
      <button >Enviar</button>
    </form>
    
        </>
    )
}