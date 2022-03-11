/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url, options) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(url,
          {
            params: {
              limit: options?.limit,
              page: options?.page,
              typeId: options?.typeId
            }
          }
        );
        setData(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData()
  }, [options?.typeId])
  // console.log(url + ' ' + options)
  return [data, loading, error];
};

export default useFetch;
