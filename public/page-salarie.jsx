/* MobiSûr — Page Salarié (ce qu'on reçoit) */

function SalariePage({ setPage, t }) {
  const [activeType, setActiveType] = React.useState("quiz");
  const [showCompare, setShowCompare] = React.useState(true);

  const types = [
    { key: "quiz", label: "Quiz prévention", n: "01" },
    { key: "local", label: "Alerte locale", n: "02" },
    { key: "boss", label: "Mot du chef", n: "03" },
    { key: "poster", label: "Affichettes", n: "04" },
  ];

  return (
    <main>
      {/* Hero */}
      <section className="sal-hero">
        <div className="container">
          <div className="sal-hero-inner">
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "8px 14px", background: "rgba(255,255,102,0.14)", color: "var(--ms-yellow)", borderRadius: 999, fontWeight: 800, fontSize: 13, letterSpacing: "0.12em", textTransform: "uppercase", border: "1px solid rgba(255,255,102,0.3)", marginBottom: 22 }}>
                <span style={{ width: 8, height: 8, borderRadius: 999, background: "var(--ms-yellow)" }}></span>
                Côté salarié
              </div>
              <h1>
                Voici ce que <span className="y">Claude, Noémie</span><br/>
                et Jeremy<br/>vont recevoir.
              </h1>
              <p>
                Quatre formats. Aucune obligation de lire — mais conçus pour qu'on lise quand même. Toujours signés par leur direction. Toujours déclenchés par un vrai contexte (météo, travaux, événement).
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a className="btn btn-yellow" href="#types" onClick={(e) => { e.preventDefault(); document.getElementById("types")?.scrollIntoView({ behavior: "smooth" }); }}>
                  Voir les 4 formats <Icon name="arrow" size={18} stroke={2.5} />
                </a>
                <a className="btn" href="#" style={{ background: "white", color: "var(--ms-blue)" }} onClick={(e) => { e.preventDefault(); setPage("home"); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
                  Retour côté chef
                </a>
              </div>
            </div>
            <div style={{ position: "relative" }}>
              <div style={{ display: "flex", gap: 16, justifyContent: "center", alignItems: "flex-end", flexWrap: "wrap" }}>
                <div style={{ background: "white", borderRadius: 14, padding: 18, boxShadow: "0 30px 60px rgba(0,0,0,0.3)", maxWidth: 260, transform: "rotate(-3deg)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                    <div style={{ width: 28, height: 28, borderRadius: 6, background: "var(--ms-yellow)", display: "grid", placeItems: "center", color: "var(--ms-brown)", fontWeight: 900, fontSize: 13 }}>M</div>
                    <div style={{ fontSize: 11, color: "var(--ms-muted)", fontWeight: 700 }}>MobiSûr · maintenant</div>
                  </div>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 15, color: "var(--ms-brown)", lineHeight: 1.2, marginBottom: 6 }}>Brouillard demain matin</div>
                  <div style={{ fontSize: 12, color: "var(--ms-brown-soft)", lineHeight: 1.45 }}>Pensez aux stickers rétro-réfléchissants sur votre trottinette…</div>
                </div>
                <div style={{ background: "var(--ms-yellow)", border: "2px solid var(--ms-brown)", borderRadius: 14, padding: 18, maxWidth: 260, transform: "rotate(2deg) translateY(-20px)" }}>
                  <div style={{ fontSize: 11, color: "var(--ms-brown)", fontWeight: 800, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 8 }}>SMS · Quiz du jour</div>
                  <div style={{ fontSize: 13, color: "var(--ms-brown)", lineHeight: 1.4, fontWeight: 600 }}>Différence entre <strong>giratoire</strong> et <strong>rond-point</strong>&nbsp;? La réponse pourrait vous surprendre…</div>
                </div>
                <div style={{ background: "var(--ms-brown)", color: "var(--ms-cream)", borderRadius: 14, padding: 18, maxWidth: 250, transform: "rotate(-1deg) translateY(10px)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                    <div style={{ width: 36, height: 36, borderRadius: 999, background: "var(--ms-yellow)", color: "var(--ms-brown)", display: "grid", placeItems: "center", fontWeight: 900 }}>GG</div>
                    <div>
                      <div style={{ fontWeight: 800, fontSize: 12 }}>Gérard Grison</div>
                      <div style={{ fontSize: 10, opacity: 0.6 }}>directeur</div>
                    </div>
                  </div>
                  <div style={{ fontSize: 12, lineHeight: 1.45, opacity: 0.85 }}>Bravo au service commercial pour ce chiffre… Pensez au jus de pomme.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs + dynamic content */}
      <section className="section" id="types">
        <div className="container">
          <div className="msg-tabs">
            {types.map((tp) => (
              <button
                key={tp.key}
                className={`msg-tab ${activeType === tp.key ? "is-active" : ""}`}
                onClick={() => setActiveType(tp.key)}
              >
                <span className="num">{tp.n}</span>
                {tp.label}
              </button>
            ))}
            <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 10, paddingRight: 8 }}>
              <span style={{ fontSize: 13, color: "var(--ms-brown-soft)", fontWeight: 700 }}>Avant / Après</span>
              <button
                onClick={() => setShowCompare(!showCompare)}
                style={{
                  background: showCompare ? "var(--ms-blue)" : "var(--ms-line)",
                  width: 40, height: 22, borderRadius: 999, border: "none", position: "relative", cursor: "pointer", transition: "background 0.2s",
                }}
                aria-label="Toggle avant/après"
              >
                <span style={{ position: "absolute", top: 3, left: showCompare ? 21 : 3, width: 16, height: 16, borderRadius: 999, background: "white", transition: "left 0.2s" }}></span>
              </button>
            </div>
          </div>

          <div className="msg-stage">
            <div className="msg-stage-left">
              {activeType === "quiz" && <MetaQuiz />}
              {activeType === "local" && <MetaLocal />}
              {activeType === "boss" && <MetaBoss />}
              {activeType === "poster" && <MetaPoster />}
              {showCompare && (
                <div className="compare">
                  <div className="compare-card bad">
                    <div className="lab">Sans MobiSûr</div>
                    <p>{compareData[activeType].bad}</p>
                  </div>
                  <div className="compare-card good">
                    <div className="lab">Avec MobiSûr</div>
                    <p>{compareData[activeType].good}</p>
                  </div>
                </div>
              )}
            </div>

            <div className="render-frame">
              {activeType === "quiz" && <RenderQuiz />}
              {activeType === "local" && <RenderLocal />}
              {activeType === "boss" && <RenderBoss />}
              {activeType === "poster" && <RenderPoster />}
            </div>
          </div>
        </div>
      </section>

      {/* Rhythm */}
      <section className="section section-cream">
        <div className="container container-tight">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="eyebrow">Le rythme</span>
            <h2 className="h-display h2" style={{ margin: "16px auto", maxWidth: "22ch" }}>
              Au bon moment. Jamais plus.
            </h2>
            <p className="lead" style={{ maxWidth: 680, margin: "0 auto" }}>
              On ne spam pas vos salariés. Un message ne part que s'il y a une vraie raison — météo, travaux, contexte d'entreprise.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14 }} className="rhythm-grid">
            {[
              { d: "Lun", e: "—", c: "Pas de risque identifié" },
              { d: "Mar", e: "Quiz", c: "Distance de sécurité — vélo / voiture" },
              { d: "Mer", e: "—", c: "Pas de risque identifié" },
              { d: "Jeu", e: "Alerte", c: "Brouillard annoncé vendredi matin" },
              { d: "Ven", e: "Pot", c: "Message du chef — pensez au retour" },
              { d: "Sam", e: "—", c: "" },
              { d: "Dim", e: "—", c: "" },
              { d: "Lun", e: "Travaux", c: "Rue Jean-Jaurès coupée 31 jours" },
            ].map((d, i) => (
              <div key={i} style={{
                background: d.e === "—" ? "white" : "var(--ms-yellow)",
                border: d.e === "—" ? "1.5px solid var(--ms-line)" : "1.5px solid var(--ms-brown)",
                borderRadius: 14,
                padding: 18,
                minHeight: 130,
                opacity: d.e === "—" ? 0.55 : 1,
              }}>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 13, color: "var(--ms-brown)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 6 }}>{d.d}</div>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 20, letterSpacing: "-0.02em", color: "var(--ms-brown)", marginBottom: 8 }}>{d.e}</div>
                <div style={{ fontSize: 12, color: "var(--ms-brown-soft)", lineHeight: 1.4, fontWeight: 500 }}>{d.c}</div>
              </div>
            ))}
          </div>
          <p style={{ textAlign: "center", marginTop: 36, fontSize: 14, color: "var(--ms-brown-soft)", fontWeight: 600 }}>
            En moyenne <strong style={{ color: "var(--ms-brown)" }}>2 à 4 messages par mois</strong> et par salarié. Assez pour que l'habitude s'installe. Pas assez pour qu'on s'en agace.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-strip">
        <div className="container container-tight">
          <h2>Ce qu'ils reçoivent vient d'avoir un sens. Et c'est signé de votre main.</h2>
          <p>Activez le service pour vos équipes en 5 minutes.</p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a className="btn btn-dark btn-lg" href="#" onClick={(e) => { e.preventDefault(); setPage("home"); setTimeout(() => document.getElementById("pilote")?.scrollIntoView({ behavior: "smooth" }), 50); }}>
              Devenir pilote <Icon name="arrow" size={18} stroke={2.5} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ============================================================
   Meta panels (left column) per type
   ============================================================ */
function MetaQuiz() {
  return (
    <div className="msg-meta-card">
      <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "4px 10px", background: "var(--ms-blue)", color: "white", borderRadius: 999, fontSize: 11, fontWeight: 800, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 14 }}>
        Format ludique
      </div>
      <h3>Quiz prévention</h3>
      <p>Une question, trois réponses, une explication argumentée. Le salarié veut savoir s'il avait la bonne réponse — il lit jusqu'au bout.</p>
      <ul className="msg-meta-list">
        <li>Envoyé par email (HTML) ou SMS</li>
        <li>Rythme : 1 à 2 par mois maximum</li>
        <li>Thèmes : code de la route, vélo, trottinette, distances</li>
        <li>Toujours signé par votre directeur d'établissement</li>
      </ul>
    </div>
  );
}

function MetaLocal() {
  return (
    <div className="msg-meta-card">
      <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "4px 10px", background: "var(--ms-brown)", color: "var(--ms-yellow)", borderRadius: 999, fontSize: 11, fontWeight: 800, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 14 }}>
        Déclenché par le contexte
      </div>
      <h3>Alerte locale</h3>
      <p>Travaux, météo, événement de quartier — le message part automatiquement quand un risque est identifié à proximité de votre établissement.</p>
      <ul className="msg-meta-list">
        <li>Sources : préfecture, mairie, Météo-France</li>
        <li>Géolocalisation à l'adresse de l'établissement</li>
        <li>Délai : 12 à 24 h avant l'événement</li>
        <li>Carte intégrée + conseils d'itinéraire</li>
      </ul>
    </div>
  );
}

function MetaBoss() {
  return (
    <div className="msg-meta-card">
      <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "4px 10px", background: "var(--ms-yellow)", color: "var(--ms-brown)", borderRadius: 999, fontSize: 11, fontWeight: 800, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 14, border: "1.5px solid var(--ms-brown)" }}>
        Signé par la direction
      </div>
      <h3>Mot du chef</h3>
      <p>Un message court, personnel, en lien avec un événement interne — un pot, un objectif atteint, une période de congés. La direction signe et ajoute son mot.</p>
      <ul className="msg-meta-list">
        <li>Vous validez chaque envoi en 1 clic</li>
        <li>Vous pouvez ajouter votre propre paragraphe</li>
        <li>Photo + nom + titre intégrés</li>
        <li>Format email avec mise en page lisible</li>
      </ul>
    </div>
  );
}

function MetaPoster() {
  return (
    <div className="msg-meta-card">
      <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "4px 10px", background: "var(--ms-blue)", color: "white", borderRadius: 999, fontSize: 11, fontWeight: 800, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 14 }}>
        Sans smartphone, sans email
      </div>
      <h3>Affichettes A4</h3>
      <p>Pour les ateliers, les vestiaires, l'accueil — partout où vos salariés ne sont pas devant un écran. Un nouveau visuel par mois, prêt à imprimer.</p>
      <ul className="msg-meta-list">
        <li>Format A4 imprimable, fichier PDF</li>
        <li>Logo MobiSûr + votre logo en pied</li>
        <li>Un thème par mois (priorités, distances, etc.)</li>
        <li>Tirage suggéré : 2 à 3 par site</li>
      </ul>
    </div>
  );
}

const compareData = {
  quiz: {
    bad: "Une affiche du code de la route fade collée dans la salle de pause. Personne ne la lit plus depuis 6 mois.",
    good: "Une question piège qui chatouille la curiosité, et l'envie d'avoir la bonne réponse avant les collègues.",
  },
  local: {
    bad: "Le salarié découvre les travaux le matin même, en arrivant en retard et énervé. Il roule plus vite pour rattraper.",
    good: "L'info la veille au soir. Le salarié part 10 minutes plus tôt, calme. Pas de stress, pas d'excès.",
  },
  boss: {
    bad: "Un mail de service automatique au sujet de la sécurité routière. Marqué 'lu', jamais ouvert.",
    good: "Un message du directeur lui-même, avec son visage, qui pense à la sécurité de son équipe le jour d'un pot.",
  },
  poster: {
    bad: "Aucun support pour les 30 % de salariés sans mail pro ni mobile renseigné. Trou de raquette dans la prévention.",
    good: "Une affichette claire en salle de pause. Toute l'équipe voit le même message, peu importe son téléphone.",
  },
};

/* ============================================================
   Right-column renderings
   ============================================================ */
function RenderQuiz() {
  const [revealed, setRevealed] = React.useState(false);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--ms-blue)" }}>Aperçu email reçu</span>
        <button className="btn btn-ghost btn-sm" onClick={() => setRevealed(!revealed)}>
          {revealed ? "Reset" : "Voir la réponse"}
        </button>
      </div>
      <div className="quiz-r">
        <div className="pre">Quiz MobiSûr · Mardi 12 mars</div>
        <h3>Quelle est la différence entre un giratoire et un rond-point ?</h3>
        <ul className="quiz-options">
          <li className={revealed ? "" : ""}>
            <span className="num">1</span>
            <div>Le carrefour giratoire possède un terre-plein central végétalisé, pas le rond-point.</div>
          </li>
          <li>
            <span className="num">2</span>
            <div>Il n'y a aucune différence — c'est la même chose en France.</div>
          </li>
          <li className={revealed ? "correct" : ""}>
            <span className="num">3</span>
            <div>Le rond-point implique "priorité à droite", le giratoire implique "priorité aux véhicules déjà engagés".</div>
          </li>
        </ul>
        {revealed && (
          <div style={{ marginTop: 20, padding: 16, background: "rgba(255,255,102,0.12)", border: "1px solid rgba(255,255,102,0.3)", borderRadius: 12, fontSize: 13, lineHeight: 1.55, color: "rgba(253,250,242,0.9)" }}>
            <strong style={{ color: "var(--ms-yellow)", display: "block", marginBottom: 6 }}>✓ Bonne réponse : 3</strong>
            Le giratoire est annoncé par un panneau "cédez le passage" — priorité aux véhicules <em>déjà engagés</em>. Le rond-point applique la règle classique de priorité à droite.
          </div>
        )}
      </div>
      <SignatureCard tone="blue" />
    </div>
  );
}

function RenderLocal() {
  return (
    <div className="alert-r">
      <div className="alert-r-hdr">
        <div className="icon"><Icon name="pin" size={26} color="var(--ms-yellow)" stroke={2.2} /></div>
        <div>
          <div className="who">La commune de Saint-Martin nous signale</div>
          <div className="from">MobiSûr · Reçu hier à 18h32 · Pour votre trajet de demain</div>
        </div>
      </div>
      <div className="alert-r-map"><MiniMap /></div>
      <div className="alert-r-body">
        <p style={{ marginTop: 0 }}>Les travaux de réfection de la <strong>rue Jean-Jaurès</strong> commencent cette semaine&nbsp;:</p>
        <ul>
          <li>la rue sera <strong>fermée à la circulation jusqu'au 31 mars</strong></li>
          <li>la durée de traversée du centre-ville augmentera d'environ <strong>10 minutes</strong></li>
          <li>contourner par le quartier des Halles (D 20) est conseillé</li>
        </ul>
        <div style={{ marginTop: 18, padding: 14, background: "var(--ms-yellow)", borderRadius: 10, fontSize: 14, fontWeight: 600, color: "var(--ms-brown)" }}>
          <strong>Souvenez-vous :</strong> la limitation à 30 km/h est en vigueur sur toute la commune.
        </div>
      </div>
      <SignatureCard tone="cream" boxed />
    </div>
  );
}

function RenderBoss() {
  return (
    <div className="email-r">
      <div className="email-r-hdr">
        <div className="from">
          <div className="av">GG</div>
          <div>
            <div className="nm">Gérard Grison via MobiSûr</div>
            <div className="ad">gerard.grison@entreprise.fr</div>
          </div>
        </div>
        <div className="sub">Bravo au service commercial — et un mot pour ce soir</div>
      </div>
      <div className="email-r-body">
        <h4>Message de la direction</h4>
        <ul>
          <li>Mon petit doigt m'a dit que vous organisez un pot ce soir à 18 h pour fêter le résultat de la semaine.</li>
          <li>Un grand bravo à tous. Fêtez cela dignement.</li>
          <li>Mais attention à l'alcool — vous avez de la route pour rentrer.</li>
        </ul>
        <p><strong>Selon mes informations :</strong> il y aura du jus de pomme et du jus d'orange. Pensez-y !</p>
        <SignatureCard tone="cream" boxed name="Gérard Grison" title="directeur d'établissement" rappel />
      </div>
    </div>
  );
}

function RenderPoster() {
  const [poster, setPoster] = React.useState("distances");
  const posters = {
    distances: { src: "assets/affichette-distances.png", t: "Distances de sécurité" },
    pieton: { src: "assets/affichette-pieton.png", t: "Priorités piéton" },
    autoroute: { src: "assets/affichette-autoroute.png", t: "Entrée d'autoroute" },
  };
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
        <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--ms-blue)" }}>Format A4 imprimable</span>
        <div style={{ display: "flex", gap: 8 }}>
          {Object.entries(posters).map(([k, v]) => (
            <button
              key={k}
              onClick={() => setPoster(k)}
              style={{
                background: poster === k ? "var(--ms-brown)" : "white",
                color: poster === k ? "var(--ms-yellow)" : "var(--ms-brown)",
                border: "1.5px solid var(--ms-brown)",
                padding: "6px 12px",
                borderRadius: 999,
                fontWeight: 800,
                fontSize: 12,
                cursor: "pointer",
              }}
            >
              {v.t}
            </button>
          ))}
        </div>
      </div>
      <div className="poster-r">
        <img src={posters[poster].src} alt={posters[poster].t} />
      </div>
      <div style={{ marginTop: 18, fontSize: 13, color: "var(--ms-brown-soft)", fontWeight: 600, textAlign: "center" }}>
        Un nouveau visuel par mois, livré au format PDF — à imprimer et apposer dans vos locaux.
      </div>
    </div>
  );
}

function SignatureCard({ tone = "cream", boxed = false, name = "Gérard Grison", title = "directeur d'établissement", rappel = false }) {
  return (
    <div className={"signature-card"} style={!boxed ? { marginTop: 0, background: "white", borderRadius: 0, borderLeft: "0", borderTop: "1px solid var(--ms-line)", paddingTop: 20 } : {}}>
      <div className="photo">{name.split(" ").map((w) => w[0]).join("")}</div>
      <div>
        <div className="nm">{name},</div>
        <div className="ti">{title}</div>
      </div>
      {rappel && (
        <div className="rappel">
          <strong>Rappel</strong> : vous aussi, utilisez dans votre signature de mail le message ci-dessous, pour inviter vos visiteurs à rester prudents lorsqu'ils viennent vous voir.
        </div>
      )}
    </div>
  );
}

window.SalariePage = SalariePage;
