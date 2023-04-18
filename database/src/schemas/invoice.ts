export type Invoice = {
  id: number;
  issue_date: Date;
  purchase_date: Date;
  supplier: string;
  customer: string;
  products: Array<string>;
  net_price: number;
  tax: number;
  total_price?: number;
};
