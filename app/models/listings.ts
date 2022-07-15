import * as Yup from "yup";

export const ListingEditSchema = Yup.object()
  .shape({
    title: Yup.string().required().min(1).label("Title"),
    images: Yup.array()
      .of(Yup.string())
      .ensure()
      .min(1, "Please select at least one image")
      .required(),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    category: Yup.object({ label: Yup.string(), value: Yup.number() })
      .required()
      .label("Category")
      .nullable(true)
      .default(null),
    description: Yup.string().required().min(10).label("Description"),
  })
  .required();

export type ListingEditType = Yup.InferType<typeof ListingEditSchema>;

export interface Listing {
  id: number;
  title: string;
  price: number;
  images: Array<{ url: string; thumbnailUrl: string }>;
  description: string;
}
