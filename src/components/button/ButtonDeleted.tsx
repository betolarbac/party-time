import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";


export default function ButtonDeleted(){
  const {id} = useParams();
  const navigate = useNavigate()

  const  handleDeleted = () => {
    if (!id) return;
    axios
    .delete(`http://localhost:3000/api/parties/${id}`)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });

    return navigate("/");
  }


    return(
        <>
          <button onClick={handleDeleted} className="bg-red-600 text-white p-2 rounded-md hover:opacity-90 font-semibold">
            Deletar Festa
          </button>

        </>
    )
}