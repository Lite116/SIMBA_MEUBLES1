export function PrivacyContent() {
  return (
    <div className="prose prose-gray max-w-none">
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Protection de vos données</h2>
        <p>
          Chez Simba Meuble, nous accordons une grande importance à la protection de vos données personnelles. 
          Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Politique des cookies</h2>
        <p>
          Notre site utilise des cookies pour améliorer votre expérience de navigation et nous aider 
          à comprendre comment vous interagissez avec notre site.
        </p>

        <h3 className="text-xl font-medium mt-6 mb-3">Les cookies que nous utilisons</h3>
        <ul className="list-disc pl-6 space-y-4">
          <li>
            <strong>Make</strong> - Pour le fonctionnement technique du site et la gestion des formulaires.
            <br />
            <span className="text-sm text-gray-600">Durée de conservation : 13 mois maximum</span>
          </li>
          <li>
            <strong>Google Analytics</strong> - Pour analyser le trafic et l'utilisation du site.
            <br />
            <span className="text-sm text-gray-600">Durée de conservation : 13 mois maximum</span>
          </li>
          <li>
            <strong>Google Forms</strong> - Pour le traitement de nos formulaires de contact.
            <br />
            <span className="text-sm text-gray-600">Durée de conservation : 13 mois maximum</span>
          </li>
        </ul>

        <h3 className="text-xl font-medium mt-6 mb-3">Gestion des cookies</h3>
        <p>
          Vous pouvez à tout moment modifier vos préférences en matière de cookies en cliquant sur 
          le lien "Gérer les cookies" en bas de page. Vous pouvez également configurer votre navigateur 
          pour refuser tous les cookies ou vous alerter lorsqu'un cookie est envoyé.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Vos droits</h2>
        <p>
          Conformément à la réglementation en vigueur, vous disposez des droits suivants concernant 
          vos données personnelles :
        </p>
        <ul className="list-disc pl-6 mt-4">
          <li>Droit d'accès à vos données</li>
          <li>Droit de rectification</li>
          <li>Droit à l'effacement</li>
          <li>Droit à la limitation du traitement</li>
          <li>Droit à la portabilité</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p>
          Pour toute question concernant notre politique de confidentialité ou pour exercer vos droits, 
          vous pouvez nous contacter à l'adresse suivante : contact@simbameuble.fr
        </p>
      </section>
    </div>
  );
}