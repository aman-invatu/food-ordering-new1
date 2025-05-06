
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Message sent",
      description: "We'll get back to you as soon as possible.",
    });
  };

  return (
    <>
      <Navbar />
      <main className="pt-20 min-h-screen">
        <section className="py-16 bg-gradient-to-r from-gray-100 to-gray-200">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-3">Contact Us</h1>
              <p className="text-gray-600 max-w-xl mx-auto">
                Have questions or feedback? We'd love to hear from you.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Contact Form */}
                <div className="md:col-span-2 bg-white p-8 rounded-lg shadow-md">
                  <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label htmlFor="name" className="block font-medium text-gray-700">Name</label>
                        <Input id="name" placeholder="Your Name" required />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="block font-medium text-gray-700">Email</label>
                        <Input id="email" type="email" placeholder="your@email.com" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="block font-medium text-gray-700">Subject</label>
                      <Input id="subject" placeholder="How can we help?" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="block font-medium text-gray-700">Message</label>
                      <Textarea id="message" placeholder="Tell us more about your inquiry..." rows={5} required />
                    </div>
                    <Button type="submit" className="bg-food-primary hover:bg-food-primary/90">
                      Send Message
                    </Button>
                  </form>
                </div>
                
                {/* Contact Info */}
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h2 className="text-2xl font-semibold mb-6">Contact Info</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-medium text-gray-900">Our Address</h3>
                      <address className="not-italic mt-1 text-gray-600">
                        123 Delicious Street<br />
                        Foodville, FD 12345
                      </address>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Email Us</h3>
                      <a href="mailto:support@foodeats.com" className="text-food-primary mt-1 block">
                        support@foodeats.com
                      </a>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Call Us</h3>
                      <a href="tel:+15551234567" className="text-food-primary mt-1 block">
                        +1 (555) 123-4567
                      </a>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Business Hours</h3>
                      <p className="mt-1 text-gray-600">
                        Monday - Friday: 8:00 AM - 9:00 PM<br />
                        Saturday: 10:00 AM - 10:00 PM<br />
                        Sunday: 10:00 AM - 8:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
