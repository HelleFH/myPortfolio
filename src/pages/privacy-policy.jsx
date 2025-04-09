import React, { useEffect } from 'react';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';

function PrivacyPolicy() {

          useEffect(() => {
                document.title = "CloudPort | Privacy Policy";
                }, []);
  return (
    <div>
    <Navbar />
    <div style={{ display:'flex', flexDirection:'column', gap:'1rem', margin:'5rem auto', padding: '40px', maxWidth: '1400px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Privacy Policy</h1>
      <p><strong>Effective Date:</strong> 5/3-2024</p>
      <p><strong>Last Updated:</strong> 5/3-2025</p>
      
      <p>Welcome to <strong>CloudPort</strong> (“Company,” “we,” “our,” or “us”). Your privacy is important to us, and we are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and share your information when you visit <strong>cloudporteurope.com</strong> (the “Website”).</p>

      <h2>1. Information We Collect</h2>
      <h3>a. Information You Provide Directly</h3>
      <ul>
        <li>Name, email address, phone number (if you contact us or fill out a form).</li>
        <li>Any other personal data you choose to share with us.</li>
      </ul>

      <h3>b. Information Collected Automatically</h3>
      <ul>
        <li><strong>Device & Browsing Data:</strong> IP address, browser type, operating system, and referral URLs.</li>
        <li><strong>Cookies & Tracking Technologies:</strong> We use cookies and similar technologies to enhance user experience and analyze Website traffic.</li>
      </ul>

      <h3>c. Third-Party Data Collection</h3>
      <p>We may receive data from third-party services like Google Analytics, HubSpot, and advertising platforms.</p>

      <h2>2. How We Use Your Information</h2>
      <ul>
        <li>To provide and improve our services.</li>
        <li>To analyze Website usage and optimize user experience.</li>
        <li>To send marketing communications (only if you opt-in).</li>
        <li>To comply with legal requirements.</li>
      </ul>

      <h2>3. How We Share Your Information</h2>
      <p>We <strong>do not sell or rent</strong> your personal data. However, we may share information with:</p>
      <ul>
        <li><strong>Service Providers:</strong> (e.g., Google Analytics, HubSpot, payment processors) to improve our services.</li>
        <li><strong>Legal Authorities:</strong> if required by law or to protect our rights.</li>
      </ul>

      <h2>4. Your Rights & Choices</h2>
      <p>Depending on your location, you may have the right to:</p>
      <ul>
        <li>Request access, correction, or deletion of your data.</li>
        <li>Opt-out of marketing emails.</li>
        <li>Restrict processing of your personal data.</li>
      </ul>
      <p>To exercise your rights, contact us at <strong>info@cloudporteurope.com</strong>.</p>

      <h2>5. How We Protect Your Information</h2>
      <p>We implement industry-standard security measures to protect your data. However, no method of transmission over the Internet is 100% secure.</p>

      <h2>6. Third-Party Links</h2>
      <p>Our Website may contain links to third-party sites (e.g., HubSpot, social media). We are not responsible for their privacy practices.</p>

      <h2>7. Cookies & Tracking Technologies</h2>
      <p>We use cookies to enhance user experience and analyze Website traffic. You can control cookie settings through your browser.</p>

      <h2>8. Changes to This Privacy Policy</h2>
      <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with a revised <strong>“Last Updated”</strong> date.</p>

      <h2>9. Contact Us</h2>
      <p>If you have any questions about this Privacy Policy, please contact us:</p>
      <p>📧 <strong>Email:</strong> info@cloudporteurope.com</p>
    </div>
    <Footer />

    </div>

  );
}

export default PrivacyPolicy;
