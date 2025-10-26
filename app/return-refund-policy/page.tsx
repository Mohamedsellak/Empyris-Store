'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function ReturnRefundPolicyPage() {
  const { language } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        {language === 'en' ? 'Return & Refund Policy' : 'Politique de Retour et Remboursement'}
      </h1>

      <div className="prose prose-gray max-w-none">
        {language === 'en' ? (
          <>
            <p className="text-gray-600 mb-6">Last updated: October 4, 2025</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Returns</h2>
            <p className="text-gray-700 mb-4">
              Our policy lasts 30 days. If 30 days have gone by since your purchase, unfortunately we can't offer you a refund or exchange.
            </p>
            <p className="text-gray-700 mb-4">
              To be eligible for a return, your item must be unused and in the same condition that you received it. It must also be in the original packaging.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Refunds</h2>
            <p className="text-gray-700 mb-4">
              Once your return is received and inspected, we will send you an email to notify you that we have received your returned item. We will also notify you of the approval or rejection of your refund.
            </p>
            <p className="text-gray-700 mb-4">
              If you are approved, then your refund will be processed, and a credit will automatically be applied to your credit card or original method of payment, within a certain amount of days.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Late or Missing Refunds</h2>
            <p className="text-gray-700 mb-4">
              If you haven't received a refund yet, first check your bank account again. Then contact your credit card company, it may take some time before your refund is officially posted.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Exchanges</h2>
            <p className="text-gray-700 mb-4">
              We only replace items if they are defective or damaged. If you need to exchange it for the same item, send us an email and send your item to the address provided in the email.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about our Return & Refund Policy, please contact us at support@store.com
            </p>
          </>
        ) : (
          <>
            <p className="text-gray-600 mb-6">Dernière mise à jour : 4 octobre 2025</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Retours</h2>
            <p className="text-gray-700 mb-4">
              Notre politique dure 30 jours. Si 30 jours se sont écoulés depuis votre achat, nous ne pouvons malheureusement pas vous offrir un remboursement ou un échange.
            </p>
            <p className="text-gray-700 mb-4">
              Pour être éligible à un retour, votre article doit être inutilisé et dans le même état que vous l'avez reçu. Il doit également être dans l'emballage d'origine.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Remboursements</h2>
            <p className="text-gray-700 mb-4">
              Une fois votre retour reçu et inspecté, nous vous enverrons un email pour vous informer que nous avons reçu votre article retourné. Nous vous informerons également de l'approbation ou du rejet de votre remboursement.
            </p>
            <p className="text-gray-700 mb-4">
              Si vous êtes approuvé, votre remboursement sera traité et un crédit sera automatiquement appliqué à votre carte de crédit ou mode de paiement d'origine, dans un certain nombre de jours.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Remboursements Tardifs ou Manquants</h2>
            <p className="text-gray-700 mb-4">
              Si vous n'avez pas encore reçu de remboursement, vérifiez d'abord votre compte bancaire. Ensuite, contactez votre société de carte de crédit, cela peut prendre du temps avant que votre remboursement soit officiellement enregistré.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Échanges</h2>
            <p className="text-gray-700 mb-4">
              Nous ne remplaçons les articles que s'ils sont défectueux ou endommagés. Si vous devez l'échanger contre le même article, envoyez-nous un email et envoyez votre article à l'adresse fournie dans l'email.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contactez-Nous</h2>
            <p className="text-gray-700 mb-4">
              Si vous avez des questions concernant notre politique de retour et remboursement, veuillez nous contacter à support@store.com
            </p>
          </>
        )}
      </div>
    </div>
  );
}
