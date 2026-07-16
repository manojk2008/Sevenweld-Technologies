export interface ProductSpecification {
  power: string;
  voltage: string;
  current: string;
  dutyCycle: string;
  dimensions: string;
  weight: string;
  warranty: string;
}

export interface Product {
  id: number;
  slug: string;

  category: string;

  name: string;

  shortDescription: string;

  description: string;

  badge: string;

  thumbnail: string;

  gallery: string[];

  brochure: string;

  features: string[];

  specifications: ProductSpecification;

  featured?: boolean;
  newArrival?: boolean;
}