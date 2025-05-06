
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <>
      <Navbar />
      <main className="pt-20 min-h-screen">
        <section className="py-16 bg-gradient-to-r from-gray-100 to-gray-200">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-3">About Us</h1>
              <p className="text-gray-600 max-w-xl mx-auto">
                Learn more about our story and mission to serve delicious food
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
              <p className="mb-6">
                Founded in 2020, FoodEats began with a simple mission: to connect people with great local restaurants and provide an easy way to order delicious meals online.
              </p>
              
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="mb-6">
                We're dedicated to making food ordering accessible, affordable and enjoyable for everyone. Our platform brings together the best local restaurants, offering a wide variety of cuisines to satisfy any craving.
              </p>
              
              <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
              <p>
                Our diverse team of food enthusiasts, tech experts, and customer service professionals work together to ensure you have the best possible experience with every order.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
