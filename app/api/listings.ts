import apiClient from "./client";

export interface Image {
  name: string;
  type: string;
  url: string;
  thumbnailUrl: string;
}

type Location = {
  latitude: number;
  longitude: number;
} | null;

export interface Listing {
  id: number;
  title: string;
  price: number;
  category?: any;
  description: string;
  images: Image[];
}

const endpoint = "/listings";
const getListings = () => apiClient.get(endpoint);

const addListing = async (
  { form, location }: { form: Listing; location: Location },
  onUploadProgress: (progress: number) => void
) => {
  const data = new FormData();
  data.append("title", form.title);
  data.append("price", form.price.toString());
  data.append("categoryId", form.category.value);
  data.append("description", form.description);

  if (location) {
    data.append("location", JSON.stringify(location));
  }

  form.images.forEach((value, i) => {
    const formDataImage = {
      name: `image-${i}`,
      type: "image/jpeg",
      uri: value,
    } as any;

    return data.append("images", formDataImage);
  });

  return apiClient.post(endpoint, data, {
    onUploadProgress: (progress: any) => {
      onUploadProgress(progress.loaded / progress.total);
    },
  });
};

export default {
  getListings,
  addListing,
};
