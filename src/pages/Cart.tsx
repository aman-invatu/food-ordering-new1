
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import { toast } from "@/hooks/use-toast";
import { Plus, Minus, Trash2, ShoppingCart, ArrowRight } from "lucide-react";

const Cart = () => {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart, clearCart } = useCart();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleCheckout = () => {
    if (!isAuthenticated) {
      toast({
        title: "Login Required",
        description: "Please login to proceed with checkout",
        variant: "destructive",
      });
      
      // Redirect to login with redirect back to checkout
      navigate("/login?redirect=checkout");
      return;
    }

    setIsProcessing(true);
    
    // Simulate checkout process
    setTimeout(() => {
      clearCart();
      setIsProcessing(false);
      
      navigate("/checkout");
    }, 1500);
  };

  // Empty cart state
  if (cart.items.length === 0) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen pt-24 pb-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
            
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShoppingCart className="h-12 w-12 text-gray-400" />
              </div>
              <h2 className="text-2xl font-bold mb-3">Your cart is empty</h2>
              <p className="text-gray-600 mb-6">
                Looks like you haven't added anything to your cart yet.
              </p>
              <Link to="/menu">
                <Button size="lg" className="bg-food-primary hover:bg-food-primary/90">
                  Browse Menu
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <ul className="divide-y divide-gray-200">
                  <AnimatePresence>
                    {cart.items.map((item) => (
                      <motion.li
                        key={item.id}
                        className="flex py-6 px-4 sm:px-6"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>

                        <div className="ml-4 flex flex-1 flex-col">
                          <div>
                            <div className="flex justify-between text-base font-medium text-gray-900">
                              <h3>{item.name}</h3>
                              <p className="ml-4">
                                ${(item.price * item.quantity).toFixed(2)}
                              </p>
                            </div>
                            <p className="mt-1 text-sm text-gray-500 line-clamp-1">
                              {item.description}
                            </p>
                          </div>
                          
                          <div className="flex flex-1 items-end justify-between mt-2">
                            <div className="flex items-center border border-gray-300 rounded-md">
                              <button
                                type="button"
                                className="p-1 text-gray-600 hover:text-food-primary"
                                onClick={() => decreaseQuantity(item.id)}
                              >
                                <Minus className="h-4 w-4" />
                              </button>
                              <span className="px-3 text-gray-700">{item.quantity}</span>
                              <button
                                type="button"
                                className="p-1 text-gray-600 hover:text-food-primary"
                                onClick={() => increaseQuantity(item.id)}
                              >
                                <Plus className="h-4 w-4" />
                              </button>
                            </div>
                            
                            <button
                              type="button"
                              className="font-medium text-food-primary hover:text-food-primary/80 flex items-center"
                              onClick={() => removeFromCart(item.id)}
                            >
                              <Trash2 className="h-4 w-4 mr-1" />
                              Remove
                            </button>
                          </div>
                        </div>
                      </motion.li>
                    ))}
                  </AnimatePresence>
                </ul>
                
                <div className="border-t border-gray-200 px-4 py-4 sm:px-6">
                  <Button
                    variant="outline"
                    className="text-gray-600"
                    onClick={clearCart}
                  >
                    Clear Cart
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Cart Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-lg font-bold mb-6 pb-4 border-b border-gray-200">
                  Order Summary
                </h2>
                
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Subtotal ({cart.totalItems} items)</span>
                    <span>${cart.totalAmount.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span>Delivery Fee</span>
                    <span>$2.99</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span>Tax</span>
                    <span>${(cart.totalAmount * 0.08).toFixed(2)}</span>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-4 mt-4">
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span>
                        ${(cart.totalAmount + 2.99 + cart.totalAmount * 0.08).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
                
                <Button
                  className="w-full mt-6 bg-food-primary hover:bg-food-primary/90"
                  size="lg"
                  onClick={handleCheckout}
                  disabled={isProcessing}
                >
                  {isProcessing ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    <>
                      Proceed to Checkout
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
                
                <div className="mt-6">
                  <h3 className="font-medium mb-2">We accept:</h3>
                  <div className="flex space-x-3">
                    <img src="https://cdn-icons-png.flaticon.com/128/196/196578.png" alt="Visa" className="h-8" />
                    <img src="https://cdn-icons-png.flaticon.com/128/196/196561.png" alt="MasterCard" className="h-8" />
                    <img src="https://cdn-icons-png.flaticon.com/128/196/196539.png" alt="Amex" className="h-8" />
                    <img src="https://cdn-icons-png.flaticon.com/128/196/196565.png" alt="PayPal" className="h-8" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Cart;
