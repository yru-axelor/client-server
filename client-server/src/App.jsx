import { useState } from "react";
import "./App.css";
import ContactFetch from "./components/ContactFetch";
import { ContactAxios } from "./components/ContactAxios";

function App() {
  const [dataFetch, setDataFetch] = useState(false);
  const [dataAxios, setDataAxios] = useState(false);
  const Fetchdata = () => {
    setDataFetch(true);
    setDataAxios(false);
  }
  const Axiosdata = () => {
    setDataAxios(true);
    setDataFetch(false);

  }
  const Cleardata = () => {
    setDataAxios(false);
    setDataFetch(false);

  }
  return (
    <>
      <button onClick={Fetchdata}> Fetch Call Data </button>
      <button onClick={Axiosdata}> Axios Call Data </button>
      <button onClick={Cleardata}> Clear </button>
      {dataFetch && <ContactFetch />}
      {dataAxios && <ContactAxios />}
    </>
  );
}

export default App;
