import axios from "axios";
import { useEffect, useState } from "react";

interface DataType {
  _id:         string;
    title:       string;
    author:      string;
    description: string;
    budget:      string;
    image:       string;
    services:    Service[] ;
    createdAt:   Date;
    updatedAt:   Date;
    __v:         number;
    map: () => void;
}

export interface Service {
  name:        string;
  description: string;
  price:       number;
  image:       string;
  _id:         string;
  createdAt:   Date;
  updatedAt:   Date;
}


function App() {

  const [data, setData] = useState<DataType[]>([])

  useEffect(()=> {
    axios.get<DataType[]>('http://localhost:3000/api/parties/')
    .then(response => {
      setData(response.data);
    })

    .catch(error => {
      console.log(error);
    });

    console.log(data)
  }, [])




  return (
    <>
      <div className="flex justify-evenly pt-2">
        <h1 className="text-2xl font-bold text-violet-600">Party time</h1>

        <div className=" flex items-center gap-4">
          <a
            href="http://"
            rel="noopener noreferrer"
            className="text-base hover:opacity-80 font-semibold text-violet-950"
          >
            Minha Festas
          </a>
          <button className="bg-violet-600 text-white p-2 rounded-md hover:opacity-90 font-semibold">
            Criar festa
          </button>
        </div>
      </div>

      <h1 className="text-3xl font-bold text-violet-600 flex justify-center mt-16 mb-16 ">
        Festas Disponíveis
      </h1>

      <div className="grid grid-cols-3 gap-10 justify-center px-36 ">
        {data.map(item => (
          <div className="max-w-lg p-4 shadow-lg rounded-lg" key={item._id}>
          <img
            src={item.image}
            alt=""
            className="min-h-[350px] rounded-lg"
          />
          <h2 className="text-center text-xl font-semibold uppercase mt-5">{item.title}</h2>
          <h2 className="text-base font-semibold uppercase mt-5">author: {item.author}</h2>
          <h2 className="text-base font-semibold uppercase mt-1">orçamento: {item.budget}</h2>
          <a href={`/${item._id}`}><button className="bg-violet-600 text-white p-2 mt-5 rounded-md hover:opacity-90 font-semibold">Destalhes</button></a>
        </div>
        ))}
        

      </div>
    </>
  );
}

export default App;
