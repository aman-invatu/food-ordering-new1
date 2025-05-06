
import React from "react";
import { Category } from "@/types";
import { motion } from "framer-motion";

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: string;
  onSelectCategory: (categoryId: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <div className="py-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Browse Categories</h2>
      <div className="flex overflow-x-auto py-2 px-4 scrollbar-hide">
        <div className="flex space-x-3 min-w-max">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              className={`category-badge whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium ${
                selectedCategory === category.id
                  ? "bg-food-primary text-white"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              }`}
              onClick={() => onSelectCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;
