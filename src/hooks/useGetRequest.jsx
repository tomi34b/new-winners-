import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthProvider";

const useGetRequest = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const { accessToken } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json", // This line is optional, depending on the API requirements
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    // Clean up function to cancel the request if component unmounts
    return () => {
      // Do cleanup if needed, like cancelling the request
    };
  }, [url]);

  return { data, isLoading, error };
};

export default useGetRequest;
