import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-sunday-school.jpg";
import appMockup from "@/assets/app-mockup.png";

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
        <Schedule />
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
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground" style={{ fontFamily: "var(--font-display)" }}>✝</span>
          <span style={{ fontFamily: "var(--font-display)" }}>Little Lambs</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#about" className="hover:text-foreground transition">About</a>
          <a href="#app" className="hover:text-foreground transition">The App</a>
          <a href="#schedule" className="hover:text-foreground transition">Schedule</a>
          <a href="#contact" className="hover:text-foreground transition">Contact</a>
        </nav>
        <a href="#app" className="inline-flex items-center rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition">
          Get the App
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
            Sundays · 9:30 AM
          </span>
          <h1 className="mt-5 text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05]" style={{ fontFamily: "var(--font-display)" }}>
            Where little hearts <em className="not-italic text-primary">grow in faith.</em>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-lg">
            Bible stories, songs, crafts, and friendships that last a lifetime. Join our Sunday school family and bring the joy home with our free mobile app.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#app" className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] hover:opacity-95 transition" style={{ background: "var(--gradient-primary)" }}>
              Download the App
            </a>
            <a href="#schedule" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold hover:bg-secondary transition">
              Visit on Sunday
            </a>
          </div>
          <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
            <div><span className="block text-2xl font-bold text-foreground" style={{ fontFamily: "var(--font-display)" }}>250+</span>Kids weekly</div>
            <div className="h-8 w-px bg-border" />
            <div><span className="block text-2xl font-bold text-foreground" style={{ fontFamily: "var(--font-display)" }}>12</span>Loving teachers</div>
            <div className="h-8 w-px bg-border" />
            <div><span className="block text-2xl font-bold text-foreground" style={{ fontFamily: "var(--font-display)" }}>4.9★</span>Parent rating</div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-accent/40 rotate-2" aria-hidden />
          <img
            src={heroImg}
            alt="Happy children reading a bible together in a warmly lit chapel"
            width={1536}
            height={1200}
            className="relative rounded-[2rem] shadow-[var(--shadow-soft)] w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}

function Highlights() {
  const items = [
    { icon: "📖", title: "Bible Stories", body: "Weekly stories brought to life with pictures, puppets, and lots of laughter." },
    { icon: "🎵", title: "Worship & Songs", body: "Kid-friendly worship where every voice is a joyful noise unto the Lord." },
    { icon: "🎨", title: "Crafts & Play", body: "Hands-on activities that turn each lesson into something they can take home." },
  ];
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-20">
      <div className="max-w-2xl">
        <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
          A safe, joyful place to <em className="not-italic text-primary">meet Jesus.</em>
        </h2>
        <p className="mt-4 text-muted-foreground text-lg">
          Every Sunday, our team welcomes children ages 3–12 into age-grouped classrooms designed to spark curiosity and nurture faith.
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
          <img
            src={appMockup}
            alt="Little Lambs mobile app shown on a phone"
            width={1024}
            height={1280}
            loading="lazy"
            className="relative max-w-xs md:max-w-sm w-full drop-shadow-2xl"
          />
        </div>
        <div>
          <span className="inline-flex items-center rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-semibold uppercase tracking-wider">
            Free Mobile App
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
            Take Sunday school <em className="not-italic text-primary">everywhere.</em>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            The Little Lambs app brings weekly lessons, bedtime bible stories, worship songs, and family devotionals to your phone — so faith keeps growing all week long.
          </p>
          <ul className="mt-6 space-y-3 text-foreground/90">
            {["Weekly video lessons synced with class", "Bedtime bible story audio library", "Memory verse tracker & rewards", "Family devotional guides for parents"].map((f) => (
              <li key={f} className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs">✓</span>
                {f}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#" className="inline-flex items-center gap-3 rounded-2xl bg-foreground text-background px-5 py-3 hover:opacity-90 transition">
              <span className="text-2xl"></span>
              <span className="text-left">
                <span className="block text-[10px] uppercase tracking-wider opacity-70">Download on the</span>
                <span className="block text-base font-semibold -mt-0.5" style={{ fontFamily: "var(--font-display)" }}>App Store</span>
              </span>
            </a>
            <a href="#" className="inline-flex items-center gap-3 rounded-2xl bg-foreground text-background px-5 py-3 hover:opacity-90 transition">
              <span className="text-2xl">▶</span>
              <span className="text-left">
                <span className="block text-[10px] uppercase tracking-wider opacity-70">Get it on</span>
                <span className="block text-base font-semibold -mt-0.5" style={{ fontFamily: "var(--font-display)" }}>Google Play</span>
              </span>
            </a>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">Free forever · Ad-free · Made for families</p>
        </div>
      </div>
    </section>
  );
}

function Schedule() {
  const groups = [
    { age: "Ages 3–5", name: "Little Lambs", time: "9:30 – 10:30 AM", room: "Room 101" },
    { age: "Ages 6–8", name: "Shepherds", time: "9:30 – 10:45 AM", room: "Room 202" },
    { age: "Ages 9–12", name: "Disciples", time: "9:30 – 11:00 AM", room: "Room 303" },
  ];
  return (
    <section id="schedule" className="mx-auto max-w-6xl px-6 py-20">
      <div className="flex items-end justify-between flex-wrap gap-4">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: "var(--font-display)" }}>Sunday Schedule</h2>
          <p className="mt-3 text-muted-foreground text-lg">Every Sunday morning — come as you are.</p>
        </div>
        <a href="#contact" className="text-primary font-semibold hover:underline">Get directions →</a>
      </div>
      <div className="mt-10 grid md:grid-cols-3 gap-4">
        {groups.map((g) => (
          <div key={g.name} className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
            <div className="text-xs font-semibold uppercase tracking-wider text-primary">{g.age}</div>
            <div className="mt-2 text-2xl font-bold" style={{ fontFamily: "var(--font-display)" }}>{g.name}</div>
            <div className="mt-4 text-sm text-muted-foreground">🕘 {g.time}</div>
            <div className="mt-1 text-sm text-muted-foreground">📍 {g.room}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 pb-24">
      <div className="relative overflow-hidden rounded-[2.5rem] p-10 md:p-16 text-center" style={{ background: "var(--gradient-primary)" }}>
        <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground" style={{ fontFamily: "var(--font-display)" }}>
          Come visit us this Sunday.
        </h2>
        <p className="mt-4 text-primary-foreground/90 max-w-xl mx-auto">
          Bring the whole family — we'll save you a seat, and your kids a story.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href="mailto:hello@littlelambs.church" className="inline-flex rounded-full bg-background text-foreground px-6 py-3 font-semibold hover:opacity-95 transition">
            hello@littlelambs.church
          </a>
          <a href="#app" className="inline-flex rounded-full border border-primary-foreground/40 text-primary-foreground px-6 py-3 font-semibold hover:bg-primary-foreground/10 transition">
            Download the App
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
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground">✝</span>
          <span>© {new Date().getFullYear()} Little Lambs Sunday School</span>
        </div>
        <div>Made with love for our little disciples.</div>
      </div>
    </footer>
  );
}
