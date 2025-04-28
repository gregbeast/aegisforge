import React from 'react';
import { FileText, Shield } from 'lucide-react';

const TermsOfServicePage = ({ darkMode = false }) => {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Hero section */}
      <div className="text-center mb-10">
        <div className={`inline-flex p-3 rounded-full ${darkMode ? 'bg-blue-900 text-white' : 'bg-blue-100 text-blue-700'} mb-4`}>
          <FileText size={28} />
        </div>
        <h1 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-slate-800'} mb-4`}>
          Terms of Service
        </h1>
        <p className={`text-lg ${darkMode ? 'text-blue-100' : 'text-slate-600'} max-w-2xl mx-auto`}>
          Please read these terms carefully before using our service
        </p>
      </div>

      {/* Last Updated Section */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
        <p className="text-slate-500 text-sm">Last updated: April 15, 2025</p>
        <p className="mt-2">
          Welcome to AegisForge. These Terms of Service ("Terms") govern your use of the AegisForge application and website (collectively, the "Service") operated by AegisForge GmbH ("us", "we", or "our"). By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of these Terms, you may not access the Service.
        </p>
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-4">1. Definitions</h2>
            <ul className="list-disc pl-5 space-y-2 text-slate-600">
              <li><strong>"Service"</strong> refers to the AegisForge application and website.</li>
              <li><strong>"Terms"</strong> refers to these Terms of Service.</li>
              <li><strong>"User"</strong> refers to the individual accessing or using the Service, or the company or other legal entity on behalf of which such individual is accessing or using the Service.</li>
              <li><strong>"Account"</strong> refers to a unique account created for a User to access our Service.</li>
              <li><strong>"Content"</strong> refers to information such as text, images, or other information that can be posted, uploaded, linked to or otherwise made available on the Service.</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-4">2. Accounts</h2>
            <p className="text-slate-600 mb-3">
              When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
            </p>
            <p className="text-slate-600 mb-3">
              You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password, whether your password is with our Service or a third-party service.
            </p>
            <p className="text-slate-600">
              You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-4">3. Service Usage</h2>
            <h3 className="text-lg font-semibold text-slate-800 mb-2">3.1 License to Use the Service</h3>
            <p className="text-slate-600 mb-3">
              Subject to these Terms, AegisForge grants you a non-transferable, non-exclusive, revocable, limited license to use and access the Service solely for your personal, non-commercial use.
            </p>
            
            <h3 className="text-lg font-semibold text-slate-800 mb-2 mt-4">3.2 Usage Restrictions</h3>
            <p className="text-slate-600 mb-3">
              You agree not to use the Service:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-600">
              <li>In any way that violates any applicable national or international law or regulation.</li>
              <li>To attempt to probe, scan, or test the vulnerability of any system or network or to breach any security or authentication measures.</li>
              <li>To attempt to interfere with the proper working of the Service or any related activity.</li>
              <li>To impersonate or attempt to impersonate AegisForge, a AegisForge employee, another user, or any other person or entity.</li>
              <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Service, or which, as determined by us, may harm or offend AegisForge or users of the Service or expose them to liability.</li>
            </ul>
            
            <h3 className="text-lg font-semibold text-slate-800 mb-2 mt-4">3.3 Security Scans</h3>
            <p className="text-slate-600 mb-3">
              The Service includes security scanning features designed to help identify potential security vulnerabilities. You agree to use these features only on systems, devices, and accounts that you own or have permission to scan.
            </p>
            <div className="p-4 bg-blue-50 rounded-lg">
              <p className="text-blue-700">
                <strong>Important:</strong> Do not use the scanning features on any systems, networks, or accounts for which you do not have explicit permission to scan. Unauthorized security scanning may violate local laws and regulations.
              </p>
            </div>
          </section>
          
          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-4">4. Intellectual Property</h2>
            <p className="text-slate-600 mb-3">
              The Service and its original content (excluding Content provided by users), features, and functionality are and will remain the exclusive property of AegisForge GmbH and its licensors. The Service is protected by copyright, trademark, and other laws of both Switzerland and foreign countries.
            </p>
            <p className="text-slate-600">
              Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of AegisForge GmbH.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-4">5. User Content</h2>
            <p className="text-slate-600 mb-3">
              Our Service may allow you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material. You are responsible for the Content that you post to the Service, including its legality, reliability, and appropriateness.
            </p>
            <p className="text-slate-600 mb-3">
              By posting Content to the Service, you grant us the right and license to use, modify, perform, display, reproduce, and distribute such Content on and through the Service. You retain any and all of your rights to any Content you submit, post or display on or through the Service and you are responsible for protecting those rights.
            </p>
            <p className="text-slate-600">
              You represent and warrant that: (i) the Content is yours (you own it) or you have the right to use it and grant us the rights and license as provided in these Terms, and (ii) the posting of your Content on or through the Service does not violate the privacy rights, publicity rights, copyrights, contract rights or any other rights of any person.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-4">6. Subscription and Billing</h2>
            <h3 className="text-lg font-semibold text-slate-800 mb-2">6.1 Free and Paid Services</h3>
            <p className="text-slate-600 mb-3">
              AegisForge offers both free and paid subscription options. Features available in each subscription tier are described on our website. We reserve the right to modify, terminate, or otherwise amend our offered subscription plans.
            </p>
            
            <h3 className="text-lg font-semibold text-slate-800 mb-2 mt-4">6.2 Billing</h3>
            <p className="text-slate-600 mb-3">
              For paid subscriptions, you agree to provide current, complete, and accurate purchase and account information for all purchases made through the Service. You further agree to promptly update account and payment information, including email address, payment method, and payment card expiration date, so that we can complete your transactions and contact you as needed.
            </p>
            
            <h3 className="text-lg font-semibold text-slate-800 mb-2 mt-4">6.3 Subscription Term and Renewal</h3>
            <p className="text-slate-600 mb-3">
              Paid subscriptions begin on the date of your subscription purchase and continue for the subscription period selected during your purchase. Unless you cancel your subscription before the end of the current subscription period, your subscription will automatically renew at the then-current price.
            </p>
            
            <h3 className="text-lg font-semibold text-slate-800 mb-2 mt-4">6.4 Cancellation</h3>
            <p className="text-slate-600">
              You may cancel your subscription at any time from your account settings. Upon cancellation, your subscription will remain active until the end of your current billing period, after which it will not renew. No refunds will be provided for any unused portion of a subscription period.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-4">7. Disclaimers</h2>
            <h3 className="text-lg font-semibold text-slate-800 mb-2">7.1 Service Provided "As Is"</h3>
            <p className="text-slate-600 mb-3">
              Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement or course of performance.
            </p>
            
            <h3 className="text-lg font-semibold text-slate-800 mb-2 mt-4">7.2 Security Services</h3>
            <p className="text-slate-600 mb-3">
              While we strive to provide accurate and comprehensive security assessments, we cannot guarantee that our Service will identify all security vulnerabilities or threats. The security landscape is constantly evolving, and no security solution can provide absolute protection.
            </p>
            <p className="text-slate-600">
              You acknowledge that maintaining security is an ongoing process that requires regular attention and updates beyond the scope of our Service alone.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-4">8. Limitation of Liability</h2>
            <p className="text-slate-600 mb-3">
              To the maximum extent permitted by applicable law, in no event shall AegisForge GmbH, its affiliates, directors, employees, agents, or licensors be liable for any indirect, punitive, incidental, special, consequential or exemplary damages, including without limitation damages for loss of profits, goodwill, use, data or other intangible losses, that result from the use of, or inability to use, the Service.
            </p>
            <p className="text-slate-600 mb-3">
              To the maximum extent permitted by applicable law, AegisForge GmbH assumes no liability or responsibility for:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-600">
              <li>Any errors, mistakes, or inaccuracies of content;</li>
              <li>Personal injury or property damage, of any nature whatsoever, resulting from your access to or use of our Service;</li>
              <li>Any unauthorized access to or use of our secure servers and/or any and all personal information stored therein;</li>
              <li>Any interruption or cessation of transmission to or from the Service;</li>
              <li>Any bugs, viruses, trojan horses, or the like which may be transmitted to or through the Service by any third party;</li>
              <li>Any losses or damage arising from your failure to maintain the security of your account and password;</li>
              <li>Any security breaches or data compromises that occur despite our Service's assessments or recommendations.</li>
            </ul>
            <p className="text-slate-600">
              In jurisdictions where the exclusion or limitation of liability for consequential or incidental damages is not allowed, our liability shall be limited to the maximum extent permitted by law.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-4">9. Governing Law</h2>
            <p className="text-slate-600 mb-3">
              These Terms shall be governed and construed in accordance with the laws of Switzerland, without regard to its conflict of law provisions.
            </p>
            <p className="text-slate-600">
              Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-4">10. Dispute Resolution</h2>
            <p className="text-slate-600 mb-3">
              Any disputes arising out of or relating to these Terms or the Service shall be resolved through binding arbitration in Zurich, Switzerland, except where prohibited by law. The arbitration shall be conducted in accordance with the Swiss Rules of International Arbitration.
            </p>
            <p className="text-slate-600">
              You agree that any dispute resolution proceedings will be conducted only on an individual basis and not in a class, consolidated, or representative action. If for any reason a claim proceeds in court rather than in arbitration, you waive any right to a jury trial.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-4">11. Changes to Terms</h2>
            <p className="text-slate-600 mb-3">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
            </p>
            <p className="text-slate-600">
              By continuing to access or use our Service after any revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you are no longer authorized to use the Service.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-4">12. Contact Us</h2>
            <p className="text-slate-600">
              If you have any questions about these Terms, please contact us:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600 mt-2">
              <li>By email: legal@aegisforge.swiss</li>
              <li>By mail: AegisForge is a trademark of Digital Forge, Switzerland</li>
            </ul>
          </section>
        </div>
      </div>
      
      {/* Acceptance Confirmation */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
        <div className="flex items-center mb-4">
          <Shield className="text-blue-600 mr-3" size={20} />
          <h2 className="text-lg font-bold text-slate-800">Acceptance of Terms</h2>
        </div>
        <p className="text-slate-600">
          By using the AegisForge Service, you acknowledge that you have read and understood these Terms of Service and agree to be bound by them. If you do not agree to these Terms, please do not use our Service.
        </p>
      </div>
    </div>
  );
};

export default TermsOfServicePage;