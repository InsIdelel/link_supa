/* MobiSûr — Page Loi & DUERP */

function LoiPage({ setPage, t }) {
  return (
    <main>
      <section className="loi-hero">
        <div className="loi-hero-inner">
          <span className="eye">Loi & DUERP — Synthèse pour dirigeants</span>
          <h1>Ce qu'il faut <span className="y">savoir</span><br/>quand un salarié<br/>prend la route.</h1>
          <p className="sub">
            En clair, sans jargon : ce que le Code du travail exige, ce que vous risquez en cas d'accident, et comment le DUERP s'applique au risque routier.
          </p>
        </div>
      </section>

      <div className="loi-toc">
        <div className="loi-toc-inner">
          <span className="lab">Aller à :</span>
          <a href="#l-probleme" onClick={(e) => smoothScroll(e, "l-probleme")}>Le problème</a>
          <a href="#l-loi" onClick={(e) => smoothScroll(e, "l-loi")}>Ce que dit la loi</a>
          <a href="#l-responsabilites" onClick={(e) => smoothScroll(e, "l-responsabilites")}>Vos responsabilités</a>
          <a href="#l-duerp" onClick={(e) => smoothScroll(e, "l-duerp")}>Le DUERP</a>
          <a href="#l-faire" onClick={(e) => smoothScroll(e, "l-faire")}>Que faire ?</a>
        </div>
      </div>

      {/* The problem */}
      <section className="section-cream">
        <div className="loi-block" id="l-probleme">
          <div className="num">01 — LE PROBLÈME</div>
          <h2>L'accident de la route est la première cause de mortalité au travail.</h2>
          <p className="intro">
            Il touche 100 % des entreprises — des plus grandes aux PME. Parmi les 159 000 dirigeants de PME en France, peu savent que leur responsabilité juridique peut être engagée à chaque accident d'un salarié pendant un trajet professionnel.
          </p>
          <div className="fact-grid">
            <div className="fact">
              <div className="big">1<sup style={{ fontSize: "0.5em" }}>re</sup></div>
              <div className="lab">cause de mortalité au travail — devant les chutes et les accidents de machines.</div>
            </div>
            <div className="fact">
              <div className="big">~40<span style={{ fontSize: "0.6em" }}>%</span></div>
              <div className="lab">des accidents mortels liés au travail surviennent sur la route (Sécurité routière, 2024).</div>
            </div>
            <div className="fact">
              <div className="big">159k</div>
              <div className="label" style={{ fontSize: 14, lineHeight: 1.4, color: "var(--ms-brown)", fontWeight: 600 }}>dirigeants de PME concernés. La grande majorité n'a pas formalisé sa politique de prévention routière.</div>
            </div>
          </div>
          <div style={{ marginTop: 32, padding: 24, background: "white", border: "1.5px dashed var(--ms-blue)", borderRadius: 16, fontSize: 16, lineHeight: 1.6, color: "var(--ms-brown)" }}>
            <strong>Pourquoi la prévention est-elle si rare&nbsp;?</strong> Parce qu'elle semble <em>complexe</em> (mobilisation DRH, organisation d'une formation, perte de productivité, prise sur le temps de travail) et parfois trop <em>anecdotique</em> pour qu'on en fasse une priorité. MobiSûr lève ces deux freins.
          </div>
        </div>
      </section>

      {/* The law */}
      <section className="section">
        <div className="loi-block" id="l-loi">
          <div className="num">02 — CE QUE DIT LA LOI</div>
          <h2>L'employeur a une obligation de sécurité. C'est écrit.</h2>
          <p className="intro">
            Trois textes structurent la prévention routière en entreprise. Ce sont ceux que votre avocat — ou celui de la partie adverse — sortira en premier.
          </p>

          <div className="law-card">
            <div className="ref">Code du travail · Art. L.4121-1 à L.4121-5</div>
            <div className="ttl">L'employeur prend les mesures nécessaires pour assurer la sécurité et protéger la santé physique et mentale des travailleurs.</div>
            <ul>
              <li><strong>Évaluer</strong>les risques professionnels, y compris le risque routier — quels que soient le poste et le mode de déplacement.</li>
              <li><strong>Mettre en place</strong>des actions de prévention, d'information et de formation adaptées.</li>
              <li><strong>Adapter</strong>les mesures en continu pour améliorer la sécurité, dès que la situation évolue.</li>
            </ul>
          </div>

          <div className="law-card">
            <div className="ref">Décret du 5 novembre 2001 · Mise en œuvre du DUERP</div>
            <div className="ttl">Le Document Unique d'Évaluation des Risques Professionnels est obligatoire pour toute entreprise ayant au moins un salarié.</div>
            <ul>
              <li>Il vise à <strong>identifier, évaluer et prioriser</strong> les risques professionnels — risque routier inclus — auxquels sont exposés les travailleurs.</li>
              <li>Il doit définir un <strong>plan d'action</strong> pour prévenir ces risques.</li>
              <li>Dans les entreprises de <strong>plus de 11 salariés</strong>, il doit être <strong>mis à jour au moins une fois par an</strong>.</li>
              <li>Il doit aussi être actualisé dès qu'une décision modifie les conditions de travail ou que la perception des risques évolue.</li>
            </ul>
          </div>

          <div className="law-card">
            <div className="ref">Jurisprudence · Faute inexcusable</div>
            <div className="ttl">La faute inexcusable de l'employeur est retenue quand il avait conscience du danger et n'a pas pris les mesures pour l'éviter.</div>
            <ul>
              <li>Elle peut donner lieu à une <strong>majoration de la rente</strong> versée à la victime — à la charge de l'entreprise.</li>
              <li>Elle peut être doublée d'une <strong>action pénale</strong> contre le dirigeant pour manquement aux obligations de sécurité.</li>
              <li>L'absence de démarche de prévention documentée est un élément à charge déterminant.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Responsibilities */}
      <section className="section-cream">
        <div className="loi-block" id="l-responsabilites">
          <div className="num">03 — VOS RESPONSABILITÉS</div>
          <h2>En cas d'accident lié au travail, deux fronts s'ouvrent simultanément.</h2>
          <p className="intro">
            Le trajet domicile-travail (accident de trajet) et le déplacement professionnel (accident du travail) engagent tous deux la responsabilité de l'employeur. La question n'est pas <em>si</em> mais <em>comment</em> vous démontrez avoir agi.
          </p>
          <div className="risk-grid">
            <div className="risk-card civil">
              <div className="tag"><span style={{ width: 8, height: 8, background: "var(--ms-blue)", borderRadius: 999 }}></span> Au civil</div>
              <h3>Faute inexcusable ou défaut de prévention.</h3>
              <p>L'entreprise peut être condamnée à verser une majoration de rente à la victime, plus des dommages et intérêts pour le préjudice moral, esthétique, d'agrément. <strong>Le défaut de démarche de prévention est l'argument central</strong> du dossier de la victime.</p>
            </div>
            <div className="risk-card penal">
              <div className="tag"><span style={{ width: 8, height: 8, background: "var(--ms-yellow)", borderRadius: 999 }}></span> Au pénal</div>
              <h3>Manquement aux obligations de sécurité.</h3>
              <p>Le dirigeant — pas seulement l'entreprise — peut être poursuivi. Les peines vont de l'amende à des peines d'emprisonnement avec sursis en cas de blessures graves ou de décès. Le casier judiciaire du dirigeant peut être affecté.</p>
            </div>
          </div>
          <div style={{ marginTop: 24, padding: 28, background: "white", borderRadius: 16, border: "1.5px solid var(--ms-line)" }}>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 18, color: "var(--ms-brown)", marginBottom: 10, letterSpacing: "-0.01em" }}>+ La responsabilité morale et de réputation</div>
            <p style={{ margin: 0, fontSize: 15, lineHeight: 1.55, color: "var(--ms-brown-soft)" }}>
              Un accident grave d'un salarié génère une perte de confiance interne et une atteinte d'image durables. Les équipes — et parfois la presse locale — vous demandent ce que l'entreprise faisait pour prévenir ce qui s'est passé.
            </p>
          </div>
        </div>
      </section>

      {/* DUERP */}
      <section className="section">
        <div className="loi-block" id="l-duerp">
          <div className="num">04 — LE DUERP</div>
          <h2>Le document qu'on vous demandera en premier en cas de contrôle.</h2>
          <p className="intro">
            Le DUERP est le fil rouge de votre démarche. Il doit faire apparaître le risque routier <strong>comme un risque identifié, évalué, et traité par un plan d'action documenté</strong>.
          </p>

          <div className="duerp-callout">
            <div className="acro">DUERP<small>Document Unique d'Évaluation des Risques Professionnels</small></div>
            <div>
              <h3>Obligatoire dès 1 salarié.</h3>
              <p>Identifier, évaluer, prioriser les risques. Définir un plan d'action. Le tenir à jour. Sans DUERP, vous êtes <em>de facto</em> en défaut — un contrôle de l'inspection du travail ou un sinistre l'expose immédiatement.</p>
            </div>
          </div>

          <div style={{ marginTop: 32 }}>
            <div className="law-card">
              <div className="ref">Comment MobiSûr s'intègre dans votre DUERP</div>
              <ul>
                <li><strong>Section "Risques routiers"</strong> — vous documentez l'identification du risque et son évaluation (1 ligne, 30 secondes).</li>
                <li><strong>Plan d'action</strong> — "abonnement MobiSûr, X € / mois, sensibilisation permanente, messages déclenchés par contexte météo et travaux locaux".</li>
                <li><strong>Preuve d'exécution</strong> — votre tableau de bord MobiSûr liste tous les messages envoyés, daté par destinataire. C'est joint en annexe.</li>
                <li><strong>Mise à jour</strong> — la traçabilité est automatique. Vous mettez à jour le DUERP une fois par an, en 10 minutes.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What to do */}
      <section className="section-cream">
        <div className="loi-block" id="l-faire">
          <div className="num">05 — QUE FAIRE ?</div>
          <h2>Trois choses, dans cet ordre.</h2>
          <div className="steps-grid" style={{ marginTop: 40 }}>
            <div className="step">
              <div className="num">1</div>
              <h3>Mettre à jour votre DUERP</h3>
              <p>Faites apparaître le risque routier comme un risque identifié, évalué, avec un plan d'action. C'est obligatoire et c'est votre première ligne de défense.</p>
            </div>
            <div className="step">
              <div className="num">2</div>
              <h3>Engager une action complète</h3>
              <p>Un dispositif comme MobiSûr coche les cases — sensibilisation, information, formation au sens large — sans charge opérationnelle ni perte de temps.</p>
            </div>
            <div className="step">
              <div className="num">3</div>
              <h3>Tracer & archiver</h3>
              <p>Chaque message envoyé est daté et archivé. Annexez le reporting trimestriel à votre DUERP. En cas de contrôle ou de litige, vous avez des preuves tangibles et opposables.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-strip">
        <div className="container container-tight">
          <h2>Maintenant que vous savez ce qu'exige la loi, prenez les devants avec MobiSûr</h2>
          <p>2 € HT / salarié / mois — 3 mois offerts en 2026 pour les PME pilotes.</p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a className="btn btn-dark btn-lg" href="#" onClick={(e) => { e.preventDefault(); setPage("home"); setTimeout(() => document.getElementById("pilote")?.scrollIntoView({ behavior: "smooth" }), 50); }}>
              Devenir abonné pilote <Icon name="arrow" size={18} stroke={2.5} />
            </a>
            <a className="btn btn-ghost btn-lg" href="#" onClick={(e) => { e.preventDefault(); setPage("salarie"); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
              Voir ce que reçoit un salarié
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

function smoothScroll(e, id) {
  e.preventDefault();
  const el = document.getElementById(id);
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 130;
    window.scrollTo({ top, behavior: "smooth" });
  }
}

window.LoiPage = LoiPage;
