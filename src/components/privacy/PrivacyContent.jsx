import React from 'react'

const PrivacyContent = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6 lg:px-24 mt-[80px]">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Hero Section */}
        <header className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Privacy Policy - Shop Smaart
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Your privacy is our priority. Learn how we protect your data.

          </p>
        </header>

        {/* Content Section */}
        <div className="bg-white shadow-md rounded-2xl p-8 space-y-8">
          <section className="text-gray-700 leading-relaxed space-y-4">
            <p>
              Welcome to Shopsmaart.com (referred to herein as "we," "us," or "our"). We are committed to protecting your privacy and providing a safe online experience for all our users. This Privacy Policy outlines the information we collect, how we use it, and the choices you have regarding your personal information.
            </p>
          </section>

          {/* Sections */}
          {[
            {
              title: "1. Information We Collect",
              content: [
                `This notice applies to all information collected or submitted on our website. On some pages, you can make requests, register to receive materials, and use free webmaster tools. The types of personal information collected at these pages are:`,
                `• Name  
• IP Address  
• Phone number 
• Descriptions of business issues or queries 
• Details & requirements shared by users on various lead forms on our website`,
                `We use cookies and similar tracking technologies to enhance your browsing experience and collect information about your preferences.`,
              ],
            },
            {
              title: "2. How We Use Your Information",
              content: [
                `We may use the information we collect for various purposes, including:`,
                `• Providing and improving our services.  
• Communicating with you about our services and promotions.  
• Analyzing trends and user behavior.  
• Customizing content and advertising.  
• Sharing different types of offers and products from brands.  
• Preventing fraudulent activity.
• Using the email you provide to address your queries
• To communicate with you via different channels, including but not limited to SMS, Email, RCS, WhatsApp, and Voice (with your consent).
`,
              ],
            },
            {
              title: "3. Data Security",
              content: [
                `We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, please note that no method of transmission over the internet or electronic storage is 100% secure:`,

              ],
            },
            {
              title: "4. Changes to this Privacy Policy",
              content: [
                `We reserve the right to update or change this Privacy Policy at any time. Any changes will be effective immediately upon posting the revised Privacy Policy on our website.`,
              ],
            },
            {
              title: "5.Your Rights",
              content: [
                `You have the right to access, update, or delete your personal information. Contact us if you wish to make changes or request deletion.`,
              ],
            },
            {
              title: "6. Contact Us",
              content: [
                `If you have any questions or concerns about this Privacy Policy or our practices regarding your personal information, please contact us at contact@shopsmaart.com `,

              ],
            },

          ].map((section, index) => (
            <section key={index} className="text-gray-700 space-y-3">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                {section.title}
              </h2>
              {section.content.map((para, i) => (
                <p key={i} className="leading-relaxed whitespace-pre-line">
                  {para}
                </p>
              ))}
            </section>
          ))}
        </div>

        {/* Footer */}
        <footer className="text-center text-gray-500 text-sm mt-10">
          Thank you for choosing Shopsmaart.com!
        </footer>
      </div>
    </div>
  )
}

export default PrivacyContent
