export type CATEGORY_NAMES = {
  category_id: string;
  category_name: string;
  category_image: string;
  category_link: string;
};
export type CAMPAING_ELEMENT = {
  campaign_id: string;
  campaign_slug: string;
  campaign_description: string;
  campaign_name: string;
  campaign_desktop_image: string;
  campaign_mobile_image: string;
  campaign_link: string;
  campaign_start_date: Date;
  campaign_end_date: Date;
};
export type PRODUCT = {
  id: string;
  category: string;
  name: string;
  description: string;
  isTripleBig: boolean;
  isTripleSmall: boolean;
  isQuadrant: boolean;
  price: string;
  image: string;
  count?: any;
};

export interface CategoryListProps {
  data: CATEGORY_NAMES[];
}
export interface ProductProps {
  id: PRODUCT["id"];
  name: PRODUCT["name"];
  price: PRODUCT["price"];
  image: PRODUCT["image"];
  count?: PRODUCT["count"];
  description?: PRODUCT["description"];
}
export interface ProductDetailProps {
  data: ProductProps;
}
export interface ShoppingCartState {
  cart: PRODUCT[];
  addToCart: (product: PRODUCT) => void;
  removeFromCart: (productId: PRODUCT["id"]) => void;
  clearCart: () => void;
  totalPrice: number;
  totalCount: number;
}
