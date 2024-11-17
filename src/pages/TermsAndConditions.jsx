import React from 'react';
import { motion } from 'framer-motion';

function TermsAndConditions() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="bg-gray-50 text-gray-900 font-sans">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-extrabold text-center text-black mb-8">Terms and Conditions</h1>

        <p className="text-lg text-gray-700 mb-8 text-center">
          Please read these Terms and Conditions carefully before using our website.
        </p>

        <div className="space-y-8">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-semibold text-black">1. Acceptance of Terms</h2>
            <p className="text-gray-600 mt-2">
              By accessing or using this website, you agree to comply with and be bound by these Terms and Conditions. If you do not agree to these terms, you are not permitted to use the website.
            </p>
          </motion.div>

          <motion.div
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-semibold text-black">2. Use of the Website</h2>
            <p className="text-gray-600 mt-2">
              You agree to use this website only for lawful purposes. You must not use this website to engage in activities that are harmful, illegal, or infringe upon the rights of others.
            </p>
          </motion.div>

          <motion.div
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-semibold text-black">3. User Account</h2>
            <p className="text-gray-600 mt-2">
              If you create an account on our website, you are responsible for maintaining the confidentiality of your account information. You agree to notify us immediately of any unauthorized use of your account.
            </p>
          </motion.div>

          <motion.div
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-semibold text-black">4. Privacy Policy</h2>
            <p className="text-gray-600 mt-2">
              Your use of the website is also governed by our Privacy Policy, which explains how we collect and use your personal information. Please refer to our Privacy Policy for more information.
            </p>
          </motion.div>

          <motion.div
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-semibold text-black">5. Third-Party Links</h2>
            <p className="text-gray-600 mt-2">
              Our website may contain links to third-party websites. We are not responsible for the content, privacy policies, or practices of these third-party websites. Accessing these links is at your own risk.
            </p>
          </motion.div>

          <motion.div
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-semibold text-black">6. Limitation of Liability</h2>
            <p className="text-gray-600 mt-2">
              We are not liable for any direct, indirect, incidental, special, or consequential damages arising out of your use or inability to use our website, even if we have been advised of the possibility of such damages.
            </p>
          </motion.div>

          <motion.div
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-semibold text-black">7. Termination</h2>
            <p className="text-gray-600 mt-2">
              We reserve the right to suspend or terminate your access to the website at our sole discretion, without notice, for violation of these Terms and Conditions or any other reason.
            </p>
          </motion.div>

          <motion.div
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-semibold text-black">8. Governing Law</h2>
            <p className="text-gray-600 mt-2">
              These Terms and Conditions shall be governed by and construed in accordance with the laws of the jurisdiction where the company is registered.
            </p>
          </motion.div>

          <motion.div
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-semibold text-black">9. Changes to Terms</h2>
            <p className="text-gray-600 mt-2">
              We reserve the right to modify these Terms and Conditions at any time. Any changes will be posted on this page, and you are advised to review this page periodically.
            </p>
          </motion.div>

          <motion.div
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-semibold text-black">10. Contact Us</h2>
            <p className="text-gray-600 mt-2">
              If you have any questions about these Terms and Conditions, please contact us at: <strong>pulkitnj2809@example.com</strong>
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default TermsAndConditions;