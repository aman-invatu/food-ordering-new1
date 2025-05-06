
import { MenuItem, Category, Review } from "@/types";

export const menuItems: MenuItem[] = [
  {
    id: "1",
    name: "Classic Cheeseburger",
    description: "Juicy beef patty with melted cheese, lettuce, tomato, and special sauce",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600",
    category: "burgers",
    rating: 4.8,
    popular: true
  },
  {
    id: "2",
    name: "Margherita Pizza",
    description: "Traditional pizza with tomato sauce, fresh mozzarella, and basil",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=600",
    category: "pizza",
    rating: 4.7,
    popular: true
  },
  {
    id: "3",
    name: "Grilled Salmon",
    description: "Fresh salmon fillet grilled to perfection with lemon butter sauce",
    price: 18.99,
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=600",
    category: "seafood",
    rating: 4.9,
    popular: true
  },
  {
    id: "4",
    name: "Chicken Caesar Salad",
    description: "Crispy romaine lettuce with grilled chicken, parmesan cheese, and Caesar dressing",
    price: 10.99,
    image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?q=80&w=600",
    category: "salads",
    rating: 4.5
  },
  {
    id: "5",
    name: "Spaghetti Carbonara",
    description: "Classic Italian pasta with creamy sauce, pancetta, and parmesan cheese",
    price: 15.99,
    image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?q=80&w=600",
    category: "pasta",
    rating: 4.6,
    popular: true
  },
  {
    id: "6",
    name: "Veggie Supreme Pizza",
    description: "Loaded with bell peppers, mushrooms, olives, onions, and cheese on a thin crust",
    price: 16.99,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=600",
    category: "pizza",
    rating: 4.4
  },
  {
    id: "7",
    name: "BBQ Chicken Wings",
    description: "Tender chicken wings coated in smoky BBQ sauce",
    price: 11.99,
    image: "https://images.unsplash.com/photo-1600555379765-f82335a7b1b0?q=80&w=600",
    category: "appetizers",
    rating: 4.7,
    popular: true
  },
  {
    id: "8",
    name: "Double Bacon Burger",
    description: "Two beef patties with crispy bacon, cheese, and all the fixings",
    price: 15.99,
    image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=600",
    category: "burgers",
    rating: 4.9,
    popular: true
  },
  {
    id: "9",
    name: "Mediterranean Salad",
    description: "Fresh mixed greens with feta cheese, olives, cucumbers, and Greek dressing",
    price: 9.99,
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=600",
    category: "salads",
    rating: 4.3
  },
  {
    id: "10",
    name: "Shrimp Scampi",
    description: "Succulent shrimp in garlic butter sauce served over linguine",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1633504486851-104a4651a34c?q=80&w=600",
    category: "seafood",
    rating: 4.8
  },
  {
    id: "11",
    name: "Mushroom Risotto",
    description: "Creamy Italian rice dish with wild mushrooms and parmesan",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?q=80&w=600",
    category: "pasta",
    rating: 4.5
  },
  {
    id: "12",
    name: "Loaded Nachos",
    description: "Crispy tortilla chips topped with cheese, jalapeños, sour cream, and guacamole",
    price: 10.99,
    image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?q=80&w=600",
    category: "appetizers",
    rating: 4.6
  }
];

export const categories: Category[] = [
  {
    id: "all",
    name: "All Items",
    icon: "🍽️"
  },
  {
    id: "burgers",
    name: "Burgers",
    icon: "🍔"
  },
  {
    id: "pizza",
    name: "Pizza",
    icon: "🍕"
  },
  {
    id: "pasta",
    name: "Pasta",
    icon: "🍝"
  },
  {
    id: "seafood",
    name: "Seafood",
    icon: "🦐"
  },
  {
    id: "salads",
    name: "Salads",
    icon: "🥗"
  },
  {
    id: "appetizers",
    name: "Appetizers",
    icon: "🍟"
  }
];

export const reviews: Review[] = [
  {
    id: "1",
    userId: "101",
    userName: "Emily Johnson",
    userImage: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    text: "The food here is absolutely amazing! I ordered their signature burger and it was the best I've ever had. The delivery was quick and the food was still hot. Will definitely order again!",
    position: "Food Blogger"
  },
  {
    id: "2",
    userId: "102",
    userName: "Michael Chen",
    userImage: "https://randomuser.me/api/portraits/men/22.jpg",
    rating: 5,
    text: "I'm impressed with the quality and variety of options. The pizza was perfect - crispy crust, generous toppings, and amazing flavor. The online ordering system is also very easy to use.",
    position: "Regular Customer"
  },
  {
    id: "3",
    userId: "103",
    userName: "Sarah Williams",
    userImage: "https://randomuser.me/api/portraits/women/29.jpg",
    rating: 4,
    text: "Great selection of healthy options! I love that they have detailed nutritional information available. The salads are fresh and the portions are generous. My go-to place for lunch orders.",
    position: "Health Coach"
  }
];
