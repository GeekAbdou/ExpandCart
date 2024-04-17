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
  max: number;
  quantity?: number;
};

export type loadingType = "idle" | "pending" | "succeeded" | "failed";

export type categoryResponseType = {
  records: categoryType[];
  loading: loadingType;
  error: string | null;
};

export type productResponseType = {
  records: productType[];
  loading: loadingType;
  error: string | null;
};
