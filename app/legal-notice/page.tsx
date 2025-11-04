'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function LegalNoticePage() {
  const { language } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        {language === 'en' ? 'Legal Notice' : 'Mentions Légales'}
      </h1>

      <div className="prose prose-gray max-w-none">
        {language === 'en' ? (
          <>
            <p className="text-gray-600 mb-6">Last updated: October 4, 2025</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Company Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Company Name:</strong> STANLEY Ltd.<br />
              <strong>Registered Office:</strong> 123 Oxford Street, London, W1D 2HX, United Kingdom
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">UK Office</h3>
            <p className="text-gray-700 mb-4">
              123 Oxford Street<br />
              London, W1D 2HG<br />
              United Kingdom<br />
              Phone: +44 20 1234 5678<br />
              Email: support@store.com
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">France Office</h3>
            <p className="text-gray-700 mb-4">
              45 Avenue des Champs-Élysées<br />
              Paris, 75008<br />
              France<br />
              Phone: +33 1 23 45 67 89<br />
              Email: support@store.com
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Website Hosting</h2>
            <p className="text-gray-700 mb-4">
              This website is hosted by a third-party hosting provider. For technical information about the hosting, please contact us.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Intellectual Property</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
              All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of STANLEY or its content suppliers and is protected by international copyright laws.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Disclaimer</h2>
            <p className="text-gray-700 mb-4">
              The information contained on this website is for general information purposes only. While we endeavor to keep the information up to date and correct, we make no representations or warranties of any kind about the completeness, accuracy, or reliability of the information.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">External Links</h2>
            <p className="text-gray-700 mb-4">
              Our website may contain links to external websites. We have no control over the content and nature of these sites and cannot be held responsible for their content.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact</h2>
            <p className="text-gray-700 mb-4">
              For any questions regarding this legal notice, please contact us at support@store.com
            </p>
          </>
        ) : (
          <>
            <p className="text-gray-600 mb-6">Dernière mise à jour : 4 octobre 2025</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Informations sur l&apos;Entreprise</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Nom de l&apos;Entreprise:</strong> STANLEY Ltd.<br />
              <strong>Siège Social:</strong> 123 Oxford Street, London, W1D 2HX, Royaume-Uni
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Bureau UK</h3>
            <p className="text-gray-700 mb-4">
              123 Oxford Street<br />
              London, W1D 2HG<br />
              Royaume-Uni<br />
              Téléphone: +44 20 1234 5678<br />
              Email: support@store.com
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Bureau France</h3>
            <p className="text-gray-700 mb-4">
              45 Avenue des Champs-Élysées<br />
              Paris, 75008<br />
              France<br />
              Téléphone: +33 1 23 45 67 89<br />
              Email: support@store.com
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Hébergement du Site Web</h2>
            <p className="text-gray-700 mb-4">
              Ce site Web est hébergé par un fournisseur d&apos;hébergement tiers. Pour des informations techniques sur l&apos;hébergement, veuillez nous contacter.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Propriété Intellectuelle</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Tout le contenu de ce site Web, y compris mais sans s&apos;y limiter, le texte, les graphiques, les logos, les images et les logiciels, est la propriété de STANLEY ou de ses fournisseurs de contenu et est protégé par les lois internationales sur le droit d&apos;auteur.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Clause de Non-Responsabilité</h2>
            <p className="text-gray-700 mb-4">
              Les informations contenues sur ce site Web sont fournies à titre informatif général uniquement. Bien que nous nous efforcions de maintenir les informations à jour et correctes, nous ne faisons aucune représentation ou garantie d&apos;aucune sorte quant à l&apos;exhaustivité, l&apos;exactitude ou la fiabilité des informations.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Liens Externes</h2>
            <p className="text-gray-700 mb-4">
              Notre site Web peut contenir des liens vers des sites Web externes. Nous n&apos;avons aucun contrôle sur le contenu et la nature de ces sites et ne pouvons être tenus responsables de leur contenu.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact</h2>
            <p className="text-gray-700 mb-4">
              Pour toute question concernant cette mention légale, veuillez nous contacter à support@store.com
            </p>
          </>
        )}
      </div>
    </div>
  );
}
