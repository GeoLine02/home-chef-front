import { ICartItem } from "../Cart";

export interface IProduct {
  id: number;
  productComposition: string;
  productDescription: string;
  productName: string;
  productPhoto: string;
  productPrice: number;
  restaurantID: number;
  weight: string;
}

export interface IPendingProduct extends ICartItem {}
