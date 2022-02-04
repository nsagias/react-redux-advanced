export interface IItem {
  title: string;
  quantity: number;
  total: number;
  price: number;
}

export class Item {
  title: string;
  quantity: number;
  total: number;
  price: number;

  constructor( 
    title: string,
    quantity: number,
    total: number,
    price: number
    ) {
      this.title = title;
      this.quantity = quantity;
      this.total = total;
      this.price = price;
    }
}