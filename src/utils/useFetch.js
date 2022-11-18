import { URL } from "./constants";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
export const useFetch = () => {
  const [row, setRow] = useState([]);
  useEffect(() => {
    const call = (async function () {
      const { data } = await axios.get(URL);
      setRow(() => data);
      console.log(row);
    })();
  }, []);
  return [row, setRow];
};
