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
          style={{ lineHeight: "1.9" }}
          className="flex flex-col justify-center gap-10 md:w-3/4 text-white mx-auto"
        >
          <div className="space-y-10">

            <p className="text-lg">
              <b>Please read these Terms and Conditions carefully.</b> These Terms and Conditions (“Terms”) govern your access to, interaction with, and use of any services, products, platforms, or communication channels operated by RAPS Powerplay, including but not limited to its website, mobile interfaces, Google Forms, WhatsApp communications, telephonic conversations, offline discussions, or any other mode of engagement. By accessing, booking, paying for, receiving, or using any service provided by RAPS Powerplay, you expressly acknowledge that you have read, understood, and agreed to be legally bound by these Terms. If you do not agree to these Terms in their entirety, you must immediately discontinue use of our services.
            </p>

            <h3 className="text-2xl font-semibold">1. Overview</h3>
            <p className="text-lg">
              RAPS Powerplay is engaged in the business of providing PlayStation 5 consoles and related gaming equipment on a rental basis for home-based and other approved private usage. The services offered may include short-term rentals, long-term rentals, and fixed-tenure commitments, subject to availability and internal approval. All services rendered by RAPS Powerplay are governed exclusively by these Terms, which form a legally binding agreement between RAPS Powerplay and the customer.
            </p>

            <h3 className="text-2xl font-semibold">2. Booking & Payment</h3>
            <p className="text-lg">
              All bookings, irrespective of the mode through which they are initiated, shall be deemed confirmed only upon receipt of full payment or such partial payment as may be expressly agreed upon by RAPS Powerplay. Pricing may vary based on rental duration, demand fluctuations, membership status, promotional offers, or custom commercial arrangements. RAPS Powerplay reserves the absolute right to revise pricing or decline bookings at its discretion.
            </p>

            <h3 className="text-2xl font-semibold">3. Usage & Conduct</h3>
            <ul className="list-disc ml-6 text-lg">
              <li>The rented equipment shall be used strictly for personal or otherwise explicitly approved private use.</li>
              <li>Any form of subleasing, resale, public usage, or commercial exploitation without prior written consent is strictly prohibited.</li>
              <li>The customer shall be solely responsible for ensuring proper electrical conditions, safe handling, and secure storage of the equipment.</li>
              <li>Any damage, loss, theft, or malfunction arising due to misuse, negligence, or external factors shall be chargeable in full.</li>
            </ul>

            <h3 className="text-2xl font-semibold">4. Cancellation & Rescheduling</h3>
            <p className="text-lg">
              Certain short-term rentals may allow limited cancellation or rescheduling, subject to timelines and conditions communicated by RAPS Powerplay. However, rentals undertaken for fixed tenures or extended durations shall be governed strictly by Sections 13 and 14 of these Terms and shall not be eligible for discretionary cancellation.
            </p>

            <h3 className="text-2xl font-semibold">5. Delivery & Pickup</h3>
            <p className="text-lg">
              The rental period shall commence from the moment the equipment is handed over to the customer or their authorized representative. Any delay in pickup, return, or handover may attract additional charges. RAPS Powerplay shall not be responsible for delays caused by customer-side unavailability.
            </p>

            <h3 className="text-2xl font-semibold">6. Limited Access & Availability</h3>
            <p className="text-lg">
              All bookings are processed on a first-come, first-served basis and are subject to inventory availability. RAPS Powerplay reserves the right to refuse or cancel service where operational constraints, safety risks, or policy violations are identified.
            </p>

            <h3 className="text-2xl font-semibold">7. User Verification</h3>
            <p className="text-lg">
              Customers are mandatorily required to provide valid, government-issued identification for verification purposes. Failure to provide or validate such documentation may result in denial, suspension, or termination of service without liability.
            </p>

            <h3 className="text-2xl font-semibold">8. Intellectual Property</h3>
            <p className="text-lg">
              All intellectual property, including but not limited to logos, branding, visual assets, written content, and marketing materials, are the exclusive property of RAPS Powerplay. Unauthorized usage, reproduction, or distribution is strictly prohibited.
            </p>

            <h3 className="text-2xl font-semibold">9. Arbitration & Disputes</h3>
            <p className="text-lg">
              Any dispute, claim, or controversy arising out of or relating to these Terms shall be resolved through individual arbitration in accordance with applicable Indian laws. Customers expressly waive any right to initiate or participate in class actions or collective proceedings.
            </p>

            <h3 className="text-2xl font-semibold">10. Modifications</h3>
            <p className="text-lg">
              RAPS Powerplay reserves the unilateral right to amend, update, or modify these Terms at any time without prior notice. Continued use of services following such modifications shall constitute deemed acceptance of the revised Terms.
            </p>

            <h3 className="text-2xl font-semibold">11. Bookings via Google Forms & Offline Channels</h3>
            <p className="text-lg">
              Any booking initiated through Google Forms, WhatsApp, telephonic communication, email, or any non-website channel shall be considered legally valid and binding. Submission of booking details through such channels shall constitute unconditional acceptance of these Terms.For operational convenience, RAPS Powerplay may utilize third-party digital forms, including Google Forms, as a booking and information collection mechanism. The specific access link to such forms may be shared separately with customers through official communication channels and does not affect the enforceability of these Terms.
            </p>

            <h3 className="text-2xl font-semibold">12. Mandatory Offline Agreement</h3>
            <p className="text-lg">
              For long-term or high-value rentals, RAPS Powerplay may issue a physical rental agreement. Refusal or failure to sign such agreement shall not invalidate the booking, and the customer’s continued usage, possession, or payment shall be deemed implied consent.
            </p>

            <h3 className="text-2xl font-semibold">13. Fixed-Tenure Lock-In</h3>
            <p className="text-lg">
              Rentals booked for a fixed tenure, including monthly or multi-month plans, shall be strictly non-cancellable and non-reducible once the rental period has commenced.
            </p>

            <h3 className="text-2xl font-semibold">14. Early Termination Liability</h3>
            <p className="text-lg">
              In the event the customer discontinues service prior to completion of the agreed tenure, the customer shall remain fully liable to pay the entire rental consideration for the committed period without deduction or waiver.
            </p>

            <h3 className="text-2xl font-semibold">15. Payment Default & Recovery</h3>
            <p className="text-lg">
              Any failure to make timely payments shall constitute a material breach of contract. RAPS Powerplay reserves the right to suspend service, recover equipment, and initiate appropriate legal or recovery proceedings.
            </p>

            <h3 className="text-2xl font-semibold">16. Digital & Implied Consent</h3>
            <p className="text-lg">
              Digital actions including form submissions, payment confirmations, delivery acceptance, or written acknowledgements shall constitute valid electronic consent under the Indian Contract Act, 1872.
            </p>

            <h3 className="text-2xl font-semibold">17. Governing Law & Jurisdiction</h3>
            <p className="text-lg">
              These Terms shall be governed by and construed in accordance with the laws of India, with exclusive jurisdiction vested in the courts of Maharashtra.
            </p>

            <h3 className="text-2xl font-semibold">18. Contact</h3>
            <ul className="list-disc ml-6 text-lg">
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
