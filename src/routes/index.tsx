import { createFileRoute } from "@tanstack/react-router";
import { Download } from "lucide-react";
import logoAsset from "@/assets/logos.png";
import logoAssets from "@/assets/removedlogo.png";
import splash from "@/assets/image.png";
const MS1_DOWNLOAD_URL =
  "https://github.com/anuteshome/MekaneSelam2/releases/download/v1.0.0/MS1.apk";
const MS2_DOWNLOAD_URL =
  "https://github.com/anuteshome/MekaneSelamApp/releases/download/v.1.0.0/MS2.apk";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Highlights />
        <AppSection />
        {/* <Schedule /> */}
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/70 border-b border-border/60">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-display text-xl font-bold">
          <img src={logoAsset} alt="መካነ ሰላም" className="h-10 w-10 rounded-full object-contain bg-white" />
          <span style={{ fontFamily: "var(--font-display)" }}>መካነ ሰላም</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#about" className="hover:text-foreground transition">ስለ እኛ</a>
          <a href="#app" className="hover:text-foreground transition">አፕሊኬሽኑ</a>
          <a href="#schedule" className="hover:text-foreground transition">ትምህርት</a>
          <a href="#contact" className="hover:text-foreground transition">አግኙን</a>
        </nav>
        <a href="#app" className="inline-flex items-center rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition">
          አፕሊኬሽኑን ያውርዱ
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-warm)", opacity: 0.5 }}
      />
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            መካነ ሰላም የሰንበት ት/ቤት
          </span>
          <h1 className="mt-5 text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05]" style={{ fontFamily: "var(--font-display)" }}>
            የቤተ ክርስቲያን ትምህርት <em className="not-italic text-primary">በእጅዎ ውስጥ።</em>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-lg">
            መካነ ሰላም ተማሪዎች የቤተ ክርስቲያን ትምህርታዊ ቁሳቁሶችን በክፍል፣ በኮርስ እና በምዕራፍ ተደራጅቶ በቀላሉ እንዲያገኙ የተዘጋጀ የሞባይል አፕሊኬሽን ነው። ትምህርትን ቀላል፣ የተደራጀ እና ተስማሚ ያደርገዋል።
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#app" className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] hover:opacity-95 transition" style={{ background: "var(--gradient-primary)" }}>
              አፕሊኬሽኑን ያውርዱ
            </a>
            <a href="#about" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold hover:bg-secondary transition">
              ተጨማሪ ይመልከቱ
            </a>
          </div>
          {/* <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
            <div><span className="block text-2xl font-bold text-foreground" style={{ fontFamily: "var(--font-display)" }}>1000+</span>ተማሪዎች</div>
            <div className="h-8 w-px bg-border" />
            <div><span className="block text-2xl font-bold text-foreground" style={{ fontFamily: "var(--font-display)" }}>50+</span>ኮርሶች</div>
            <div className="h-8 w-px bg-border" />
            <div><span className="block text-2xl font-bold text-foreground" style={{ fontFamily: "var(--font-display)" }}>4.9★</span>ደረጃ</div>
          </div> */}
        </div>
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-accent/40 blur-3xl" aria-hidden />
          <img
            src={logoAssets}
            // alt="የመካነ ሰላም የሰንበት ት/ቤት አርማ"
            width={1024}
            height={1024}
            className="relative w-full h-auto max-w-md mx-auto drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}

function Highlights() {
  const items = [
    { icon: "📚", title: "በክፍል የተደራጀ", body: "ትምህርቶች በክፍል፣ በኮርስ እና በምዕራፍ ተደራጅተው ቀርበዋል።" },
    { icon: "📖", title: "የቤተ ክርስቲያን ትምህርት", body: "ትክክለኛ የኦርቶዶክስ ተዋሕዶ ትምህርታዊ ቁሳቁሶች በአንድ ቦታ።" },
    { icon: "📱", title: "ቀላል አጠቃቀም", body: "ተማሪ ወዳጅ የሆነ ንድፍ — በማንኛውም ጊዜ በሞባይልዎ ይማሩ።" },
  ];
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-20">
      <div className="max-w-2xl">
        <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
          ትምህርትን <em className="not-italic text-primary">ዘመናዊ በሆነ መንገድ።</em>
        </h2>
        <p className="mt-4 text-muted-foreground text-lg">
          መካነ ሰላም (MS) ባህላዊ ትምህርትን ዘመናዊ በማድረግ ዲጂታል ትምህርታዊ ቁሳቁሶችን በቀጥታ ወደ ተማሪዎች ያደርሳል።
        </p>
      </div>
      <div className="mt-12 grid md:grid-cols-3 gap-6">
        {items.map((it) => (
          <div key={it.title} className="rounded-3xl bg-card border border-border p-8 shadow-[var(--shadow-card)] hover:-translate-y-1 transition">
            <div className="text-4xl">{it.icon}</div>
            <h3 className="mt-4 text-xl font-bold" style={{ fontFamily: "var(--font-display)" }}>{it.title}</h3>
            <p className="mt-2 text-muted-foreground">{it.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function AppSection() {
  return (
    <section id="app" className="relative overflow-hidden py-24">
      <div aria-hidden className="absolute inset-0 -z-10" style={{ background: "var(--gradient-warm)", opacity: 0.35 }} />
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative flex justify-center md:justify-start">
          <div className="absolute w-72 h-72 rounded-full bg-primary/20 blur-3xl" aria-hidden />
          <div className="relative mx-auto w-64 md:w-72 aspect-[9/19] rounded-[2.5rem] border-8 border-foreground bg-background shadow-[var(--shadow-soft)] overflow-hidden">
            <div className="h-full w-full flex flex-col items-center justify-center p-6 text-center" style={{ background: "var(--gradient-primary)" }}>
              <img src={logoAsset} alt="Mekane Selam" className="w-28 h-28 object-contain bg-white rounded-full p-2" />
              <div className="mt-4 text-primary-foreground font-bold text-lg" style={{ fontFamily: "var(--font-display)" }}>መካነ ሰላም</div>
              <div className="mt-1 text-primary-foreground/80 text-xs">MS · ትምህርታዊ አፕ</div>
              <div className="mt-6 w-full space-y-2">
                {["ክፍል 1 · መሠረተ ሐይማኖት", "ክፍል 2 · ቅዱሳት መጻህፍት", "ክፍል 3 ·  የቤተ ክርስቲያን ታሪከ"].map((t) => (
                  <div key={t} className="rounded-xl bg-background/95 text-foreground text-xs font-medium px-3 py-2 text-left">{t}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div>
          <span className="inline-flex items-center rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-semibold uppercase tracking-wider">
            ነጻ የሞባይል አፕሊኬሽን
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
            መካነ ሰላም <em className="not-italic text-primary">MS</em>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            መካነ ሰላም (MS) የቤተ ክርስቲያን ትምህርታዊ ቁሳቁሶችን በክፍል፣ በኮርስ እና በምዕራፍ አደራጅቶ የሚያቀርብ የሞባይል አፕሊኬሽን ነው። አስተዳዳሪዎችም ትምህርታዊ ይዘቶችን በቀላሉ ማስተዳደር ይችላሉ።
          </p>
          <ul className="mt-6 space-y-3 text-foreground/90">
            {[
              "በክፍል፣ በኮርስ እና በምዕራፍ የተደራጀ ይዘት",
              "በቀላሉ የሚዘዋወር ተማሪ ወዳጅ በይነገጽ",
              // "ለአስተዳዳሪዎች ቀላል የይዘት አስተዳደር",
              "በማንኛውም ጊዜና ቦታ የሚደረስ ትምህርት",
            ].map((f) => (
              <li key={f} className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs">✓</span>
                {f}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={MS1_DOWNLOAD_URL}
              download="MS1.apk"
              className="inline-flex items-center gap-3 rounded-2xl bg-foreground text-background px-5 py-3 hover:opacity-90 transition"
              aria-label="Download the MS1 Android app"
            >
              <Download className="h-6 w-6" aria-hidden="true" />
              <span className="text-left">
                <span className="block text-[10px] uppercase tracking-wider opacity-70">Android APK ያውርዱ</span>
                <span className="block text-base font-semibold -mt-0.5" style={{ fontFamily: "var(--font-display)" }}>መካነ ሰላም MS</span>
              </span>
            </a>
            <a
              href={MS2_DOWNLOAD_URL}
              download="MS2.apk"
              className="inline-flex items-center gap-3 rounded-2xl border border-foreground/20 bg-card px-5 py-3 text-foreground hover:bg-secondary transition"
              aria-label="Download the MS2 Android app"
            >
              <Download className="h-6 w-6" aria-hidden="true" />
              <span className="text-left">
                <span className="block text-[10px] uppercase tracking-wider opacity-70">Android APK ያውርዱ</span>
                <span className="block text-base font-semibold -mt-0.5" style={{ fontFamily: "var(--font-display)" }}>መካነ ሰላም MS2</span>
              </span>
            </a>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">ነጻ · ማስታወቂያ የለውም · ለተማሪዎች የተዘጋጀ</p>
        </div>
      </div>
    </section>
  );
}

// function Schedule() {
//   const groups = [
//     { age: "ደረጃ 1", name: "መሠረታዊ ትምህርት", time: "6 ምዕራፎች", room: "ለጀማሪዎች" },
//     { age: "ደረጃ 2", name: "ቅዱስ ግጻዌ", time: "8 ምዕራፎች", room: "መካከለኛ ደረጃ" },
//     { age: "ደረጃ 3", name: "ታሪከ ቤተ ክርስቲያን", time: "10 ምዕራፎች", room: "ከፍተኛ ደረጃ" },
//   ];
//   return (
//     <section id="schedule" className="mx-auto max-w-6xl px-6 py-20">
//       <div className="flex items-end justify-between flex-wrap gap-4">
//         <div>
//           <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: "var(--font-display)" }}>የትምህርት ደረጃዎች</h2>
//           <p className="mt-3 text-muted-foreground text-lg">በአፕሊኬሽኑ ውስጥ የሚገኙ ኮርሶች።</p>
//         </div>
//         <a href="#contact" className="text-primary font-semibold hover:underline">ተጨማሪ →</a>
//       </div>
//       <div className="mt-10 grid md:grid-cols-3 gap-4">
//         {groups.map((g) => (
//           <div key={g.name} className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
//             <div className="text-xs font-semibold uppercase tracking-wider text-primary">{g.age}</div>
//             <div className="mt-2 text-2xl font-bold" style={{ fontFamily: "var(--font-display)" }}>{g.name}</div>
//             <div className="mt-4 text-sm text-muted-foreground">📚 {g.time}</div>
//             <div className="mt-1 text-sm text-muted-foreground">🎓 {g.room}</div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

function CTA() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 pb-24">
      <div className="relative overflow-hidden rounded-[2.5rem] p-10 md:p-16 text-center" style={{ background: "var(--gradient-primary)" }}>
        <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground" style={{ fontFamily: "var(--font-display)" }}>
          ዛሬ አፕሊኬሽኑን ያውርዱ።
        </h2>
        <p className="mt-4 text-primary-foreground/90 max-w-xl mx-auto">
          መካነ ሰላም — የቤተ ክርስቲያን ትምህርት በእጅዎ ውስጥ።
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {/* <a href="mailto:info@mekaneselam.org" className="inline-flex rounded-full bg-background text-foreground px-6 py-3 font-semibold hover:opacity-95 transition">
            info@mekaneselam.org
          </a> */}
          <a href="#app" className="inline-flex rounded-full border border-primary-foreground/40 bg-background text-foreground  px-6 py-3 font-semibold  transition">
            አፕሊኬሽኑን ያውርዱ
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <img src={logoAsset} alt="" className="h-7 w-7 rounded-full object-contain bg-white" />
          <span>© {new Date().getFullYear()} መካነ ሰላም የሰንበት ት/ቤት</span>
        </div>
        <div>MS · ትምህርታዊ የሞባይል አፕሊኬሽን</div>
      </div>
    </footer>
  );
}
