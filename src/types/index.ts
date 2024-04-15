export type categoryType = {
  id?: number;
  title: string;
  prefix: string;
  img: string;
};

export type productType = {
  id: number;
  title: string;
  price: string;
  cat_prefix?: string;
  img: string;
};

export type loadingType = "idle" | "pending" | "succeeded" | "failed";

export type ResponseType = {
  records: categoryType[];
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: string | null;
};
