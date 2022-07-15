import { useState } from "react";

interface useApiReturn<T> {
  request(...args: any[]): Promise<T>;
  data: T;
  error: boolean;
  loading: boolean;
}

export const useApi = (callback: Function): useApiReturn<any> => {
  const [data, setData] = useState([]);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const request = async (...args: any[]) => {
    setLoading(true);
    const response = await callback(...args);
    setLoading(false);

    setError(!response.ok);
    setData(response.data);

    if (!response.ok) {
      return response;
    }

    return response;
  };

  return { request, data, error, loading };
};
