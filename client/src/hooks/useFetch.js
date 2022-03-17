/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
// var qs = require('qs');

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
              typeId: options?.typeId,
              brands: options?.brands
            },
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
  }, [options?.typeId, options?.brands])
  console.log(options)
  return [data, loading, error];
};

export default useFetch;
