import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import GalleryHero from "./Components/GalleryHero/GalleryHero";
import PEXELS_API_KEY from "./endpoints/api";
import Gallery from "./Components/Gallery/Gallery";

const App = () => {
  const [apiData, setApiData] = useState(null);
  const [query, setQuery] = useState("nature");

  const endpoint = `https://api.pexels.com/v1/search?query=${query}`;

  const getDataFromApi = async () => {
    try {
      const response = await fetch(endpoint, {
        headers: {
          Authorization: PEXELS_API_KEY,
        },
      });
      const data = await response.json();
      setApiData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDataFromApi()

  }, [])
  console.log(apiData)

  return (
    <>
      <GalleryHero
      query= {query} 
      setQuery={setQuery}/>
      
      
      {apiData &&
        <Gallery
      images = {apiData.photos}/>}
    </>
  );
};

export default App;
