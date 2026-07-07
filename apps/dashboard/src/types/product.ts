export interface Product {
  _id?: string;
  businessId?: string;

  name: string;
  category: string;
  description: string;

  price: number;
  costPrice: number;

  stock: number;
  lowStockAlert: number;

  barcode: string;
  supplier: string;

  image?: string;
}