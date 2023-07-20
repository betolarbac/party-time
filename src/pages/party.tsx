import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { DataType } from "../ts/typagem";



export default function Party(){

    const {id} = useParams();

    const [data, setData] = useState<DataType | null>(null);


    useEffect(() => {
      if (!id) return; // Verificamos se 'id' não é undefined antes de fazer a requisição
      axios
        .get<DataType>(`http://localhost:3000/api/parties/${id}`)
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, [id]);
      
    console.log(data?.services.map(item => (item.name)))

    if (data === null) {
      return <div className="flex min-h-screen justify-center items-center">
        <div className="custom-loader"></div>
      </div>
    }
  
    return (
      <>
       
          <div className="flex mx-auto my-0 flex-col max-w-7xl max-h-60 p-4 shadow-lg rounded-lg" key={data._id}>
            <img src={data.image} alt="" className="min-h-[350px] rounded-lg object-cover" />
            <h2 className="text-center text-4xl font-extrabold uppercase mt-5">{data.title}</h2>
            <h2 className="text-base font-semibold uppercase mt-5">autor: {data.author}</h2>
            <h2 className="text-base font-semibold uppercase mt-1">orçamento: {data.budget}</h2>
            <p className="">{data.description}</p>

           <div className="flex flex-row gap-20 mt-8">
           {
              data?.services.map(item => (
                <div key={item._id} className="max-w-sm">
                  <img src={item.image} alt="" className="rounded-lg"/>
                  <h3>{item.name}</h3>
                  <h3>Preço: {item.price}</h3>
                </div>
                ))
            }
           </div>
          </div>
       
      </>
    );
  }
