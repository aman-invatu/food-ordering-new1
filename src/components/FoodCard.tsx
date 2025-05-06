
import React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "@/types";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

interface FoodCardProps {
  item: MenuItem;
  index: number;
}

const FoodCard: React.FC<FoodCardProps> = ({ item, index }) => {
  const { addToCart } = useCart();

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  return (
    <motion.div
      className="menu-item"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
    >
      <div className="relative overflow-hidden rounded-t-lg">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
        />
        
        {/* Rating badge */}
        <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-full text-sm font-bold flex items-center shadow-md">
          <svg
            className="w-4 h-4 text-yellow-500 mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          {item.rating}
        </div>

        {/* Popular badge */}
        {item.popular && (
          <div className="absolute top-3 left-3 bg-food-primary text-white px-2 py-1 rounded-full text-xs font-bold shadow-md">
            Popular
          </div>
        )}
      </div>

      <div className="p-4">
        <div className="mb-2 flex justify-between items-center">
          <h3 className="font-bold text-lg text-gray-800 truncate">{item.name}</h3>
          <span className="font-bold text-food-primary">${item.price.toFixed(2)}</span>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{item.description}</p>
        
        <div className="flex justify-between items-center">
          <span className="text-xs text-gray-500 px-2 py-1 bg-gray-100 rounded-full">
            {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
          </span>
          
          <Button
            onClick={() => addToCart(item)}
            size="sm"
            className="bg-food-primary hover:bg-food-primary/90 text-white flex items-center gap-1 transition-transform hover:scale-105 duration-200"
          >
            <ShoppingCart className="h-4 w-4 mr-1" />
            Add to Cart
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default FoodCard;
