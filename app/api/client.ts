import { create } from "apisauce";
import authStorage from "../utils/authStorage";
import cache from "../utils/cache";
const apiCLient = create({
  baseURL: "https://api.github.com/",
});

apiCLient.addAsyncRequestTransform(async (request) => {
  const authToken = await authStorage.getToken();

  if (!authToken) return;

  request.headers["x-auth-token"] = authToken;
});

apiCLient.addAsyncResponseTransform(async (response) => {
  const method = response.config?.method;
  const url = <string>response.config?.url;

  if (method === "get") {
    // cache data
    if (response.ok) {
      cache.store(url, response.data);
    }

    // do we have cache data?
    const cachedData = await cache.get(url);

    // if we have, we can return cached data
    if (cachedData) {
      response.data = cachedData;
      response.ok = true;
    }
  }
});

export default apiCLient;
