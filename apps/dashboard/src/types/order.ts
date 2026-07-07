export interface Order {
  _id?: string;

  customerId: {
    _id: string;
    name: string;
    email: string;
    phone: string;
  };

  products: {
    product: {
      _id: string;
      name: string;
      price: number;
    };
    quantity: number;
  }[];

  totalAmount: number;

  paymentMethod: string;

  status: string;

  date: string;
}