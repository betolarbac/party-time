import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DataType } from "../ts/typagem";


export default function Home() {

  const [data, setData] = useState<DataType[]>([])

  useEffect(()=> {
    axios.get<DataType[]>('http://localhost:3000/api/parties/')
    .then(response => {
      setData(response.data);
    })

    .catch(error => {
      console.log(error);
    });
  }, [])




  return (
    <>
      <h1 className="text-3xl font-bold text-violet-600 flex justify-center mt-16 mb-16 ">
        Festas Disponíveis
      </h1>

      <div className="grid grid-cols-3 gap-10 justify-center px-36 sm:grid-cols-1 sm:px-2">
        {data.map(item => (
          <div className="max-w-lg p-4 shadow-lg rounded-lg" key={item._id}>
          <img
            src={item.image}
            alt=""
            className="min-h-[350px] rounded-lg sm:min-h-[250px]"
          />
          <h2 className="text-center text-xl font-semibold uppercase mt-5">{item.title}</h2>
          <h2 className="text-base font-semibold uppercase mt-5">author: {item.author}</h2>
          <h2 className="text-base font-semibold uppercase mt-1">orçamento: {item.budget}</h2>
          <Link to={`party/${item._id}`}><button className="bg-violet-600 text-white p-2 mt-5 rounded-md hover:opacity-90 font-semibold">Destalhes</button></Link>
        </div>
        ))}
        

      </div>
    </>
  );
}

