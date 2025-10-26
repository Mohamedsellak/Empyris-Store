'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function PrivacyPolicyPage() {
  const { language } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        {language === 'en' ? 'Privacy Policy' : 'Politique de Confidentialité'}
      </h1>

      <div className="prose prose-gray max-w-none">
        {language === 'en' ? (
          <>
            <p className="text-gray-600 mb-6">Last updated: October 4, 2025</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Information We Collect</h2>
            <p className="text-gray-700 mb-4">
              We collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>Name and contact information</li>
              <li>Billing and shipping addresses</li>
              <li>Payment information</li>
              <li>Order history and preferences</li>
              <li>Communications with customer service</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>Process and fulfill your orders</li>
              <li>Communicate with you about orders and products</li>
              <li>Provide customer service</li>
              <li>Send promotional communications (with your consent)</li>
              <li>Improve our website and services</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Information Sharing</h2>
            <p className="text-gray-700 mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share your information with:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>Service providers who assist in our operations</li>
              <li>Payment processors</li>
              <li>Shipping companies</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Data Security</h2>
            <p className="text-gray-700 mb-4">
              We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Cookies</h2>
            <p className="text-gray-700 mb-4">
              We use cookies and similar tracking technologies to improve your browsing experience, analyze site traffic, and understand where our visitors are coming from.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Your Rights</h2>
            <p className="text-gray-700 mb-4">
              You have the right to:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Changes to This Policy</h2>
            <p className="text-gray-700 mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have questions about this Privacy Policy, please contact us at support@store.com
            </p>
          </>
        ) : (
          <>
            <p className="text-gray-600 mb-6">Dernière mise à jour : 4 octobre 2025</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Informations Que Nous Collectons</h2>
            <p className="text-gray-700 mb-4">
              Nous collectons les informations que vous nous fournissez directement, notamment:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>Nom et coordonnées</li>
              <li>Adresses de facturation et de livraison</li>
              <li>Informations de paiement</li>
              <li>Historique des commandes et préférences</li>
              <li>Communications avec le service client</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Comment Nous Utilisons Vos Informations</h2>
            <p className="text-gray-700 mb-4">
              Nous utilisons les informations que nous collectons pour:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>Traiter et exécuter vos commandes</li>
              <li>Communiquer avec vous concernant les commandes et les produits</li>
              <li>Fournir un service client</li>
              <li>Envoyer des communications promotionnelles (avec votre consentement)</li>
              <li>Améliorer notre site Web et nos services</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Partage d&apos;Informations</h2>
            <p className="text-gray-700 mb-4">
              Nous ne vendons, n&apos;échangeons ni ne louons vos informations personnelles à des tiers. Nous pouvons partager vos informations avec:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>Les prestataires de services qui nous aident dans nos opérations</li>
              <li>Les processeurs de paiement</li>
              <li>Les sociétés de livraison</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Sécurité des Données</h2>
            <p className="text-gray-700 mb-4">
              Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos informations personnelles contre l&apos;accès, la modification, la divulgation ou la destruction non autorisés.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Cookies</h2>
            <p className="text-gray-700 mb-4">
              Nous utilisons des cookies et des technologies de suivi similaires pour améliorer votre expérience de navigation, analyser le trafic du site et comprendre d&apos;où viennent nos visiteurs.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Vos Droits</h2>
            <p className="text-gray-700 mb-4">
              Vous avez le droit de:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>Accéder à vos informations personnelles</li>
              <li>Corriger des informations inexactes</li>
              <li>Demander la suppression de vos informations</li>
              <li>Vous désabonner des communications marketing</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Modifications de Cette Politique</h2>
            <p className="text-gray-700 mb-4">
              Nous pouvons mettre à jour cette Politique de Confidentialité de temps en temps. Nous vous informerons de tout changement en publiant la nouvelle politique sur cette page.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contactez-Nous</h2>
            <p className="text-gray-700 mb-4">
              Si vous avez des questions concernant cette Politique de Confidentialité, veuillez nous contacter à support@store.com
            </p>
          </>
        )}
      </div>
    </div>
  );
}
