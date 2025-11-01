import React from "react";
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
              <b>RAPS Powerplay</b> (“Company”, “we”, “our”, or “us”) is
              committed to protecting your privacy and personal data. This
              Privacy Policy outlines how we collect, use, share, and protect
              information about users (“you”, “your”) when you use our services,
              including our website, mobile applications, booking platform, and
              offline interactions.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">
              1. Information We Collect
            </h3>
            <ul className="list-disc ml-6 text-lg mb-6">
              <li>
                <b>Personal Information:</b> Name, contact number, email
                address, and government-issued ID (for verification and security
                purposes).
              </li>
              <li>
                <b>Payment Information:</b> Transaction details related to your
                bookings (such as UPI, wallet, or card payments). We use secure
                third-party gateways and do not store full payment credentials.
              </li>
              <li>
                <b>Usage Information:</b> Data on how you interact with our
                platform — such as pages visited, features used, and booking
                activity.
              </li>
              <li>
                <b>Technical Data:</b> Device details including IP address,
                browser type, operating system, and time of access to help
                improve performance and detect misuse.
              </li>
            </ul>

            <p className="text-lg mb-6">
  By using our website, making a booking, or interacting with RAPS Powerplay services, 
  you explicitly consent to the collection, processing, and use of your personal data as described in this Privacy Policy. 
  You may withdraw your consent at any time by contacting us at <b>raps.powerplay@gmail.com</b>.
</p>


            <h3 className="text-2xl font-semibold mt-8 mb-4">
              2. Purpose of Data Collection
            </h3>
            <ul className="list-disc ml-6 text-lg mb-6">
              <li>To process bookings, payments, and service confirmations.</li>
              <li>To verify user identity and prevent fraud or misuse.</li>
              <li>
                To send confirmations, service updates, offers, and
                communication related to your account.
              </li>
              <li>To enhance user experience and optimize platform features.</li>
              <li>
                To comply with legal obligations, regulatory requirements, or
                law enforcement requests.
              </li>
            </ul>

            <h3 className="text-2xl font-semibold mt-8 mb-4">
              3. Data Security
            </h3>
            <p className="text-lg mb-6">
              We adopt appropriate technical and organizational measures to
              ensure your personal data is secure and protected from
              unauthorized access, alteration, disclosure, or destruction. These
              include data encryption, secure servers, restricted access, and
              verified third-party payment gateways. However, you acknowledge
              that no electronic transmission or storage method is completely
              secure, and we cannot guarantee absolute security.
            </p>

            <p className="text-lg mb-6">
  In accordance with the <b>Digital Personal Data Protection Act, 2023</b>, 
  RAPS Powerplay ensures that your personal data is processed only for lawful, specific purposes 
  and handled with appropriate security measures to prevent unauthorized access or misuse. 
  We review our security and privacy practices regularly to remain compliant with applicable data protection regulations.
</p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">
              4. Data Sharing & Disclosure
            </h3>
            <p className="text-lg mb-6">
              We do not sell, rent, or trade personal information. Your data may
              be shared only in the following circumstances:
            </p>
            <ul className="list-disc ml-6 text-lg mb-6">
              <li>
                With authorized employees, delivery agents, or service partners
                necessary to fulfill your booking.
              </li>
              <li>
                With third-party vendors such as payment processors or analytics
                providers under strict confidentiality agreements.
              </li>
              <li>
                When required by law, government authorities, or court orders to
                comply with legal processes.
              </li>
            </ul>

            <h3 className="text-2xl font-semibold mt-8 mb-4">
              5. Cookies & Tracking Technologies
            </h3>
            <p className="text-lg mb-6">
              Our website uses cookies and similar technologies to improve user
              experience, analyze traffic, and personalize content. You can
              disable cookies through your browser settings, but some features
              of the platform may not function correctly without them.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">
              6. Data Retention
            </h3>
            <p className="text-lg mb-6">
              We retain personal data only for as long as it is necessary to
              fulfill the purposes outlined in this Policy or as required by law
              (for example, for accounting, tax, or dispute resolution purposes).
              Once no longer needed, your data will be securely deleted or
              anonymized.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">
              7. Your Rights
            </h3>
            <ul className="list-disc ml-6 text-lg mb-6">
              <li>Request access to the personal data we hold about you.</li>
              <li>
                Request correction or deletion of inaccurate or outdated
                information.
              </li>
              <li>
                Withdraw consent to marketing communications at any time.
              </li>
              <li>
                Request data deletion, subject to applicable legal obligations
                and legitimate business interests.
              </li>
            </ul>

            <h3 className="text-2xl font-semibold mt-8 mb-4">
              8. Third-Party Links & Services
            </h3>
            <p className="text-lg mb-6">
              Our platform may contain links to external websites or third-party
              services (e.g., social media, payment gateways). We are not
              responsible for the privacy policies, content, or practices of
              these external services. We encourage you to review their privacy
              policies before providing any personal data.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">
              9. Updates to This Policy
            </h3>
            <p className="text-lg mb-6">
              We may revise this Privacy Policy from time to time to reflect
              changes in our practices or for legal, operational, or regulatory
              reasons. The updated version will be published on our website with
              a revised “Last Updated” date. Continued use of our services after
              such updates constitutes your acceptance of the revised Policy.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">
              10. Contact Information
            </h3>
            <p className="text-lg mb-6">
              For any questions, complaints, or requests concerning this Privacy
              Policy or your personal data, please contact:
            </p>
            <ul className="list-disc ml-6 text-lg mb-6">
              <li>
                <b>Email:</b> raps.powerplay@gmail.com
              </li>
              <li>
                <b>Phone:</b> +91 9082201911
              </li>
              <li>
                <b>Address:</b> Mumbai, Maharashtra, India
              </li>
            </ul>

            <p className="text-sm italic text-gray-400">
              Last Updated: September 2025
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
