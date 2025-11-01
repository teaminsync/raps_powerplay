import React from 'react';
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  return (
    <div>
      {/* Title Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-2xl text-center mb-12"
      >
        <h2 className="text-[#e87d0e] text-3xl md:text-5xl font-bold mb-6">
          PRIVACY POLICY
        </h2>
      </motion.div>

      {/* Privacy Policy Content Section */}
      <div className="my-16 px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          style={{ lineHeight: "1.8" }}
          className="flex flex-col justify-center gap-10 md:w-3/4 text-white mx-auto"
        >
          <div className="space-y-8">
            <p className="my-6 text-lg">
              <b>RAPS Powerplay</b> (“we”, “our”, “us”) values your privacy and is committed to protecting your personal information. 
              This Privacy Policy explains how we collect, use, disclose, and protect your data when you use our services, 
              including our website, booking platform, and any related mobile or offline services.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">1. Information We Collect</h3>
            <ul className="list-disc ml-6 text-lg mb-6">
              <li><b>Personal Information:</b> Includes your name, contact number, email address, and government ID (for verification purposes).</li>
              <li><b>Payment Information:</b> Details required to process your booking such as UPI, wallet, or card transaction data. We do not store full payment credentials.</li>
              <li><b>Usage Data:</b> Information about how you use our website, such as pages visited, booking activities, and communication records.</li>
              <li><b>Device Data:</b> Technical data like IP address, browser type, operating system, and access times to improve our service.</li>
            </ul>

            <h3 className="text-2xl font-semibold mt-8 mb-4">2. How We Use Your Information</h3>
            <ul className="list-disc ml-6 text-lg mb-6">
              <li>To process bookings, payments, and rental confirmations.</li>
              <li>To verify your identity and ensure safe equipment rentals.</li>
              <li>To send booking confirmations, updates, offers, and support messages.</li>
              <li>To improve user experience, service reliability, and platform performance.</li>
              <li>To comply with legal, regulatory, and security obligations.</li>
            </ul>

            <h3 className="text-2xl font-semibold mt-8 mb-4">3. How We Protect Your Data</h3>
            <p className="text-lg mb-6">
              We implement strict technical and organizational measures to safeguard your personal data against unauthorized 
              access, alteration, disclosure, or destruction. These include encrypted storage, limited access control, and secure payment gateways. 
              However, no online transmission can be guaranteed to be fully secure.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">4. Data Sharing & Disclosure</h3>
            <p className="text-lg mb-6">
              We do not sell or trade your personal data. We may share limited data only when necessary:
            </p>
            <ul className="list-disc ml-6 text-lg mb-6">
              <li>With verified delivery and support staff to complete bookings.</li>
              <li>With trusted third-party partners (e.g., payment processors) to fulfill transactions securely.</li>
              <li>When legally required by authorities, courts, or regulatory bodies.</li>
            </ul>

            <h3 className="text-2xl font-semibold mt-8 mb-4">5. Cookies & Tracking</h3>
            <p className="text-lg mb-6">
              We use cookies and similar technologies to enhance website functionality and analyze user behavior. 
              You can modify your browser settings to block or delete cookies, but some site features may not function properly.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">6. Data Retention</h3>
            <p className="text-lg mb-6">
              We retain your personal data only for as long as necessary to fulfill booking, legal, or operational requirements. 
              Once no longer needed, your data is securely deleted or anonymized.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">7. Your Rights</h3>
            <ul className="list-disc ml-6 text-lg mb-6">
              <li>Access and request a copy of your personal data.</li>
              <li>Request correction or deletion of inaccurate or outdated information.</li>
              <li>Withdraw consent to marketing communications at any time.</li>
              <li>Request deletion of your data from our records (subject to legal retention obligations).</li>
            </ul>

            <h3 className="text-2xl font-semibold mt-8 mb-4">8. Third-Party Links</h3>
            <p className="text-lg mb-6">
              Our website may contain links to third-party platforms (like Instagram, WhatsApp, or payment portals). 
              We are not responsible for the privacy practices or content of these external sites.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">9. Updates to This Policy</h3>
            <p className="text-lg mb-6">
              RAPS Powerplay may update this Privacy Policy periodically to reflect new practices or legal changes. 
              The updated version will be posted on our website with a revised “Last Updated” date.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">10. Contact Us</h3>
            <p className="text-lg mb-6">
              For questions, concerns, or requests regarding your personal data, contact us at:
            </p>
            <ul className="list-disc ml-6 text-lg mb-6">
              <li><b>Email:</b> raps.powerplay@gmail.com</li>
              <li><b>Phone:</b> +91 9082201911</li>
              <li><b>Location:</b> Mumbai, India</li>
            </ul>

            <p className="text-sm italic text-gray-400">
              Last Updated: November 2025
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
