export interface Product {
  title: string;
  originalPrice: string;
  price: string;
  url: string;
}

export interface SiteData {
  brand: {
    name: string;
    description: string;
    logo: string;
  };
  products: Product[];
}
