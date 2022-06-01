import { useEffect, useState } from "react";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const useFetch = ({ keyword }) => {
  const [gifUrl, setGifUrl] = useState("");
  const fetchGifs = async () => {
    try {
      const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword
        .split(" ")
        .join("")}$limit=1`;

      const response = await fetch(url);
      const { data } = await response.json();
      setGifUrl(data[3].images.downsized_medium.url);
    } catch (error) {
      console.error(error);
      setGifUrl(
        "https://metro.co.uk/wp-content/uploads/2015/05/pokemon_crying.gif?quality=90&strip=all&zoom=1&resize=500%2C284"
      );
    }
  };
  useEffect(() => {
    if (keyword) fetchGifs();
  }, [keyword]);

  return gifUrl;
};

export default useFetch;
