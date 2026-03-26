export interface Product {
  title: string;
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
