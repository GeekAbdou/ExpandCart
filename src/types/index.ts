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
  oldPrice?: string;
  productLink?: string;
  brand?: string;
  availability?: boolean;
  sku?: string;
};
export type carouselType = {
  id: number;
  img: string;
  title: string;
  subTitle: string;
  link: string;
};
export type wishlistType = {
  itemsId: number[];
  productsFullInfo: productType[];
  error: null | string;
  loading: loadingType;
};
export type bestSellerType = {
  productsFullInfo: productType[];
  error: null | string;
  loading: loadingType;
};
export type cartType = {
  items: { [key: string]: number };
  productsFullInfo: productType[];
  loading: loadingType;
  error: null | string;
};
export type productCatalogType = {
  productsFullInfo: productType[];
  error: null | string;
  loading: loadingType;
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

// TS Predicate
export const isString = (value: unknown): value is string =>
  typeof value === "string";
