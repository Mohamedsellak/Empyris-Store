'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function TermsOfServicePage() {
  const { language } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        {language === 'en' ? 'Terms of Service' : 'Conditions d\'Utilisation'}
      </h1>

      <div className="prose prose-gray max-w-none">
        {language === 'en' ? (
          <>
            <p className="text-gray-600 mb-6">Last updated: October 4, 2025</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Agreement to Terms</h2>
            <p className="text-gray-700 mb-4">
              By accessing our website, you agree to be bound by these Terms of Service and to comply with all applicable laws and regulations.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Use License</h2>
            <p className="text-gray-700 mb-4">
              Permission is granted to temporarily download one copy of the materials on our website for personal, non-commercial transitory viewing only.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Products and Services</h2>
            <p className="text-gray-700 mb-4">
              We reserve the right to refuse service to anyone for any reason at any time. All product descriptions, pricing, and availability are subject to change without notice.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Accuracy of Information</h2>
            <p className="text-gray-700 mb-4">
              We are not responsible if information made available on this site is not accurate, complete or current. Any reliance on the material on this site is at your own risk.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Modifications to Service</h2>
            <p className="text-gray-700 mb-4">
              We reserve the right to modify or discontinue the Service (or any part or content thereof) without notice at any time.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Prohibited Uses</h2>
            <p className="text-gray-700 mb-4">
              You may not use our products or services for any illegal or unauthorized purpose nor may you, in the use of the Service, violate any laws in your jurisdiction.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Limitation of Liability</h2>
            <p className="text-gray-700 mb-4">
              In no event shall Dilcube or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit) arising out of the use or inability to use our service.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Governing Law</h2>
            <p className="text-gray-700 mb-4">
              These Terms shall be governed and construed in accordance with the laws of the country in which we operate.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about these Terms of Service, please contact us at support@store.com
            </p>
          </>
        ) : (
          <>
            <p className="text-gray-600 mb-6">Dernière mise à jour : 4 octobre 2025</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Acceptation des Conditions</h2>
            <p className="text-gray-700 mb-4">
              En accédant à notre site Web, vous acceptez d&apos;être lié par ces Conditions d&apos;utilisation et de vous conformer à toutes les lois et réglementations applicables.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Licence d&apos;Utilisation</h2>
            <p className="text-gray-700 mb-4">
              L&apos;autorisation est accordée de télécharger temporairement une copie des matériaux sur notre site Web pour une visualisation personnelle et non commerciale uniquement.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Produits et Services</h2>
            <p className="text-gray-700 mb-4">
              Nous nous réservons le droit de refuser le service à quiconque pour quelque raison que ce soit à tout moment. Toutes les descriptions de produits, les prix et la disponibilité sont sujets à changement sans préavis.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Exactitude des Informations</h2>
            <p className="text-gray-700 mb-4">
              Nous ne sommes pas responsables si les informations disponibles sur ce site ne sont pas exactes, complètes ou actuelles. Toute confiance accordée au matériel sur ce site est à vos propres risques.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Modifications du Service</h2>
            <p className="text-gray-700 mb-4">
              Nous nous réservons le droit de modifier ou d&apos;interrompre le Service (ou toute partie de celui-ci) sans préavis à tout moment.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Utilisations Interdites</h2>
            <p className="text-gray-700 mb-4">
              Vous ne pouvez pas utiliser nos produits ou services à des fins illégales ou non autorisées, ni violer les lois de votre juridiction lors de l&apos;utilisation du Service.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Limitation de Responsabilité</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              En aucun cas STANLEY ou ses fournisseurs ne seront responsables de tout dommage (y compris, sans limitation, les dommages pour perte de données ou de profit) découlant de l&apos;utilisation ou de l&apos;impossibilité d&apos;utiliser notre service.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Loi Applicable</h2>
            <p className="text-gray-700 mb-4">
              Ces Conditions seront régies et interprétées conformément aux lois du pays dans lequel nous opérons.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contactez-Nous</h2>
            <p className="text-gray-700 mb-4">
              Si vous avez des questions concernant ces Conditions d&apos;utilisation, veuillez nous contacter à support@store.com
            </p>
          </>
        )}
      </div>
    </div>
  );
}
