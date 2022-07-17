import { ApiResponse } from "apisauce";
import React, { useState } from "react";

interface ResponseProps {
  data: any;
  loading: boolean;
  error: boolean;
  request(...args: any[]): Promise<ApiResponse<any>>;
}

type Props = (...args: any[]) => Promise<ApiResponse<any>>;

const useApi = (apiRequest: Props): ResponseProps => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const request = async (...args: any[]) => {
    setError(false);

    setLoading(true);
    const response = await apiRequest(...args);
    setLoading(false);

    setError(!response.ok);
    setData(response.data);
    console.log(response);

    return response;
  };

  return { data, loading, error, request };
};

export default useApi;
