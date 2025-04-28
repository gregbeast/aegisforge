import React from 'react';
import { Shield, Lock } from 'lucide-react';

const PrivacyPolicyPage = ({ darkMode = false }) => {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Hero section */}
      <div className="text-center mb-10">
        <div className={`inline-flex p-3 rounded-full ${darkMode ? 'bg-blue-900 text-white' : 'bg-blue-100 text-blue-700'} mb-4`}>
          <Lock size={28} />
        </div>
        <h1 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-slate-800'} mb-4`}>
          Privacy Policy
        </h1>
        <p className={`text-lg ${darkMode ? 'text-blue-100' : 'text-slate-600'} max-w-2xl mx-auto`}>
          Our commitment to protecting your privacy and personal data
        </p>
      </div>

      {/* Last Updated Section */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
        <p className="text-slate-500 text-sm">Last updated: April 15, 2025</p>
        <p className="mt-2">
          SecureMe ("we", "us", or "our") operates the SecureMe application and website (collectively, the "Service"). 
          This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
        </p>
        <p className="mt-3 font-medium text-slate-700">
          SecureMe GmbH is headquartered in Zurich, Switzerland, and our data practices comply with Swiss Federal Data Protection Act (FADP), the General Data Protection Regulation (GDPR), and other applicable data protection laws.
        </p>
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-4">1. Information Collection and Use</h2>
            <div className="space-y-4">
              <p>
                We collect several different types of information for various purposes to provide and improve our Service to you.
              </p>
              
              <h3 className="text-lg font-semibold text-slate-800">Types of Data Collected</h3>
              
              <h4 className="font-medium text-slate-800">Personal Data</h4>
              <p>
                While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). This may include, but is not limited to:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-slate-600">
                <li>Email address</li>
                <li>First name and last name (optional)</li>
                <li>Cookies and Usage Data</li>
              </ul>
              
              <h4 className="font-medium text-slate-800">Security Scan Data</h4>
              <p>
                When you use our security scanning features, we process certain data to provide you with security insights:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-slate-600">
                <li>Email addresses you submit for breach scanning</li>
                <li>Device security information (collected only during scans and processed locally)</li>
                <li>Network information (collected only during scans and processed locally)</li>
              </ul>
              <div className="p-4 bg-blue-50 rounded-lg mt-2">
                <p className="text-blue-700">
                  <strong>Privacy by Design:</strong> Our scanning technology is designed to minimize data collection. Whenever possible, security scans are performed locally on your device with results displayed to you without transmitting sensitive data to our servers.
                </p>
              </div>
              
              <h4 className="font-medium text-slate-800">Usage Data</h4>
              <p>
                We may also collect information on how the Service is accessed and used ("Usage Data"). This Usage Data may include information such as your computer's Internet Protocol address (IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers, and other diagnostic data.
              </p>
              
              <h4 className="font-medium text-slate-800">Tracking & Cookies Data</h4>
              <p>
                We use cookies and similar tracking technologies to track activity on our Service and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier.
              </p>
              <p>
                You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.
              </p>
              <p>
                Examples of Cookies we use:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-slate-600">
                <li><strong>Session Cookies:</strong> We use Session Cookies to operate our Service.</li>
                <li><strong>Preference Cookies:</strong> We use Preference Cookies to remember your preferences and various settings.</li>
                <li><strong>Security Cookies:</strong> We use Security Cookies for security purposes.</li>
              </ul>
            </div>
          </section>
          
          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-4">2. Use of Data</h2>
            <p>
              SecureMe uses the collected data for various purposes:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-600 mt-2">
              <li>To provide and maintain the Service</li>
              <li>To notify you about changes to our Service</li>
              <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
              <li>To provide customer care and support</li>
              <li>To provide analysis or valuable information so that we can improve the Service</li>
              <li>To monitor the usage of the Service</li>
              <li>To detect, prevent and address technical issues</li>
              <li>To perform security scans and provide you with security recommendations</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-4">3. Legal Basis for Processing Personal Data Under GDPR</h2>
            <p>
              If you are from the European Economic Area (EEA), SecureMe's legal basis for collecting and using the personal information described in this Privacy Policy depends on the Personal Data we collect and the specific context in which we collect it.
            </p>
            <p className="mt-2">
              SecureMe may process your Personal Data because:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-600 mt-2">
              <li>We need to perform a contract with you</li>
              <li>You have given us permission to do so</li>
              <li>The processing is in our legitimate interests and it's not overridden by your rights</li>
              <li>To comply with the law</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-4">4. Data Retention</h2>
            <p>
              SecureMe will retain your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.
            </p>
            <p className="mt-2">
              SecureMe will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of our Service, or we are legally obligated to retain this data for longer time periods.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-4">5. Transfer of Data</h2>
            <p>
              Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of your state, province, country, or other governmental jurisdiction where the data protection laws may differ from those of your jurisdiction.
            </p>
            <p className="mt-2">
              If you are located outside Switzerland and choose to provide information to us, please note that we transfer the data, including Personal Data, to Switzerland and process it there.
            </p>
            <p className="mt-2">
              Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.
            </p>
            <p className="mt-2">
              SecureMe will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of your data and other personal information.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-4">6. Data Security</h2>
            <p>
              The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
            </p>
            <div className="p-4 bg-blue-50 rounded-lg mt-3">
              <p className="text-blue-700">
                <strong>Security Measures:</strong> We implement a variety of security measures to maintain the safety of your personal information including secure servers, firewalls, encryption, and anonymization technologies where appropriate.
              </p>
            </div>
          </section>
          
          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-4">7. Your Data Protection Rights</h2>
            <p>
              We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-600 mt-2">
              <li><strong>The right to access</strong> – You have the right to request copies of your personal data.</li>
              <li><strong>The right to rectification</strong> – You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete information you believe is incomplete.</li>
              <li><strong>The right to erasure</strong> – You have the right to request that we erase your personal data, under certain conditions.</li>
              <li><strong>The right to restrict processing</strong> – You have the right to request that we restrict the processing of your personal data, under certain conditions.</li>
              <li><strong>The right to object to processing</strong> – You have the right to object to our processing of your personal data, under certain conditions.</li>
              <li><strong>The right to data portability</strong> – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</li>
            </ul>
            <p className="mt-3">
              If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us at our email: privacy@secureme.example.com
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-4">8. Service Providers</h2>
            <p>
              We may employ third-party companies and individuals to facilitate our Service ("Service Providers"), to provide the Service on our behalf, to perform Service-related services, or to assist us in analyzing how our Service is used.
            </p>
            <p className="mt-2">
              These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
            </p>
            <h3 className="text-lg font-semibold text-slate-800 mt-4">Analytics</h3>
            <p>
              We may use third-party Service Providers to monitor and analyze the use of our Service.
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600 mt-2">
              <li>
                <strong>Google Analytics</strong>
                <p className="mt-1">
                  Google Analytics is a web analytics service offered by Google that tracks and reports website traffic. Google uses the data collected to track and monitor the use of our Service. This data is shared with other Google services. Google may use the collected data to contextualize and personalize the ads of its own advertising network.
                </p>
                <p className="mt-1">
                  You can opt-out of having made your activity on the Service available to Google Analytics by installing the Google Analytics opt-out browser add-on. The add-on prevents the Google Analytics JavaScript (ga.js, analytics.js, and dc.js) from sharing information with Google Analytics about visits activity.
                </p>
                <p className="mt-1">
                  For more information on the privacy practices of Google, please visit the Google Privacy & Terms web page: <a href="https://policies.google.com/privacy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy</a>
                </p>
              </li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-4">9. Children's Privacy</h2>
            <p>
              Our Service does not address anyone under the age of 18 ("Children").
            </p>
            <p className="mt-2">
              We do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a parent or guardian and you are aware that your Children has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information from our servers.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-4">10. Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
            </p>
            <p className="mt-2">
              We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update the "last updated" date at the top of this Privacy Policy.
            </p>
            <p className="mt-2">
              You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-4">11. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600 mt-2">
              <li>By email: privacy@secureme.digital-forge.swiss</li>
              <li>By mail: SecureMe GmbH, Bahnhofstrasse 42, 8001 Zurich, Switzerland</li>
            </ul>
          </section>
        </div>
      </div>
      
      {/* Data Protection Officer */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
        <div className="flex items-center mb-4">
          <Shield className="text-blue-600 mr-3" size={20} />
          <h2 className="text-lg font-bold text-slate-800">Data Protection Officer</h2>
        </div>
        <p className="text-slate-600">
          SecureMe has appointed a Data Protection Officer (DPO) who is responsible for matters relating to privacy and data protection. You can contact our DPO at dpo@secureme.digital-forge.swiss for any requests or questions about how we manage your data.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;