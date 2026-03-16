'use client';

export function CreditLegalNotice() {
  return (
    <section className="mt-4 sm:mt-6">
      <div className="bg-gray-100 border border-gray-300 rounded-md p-3 sm:p-4 text-xs sm:text-sm leading-relaxed text-gray-800">
        <p className="mb-2">
          <span className="font-bold">
            Prêt à tempérament – Montant du crédit : 2850 €
          </span>
        </p>
        <p className="mb-2">
          Durée du crédit : <span className="font-bold">30 mois</span>
          <br />
          Mensualité : <span className="font-bold">95 €</span>
        </p>
        <p className="mb-2">
          Taux annuel effectif global (TAEG) :{' '}
          <span className="font-bold">0 %</span>
          <br />
          Taux débiteur annuel <span className="font-bold">fixe</span> : 0 %
          <br />
          Montant total dû : 2850 €
        </p>
        <p className="mb-3 font-bold">
          ATTENTION, EMPRUNTER DE L’ARGENT COUTE AUSSI DE L’ARGENT.
        </p>
        <p className="mb-1">
          Meubles Family SRL – BE0679.866.565<br />
          Intermédiaire de Crédit
        </p>
        <p className="mt-2">
          <span className="font-bold underline">
            Autorité de surveillance en matière de crédit :
          </span>
          <br />
          Service public fédéral Economie, P.M.E., Classes moyennes et Energie
          <br />
          Rue du Progrès, 50 à 1210 Bruxelles
          <br />
          Téléphone : 0800 120 33
          <br />
          E-mail :{' '}
          <a
            href="mailto:info.eco@economie.fgov.be"
            className="text-orange-500 hover:text-orange-600 underline"
          >
            info.eco@economie.fgov.be
          </a>
          <br />
          Internet :{' '}
          <a
            href="https://economie.fgov.be"
            className="text-orange-500 hover:text-orange-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://economie.fgov.be
          </a>
        </p>
      </div>
    </section>
  );
}

