import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Umang Realtors",
  description:
    "Terms and Conditions governing the use of the Umang Realtors website and real estate services.",
};

export default function TermsAndConditionsPage() {
  return (
    
    <main className="max-w-7xl mx-auto px-6 py-6 mb-8 text-gray-800">
      <h1 className="text-4xl font-semibold mb-2">Terms & Conditions</h1>
      <p className="text-sm text-gray-500 mb-8">
        Last updated: <span className="font-medium">{new Date().toLocaleDateString()}</span>
      </p>
      <section className="space-y-6 leading-relaxed">
        <p>
          These Terms & Conditions (“Terms”) govern your access to and use of the
          website operated by <strong>:contentReference</strong>
          (“Company”, “we”, “our”, “us”). By accessing or using this website, you
          agree to be legally bound by these Terms. If you do not agree, please
          discontinue use of the website immediately.
        </p>
      </section>

      <section className="mt-8 space-y-10">
        <div>
          <h2 className="text-2xl font-semibold mb-3">
            1. Nature of Services
          </h2>
          <p>
            Umang Realtors operates as a real estate marketing and consulting
            firm. We partner with real estate developers to promote and facilitate
            the sale of residential and commercial projects. Unless explicitly
            stated, we do not own, construct, or develop the properties listed on
            this website.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">
            2. Information Accuracy
          </h2>
          <p>
            All project details, pricing, availability, images, floor plans,
            specifications, and timelines displayed on this website are provided
            by developers or third parties. While we make reasonable efforts to
            ensure accuracy, we do not guarantee completeness or correctness.
            Users are advised to verify all information directly with the
            respective developer before making any decisions.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">
            3. No Professional Advice
          </h2>
          <p>
            The content available on this website is for informational purposes
            only and does not constitute legal, financial, investment, or tax
            advice. You should consult independent professionals before entering
            into any real estate transaction.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">
            4. User Obligations
          </h2>
          <p>
            By using this website, you agree to provide accurate information and
            to use the website only for lawful purposes. You must not misuse
            contact forms, impersonate others, submit false inquiries, attempt
            unauthorized access, or engage in any activity that may harm the
            website or its users.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">
            5. Intellectual Property
          </h2>
          <p>
            All content on this website, including text, images, videos, logos,
            branding, layouts, and design elements, is the intellectual property
            of Umang Realtors or its licensors and is protected by applicable
            copyright and trademark laws. Unauthorized reproduction or
            distribution is strictly prohibited.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">
            6. Third-Party Relationships
          </h2>
          <p>
            Any booking, transaction, agreement, or commitment made with a
            developer is strictly between you and the developer. Umang Realtors
            shall not be liable for construction delays, changes in plans,
            pricing variations, cancellations, possession timelines, or disputes
            arising from such agreements.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">
            7. Limitation of Liability
          </h2>
          <p>
            To the maximum extent permitted by law, Umang Realtors shall not be
            liable for any direct, indirect, incidental, consequential, or
            special damages arising from your use of the website or reliance on
            any information provided herein.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">
            8. Indemnification
          </h2>
          <p>
            You agree to indemnify and hold harmless Umang Realtors, its partners,
            employees, and affiliates from any claims, losses, damages, or
            expenses arising from your violation of these Terms or misuse of the
            website.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">
            9. Termination of Access
          </h2>
          <p>
            We reserve the right to suspend or terminate access to the website,
            without prior notice, if your conduct violates these Terms or is
            deemed harmful to our business or users.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">
            10. Governing Law & Jurisdiction
          </h2>
          <p>
            These Terms shall be governed by and interpreted in accordance with
            the laws of India. Any disputes shall be subject to the exclusive
            jurisdiction of courts located within India.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">
            11. Changes to These Terms
          </h2>
          <p>
            We may update these Terms & Conditions at any time without prior
            notice. Changes will be effective immediately upon posting on this
            page. Continued use of the website constitutes acceptance of the
            updated Terms.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">
            12. Contact Information
          </h2>
          <p>
            For any questions or concerns regarding these Terms & Conditions,
            please contact us at:
          </p>
          <p className="mt-2">
            <strong>Email:</strong> info@umangrealtors.com <br />
            <strong>Phone:</strong> +91 9560986669
          </p>
        </div>
      </section>
    </main>
  );
}
