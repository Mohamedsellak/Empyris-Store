'use client';

import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/lib/i18n';
import { Mail, MapPin, Clock } from 'lucide-react';

export default function ContactPage() {
  const { language } = useLanguage();
  const t = translations[language];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert(language === 'en' ? 'Thank you for your message!' : 'Merci pour votre message!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-white py-20 md:py-32 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {t.contactUsPage}
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              {language === 'en' 
                ? "We'd love to hear from you. Get in touch with our team."
                : "Nous aimerions avoir de vos nouvelles. Contactez notre équipe."}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  {t.sendMessage}
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      {t.fullName}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t.enterName}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      {t.emailAddress}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t.enterEmail}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      {t.subject}
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder={t.enterSubject}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      {t.message}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={t.enterMessage}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-black text-white py-4 px-6 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200"
                  >
                    {t.submitButton}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Info Card */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  {t.contactInfo}
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Mail className="w-6 h-6 text-gray-900 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">{t.emailAddress}</p>
                      <p className="text-gray-600">info@store.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-gray-900 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900 mb-4">{language === 'en' ? 'UK Office' : 'Bureau UK'}</p>
                      <p className="text-gray-600 mb-1">
                        123 Oxford Street<br />
                        London, W1D 2HG<br />
                        {language === 'en' ? 'United Kingdom' : 'Royaume-Uni'}
                      </p>
                      <p className="text-gray-600">+44 20 1234 5678</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-gray-900 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900 mb-4">{language === 'en' ? 'France Office' : 'Bureau France'}</p>
                      <p className="text-gray-600 mb-1">
                        45 Avenue des Champs-Élysées<br />
                        Paris, 75008<br />
                        France
                      </p>
                      <p className="text-gray-600">+33 1 23 45 67 89</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours Card */}
              <div className="bg-black text-white rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Clock className="w-6 h-6 mr-3" />
                  <h3 className="text-xl font-bold">
                    {t.businessHours}
                  </h3>
                </div>
                <div className="space-y-2 text-gray-300">
                  <div className="flex justify-between">
                    <span>{t.monday} - {t.friday}</span>
                    <span>9:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t.saturday}</span>
                    <span>10:00 - 16:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t.sunday}</span>
                    <span>{t.closed}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
