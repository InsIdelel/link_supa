/* MobiSûr — Shared components & icons */

const PAGES = [
  { id: "home", label: "Le service" },
  { id: "salarie", label: "Côté salarié" },
  { id: "loi", label: "Loi & DUERP" },
];

function Header({ page, setPage }) {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <button className="site-logo" onClick={() => setPage("home")} aria-label="Accueil MobiSûr">
          <img src="assets/logo-mobisur.png" alt="MobiSûr — Prévention routière des PME" />
        </button>
        <nav className="site-nav">
          {PAGES.map((p) => (
            <button
              key={p.id}
              className={page === p.id ? "is-active" : ""}
              onClick={() => setPage(p.id)}
            >
              {p.label}
            </button>
          ))}
          <a className="btn btn-primary btn-sm" href="#pilote" onClick={(e) => { e.preventDefault(); setPage("home"); setTimeout(() => document.getElementById("pilote")?.scrollIntoView({ behavior: "smooth", block: "start" }), 50); }}>
            Devenir pilote
          </a>
        </nav>
      </div>
    </header>
  );
}

function Footer({ setPage }) {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <img src="assets/logo-mobisur.png" alt="MobiSûr" style={{ height: 44, filter: "brightness(0) invert(1)", marginBottom: 18 }} />
            <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: "rgba(253,250,242,0.7)", maxWidth: 320 }}>
              La prévention routière des PME, livrée aux salariés au bon moment, signée par leur direction. Pour 2 €&nbsp;/&nbsp;salarié&nbsp;/&nbsp;mois.
            </p>
          </div>
          <div className="footer-col">
            <h4>Le site</h4>
            <ul>
              <li><a href="#" onClick={(e) => { e.preventDefault(); setPage("home"); }}>Le service</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); setPage("salarie"); }}>Côté salarié</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); setPage("loi"); }}>Loi & DUERP</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Ressources</h4>
            <ul>
              <li><a href="#">Brochure PDF</a></li>
              <li><a href="#">Affichettes</a></li>
              <li><a href="#">FAQ employeur</a></li>
              <li><a href="#">Modèles de DUERP</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:hello@mobisur.fr">hello@mobisur.fr</a></li>
              <li><a href="tel:+33180000000">01 80 00 00 00</a></li>
              <li style={{ color: "rgba(253,250,242,0.6)" }}>Paris — France</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 MobiSûr — Tous droits réservés</span>
          <span>Mentions légales · CGV · Politique de confidentialité</span>
        </div>
      </div>
    </footer>
  );
}

function Marquee() {
  const items = [
    "Brouillard demain matin Île-de-France",
    "Travaux rue Jean-Jaurès, Saint-Martin",
    "Quiz : giratoire vs rond-point ?",
    "Pluie verglaçante annoncée à Lyon",
    "Pot du service commercial vendredi",
    "Distance de sécurité minimum : 1m50",
  ];
  const loop = [...items, ...items];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {loop.map((t, i) => (
          <span key={i}>
            <span className="marquee-dot">●</span> {t}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ============================================================
   Phone mockup — rotating between message types
   ============================================================ */
function PhoneMockup({ activeKey, onSelectKey, showSwitcher = true }) {
  const messages = {
    quiz: (
      <div className="phone-message is-active">
        <div className="phone-bubble">
          <div className="who">Quiz du jour</div>
          <div>Quelle est la <strong>différence</strong> entre un giratoire et un rond-point&nbsp;?</div>
          <div style={{ marginTop: 10, fontSize: 12, color: "var(--ms-muted)" }}>3 réponses possibles · 30 secondes</div>
        </div>
        <div className="phone-bubble from-yellow">
          <strong>Vous êtes très fort(e)</strong> si vous savez répondre 💪
        </div>
      </div>
    ),
    weather: (
      <div className="phone-message is-active">
        <div className="phone-bubble from-yellow">
          <div className="who">⚠️ Alerte météo · Demain matin</div>
          <strong>Brouillard épais annoncé</strong> entre 6h et 9h sur votre secteur.
        </div>
        <div className="phone-bubble">
          En trottinette&nbsp;? Pensez aux <strong>stickers rétro-réfléchissants</strong> sur le casque et les jantes. À vélo, allumez la lumière avant <em>même de jour</em>.
        </div>
      </div>
    ),
    boss: (
      <div className="phone-message is-active">
        <div className="phone-bubble from-blue">
          <div className="who" style={{ opacity: 0.85 }}>Message de Gérard, votre directeur</div>
          Bravo au service commercial pour ce chiffre d'affaires&nbsp;! On organise un pot ce soir 18h.
        </div>
        <div className="phone-bubble">
          <strong>Petit rappel</strong> : l'alcoolémie sur la route au retour peut être mortelle. Il y aura aussi <strong>du jus de pomme</strong> 🍎
        </div>
      </div>
    ),
    local: (
      <div className="phone-message is-active">
        <div className="phone-bubble from-yellow">
          <div className="who">Mairie · Travaux à venir</div>
          <strong>Rue Jean-Jaurès</strong> coupée à partir de lundi pendant 31 jours.
        </div>
        <div className="phone-bubble">
          Évitez le secteur — vous pouvez perdre jusqu'à <strong>10&nbsp;min</strong> à la traversée. Ou partez 10&nbsp;min plus tôt 😉
        </div>
      </div>
    ),
  };

  const order = ["quiz", "weather", "boss", "local"];
  const meta = {
    quiz: { name: "Quiz prévention", sub: "Ludique · 1×/sem.", initial: "Q" },
    weather: { name: "Alerte météo", sub: "Au moment du risque", initial: "M" },
    boss: { name: "Mot du directeur", sub: "Gérard Grison", initial: "G" },
    local: { name: "Travaux à proximité", sub: "Géolocalisé", initial: "L" },
  };

  return (
    <div>
      <div className="phone">
        <div className="phone-notch"></div>
        <div className="phone-screen">
          <div className="phone-statusbar">
            <span>9:41</span>
            <span>● ● ●</span>
          </div>
          <div className="phone-app-bar" key={activeKey}>
            <div className="avatar">{meta[activeKey].initial}</div>
            <div className="meta">
              <div className="name">{meta[activeKey].name}</div>
              <div className="sub">{meta[activeKey].sub}</div>
            </div>
            <div className="time">à l'instant</div>
          </div>
          <div className="phone-content">
            {order.map((k) => (
              <div
                key={k}
                className={`phone-message ${activeKey === k ? "is-active" : ""}`}
                style={{ pointerEvents: activeKey === k ? "auto" : "none" }}
              >
                {messages[k].props.children}
              </div>
            ))}
          </div>
        </div>
      </div>

      {showSwitcher && (
        <div className="phone-switcher">
          {order.map((k) => (
            <button
              key={k}
              className={`phone-chip ${activeKey === k ? "is-active" : ""}`}
              onClick={() => onSelectKey(k)}
            >
              <span className="dot"></span> {meta[k].name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

/* ============================================================
   Icons (inline)
   ============================================================ */
function Icon({ name, size = 22, color = "currentColor", stroke = 2 }) {
  const props = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: stroke, strokeLinecap: "round", strokeLinejoin: "round" };
  const paths = {
    arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
    check: <path d="M4 12l5 5L20 6" />,
    cloud: <path d="M7 18h10a4 4 0 100-8 5 5 0 00-9.6-1.5A3.5 3.5 0 007 18z" />,
    bolt: <path d="M13 3L4 14h7l-1 7 9-11h-7l1-7z" />,
    shield: <path d="M12 3l8 3v6c0 4.5-3.5 8-8 9-4.5-1-8-4.5-8-9V6l8-3z" />,
    map: <><path d="M9 4l-6 2v14l6-2 6 2 6-2V4l-6 2-6-2z" /><path d="M9 4v14M15 6v14" /></>,
    chat: <path d="M21 12c0 4-4 7-9 7a10 10 0 01-3-.5L3 20l1.5-5A7 7 0 013 12c0-4 4-7 9-7s9 3 9 7z" />,
    sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" /></>,
    paper: <><path d="M14 3H6a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2V9z" /><path d="M14 3v6h6" /></>,
    user: <><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0116 0" /></>,
    scale: <><path d="M12 3v18M5 7l-3 6c0 1.5 1.5 3 3 3s3-1.5 3-3l-3-6zM19 7l-3 6c0 1.5 1.5 3 3 3s3-1.5 3-3l-3-6z" /><path d="M3 21h18" /></>,
    pin: <><path d="M12 22s8-7 8-13a8 8 0 10-16 0c0 6 8 13 8 13z" /><circle cx="12" cy="9" r="3" /></>,
  };
  return <svg {...props}>{paths[name] || paths.arrow}</svg>;
}

/* ============================================================
   Mini map SVG — for alert
   ============================================================ */
function MiniMap() {
  return (
    <svg viewBox="0 0 400 240" preserveAspectRatio="none">
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M40 0H0V40" fill="none" stroke="#c7d6b3" strokeWidth="0.5"/>
        </pattern>
      </defs>
      <rect width="400" height="240" fill="url(#grid)" />
      {/* roads */}
      <path d="M-20 80 Q 100 90 200 70 T 420 60" stroke="white" strokeWidth="18" fill="none" />
      <path d="M-20 80 Q 100 90 200 70 T 420 60" stroke="#a3b8a0" strokeWidth="1" fill="none" strokeDasharray="6 6" />
      <path d="M50 -10 Q 60 80 80 130 T 70 250" stroke="white" strokeWidth="14" fill="none" />
      <path d="M280 -10 L 300 250" stroke="white" strokeWidth="12" fill="none" />
      <path d="M-20 180 Q 200 200 420 170" stroke="white" strokeWidth="10" fill="none" />
      {/* closed road */}
      <path d="M120 -10 L 200 250" stroke="#280c10" strokeWidth="10" fill="none" strokeDasharray="14 8" opacity="0.85" />
      {/* sign */}
      <g transform="translate(170 110)">
        <circle r="22" fill="#ffff66" stroke="#280c10" strokeWidth="3" />
        <text textAnchor="middle" dominantBaseline="central" fontFamily="Nunito Sans, sans-serif" fontWeight="900" fontSize="20" fill="#280c10">!</text>
      </g>
      {/* pins */}
      <g transform="translate(310 150)">
        <circle r="9" fill="#3633d2" stroke="white" strokeWidth="3" />
      </g>
      <g transform="translate(60 50)">
        <circle r="6" fill="#280c10" />
      </g>
    </svg>
  );
}

Object.assign(window, { Header, Footer, Marquee, PhoneMockup, Icon, MiniMap, PAGES });
