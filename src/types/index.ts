// product & Category & HomeTypes
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
  isAuthenticated?: boolean;
};
export type carouselType = {
  id: number;
  img: string;
  title?: string;
  subTitle?: string;
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

//Responses
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
export type carouselResponseType = {
  records: carouselType[];
  loading: loadingType;
  error: string | null;
};

//Auth Types
export type AuthStateType = {
  user: {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
  } | null;
  accessToken: string | null;
  loading: loadingType;
  error: string | null;
};
export type registerFormDataType = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};
export type loginFormDataType = {
  email: string;
  password: string;
};
export type loginResponseType = {
  user: {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
  };
  accessToken: string;
};

// TS Predicate
export const isString = (value: unknown): value is string =>
  typeof value === "string";
export type loadingType = "idle" | "pending" | "succeeded" | "failed";
