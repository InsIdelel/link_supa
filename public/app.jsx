/* MobiSûr — Main app */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "tone": "punchy",
  "palette": ["#3633d2", "#ffff66", "#280c10"],
  "density": "regular",
  "heroAutoRotate": true,
  "heroBgYellow": true,
  "rounded": "comfy",
  "marqueeOn": true
}/*EDITMODE-END*/;

function applyTheme(t) {
  const r = document.documentElement.style;
  const [blue, yellow, brown] = t.palette || ["#3633d2", "#ffff66", "#280c10"];
  r.setProperty("--ms-blue", blue);
  r.setProperty("--ms-yellow", yellow);
  r.setProperty("--ms-brown", brown);

  const densityMap = { compact: 0.78, regular: 1, comfy: 1.18 };
  r.setProperty("--density-scale", densityMap[t.density] || 1);

  const roundedMap = {
    sharp: { sm: "4px", md: "6px", lg: "10px", xl: "14px" },
    comfy: { sm: "8px", md: "14px", lg: "22px", xl: "32px" },
    pill: { sm: "16px", md: "24px", lg: "36px", xl: "48px" },
  };
  const rad = roundedMap[t.rounded] || roundedMap.comfy;
  r.setProperty("--r-sm", rad.sm);
  r.setProperty("--r-md", rad.md);
  r.setProperty("--r-lg", rad.lg);
  r.setProperty("--r-xl", rad.xl);

  if (!t.heroBgYellow) {
    r.setProperty("--surface-hero", "#fdfaf2");
  } else {
    r.setProperty("--surface-hero", yellow);
  }
}

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [page, setPage] = React.useState(() => {
    const h = window.location.hash.replace("#/", "");
    return ["home", "salarie", "loi"].includes(h) ? h : "home";
  });

  React.useEffect(() => { applyTheme(t); }, [t]);

  React.useEffect(() => {
    window.location.hash = "/" + page;
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [page]);

  // listen for hashchange (back / forward)
  React.useEffect(() => {
    const onHash = () => {
      const h = window.location.hash.replace("#/", "");
      if (["home", "salarie", "loi"].includes(h) && h !== page) setPage(h);
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, [page]);

  return (
    <>
      <Header page={page} setPage={setPage} />
      {page === "home" && <HomePage setPage={setPage} t={t} />}
      {page === "salarie" && <SalariePage setPage={setPage} t={t} />}
      {page === "loi" && <LoiPage setPage={setPage} t={t} />}
      <Footer setPage={setPage} />

      <TweaksPanel>
        <TweakSection label="Ton du copywriting" />
        <TweakRadio
          label="Registre"
          value={t.tone}
          options={[
            { value: "punchy", label: "Punchy" },
            { value: "serious", label: "Sérieux" },
            { value: "warm", label: "Humain" },
          ]}
          onChange={(v) => setTweak("tone", v)}
        />

        <TweakSection label="Palette" />
        <TweakColor
          label="Couleurs"
          value={t.palette}
          options={[
            ["#3633d2", "#ffff66", "#280c10"], // marque originale
            ["#2a27a8", "#ffe066", "#1a0808"], // assombri, plus sérieux
            ["#3633d2", "#ffc83d", "#280c10"], // jaune plus orangé
            ["#1e40af", "#fde047", "#0c0a0a"], // bleu nuit
            ["#4f46e5", "#fef08a", "#1f1f1f"], // pastel doux
          ]}
          onChange={(v) => setTweak("palette", v)}
        />

        <TweakSection label="Densité & forme" />
        <TweakRadio
          label="Densité"
          value={t.density}
          options={["compact", "regular", "comfy"]}
          onChange={(v) => setTweak("density", v)}
        />
        <TweakRadio
          label="Arrondi"
          value={t.rounded}
          options={["sharp", "comfy", "pill"]}
          onChange={(v) => setTweak("rounded", v)}
        />

        <TweakSection label="Hero" />
        <TweakToggle
          label="Fond jaune (vs. crème)"
          value={t.heroBgYellow}
          onChange={(v) => setTweak("heroBgYellow", v)}
        />
        <TweakToggle
          label="Téléphone auto-rotate"
          value={t.heroAutoRotate}
          onChange={(v) => setTweak("heroAutoRotate", v)}
        />
        <TweakToggle
          label="Bandeau défilant"
          value={t.marqueeOn}
          onChange={(v) => setTweak("marqueeOn", v)}
        />
      </TweaksPanel>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);
