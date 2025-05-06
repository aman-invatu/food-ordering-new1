
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <>
      <Navbar />
      <main className="pt-20 min-h-screen">
        <section className="py-16 bg-gradient-to-r from-gray-100 to-gray-200">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-3">Terms of Service</h1>
              <p className="text-gray-600 max-w-xl mx-auto">
                Last updated: May 1, 2025
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
              <div className="prose max-w-none">
                <p>
                  Please read these Terms of Service carefully before using the FoodEats website or mobile application.
                </p>
                
                <h2 className="text-xl font-bold mt-6 mb-4">1. Acceptance of Terms</h2>
                <p>
                  By accessing or using our service, you agree to be bound by these Terms. If you disagree with any part of these terms, you may not access the service.
                </p>
                
                <h2 className="text-xl font-bold mt-6 mb-4">2. Use of the Service</h2>
                <p>
                  You agree to use the service only for lawful purposes and in accordance with these Terms. You agree not to:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Use the service in any way that violates applicable laws or regulations</li>
                  <li>Use the service to engage in any fraudulent activity</li>
                  <li>Interfere with or disrupt the service</li>
                  <li>Attempt to access areas not intended for users</li>
                </ul>
                
                <h2 className="text-xl font-bold mt-6 mb-4">3. User Accounts</h2>
                <p>
                  When you create an account with us, you must provide accurate and complete information. You are responsible for maintaining the confidentiality of your account and password.
                </p>
                
                <h2 className="text-xl font-bold mt-6 mb-4">4. Orders and Payments</h2>
                <p>
                  By placing an order, you agree to pay the full amount for the items ordered, plus any applicable taxes and delivery fees. All payments are processed securely through our payment providers.
                </p>
                
                <h2 className="text-xl font-bold mt-6 mb-4">5. Delivery and Cancellations</h2>
                <p>
                  Delivery times are estimates and may vary based on restaurant preparation times, traffic, and other factors. Orders can be modified or canceled within 5 minutes of placing them.
                </p>
                
                <h2 className="text-xl font-bold mt-6 mb-4">6. Refunds</h2>
                <p>
                  Refunds may be issued for orders that are incorrect, damaged, or significantly late. All refund requests must be submitted within 24 hours of delivery.
                </p>
                
                <h2 className="text-xl font-bold mt-6 mb-4">7. Intellectual Property</h2>
                <p>
                  The service and its original content, features, and functionality are owned by FoodEats and are protected by copyright and other intellectual property laws.
                </p>
                
                <h2 className="text-xl font-bold mt-6 mb-4">8. Limitation of Liability</h2>
                <p>
                  In no event shall FoodEats, its directors, employees, or agents be liable for any indirect, incidental, special, consequential, or punitive damages.
                </p>
                
                <h2 className="text-xl font-bold mt-6 mb-4">9. Changes to Terms</h2>
                <p>
                  We reserve the right to modify these Terms at any time. We will notify users of any significant changes by posting a notice on our website.
                </p>
                
                <h2 className="text-xl font-bold mt-6 mb-4">10. Contact Us</h2>
                <p>
                  If you have any questions about these Terms, please contact us at:
                </p>
                <p>
                  Email: legal@foodeats.com<br />
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

export default TermsOfService;
