import { create } from "apisauce";

const apiCLient = create({
  baseURL: "https://api.github.com/",
});

export default apiCLient;
