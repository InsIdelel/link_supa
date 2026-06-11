/* MobiSûr — Home page (chef d'entreprise) */

function HomePage({ setPage, t }) {
  const [activeKey, setActiveKey] = React.useState("weather");

  // auto-rotate phone messages
  React.useEffect(() => {
    if (t.heroAutoRotate === false) return;
    const order = ["weather", "quiz", "boss", "local"];
    const id = setInterval(() => {
      setActiveKey((k) => order[(order.indexOf(k) + 1) % order.length]);
    }, 4200);
    return () => clearInterval(id);
  }, [t.heroAutoRotate]);

  const copy = COPY[t.tone] || COPY.punchy;

  return (
    <main>
      {/* ============ HERO ============ */}
      <section className="hero">
        <div className="container">
          <div className="hero-inner">
            <div>
              <span className="hero-tag">
                <span style={{ width: 8, height: 8, background: "var(--ms-yellow)", borderRadius: 999 }}></span>
                {copy.hero.eyebrow}
              </span>
              <h1 className="h-display">
                {copy.hero.titleA}<br/>
                <span className="accent">{copy.hero.titleAccent}</span><br/>
                {copy.hero.titleB}
              </h1>
              <p className="hero-sub">{copy.hero.sub}</p>
              <div className="hero-ctas">
                <a className="btn btn-primary btn-lg" href="#pilote" onClick={(e) => { e.preventDefault(); document.getElementById("pilote")?.scrollIntoView({ behavior: "smooth" }); }}>
                  Devenir PME pilote <Icon name="arrow" size={18} stroke={2.5} />
                </a>
                <a className="btn btn-ghost btn-lg" href="#how" onClick={(e) => { e.preventDefault(); document.getElementById("how")?.scrollIntoView({ behavior: "smooth" }); }}>
                  Comment ça marche ?
                </a>
              </div>
              <div style={{ marginTop: 28, display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" }}>
                <span className="hero-price-note"><strong>2&nbsp;€ HT / salarié / mois</strong></span>
                <span style={{ fontSize: 14, color: "var(--ms-brown)", fontWeight: 700 }}>· 3 mois offerts en 2026 pour les pilotes</span>
              </div>
            </div>
            <div className="hero-right">
              <PhoneMockup activeKey={activeKey} onSelectKey={setActiveKey} />
            </div>
          </div>
        </div>
      </section>

      <Marquee />

      {/* ============ THE STAT ============ */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span className="eyebrow">Ni à l'atelier, ni au bureau</span>
            <h2 className="h-display h2" style={{ margin: "16px auto 16px", maxWidth: "20ch" }}>
              {copy.stat.title}
            </h2>
            <p className="lead" style={{ maxWidth: 720, margin: "0 auto" }}>{copy.stat.sub}</p>
          </div>
          <div className="stat-block">
            <div className="stat-cell yellow">
              <div className="figure">1<sup style={{ fontSize: "0.45em" }}>ère</sup></div>
              <div className="label">cause de mortalité au travail. Devant les chutes. Devant les machines.</div>
            </div>
            <div className="stat-cell dark">
              <div className="figure">100<span style={{ fontSize: "0.6em" }}>%</span></div>
              <div className="label">des entreprises sont concernées — de la PME au grand groupe.</div>
            </div>
            <div className="stat-cell blue">
              <div className="figure">159k</div>
              <div className="label">patrons de PME en France. Tous concernés et tous responsables.</div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ THE PROBLEM (Claude story) ============ */}
      <section className="section section-dark">
        <div className="container">
          <div className="problem-grid">
            <div>
              <span className="eyebrow" style={{ color: "var(--ms-yellow)" }}>Le scénario qu'on n'imagine jamais</span>
              <h2 className="h-display h2" style={{ color: "var(--ms-yellow)", margin: "16px 0 24px" }}>
                Claude de la compta<br/>n'est pas arrivé ce matin.
              </h2>
              <p className="lead" style={{ color: "rgba(253,250,242,0.78)", marginBottom: 16 }}>
                Il vient d'habitude en trottinette. Aujourd'hui, dans le brouillard, un camion ne l'a pas vu.
              </p>
              <p className="lead" style={{ color: "rgba(253,250,242,0.78)" }}>
                Il est à l'hôpital. Et bientôt, son avocat vous demandera <strong style={{ color: "white" }}>votre DUERP et s'informera sur vos actions de prévention des risques routiers.</strong>
              </p>
              <div style={{ marginTop: 32 }}>
                <a className="btn btn-yellow" href="#" onClick={(e) => { e.preventDefault(); setPage("loi"); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
                  Lire ce que dit la loi <Icon name="arrow" size={18} stroke={2.5} />
                </a>
              </div>
            </div>
            <div className="problem-card">
              <div className="who">
                <div className="av">C</div>
                <div>
                  <div className="nm">Claude Berthier</div>
                  <div className="rl">Comptable · Trottinette · Tous les matins</div>
                </div>
              </div>
              <div className="quote">"Si j'avais su qu'il y aurait autant de brouillard ce matin, j'aurais laissé ma trottinette au garage !"</div>
              <div className="tx">
                Au civil, l'employeur peut être condamné pour <strong style={{ color: "white" }}>faute inexcusable</strong> s'il n'a pas pris les mesures de prévention nécessaires.
              </div>
              <div className="tx">
                Au pénal, c'est le délit de <strong style={{ color: "white" }}>manquement aux obligations de sécurité</strong>. La responsabilité du dirigeant peut être engagée.
              </div>
              <div style={{ marginTop: 28, padding: 18, background: "rgba(255,255,102,0.1)", borderRadius: 12, fontSize: 13, color: "rgba(253,250,242,0.85)" }}>
                <strong style={{ color: "var(--ms-yellow)" }}>⚠ Ce que la loi exige :</strong> évaluer, agir, documenter. Pas une fois, en continu. (Code du travail L.4121-1 à 5)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ THE SOLUTION : 3 steps ============ */}
      <section className="section" id="how">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 80 }}>
            <span className="eyebrow">La solution</span>
            <h2 className="h-display h2" style={{ margin: "16px auto", maxWidth: "22ch" }}>
              {copy.how.title}
            </h2>
            <p className="lead" style={{ maxWidth: 680, margin: "0 auto" }} dangerouslySetInnerHTML={{ __html: COPY.punchy.how.sub }}></p>
          </div>
          <div className="steps-grid">
            <div className="step">
              <div className="num">1</div>
              <h3>Vous abonnez vos salariés</h3>
              <p>Pas d'appli à télécharger, pas de formation en salle, pas de logiciel à installer. Vous établissez votre liste d'emails ou de numéros de mobile de vos collaborateurs</p>
            </div>
            <div className="step">
              <div className="num">2</div>
              <h3>On envoie au bon moment</h3>
              <p>Brouillard demain&nbsp;? Travaux dans les environs&nbsp;? Pot d'entreprise vendredi&nbsp;? Le message part automatiquement, ciblé sur le risque réel — par email ou SMS.</p>
            </div>
            <div className="step">
              <div className="num">3</div>
              <h3>Signé par vous</h3>
              <p>Vous signez systématiquement les messages et pouvez même les personnaliser à votre convenance. Ainsi vos salariés sont sûr de la provenance des messages de prévention et vous en avez une preuve tangible.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ MESSAGE TYPES showcase ============ */}
      <section className="section section-cream">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="msg-types-grid">
            <div>
              <span className="eyebrow">La preuve par 4 !</span>
              <h2 className="h-display h2" style={{ margin: "16px 0 24px", maxWidth: "16ch" }}>
                Des messages conçus pour que personne ne zappe.
              </h2>
              <p className="lead" style={{ marginBottom: 32 }}>
                Quiz ludiques, alertes locales déclenchées par la météo ou les travaux, messages signés par vous, affichettes à imprimer pour ceux qui n'ont ni mail ni mobile.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  { ic: "chat", t: "Quiz", s: "Question + réponse argumentée. Le truc qu'on lit jusqu'au bout." },
                  { ic: "cloud", t: "Alertes locales", s: "Météo, travaux, événements. Déclenchées au plus près du risque." },
                  { ic: "user", t: "Mot du patron", s: "Signé par le chef d'entreprise, avec sa photo. Ça change tout." },
                  { ic: "paper", t: "Affichettes", s: "Pour l'atelier, l'accueil, la salle de pause. Imprimables A4." },
                ].map((it, i) => (
                  <div key={i} style={{ display: "flex", gap: 16, padding: "14px 18px", background: "white", borderRadius: 14, border: "1px solid var(--ms-line)" }}>
                    <div style={{ width: 40, height: 40, borderRadius: 10, background: i % 2 === 0 ? "var(--ms-yellow)" : "var(--ms-blue)", color: i % 2 === 0 ? "var(--ms-brown)" : "white", display: "grid", placeItems: "center", flexShrink: 0 }}>
                      <Icon name={it.ic} size={20} stroke={2.2} />
                    </div>
                    <div>
                      <div style={{ fontWeight: 800, color: "var(--ms-brown)", marginBottom: 2 }}>{it.t}</div>
                      <div style={{ fontSize: 14, color: "var(--ms-brown-soft)", fontWeight: 500 }}>{it.s}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 24 }}>
                <a className="btn btn-dark" href="#" onClick={(e) => { e.preventDefault(); setPage("salarie"); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
                  Voir tous les exemples côté salarié <Icon name="arrow" size={18} stroke={2.5} />
                </a>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <PhoneMockup activeKey={activeKey} onSelectKey={setActiveKey} />
            </div>
          </div>
        </div>
      </section>

      {/* ============ WHY IT WORKS ============ */}
      <section className="section">
        <div className="container container-tight">
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span className="eyebrow">Pourquoi ça marche</span>
            <h2 className="h-display h2" style={{ margin: "16px auto", maxWidth: "20ch" }}>
              Ces 4 facteurs qui optimisent vos actions de prévention
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }} className="why-grid">
            {[
              { n: "01", t: "Au bon moment", d: "Des rappels sur la conduite en cas d'abscence de visibilité la veille d'une matinée de brouillard; une alerte travaux avant la fermeture des rues : la pertinence fait lire !" },
              { n: "02", t: "Sans perte de temps", d: "Pas de réunion, pas de formation à organiser, pas de DRH à mobiliser. Zéro minute consommée sur le temps de travail." },
              { n: "03", t: "Votre implication réelle", d: "Vos salariés savent que c'est leur patron qui s'engage personnellement. Vous valorisez ainsi votre démarche RSE." },
              { n: "04", t: "Une preuve opposable", d: "Chaque envoi est tracé, daté, archivé. En cas de contrôle ou de litige, vous avez la preuve que vous avez agi en continu — et pas seulement une fois par an." },
            ].map((it) => (
              <div key={it.n} style={{ background: "white", border: "1.5px solid var(--ms-line)", borderRadius: 16, padding: 32 }}>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 36, color: "var(--ms-yellow)", letterSpacing: "-0.04em", lineHeight: 1, WebkitTextStroke: "1.5px var(--ms-brown)" }}>{it.n}</div>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 22, letterSpacing: "-0.02em", margin: "16px 0 10px", color: "var(--ms-brown)" }}>{it.t}</h3>
                <p style={{ margin: 0, fontSize: 15, lineHeight: 1.55, color: "var(--ms-brown-soft)" }}>{it.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PRICING / PILOTE ============ */}
      <section className="section section-cream" id="pilote">
        <div className="container">
          <div className="price-grid">
            <div>
              <span className="eyebrow">Offre de lancement 2026</span>
              <h2 className="h-display h2" style={{ margin: "16px 0 24px", maxWidth: "16ch" }}>
                Devenez abonné pilote.
              </h2>
              <p className="lead" style={{ marginBottom: 28 }}>
                Vous faites partie des 50 premières entreprises&nbsp;? Vous bénéficiez de <strong>3 mois offerts</strong>, d'un onboarding personnalisé, et de la possibilité d'influencer le contenu envoyé à vos salariés.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}>
                {[
                  "Engagement minimum : 6 mois (puis sans engagement)",
                  "Affichettes A4 envoyées au format imprimable",
                  "Votre signature & photo intégrées à chaque message",
                  "Tableau de bord des envois pour votre DUERP",
                ].map((it, i) => (
                  <div key={i} style={{ display: "flex", gap: 12, alignItems: "start" }}>
                    <div style={{ width: 24, height: 24, borderRadius: 999, background: "var(--ms-yellow)", border: "2px solid var(--ms-brown)", display: "grid", placeItems: "center", flexShrink: 0 }}>
                      <Icon name="check" size={14} stroke={3} color="var(--ms-brown)" />
                    </div>
                    <div style={{ fontWeight: 600, color: "var(--ms-brown)" }}>{it}</div>
                  </div>
                ))}
              </div>
              <a className="btn btn-primary btn-lg" href="mailto:hello@mobisur.fr">
                Réserver une démo de 20 min <Icon name="arrow" size={18} stroke={2.5} />
              </a>
            </div>
            <div className="price-card">
              <div className="pilot-badge">3 mois<br/>offerts</div>
              <div className="pre">Tarif transparent</div>
              <div className="big">
                2&nbsp;€ HT<span className="unit"> <br></br> / salarié / mois</span>
              </div>
              <div style={{ fontSize: 14, color: "var(--ms-brown-soft)", fontWeight: 600 }}>
                soit 24 € HT par salarié et par an, à peine le prix d'un café !.
              </div>
              <div style={{ borderTop: "1.5px dashed var(--ms-brown)", paddingTop: 20, fontSize: 13, color: "var(--ms-brown-soft)", fontWeight: 700 }}>
                <strong style={{ color: "var(--ms-brown)" }}>Exemple :</strong> entreprise de 25 salariés → 50&nbsp;€ / mois. Pendant 3 mois en 2026, c'est offert.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CTA STRIP ============ */}
      <section className="cta-strip">
        <div className="container container-tight">
          <h2>Vos salariés prennent la route. Vous prenez les devants.</h2>
          <p>Rejoignez les pilotes. 3 mois offerts en 2026.</p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a className="btn btn-dark btn-lg" href="mailto:hello@mobisur.fr">
              Devenir pilote <Icon name="arrow" size={18} stroke={2.5} />
            </a>
            <a className="btn btn-ghost btn-lg" href="#" onClick={(e) => { e.preventDefault(); setPage("loi"); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
              Ce que dit la loi
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ============================================================
   Copy variants — switch via tone tweak
   ============================================================ */
const COPY = {
  punchy: {
    hero: {
      eyebrow: "Prévention routière des PME",
      titleA: "Vos salariés",
      titleAccent: "prennent la route.",
      titleB: "Vous prenez les devants.",
      sub: "À pied, à vélo, à moto ou au volant, la route est la 1ère cause d'accident de mortalité par accident du travail. Avec MobiSûr, vous aurez fait ce qu'il fallait pour l'éviter.",
    },
    stat: {
      title: "L'accident du travail le plus fréquent ne survient pas là où l'on croit!",
      sub: "Il se passe sur la route, entre la maison et le travail, ou pendant un déplacement profesionnel. Et dans ce cas, aussi c'est vous qu'on viendra chercher.",
    },
    how: {
      title: "Vos salariés reçoivent les bons messages au bon moment.",
      sub: `Sans réunion. Sans formation. Sans temps perdu.<br />Et vous gardez la preuve de votre démarche.`,
    },
  },
  serious: {
    hero: {
      eyebrow: "Solution de prévention pour les PME",
      titleA: "Protéger vos salariés.",
      titleAccent: "Protéger l'entreprise.",
      titleB: "En continu.",
      sub: "L'accident de la route est la première cause de mortalité au travail. MobiSûr accompagne les dirigeants de PME dans une démarche de prévention permanente, traçable et personnalisée.",
    },
    stat: {
      title: "Le risque routier dépasse tous les autres risques professionnels.",
      sub: "Et la responsabilité juridique du dirigeant — civile comme pénale — peut être engagée à chaque accident lié au travail.",
    },
    how: {
      title: "Un dispositif de sensibilisation permanente, sans charge opérationnelle.",
      sub: "Conforme au DUERP. Documenté. Personnalisé par votre direction.",
    },
  },
  warm: {
    hero: {
      eyebrow: "Pour vous, pour eux",
      titleA: "Tous les matins,",
      titleAccent: "Claude prend la route.",
      titleB: "Vous y pensez aussi ?",
      sub: "Vos salariés — Claude, Jeremy, Noémie — prennent tous une petite dose de risque pour venir travailler. MobiSûr leur glisse les bons réflexes au bon moment, en votre nom.",
    },
    stat: {
      title: "Le risque qu'on oublie est aussi le plus fréquent.",
      sub: "Et c'est vous, le dirigeant, qui restez moralement et juridiquement responsable de ce qui arrive à vos équipes en allant au travail.",
    },
    how: {
      title: "Un petit message au bon moment vaut mieux qu'un grand séminaire annuel.",
      sub: "Vos salariés sentent que vous y pensez. Vous, vous documentez votre démarche.",
    },
  },
};

window.HomePage = HomePage;
