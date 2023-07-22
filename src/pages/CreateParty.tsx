/* eslint-disable @typescript-eslint/no-misused-promises */
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ComponentName() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [budget, setBudget] = useState(Number);

  const navigate = useNavigate();

  const handleSubmit = async () => {
    const response = await axios.post("http://localhost:3000/api/parties/", {
      title: title,
      author: author,
      description: description,
      budget: budget,
      image: image,
      services: [
        {
          name: "serviços da festa 3",
          description: "descrição teste 3",
          price: 4000,
          image:
            "https://alphaconvites.com.br/wp-content/uploads/2023/01/festa-antes-formatura-scaled-1-2048x1367.jpg",
        },
        {
          name: "serviços da festa 3",
          description: "descrição teste 2",
          price: 4000,
          image:
            "https://alphaconvites.com.br/wp-content/uploads/2023/01/festa-antes-formatura-scaled-1-2048x1367.jpg",
        },
      ],
    });
    console.log(response.data);

    return navigate("/");
  };

  return (
    <>
      <div className="isola px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Crie seu Evento
          </h2>
        </div>
        <form
          onSubmit={handleSubmit}
          action="/"
          className="mx-auto mt-16 max-w-xl sm:mt-20"
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Titulo da Festa
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  onChange={(e) => setTitle(e.target.value)} 
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="Anfitriao"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Anfitrião
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="Anfitriao"
                  id="Anfitriao"
                  onChange={(e) => setAuthor(e.target.value)}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Banner da festa
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  onChange={(e) => setImage(e.target.value)}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="budget"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Valor da Festa
              </label>
              <div className="relative mt-2.5">
                <input
                  type="number"
                  onChange={(e) => setBudget(Number(e.target.value))}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                 <p>
        Orçamento Total: <b>R$ {budget.toLocaleString('pt-BR', {
          currency: 'BRL',
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}</b>
      </p>
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Descrição
              </label>
              <div className="mt-2.5">
                <textarea
                  rows={4}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={""}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <button
              className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Criar Festa
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
