import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FoodCard from "@/components/FoodCard";
import { MenuItem, Review } from "@/types";
import { menuItems, reviews } from "@/data/menuItems";

const Hero = () => (
  <section className="relative h-screen flex flex-col justify-center items-center text-center px-4" style={{
    backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1470')",
    backgroundSize: "cover",
    backgroundPosition: "center"
  }}>
    <motion.h1 
      className="text-4xl md:text-6xl font-bold text-white mb-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      Delicious Food<br />for Every Mood
    </motion.h1>
    
    <motion.p 
      className="text-xl text-gray-300 max-w-2xl mb-8"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      Enjoy the finest selection of cuisines delivered right to your doorstep with just a few clicks.
    </motion.p>
    
    <motion.div
      className="flex flex-col sm:flex-row gap-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
    >
      <Link to="/menu">
        <Button size="lg" className="bg-food-primary hover:bg-food-primary/90 text-white px-8">
          Order Now
        </Button>
      </Link>
      <Link to="/menu">
        <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-food-dark">
          View Menu
        </Button>
      </Link>
    </motion.div>

    <motion.img
      src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=300"
      alt="Floating food"
      className="absolute right-10 top-1/4 hidden lg:block rounded-full shadow-lg w-32 h-32 object-cover"
      initial={{ y: 0 }}
      animate={{ y: [0, -15, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    />

    <motion.img
      src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=300"
      alt="Floating food"
      className="absolute left-10 bottom-1/4 hidden lg:block rounded-full shadow-lg w-28 h-28 object-cover"
      initial={{ y: 0 }}
      animate={{ y: [0, -20, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
    />
  </section>
);

const Features = () => (
  <section className="py-20 bg-gray-50">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="section-title">Why Choose Us</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">We take pride in delivering the best food experience with quality ingredients and excellent service</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div 
          className="bg-white p-8 rounded-lg shadow-md text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="mx-auto bg-food-primary/10 w-16 h-16 flex items-center justify-center rounded-full mb-4">
            <svg className="w-8 h-8 text-food-primary" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" fillRule="evenodd"></path>
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-3">Fast Delivery</h3>
          <p className="text-gray-600">Our delivery partners ensure your food arrives hot and fresh in no time</p>
        </motion.div>
        
        <motion.div 
          className="bg-white p-8 rounded-lg shadow-md text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="mx-auto bg-food-primary/10 w-16 h-16 flex items-center justify-center rounded-full mb-4">
            <svg className="w-8 h-8 text-food-primary" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-3">Expert Chefs</h3>
          <p className="text-gray-600">Experienced culinary professionals prepare each meal with care and attention</p>
        </motion.div>
        
        <motion.div 
          className="bg-white p-8 rounded-lg shadow-md text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="mx-auto bg-food-primary/10 w-16 h-16 flex items-center justify-center rounded-full mb-4">
            <svg className="w-8 h-8 text-food-primary" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-3">Quality Ingredients</h3>
          <p className="text-gray-600">We use only the freshest, high-quality ingredients in all our dishes</p>
        </motion.div>
      </div>
    </div>
  </section>
);

const PopularItems = ({ items }: { items: MenuItem[] }) => {
  const popularItems = items.filter(item => item.popular).slice(0, 6);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Most Popular Dishes</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">The most ordered and highest rated dishes loved by our customers</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {popularItems.map((item, index) => (
            <FoodCard key={item.id} item={item} index={index} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/menu">
            <Button
              size="lg"
              className="bg-food-primary hover:bg-food-primary/90 group"
            >
              View Full Menu
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

const OrderSteps = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="section-title">Easy Order Steps</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">Follow these simple steps to get your delicious meal</p>
      </div>
      
      <div className="flex flex-wrap justify-center">
        <div className="relative w-full lg:w-10/12 xl:w-8/12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { number: 1, title: "Select your Restaurant", image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=300", description: "Choose from our network of restaurants" },
              { number: 2, title: "Select your Dish", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=300", description: "Browse through various menu options" },
              { number: 3, title: "Pay Cash/Online", image: "https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?q=80&w=300", description: "Choose your preferred payment method" },
              { number: 4, title: "Enjoy Your Meal", image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=300", description: "Your food delivered right to your doorstep" }
            ].map((step, index) => (
              <motion.div 
                key={index}
                className="text-center relative z-10"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative mx-auto mb-6">
                  <div className="w-32 h-32 rounded-full border-4 border-food-primary mx-auto flex items-center justify-center overflow-hidden">
                    <img 
                      src={step.image} 
                      alt={step.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute top-0 right-0 -mr-2 -mt-2 bg-food-primary w-10 h-10 rounded-full flex items-center justify-center text-white font-bold">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="hidden md:block">
            <div className="absolute top-16 left-[25%] right-[25%] h-0.5 bg-gray-200"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const TodaysMenu = () => (
  <section className="py-20 relative overflow-hidden" style={{
    backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1470')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}>
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="section-title text-white">Today's Menu</h2>
        <p className="text-gray-300 max-w-2xl mx-auto">Discover our chef's special selection for today</p>
      </div>
      
      <div className="max-w-5xl mx-auto">
        {[
          { name: "Mix Salad", price: "$10", description: "Fresh vegetables tossed with our house dressing", image: "https://images.unsplash.com/photo-1607532941433-304659e8198a?q=80&w=200" },
          { name: "Green Garden Salad", price: "$12", description: "Seasonal greens with balsamic vinaigrette", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=200" },
          { name: "Grilled Shrimp Salad", price: "$14", description: "Succulent shrimp on a bed of fresh greens", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=200" },
          { name: "Chicken Caesar Salad", price: "$10", description: "Classic caesar with grilled chicken breast", image: "https://images.unsplash.com/photo-1546069901-d5bfd2cbfb1f?q=80&w=200" }
        ].map((item, index) => (
          <motion.div 
            key={index} 
            className="flex items-center mb-8 bg-black/20 rounded-lg p-4 backdrop-blur-sm"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <img src={item.image} alt={item.name} className="w-20 h-20 rounded-full object-cover mr-6" />
            <div className="flex-1">
              <h3 className="text-xl font-medium text-white">{item.name}</h3>
              <p className="text-gray-300">{item.description}</p>
            </div>
            <div className="text-2xl font-bold text-food-primary">{item.price}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const ClientTestimonials = () => (
  <section className="py-20 bg-gray-50 relative overflow-hidden">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="section-title">What Our Clients Are Saying</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">Hear from our satisfied customers</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {[
          { name: "Daniel Parker", position: "Food Critic", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100", text: "Exceptional flavors and prompt delivery. The packaging was excellent, keeping the food hot until it reached my doorstep." },
          { name: "Sarah Thompson", position: "Regular Customer", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100", text: "I order at least twice a week. The variety of options and consistent quality keep me coming back. Highly recommended!" },
          { name: "Michael Chen", position: "Food Blogger", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100", text: "As someone who reviews food for a living, I can confidently say this is among the best food delivery services I've experienced." }
        ].map((testimonial, index) => (
          <motion.div 
            key={index}
            className="bg-white p-6 rounded-lg shadow-md relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-4">
              <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full object-cover mr-4" />
              <div>
                <h4 className="font-bold text-lg">{testimonial.name}</h4>
                <p className="text-gray-500">{testimonial.position}</p>
              </div>
            </div>
            <p className="text-gray-600 italic mb-4">"{testimonial.text}"</p>
            <div className="flex text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              ))}
            </div>
            <div className="absolute text-6xl text-gray-100 -bottom-4 -right-4 opacity-50 font-serif">&#8220;</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const MealTimes = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="section-title">Meals For Every Time</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">We've got you covered for all your meals throughout the day</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
        {[
          { title: "Brunch", image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=300", description: "Start your day right with our nutritious and delicious brunch options" },
          { title: "Lunch", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=300", description: "Quick, healthy, and satisfying meals perfect for your midday break" },
          { title: "Dinner", image: "https://images.unsplash.com/photo-1559847844-5315695dadae?q=80&w=300", description: "End your day with our exquisite dinner selections crafted by our chefs" }
        ].map((meal, index) => (
          <motion.div 
            key={index} 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
          >
            <div className="relative overflow-hidden rounded-full mx-auto mb-6 w-60 h-60 shadow-lg">
              <img 
                src={meal.image} 
                alt={meal.title} 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>
            <h3 className="text-2xl font-bold mb-3">{meal.title}</h3>
            <p className="text-gray-600 mx-auto max-w-xs">{meal.description}</p>
            <Link to="/menu" className="mt-4 inline-block">
              <Button variant="outline" className="mt-4 border-food-primary text-food-primary hover:bg-food-primary hover:text-white">
                View Menu
              </Button>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const HowItWorks = () => (
  <section className="py-20 bg-gray-50">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="section-title">How It Works</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">Follow these simple steps to place your order</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="relative">
            <div className="w-16 h-16 bg-food-primary rounded-full text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">
              1
            </div>
            <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gray-300 -z-10"></div>
          </div>
          <h3 className="text-xl font-bold mb-2">Browse Menu</h3>
          <p className="text-gray-600">Explore our wide variety of dishes and cuisines</p>
        </motion.div>
        
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="relative">
            <div className="w-16 h-16 bg-food-primary rounded-full text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">
              2
            </div>
            <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gray-300 -z-10"></div>
          </div>
          <h3 className="text-xl font-bold mb-2">Add to Cart</h3>
          <p className="text-gray-600">Select your favorite items and add them to your cart</p>
        </motion.div>
        
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="relative">
            <div className="w-16 h-16 bg-food-primary rounded-full text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">
              3
            </div>
            <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gray-300 -z-10"></div>
          </div>
          <h3 className="text-xl font-bold mb-2">Checkout</h3>
          <p className="text-gray-600">Review your order and proceed to checkout</p>
        </motion.div>
        
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="w-16 h-16 bg-food-primary rounded-full text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">
            4
          </div>
          <h3 className="text-xl font-bold mb-2">Enjoy!</h3>
          <p className="text-gray-600">Wait for delivery and enjoy your delicious meal</p>
        </motion.div>
      </div>
    </div>
  </section>
);

const Testimonials = ({ reviews }: { reviews: Review[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Don't take our word for it, read what our satisfied customers have to say</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {reviews.map((review, index) => (
              <motion.div
                key={review.id}
                className="bg-white p-8 rounded-lg shadow-lg"
                initial={{ opacity: 0, x: 100 }}
                animate={{
                  opacity: index === currentIndex ? 1 : 0,
                  x: index === currentIndex ? 0 : 100,
                  display: index === currentIndex ? "block" : "none"
                }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center mb-6">
                  <img
                    src={review.userImage}
                    alt={review.userName}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-lg">{review.userName}</h4>
                    <p className="text-gray-500">{review.position}</p>
                    <div className="flex mt-1">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-5 h-5 ${
                            i < review.rating ? "text-yellow-500" : "text-gray-300"
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{review.text}"</p>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? "bg-food-primary" : "bg-gray-300"
                } transition-colors duration-300`}
                aria-label={`Go to review ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Newsletter = () => (
  <section className="relative py-20 overflow-hidden" style={{
    backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1556910103-1c02745aaf4b?q=80&w=1470&auto=format&fit=crop')",
    backgroundSize: "cover",
    backgroundPosition: "center"
  }}>
    <div className="container mx-auto px-4">
      <div className="max-w-2xl mx-auto text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
        <p className="mb-8">Get updates on our latest offers, new dishes, and exclusive promotions</p>
        
        <form className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-grow px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-food-primary text-gray-800"
          />
          <Button size="lg" className="bg-food-primary hover:bg-food-primary/90 text-white">
            Subscribe
          </Button>
        </form>
      </div>
    </div>
  </section>
);

const Stats = () => (
  <section className="py-20 bg-food-dark text-white">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-4xl font-bold text-food-primary mb-2">10k+</h3>
          <p className="text-gray-300">Happy Customers</p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-4xl font-bold text-food-primary mb-2">500+</h3>
          <p className="text-gray-300">Delicious Dishes</p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-4xl font-bold text-food-primary mb-2">30+</h3>
          <p className="text-gray-300">Expert Chefs</p>
        </motion.div>
      </div>
    </div>
  </section>
);

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <PopularItems items={menuItems} />
        <OrderSteps />
        <TodaysMenu />
        <ClientTestimonials />
        <MealTimes />
        <HowItWorks />
        <Testimonials reviews={reviews} />
        <Stats />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
};

export default Index;
