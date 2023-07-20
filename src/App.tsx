import { Outlet } from "react-router-dom";

function App() {

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

      <Outlet />
    </>
  );
}

export default App;
