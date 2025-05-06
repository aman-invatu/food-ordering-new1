
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
                Find answers to the most common questions about our services
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>How do I place an order?</AccordionTrigger>
                  <AccordionContent>
                    To place an order, browse our menu, select the items you want, add them to your cart, and proceed to checkout. You'll need to provide delivery information and payment details to complete your order.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2">
                  <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
                  <AccordionContent>
                    We accept major credit cards (Visa, MasterCard, American Express), PayPal, and various digital wallets. Cash on delivery is also available in select areas.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3">
                  <AccordionTrigger>How long does delivery take?</AccordionTrigger>
                  <AccordionContent>
                    Delivery times vary depending on your location and the restaurant. Typically, orders are delivered within 30-45 minutes. You can track your order in real-time through our app or website.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-4">
                  <AccordionTrigger>Can I modify or cancel my order?</AccordionTrigger>
                  <AccordionContent>
                    You can modify or cancel your order within 5 minutes of placing it. After that, please contact our customer support as the order may already be in preparation.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-5">
                  <AccordionTrigger>Do you offer vegetarian options?</AccordionTrigger>
                  <AccordionContent>
                    Yes, we offer a wide range of vegetarian options. You can filter menu items by dietary preferences, including vegetarian, vegan, gluten-free, and more.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-6">
                  <AccordionTrigger>What is your refund policy?</AccordionTrigger>
                  <AccordionContent>
                    If your order arrives damaged, incorrect, or significantly late, you are eligible for a refund or store credit. Please report the issue within 24 hours of delivery through our customer support.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-7">
                  <AccordionTrigger>How do I create an account?</AccordionTrigger>
                  <AccordionContent>
                    You can create an account by clicking on the "Register" button in the top right corner of our website. Fill in your personal details and create a password to set up your account.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-8">
                  <AccordionTrigger>Are there any delivery fees?</AccordionTrigger>
                  <AccordionContent>
                    Delivery fees vary based on your distance from the restaurant. Some restaurants offer free delivery on orders above a certain amount. The exact fee will be displayed during checkout.
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
