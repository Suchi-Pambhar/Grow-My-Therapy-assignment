import Head from 'next/head';
import FadeInSection from '../components/FadeInSection';
import Info from './info';
import Footer from '../components/Footer';

export default function PrivacyPolicy() {
  return (
    <div className='bg'>
      <Head>
        <title>Privacy Policy | Dr. Serena Blake</title>
      </Head>
      <div className="privacy-container">
        <h1 className="privacy-title">Privacy Policy</h1>
        <p className="privacy-subtitle text-sm text-gray-600 italic">
          Last updated: July 3, 2025
        </p>

        <div className="privacy-section">
          <h2>1. Introduction</h2>
          <p>
            At Dr. Serena Blake Psychology, your privacy is very important. This privacy policy outlines how we collect, use, and safeguard your personal information when you interact with this website or engage in therapy services.
          </p>
        </div>

        <div className="privacy-section">
          <h2>2. Information We Collect</h2>
          <ul>
            <li>Your name, email address, and contact information (when you fill out the contact form)</li>
            <li>Information shared during therapy sessions (kept confidential and stored securely)</li>
            <li>Browser or device data through cookies or analytics tools (non-identifiable data)</li>
          </ul>
        </div>

        <FadeInSection>
        <div className="privacy-section">
          <h2>3. How We Use Your Information</h2>
          <ul>
            <li>To respond to your inquiries or schedule consultations</li>
            <li>To provide mental health services securely</li>
            <li>To improve website functionality and user experience</li>
          </ul>
        </div>
        </FadeInSection>

        <FadeInSection>
        <div className="privacy-section">
          <h2>4. Confidentiality in Therapy</h2>
          <p>
            All clinical information shared during therapy sessions is protected by law under HIPAA and professional ethics. Your information will not be disclosed without your written consent, except in situations involving safety or legal obligation (e.g., danger to self/others, abuse reporting).
          </p>
        </div>
        </FadeInSection>

        <FadeInSection>
        <div className="privacy-section">
          <h2>5. Data Security</h2>
          <p>
            Your personal data is stored securely and only accessed when necessary. We take reasonable steps to prevent unauthorized access or disclosure.
          </p>
        </div>
        </FadeInSection>

        <FadeInSection>
        <div className="privacy-section">
          <h2>6. Third-Party Services</h2>
          <p>
            We may use third-party tools such as Google Forms or Zoom for scheduling or telehealth. These services have their own privacy policies, which we encourage you to review.
          </p>
        </div>
        </FadeInSection>

        <FadeInSection>
        <div className="privacy-section">
          <h2>7. Your Rights</h2>
          <p>
            You have the right to access, correct, or request deletion of your personal data at any time. Please contact us for assistance.
          </p>
        </div>
        </FadeInSection>
      </div>
      <div>
        <Info />    
        <Footer />
      </div>
    </div>
  );
}
