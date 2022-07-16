import { create } from "apisauce";
import cache from "../utils/cache";

const apiCLient = create({
  baseURL: "https://api.github.com/",
});

apiCLient.addAsyncResponseTransform(async (response) => {
  const method = response.config?.method;
  const url = <string>response.config?.url;

  if (method === "get") {
    if (response.ok) {
      cache.store(url, response.data);
    }
    const cachedData = await cache.get(url);
    if (cachedData) {
      response.data = cachedData;
      response.ok = true;
    }
  }
});

export default apiCLient;
