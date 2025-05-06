
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />
      <main className="pt-20 min-h-screen">
        <section className="py-16 bg-gradient-to-r from-gray-100 to-gray-200">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-3">Privacy Policy</h1>
              <p className="text-gray-600 max-w-xl mx-auto">
                Last updated: May 1, 2025
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
              <div className="prose max-w-none">
                <p>
                  This Privacy Policy describes how FoodEats ("we," "us," or "our") collects, uses, and shares your personal information when you use our website or mobile application.
                </p>
                
                <h2 className="text-xl font-bold mt-6 mb-4">Information We Collect</h2>
                <p>
                  We collect information you provide directly to us when you:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Create an account</li>
                  <li>Place an order</li>
                  <li>Contact customer support</li>
                  <li>Sign up for our newsletter</li>
                  <li>Participate in surveys or promotions</li>
                </ul>
                
                <h2 className="text-xl font-bold mt-6 mb-4">How We Use Your Information</h2>
                <p>
                  We use your information to:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Process and deliver your orders</li>
                  <li>Manage your account</li>
                  <li>Communicate with you about orders and services</li>
                  <li>Improve our website and services</li>
                  <li>Send promotional emails about new products or special offers</li>
                </ul>
                
                <h2 className="text-xl font-bold mt-6 mb-4">Cookies and Tracking Technologies</h2>
                <p>
                  We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                </p>
                
                <h2 className="text-xl font-bold mt-6 mb-4">Third-Party Services</h2>
                <p>
                  We may use third-party services such as payment processors and analytics providers that collect, use, and share your information to help us operate and improve our website.
                </p>
                
                <h2 className="text-xl font-bold mt-6 mb-4">Security</h2>
                <p>
                  We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
                </p>
                
                <h2 className="text-xl font-bold mt-6 mb-4">Changes to This Policy</h2>
                <p>
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                </p>
                
                <h2 className="text-xl font-bold mt-6 mb-4">Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <p>
                  Email: privacy@foodeats.com<br />
                  Phone: +1 (555) 123-4567
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
