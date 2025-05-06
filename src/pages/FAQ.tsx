
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <>
      <Navbar />
      <main className="pt-20 min-h-screen">
        <section className="py-16 bg-gradient-to-r from-gray-100 to-gray-200">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-3">Frequently Asked Questions</h1>
              <p className="text-gray-600 max-w-xl mx-auto">
                Get answers to the most common questions about our food ordering service
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="border-b border-gray-200">
                  <AccordionTrigger className="text-lg font-medium text-left py-4">
                    How does the food ordering process work?
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-gray-600">
                    Browse our menu, select the items you want, add them to your cart, and proceed to checkout. 
                    Choose your delivery address, payment method, and submit your order. You'll receive confirmation 
                    and updates about your order status via email or text.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2" className="border-b border-gray-200">
                  <AccordionTrigger className="text-lg font-medium text-left py-4">
                    What payment methods do you accept?
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-gray-600">
                    We accept credit/debit cards (Visa, Mastercard, American Express), PayPal, Apple Pay, 
                    and Google Pay. Cash on delivery is also available in select areas.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3" className="border-b border-gray-200">
                  <AccordionTrigger className="text-lg font-medium text-left py-4">
                    What is the delivery time?
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-gray-600">
                    Delivery times typically range from 30-45 minutes depending on your location and order volume. 
                    During peak hours, delivery might take a little longer. You'll receive an estimated delivery 
                    time when you place your order.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-4" className="border-b border-gray-200">
                  <AccordionTrigger className="text-lg font-medium text-left py-4">
                    Can I customize my order?
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-gray-600">
                    Yes! Many items on our menu can be customized. When selecting an item, you'll see available 
                    customization options such as ingredients, spice levels, portion sizes, and more.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-5" className="border-b border-gray-200">
                  <AccordionTrigger className="text-lg font-medium text-left py-4">
                    How do I track my order?
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-gray-600">
                    Once your order is confirmed, you can track its status on the "Order Tracking" page. 
                    You'll also receive email or text updates about your order preparation and delivery status.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-6" className="border-b border-gray-200">
                  <AccordionTrigger className="text-lg font-medium text-left py-4">
                    What if I need to cancel my order?
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-gray-600">
                    You can cancel your order within 5 minutes of placing it through your account or by 
                    contacting customer service. After this window, cancellation may not be possible if 
                    food preparation has begun.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-7" className="border-b border-gray-200">
                  <AccordionTrigger className="text-lg font-medium text-left py-4">
                    Do you offer discounts or loyalty programs?
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-gray-600">
                    Yes, we have a rewards program where you earn points with each order. You can redeem these 
                    points for discounts, free items, or exclusive offers. We also have seasonal promotions 
                    and special discounts for new customers.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default FAQ;
