'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function ShippingPolicyPage() {
  const { language } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        {language === 'en' ? 'Shipping Policy' : 'Politique d\'Expédition'}
      </h1>

      <div className="prose prose-gray max-w-none">
        {language === 'en' ? (
          <>
            <p className="text-gray-600 mb-6">Last updated: October 4, 2025</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Processing Time</h2>
            <p className="text-gray-700 mb-4">
              All orders are processed within 1-2 business days. Orders are not shipped or delivered on weekends or holidays.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Shipping Rates & Delivery Estimates</h2>
            <p className="text-gray-700 mb-4">
              Shipping charges for your order will be calculated and displayed at checkout.
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li><strong>Standard Shipping:</strong> 5-7 business days</li>
              <li><strong>Express Shipping:</strong> 2-3 business days</li>
              <li><strong>Free Shipping:</strong> Orders over $100 (5-7 business days)</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">International Shipping</h2>
            <p className="text-gray-700 mb-4">
              We ship to UK and France. International shipping times vary by location but typically take 7-14 business days.
            </p>
            <p className="text-gray-700 mb-4">
              Customs fees and import taxes may apply and are the responsibility of the customer.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Order Tracking</h2>
            <p className="text-gray-700 mb-4">
              You will receive a Shipment Confirmation email with tracking information once your order has shipped.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Damaged or Lost Shipments</h2>
            <p className="text-gray-700 mb-4">
              If you receive a damaged package, please contact us immediately with photos of the damage. For lost shipments, please wait 10 business days from the ship date before contacting us.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-4">
              For questions about shipping, please contact us at support@store.com
            </p>
          </>
        ) : (
          <>
            <p className="text-gray-600 mb-6">Dernière mise à jour : 4 octobre 2025</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Délai de Traitement</h2>
            <p className="text-gray-700 mb-4">
              Toutes les commandes sont traitées dans un délai de 1 à 2 jours ouvrables. Les commandes ne sont pas expédiées ou livrées le week-end ou les jours fériés.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Tarifs d'Expédition et Estimations de Livraison</h2>
            <p className="text-gray-700 mb-4">
              Les frais d'expédition pour votre commande seront calculés et affichés lors du paiement.
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li><strong>Livraison Standard:</strong> 5-7 jours ouvrables</li>
              <li><strong>Livraison Express:</strong> 2-3 jours ouvrables</li>
              <li><strong>Livraison Gratuite:</strong> Commandes de plus de 100$ (5-7 jours ouvrables)</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Expédition Internationale</h2>
            <p className="text-gray-700 mb-4">
              Nous expédions au Royaume-Uni et en France. Les délais d'expédition internationale varient selon l'emplacement mais prennent généralement 7 à 14 jours ouvrables.
            </p>
            <p className="text-gray-700 mb-4">
              Des frais de douane et des taxes à l'importation peuvent s'appliquer et sont à la charge du client.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Suivi de Commande</h2>
            <p className="text-gray-700 mb-4">
              Vous recevrez un email de confirmation d'expédition avec les informations de suivi une fois votre commande expédiée.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Colis Endommagés ou Perdus</h2>
            <p className="text-gray-700 mb-4">
              Si vous recevez un colis endommagé, veuillez nous contacter immédiatement avec des photos des dommages. Pour les expéditions perdues, veuillez attendre 10 jours ouvrables à compter de la date d'expédition avant de nous contacter.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contactez-Nous</h2>
            <p className="text-gray-700 mb-4">
              Pour toute question concernant l'expédition, veuillez nous contacter à support@store.com
            </p>
          </>
        )}
      </div>
    </div>
  );
}
