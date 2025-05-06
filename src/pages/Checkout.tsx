
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useAuth } from "@/context/AuthContext";
import { toast } from "@/hooks/use-toast";

const Checkout = () => {
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [deliveryOption, setDeliveryOption] = useState<string>("delivery");
  const [paymentMethod, setPaymentMethod] = useState<string>("card");
  
  const [formData, setFormData] = useState({
    fullName: user?.name || "",
    email: user?.email || "",
    phone: "",
    address: "",
    city: "",
    zipCode: "",
    cardNumber: "",
    cardName: "",
    cardExpiry: "",
    cardCvc: "",
    notes: "",
  });

  // Redirect if not authenticated
  if (!isAuthenticated && !orderPlaced) {
    navigate("/login?redirect=checkout");
    return null;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDeliveryChange = (value: string) => {
    setDeliveryOption(value);
  };

  const handlePaymentChange = (value: string) => {
    setPaymentMethod(value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate order submission
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setOrderPlaced(true);
    
    toast({
      title: "Order placed successfully",
      description: "Your order has been placed and will be processed soon!",
    });
  };

  // Order confirmation screen
  if (orderPlaced) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen pt-24 pb-16 px-4 flex items-center justify-center">
          <div className="container max-w-md">
            <motion.div
              className="bg-white shadow-lg rounded-lg p-8 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-6">
                <Check className="h-10 w-10 text-green-600" />
              </div>
              
              <h1 className="text-2xl font-bold mb-3">Order Confirmed!</h1>
              <p className="text-gray-600 mb-6">
                Thank you for your order. We've received your order and it's being processed now.
              </p>
              
              <div className="bg-gray-50 p-4 rounded-md mb-6">
                <p className="text-sm text-gray-600 mb-1">Order Reference:</p>
                <p className="font-medium">#ORD-{Math.floor(100000 + Math.random() * 900000)}</p>
              </div>
              
              <p className="text-gray-600 mb-8">
                A confirmation email has been sent to {formData.email}
              </p>
              
              <Button
                className="bg-food-primary hover:bg-food-primary/90 w-full"
                onClick={() => navigate("/")}
              >
                Back to Home
              </Button>
            </motion.div>
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
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">Checkout</h1>
            <p className="text-gray-600">Complete your order by filling in the details below</p>
          </div>
          
          <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg overflow-hidden">
            {/* Delivery Options */}
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-bold mb-4">Delivery Options</h2>
              <RadioGroup
                value={deliveryOption}
                onValueChange={handleDeliveryChange}
                className="flex flex-col space-y-3"
              >
                <div className="flex items-center space-x-3">
                  <RadioGroupItem value="delivery" id="delivery" />
                  <Label htmlFor="delivery" className="cursor-pointer">
                    <span className="font-medium">Home Delivery</span>
                    <p className="text-gray-500 text-sm">Delivered to your address in 30-45 minutes</p>
                  </Label>
                </div>
                <div className="flex items-center space-x-3">
                  <RadioGroupItem value="pickup" id="pickup" />
                  <Label htmlFor="pickup" className="cursor-pointer">
                    <span className="font-medium">Pickup</span>
                    <p className="text-gray-500 text-sm">Pickup from our restaurant in 15-20 minutes</p>
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {/* Customer Information */}
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-bold mb-4">Your Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>

            {/* Delivery Address - Only shown for delivery option */}
            {deliveryOption === "delivery" && (
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-bold mb-4">Delivery Address</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2 space-y-2">
                    <Label htmlFor="address">Street Address</Label>
                    <Input
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Input
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="zipCode">ZIP Code</Label>
                    <Input
                      id="zipCode"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Payment Method */}
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-bold mb-4">Payment Method</h2>
              <RadioGroup
                value={paymentMethod}
                onValueChange={handlePaymentChange}
                className="flex flex-col space-y-3"
              >
                <div className="flex items-center space-x-3">
                  <RadioGroupItem value="card" id="card" />
                  <Label htmlFor="card" className="cursor-pointer flex items-center">
                    <span className="font-medium mr-2">Credit/Debit Card</span>
                    <div className="flex space-x-1">
                      <img src="https://cdn-icons-png.flaticon.com/128/196/196578.png" alt="Visa" className="h-6" />
                      <img src="https://cdn-icons-png.flaticon.com/128/196/196561.png" alt="MasterCard" className="h-6" />
                      <img src="https://cdn-icons-png.flaticon.com/128/196/196539.png" alt="Amex" className="h-6" />
                    </div>
                  </Label>
                </div>
                <div className="flex items-center space-x-3">
                  <RadioGroupItem value="cash" id="cash" />
                  <Label htmlFor="cash" className="cursor-pointer">
                    <span className="font-medium">Cash on Delivery</span>
                  </Label>
                </div>
              </RadioGroup>

              {/* Card Details - Only shown for card payment */}
              {paymentMethod === "card" && (
                <div className="mt-4 p-4 bg-gray-50 rounded-md">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2 space-y-2">
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <Input
                        id="cardNumber"
                        name="cardNumber"
                        placeholder="1234 5678 9012 3456"
                        value={formData.cardNumber}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="md:col-span-2 space-y-2">
                      <Label htmlFor="cardName">Name on Card</Label>
                      <Input
                        id="cardName"
                        name="cardName"
                        placeholder="John Doe"
                        value={formData.cardName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cardExpiry">Expiry Date</Label>
                      <Input
                        id="cardExpiry"
                        name="cardExpiry"
                        placeholder="MM/YY"
                        value={formData.cardExpiry}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cardCvc">CVC</Label>
                      <Input
                        id="cardCvc"
                        name="cardCvc"
                        placeholder="123"
                        value={formData.cardCvc}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Additional Notes */}
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-bold mb-4">Additional Notes</h2>
              <div className="space-y-2">
                <Label htmlFor="notes">Special Instructions (optional)</Label>
                <Textarea
                  id="notes"
                  name="notes"
                  placeholder="Any special requests or delivery instructions?"
                  value={formData.notes}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Order Summary & Place Order */}
            <div className="p-6">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>
              <div className="bg-gray-50 p-4 rounded-md mb-6">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Subtotal</span>
                  <span>$41.97</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Delivery Fee</span>
                  <span>$2.99</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Tax</span>
                  <span>$3.36</span>
                </div>
                <div className="border-t border-gray-300 my-2"></div>
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span>$48.32</span>
                </div>
              </div>
              
              <Button
                type="submit"
                className="w-full bg-food-primary hover:bg-food-primary/90 text-white py-2 rounded-md"
                size="lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  "Place Order"
                )}
              </Button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Checkout;
