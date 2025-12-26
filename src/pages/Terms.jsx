import React from 'react';
import { motion } from "framer-motion";

const Terms = () => {
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
          TERMS & CONDITIONS
        </h2>
      </motion.div>

      {/* Terms Content Section */}
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
              <b>Please read these Terms and Conditions carefully</b> before accessing, using, or obtaining any materials, information, products, or services. By accessing any RAPS Powerplay platform (including our website, mobile interface, Google Forms, WhatsApp, phone calls, or direct communication services), you agree to be bound by these Terms. If you do not accept all of these Terms, you may not use our services.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">1. Overview</h3>
            <p className="text-lg mb-6">
              RAPS Powerplay provides PlayStation 5 and gaming equipment rentals for home-based and approved private use. Services may include short-term and long-term rental plans. All services are subject to availability and these Terms.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">2. Booking & Payment</h3>
            <p className="text-lg mb-6">
              All bookings are confirmed only upon full or agreed partial payment. Pricing may vary based on duration, demand, membership status, or custom agreements.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">3. Usage & Conduct</h3>
            <ul className="list-disc ml-6 text-lg mb-6">
              <li>Equipment must be used strictly for personal or agreed private use.</li>
              <li>Subleasing, resale, or commercial usage without written approval is prohibited.</li>
              <li>User is responsible for safety, power conditions, and care of equipment.</li>
              <li>Damage, loss, or theft shall be fully chargeable.</li>
            </ul>

            <h3 className="text-2xl font-semibold mt-8 mb-4">4. Cancellation & Rescheduling</h3>
            <ul className="list-disc ml-6 text-lg mb-6">
              <li>Short-term rentals may allow limited cancellation as communicated.</li>
              <li>Fixed-tenure rentals are governed by Sections 14 & 15.</li>
            </ul>

            <h3 className="text-2xl font-semibold mt-8 mb-4">5. Delivery & Pickup</h3>
            <ul className="list-disc ml-6 text-lg mb-6">
              <li>Rental period begins from equipment handover.</li>
              <li>Delays may incur additional charges.</li>
            </ul>

            <h3 className="text-2xl font-semibold mt-8 mb-4">6. Limited Access & Availability</h3>
            <p className="text-lg mb-6">
              Availability is first-come-first-served. RAPS Powerplay may refuse service if operational or safety risks exist.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">7. User Verification</h3>
            <p className="text-lg mb-6">
              Valid government-issued ID is mandatory. Failure to verify identity may result in denial or suspension of service.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">8. Intellectual Property</h3>
            <p className="text-lg mb-6">
              All branding, media, and content belong exclusively to RAPS Powerplay.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">9. Arbitration & Disputes</h3>
            <p className="text-lg mb-6">
              All disputes shall be resolved through individual arbitration under Indian law. No class actions permitted.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">10. Modifications</h3>
            <p className="text-lg mb-6">
              RAPS Powerplay may update these Terms at any time. Continued use constitutes acceptance.
            </p>

           

            {/* 🔒 NEW LEGALLY CRITICAL SECTIONS */}

            <h3 className="text-2xl font-semibold mt-8 mb-4">12. Bookings via Google Forms & Offline Channels</h3>
            <p className="text-lg mb-6">
              Any booking made via Google Forms, WhatsApp, phone calls, email, or any non-website medium shall be deemed legally binding. Submission of such booking constitutes full acceptance of these Terms.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">13. Mandatory Offline Agreement</h3>
            <p className="text-lg mb-6">
              For long-term or high-value rentals, a physical agreement may be issued. Refusal to sign does not invalidate the booking. Usage, payment, or possession of equipment shall be treated as implied acceptance.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">14. Fixed-Tenure Lock-In</h3>
            <p className="text-lg mb-6">
              Rentals booked for a fixed duration (monthly, quarterly, 6 months, etc.) are non-cancellable and non-reducible once commenced.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">15. Early Termination Liability</h3>
            <p className="text-lg mb-6">
              If the customer discontinues usage before the agreed tenure, they remain liable to pay the full rental amount for the entire committed period.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">16. Payment Default & Recovery</h3>
            <p className="text-lg mb-6">
              Non-payment shall be treated as breach of contract. RAPS Powerplay may suspend service, recover equipment, and initiate legal recovery if required.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">17. Digital & Implied Consent</h3>
            <p className="text-lg mb-6">
              Digital actions including form submission, payments, delivery acceptance, or WhatsApp confirmation constitute valid electronic consent under Indian Contract Law.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">18. Governing Law & Jurisdiction</h3>
            <p className="text-lg mb-6">
              These Terms shall be governed by the Indian Contract Act, 1872, with exclusive jurisdiction in courts of Maharashtra.
            </p>


             <h3 className="text-2xl font-semibold mt-8 mb-4">11. Contact</h3>
            <ul className="list-disc ml-6 text-lg mb-6">
              <li>Email: support@rapspowerplay.com</li>
              <li>Phone: +91 90822 01911</li>
              <li>Location: Mumbai, India</li>
            </ul>

            <p className="text-sm italic text-gray-400">
              Last Updated: August 2025
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Terms;
