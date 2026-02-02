import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Umang Realtors",
  description:
    "Privacy Policy of Umang Realtors explaining how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
      
    <main className="max-w-7xl mx-auto px-6 py-6 mb-8 text-gray-800">
      <h1 className="text-4xl font-semibold mb-2">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-6">
        Last updated: <span className="font-medium">{new Date().toLocaleDateString()}</span>
      </p>

      <section className="space-y-6 leading-relaxed">
        <p>
          Welcome to <strong>Umang Realtors</strong> (“Company”, “we”, “our”,
          “us”). We respect your privacy and are committed to protecting the
          personal information you share with us. This Privacy Policy explains
          how we collect, use, store, disclose, and safeguard your information
          when you visit our website or interact with our real estate services.
        </p>                
        <p>
          By accessing or using our website, you agree to the practices described
          in this Privacy Policy.
        </p>
      </section>

      <section className="mt-8 space-y-8">
        <div>
          <h2 className="text-2xl font-semibold mb-3">
            1. Information We Collect
          </h2>

          <h3 className="font-medium mb-2">1.1 Personal Information</h3>
          <p>
            We may collect personally identifiable information including your
            name, email address, phone number, location preferences, budget
            range, property interests, and any information you voluntarily
            submit through contact forms, inquiry forms, phone calls, WhatsApp,
            or email communication.
          </p>

          <h3 className="font-medium mt-4 mb-2">1.2 Non-Personal Information</h3>
          <p>
            We automatically collect non-identifiable information such as IP
            address, browser type, device details, operating system, pages
            visited, time spent on pages, and referral URLs to improve our
            website performance and user experience.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">
            2. How We Use Your Information
          </h2>
          <p>
            We use the collected information solely for legitimate business
            purposes, including responding to inquiries, providing property
            information, connecting users with developers, scheduling site
            visits or consultations, improving our services, and complying with
            legal obligations.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">
            3. Sharing of Information
          </h2>
          <p>
            We do not sell, rent, or trade your personal data. Information may be
            shared only with partnered developers for project-related
            communication, trusted service providers, or when required by law.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">
            4. Cookies & Tracking Technologies
          </h2>
          <p>
            Our website may use cookies and analytics tools to enhance user
            experience and understand traffic patterns. You may disable cookies
            via your browser settings, though certain features may not function
            properly.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">5. Data Security</h2>
          <p>
            We implement reasonable technical and organizational safeguards to
            protect your information. However, no internet transmission is
            completely secure, and we cannot guarantee absolute security.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">
            6. Third-Party Links
          </h2>
          <p>
            Our website may contain links to third-party websites, including
            developer platforms. We are not responsible for their privacy
            practices and encourage you to review their policies separately.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">7. Your Rights</h2>
          <p>
            You may request access, correction, or deletion of your personal
            information, or withdraw consent for communications by contacting us
            using the details below.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">
            8. Changes to This Policy
          </h2>
          <p>
            We reserve the right to update this Privacy Policy at any time.
            Changes will be effective immediately upon posting on this page.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">9. Contact Us</h2>
          <p>
            If you have any questions regarding this Privacy Policy, please
            contact us at:
          </p>
          <p className="mt-2">
            <strong>Email:</strong> info@umangrealtors.com
            <br />
            <strong>Phone:</strong> +91 9560986669
          </p>
        </div>
      </section>
    </main>
  );
}
