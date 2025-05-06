
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  popular?: boolean;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
}

export interface Review {
  id: string;
  userId: string;
  userName: string;
  userImage: string;
  rating: number;
  text: string;
  position: string;
}
