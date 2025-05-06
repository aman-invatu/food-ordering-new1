
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
            
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
              <div className="prose max-w-none">
                <h2 className="text-2xl font-semibold mb-4">Welcome to FoodEats</h2>
                <p>
                  These Terms of Service govern your use of the FoodEats website and food ordering services. By accessing or using our service, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the service.
                </p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">Use of Service</h2>
                <p>
                  Our service allows you to browse restaurant menus, place food orders, and arrange for delivery or pickup. By using our service, you agree to provide accurate information for order processing and delivery.
                </p>
                <p>
                  You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account.
                </p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">Orders and Payments</h2>
                <p>
                  When you place an order through our service, you are offering to purchase the items you have selected. We reserve the right to refuse or cancel your order for any reason, including but not limited to product availability, errors in pricing or product information, or suspected fraud.
                </p>
                <p>
                  Payment must be made at the time of order placement. We accept various payment methods as displayed on our website. You agree to provide current, complete, and accurate purchase information for all purchases made via our service.
                </p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">Delivery and Refunds</h2>
                <p>
                  Delivery times are estimates and may vary based on factors such as traffic, weather conditions, and restaurant preparation times. We are not responsible for delays caused by factors outside our control.
                </p>
                <p>
                  If you are dissatisfied with your order, please contact us within 24 hours. Refunds or credits may be issued at our discretion, depending on the circumstances.
                </p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">User Content</h2>
                <p>
                  Our service may allow you to post reviews, comments, and ratings. By posting content, you grant us a non-exclusive, royalty-free, perpetual, and worldwide license to use, modify, publicly perform, publicly display, reproduce, and distribute such content on and through our service.
                </p>
                <p>
                  You agree not to post content that is illegal, harmful, threatening, abusive, defamatory, or otherwise objectionable.
                </p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">Intellectual Property</h2>
                <p>
                  The service and its original content, features, and functionality are and will remain the exclusive property of FoodEats and its licensors. The service is protected by copyright, trademark, and other laws.
                </p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">Limitation of Liability</h2>
                <p>
                  In no event shall FoodEats, its directors, employees, partners, agents, suppliers, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the service.
                </p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to Terms</h2>
                <p>
                  We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
                </p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
                <p>
                  If you have any questions about these Terms, please contact us at:
                  <br />
                  <a href="mailto:terms@foodeats.com" className="text-food-primary">terms@foodeats.com</a>
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
