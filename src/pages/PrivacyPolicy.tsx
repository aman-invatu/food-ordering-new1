
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
            
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
              <div className="prose max-w-none">
                <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
                <p>
                  FoodEats ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our food ordering services.
                </p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">Information We Collect</h2>
                <p>We may collect the following types of information:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Personal Information:</strong> Name, email address, phone number, delivery address, and payment details.</li>
                  <li><strong>Account Information:</strong> Login credentials, account preferences, and order history.</li>
                  <li><strong>Technical Information:</strong> IP address, browser type, device information, and cookies.</li>
                  <li><strong>Usage Data:</strong> How you interact with our website, including pages visited, time spent, and actions taken.</li>
                </ul>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">How We Use Your Information</h2>
                <p>We use the information we collect for the following purposes:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>To process and deliver your orders</li>
                  <li>To manage your account and provide customer support</li>
                  <li>To improve our services and develop new features</li>
                  <li>To send promotional offers and updates (if you opt-in)</li>
                  <li>To detect and prevent fraud or abuse</li>
                </ul>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">Data Security</h2>
                <p>
                  We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                </p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">Third-Party Services</h2>
                <p>
                  We may use third-party services that collect, monitor, and analyze data to help us improve our service. These third parties have access to your personal information only to perform specific tasks on our behalf and are obligated not to disclose or use it for any other purpose.
                </p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">Your Rights</h2>
                <p>Depending on your location, you may have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access the personal information we hold about you</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Object to processing of your information</li>
                  <li>Request restriction of processing</li>
                  <li>Request transfer of your information</li>
                </ul>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to This Privacy Policy</h2>
                <p>
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                </p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy, please contact us at:
                  <br />
                  <a href="mailto:privacy@foodeats.com" className="text-food-primary">privacy@foodeats.com</a>
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
