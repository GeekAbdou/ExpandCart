export type categoryType = {
  id?: number;
  title: string;
  prefix: string;
  img: string;
};

export type productType = {
  id: number;
  title: string;
  price: number;
  cat_prefix?: string;
  img: string;
  max: number;
  quantity?: number;
  isLiked?: boolean;
};

export type loadingType = "idle" | "pending" | "succeeded" | "failed";

// TS Predicate
export const isString = (value: unknown): value is string =>
  typeof value === "string";
