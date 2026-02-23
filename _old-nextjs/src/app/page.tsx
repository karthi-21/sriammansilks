/* eslint-disable @next/next/no-img-element */

/* ─────────────────────────────────────────────
   Sri Amman Silks — Landing Page
   Simple, traditional, proud-of-village branding
   ───────────────────────────────────────────── */

const sarees = [
  "sarees/saree_1.jpeg", "sarees/saree_2.jpg", "sarees/saree_3.webp",
  "sarees/saree_4.jpeg", "sarees/saree_5.jpeg", "sarees/saree_6.jpg",
  "sarees/saree_7.jpeg", "sarees/saree_8.jpeg", "sarees/saree_9.jpeg",
  "sarees/saree_10.jpeg", "sarees/saree_11.webp", "sarees/saree_12.jpeg",
];

const chudidhars = [
  "chudidhar/chudidhar_1.jpg", "chudidhar/chudidhar_2.jpg",
  "chudidhar/chudidhar_3.jpg", "chudidhar/chudidhar_4.jpg",
  "chudidhar/chudidhar_5.jpeg", "chudidhar/chudidhar_6.jpg",
  "chudidhar/chudidhar_7.jpg", "chudidhar/chudidhar_8.jpg",
  "chudidhar/chudidhar_9.jpeg", "chudidhar/chudidhar_10.jpg",
  "chudidhar/chudidhar_11.jpg",
];

const shirts = [
  "shirts/shirt_1.webp", "shirts/shirt_2.webp", "shirts/shirt_3.webp",
  "shirts/shirt_4.webp", "shirts/shirt_5.avif", "shirts/shirt_6.webp",
  "shirts/shirt_7.webp", "shirts/shirt_8.jpeg", "shirts/shirt_9.webp",
  "shirts/shirt_10.jpeg", "shirts/shirt_11.webp",
];

const brands = [
  { name: "Ramraj Vivegam", img: "/brand/ramraj.webp" },
  { name: "Rixo", img: "/brand/rixo.jpeg" },
  { name: "Poomer", img: "/brand/poomer.png" },
  { name: "Presta", img: "/brand/presta.png" },
  { name: "Jockey", img: "/brand/jockey.jpeg" },
  { name: "Poomex", img: "/brand/poomex.png" },
];

export default function Home() {
  return (
    <>
      {/* ══════════ NAVBAR ══════════ */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-maroon/95 backdrop-blur-sm shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo + Name */}
            <a href="#" className="flex items-center gap-3">
              <img src="/logo-sm.png" alt="Sri Amman Silks" className="h-10 w-10 rounded-full border-2 border-gold/60" />
              <span className="font-serif text-gold font-bold text-lg hidden sm:inline">
                Sri Amman Silks
              </span>
            </a>

            {/* Nav Links */}
            <div className="flex items-center gap-1 sm:gap-2">
              {[
                ["Home", "#"],
                ["About", "#about"],
                ["Collections", "#collections"],
                ["Brands", "#brands"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="px-2 sm:px-3 py-2 text-sm text-gold-light/80 hover:text-gold transition-colors font-medium"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* ══════════ HERO ══════════ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <img
          src="/hero-section/big-temple.avif"
          alt="Thanjavur Big Temple"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark overlay */}
        <div className="hero-overlay absolute inset-0" />

        {/* Content */}
        <div className="relative z-10 text-center px-4 py-20">
          <img
            src="/logo.png"
            alt="Sri Amman Silks Logo"
            className="mx-auto w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 drop-shadow-2xl mb-6"
          />
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gold font-bold tracking-wide drop-shadow-lg">
            Sri Amman Silks
          </h1>
          <p className="font-serif text-xl sm:text-2xl md:text-3xl text-gold-light/90 mt-2 italic">
            and Traders
          </p>

          {/* Tag line */}
          <div className="mt-8 max-w-2xl mx-auto">
            <p className="text-cream/90 text-base sm:text-lg md:text-xl leading-relaxed">
              Trusted by families since 2010 &mdash; bringing you authentic textiles,
              <br className="hidden sm:block" />
              top brands, and honest prices from the heart of <strong className="text-gold-light">Minnampalli, Salem</strong>.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#collections"
              className="inline-block px-8 py-3 bg-gold text-maroon-dark font-semibold rounded-lg hover:bg-gold-light transition-colors shadow-lg text-lg"
            >
              Explore Collections
            </a>
            <a
              href="https://wa.me/message/KP3RYIMJA6ZCI1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 border-2 border-gold text-gold font-semibold rounded-lg hover:bg-gold/10 transition-colors text-lg"
            >
              WhatsApp Us
            </a>
          </div>

          {/* Scroll hint */}
          <div className="mt-16 animate-bounce">
            <svg className="w-6 h-6 mx-auto text-gold/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* ══════════ ABOUT ══════════ */}
      <section id="about" className="py-20 sm:py-28 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section title */}
          <div className="text-center mb-16">
            <h2 className="divider-kolam font-serif text-3xl sm:text-4xl text-maroon font-bold">
              <span className="px-4">Our Story</span>
            </h2>
            <p className="mt-4 text-stone-500 max-w-2xl mx-auto text-lg">
              A decade and a half of dressing families with pride
            </p>
          </div>

          {/* Story */}
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg sm:text-xl leading-relaxed text-stone-700 mb-8">
              Since our humble beginning in <strong className="text-maroon">2010</strong>, we&rsquo;ve grown from a small
              textile shop in Minnampalli to one of Salem&rsquo;s most trusted family clothing destinations.
              For over <strong className="text-maroon">16 years</strong>, we&rsquo;ve served our community with
              authentic, high-quality products &mdash; because we believe every family deserves the best,
              at prices that are fair and honest.
            </p>
            <p className="text-lg leading-relaxed text-stone-600">
              At our core, we believe in <em>value, quality, and the power of brands</em>.
              We offer a wide range of trusted brands and we&rsquo;re always adding more of your favorites.
              Welcome to a shopping experience where quality meets trust.
            </p>
          </div>

          {/* Feature cards */}
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "✓",
                title: "100% Quality Products",
                desc: "Every product is tested. We source only from trusted manufacturers.",
              },
              {
                icon: "🤝",
                title: "Trust & Service",
                desc: "We trust people, they trust us back. Quick, reliable service always.",
              },
              {
                icon: "🏷️",
                title: "All Top Brands",
                desc: "Wide variety of branded collections with new brands added regularly.",
              },
              {
                icon: "🏆",
                title: "16+ Years Strong",
                desc: "A decade and a half of surviving, growing, and serving you better.",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="gold-shimmer bg-white rounded-xl p-6 border border-cream-border shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <div className="text-3xl mb-3">{f.icon}</div>
                <h3 className="font-serif text-lg font-bold text-maroon mb-2">{f.title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ COLLECTIONS ══════════ */}
      <section id="collections" className="py-20 sm:py-28 bg-cream-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="divider-kolam font-serif text-3xl sm:text-4xl text-maroon font-bold">
              <span className="px-4">Our Collections</span>
            </h2>
            <p className="mt-4 text-stone-500 max-w-2xl mx-auto text-lg">
              Handpicked textiles for every occasion — from festivals to everyday elegance
            </p>
          </div>

          {/* ── Sarees ── */}
          <div className="mb-20">
            <h3 className="font-serif text-2xl text-maroon font-bold mb-2 text-center">
              🪷 Sarees
            </h3>
            <p className="text-center text-stone-500 mb-8">
              Silk, cotton, and designer sarees for every celebration
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {sarees.map((src, i) => (
                <div key={i} className="product-card rounded-xl overflow-hidden bg-white shadow-sm border border-cream-border">
                  <img
                    src={`/${src}`}
                    alt={`Saree collection ${i + 1}`}
                    className="w-full h-40 sm:h-48 object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* ── Chudidhars ── */}
          <div className="mb-20">
            <h3 className="font-serif text-2xl text-maroon font-bold mb-2 text-center">
              👗 Chudidhars
            </h3>
            <p className="text-center text-stone-500 mb-8">
              Elegant chudidhars in the latest styles and patterns
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {chudidhars.map((src, i) => (
                <div key={i} className="product-card rounded-xl overflow-hidden bg-white shadow-sm border border-cream-border">
                  <img
                    src={`/${src}`}
                    alt={`Chudidhar collection ${i + 1}`}
                    className="w-full h-40 sm:h-48 object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* ── Shirts ── */}
          <div>
            <h3 className="font-serif text-2xl text-maroon font-bold mb-2 text-center">
              👔 Shirts
            </h3>
            <p className="text-center text-stone-500 mb-8">
              Formal, casual, and cotton shirts for men
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {shirts.map((src, i) => (
                <div key={i} className="product-card rounded-xl overflow-hidden bg-white shadow-sm border border-cream-border">
                  <img
                    src={`/${src}`}
                    alt={`Shirt collection ${i + 1}`}
                    className="w-full h-40 sm:h-48 object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ BRANDS ══════════ */}
      <section id="brands" className="py-20 sm:py-28 bg-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="divider-kolam font-serif text-3xl sm:text-4xl text-maroon font-bold">
              <span className="px-4">Brands We Carry</span>
            </h2>
            <p className="mt-4 text-stone-500 max-w-2xl mx-auto text-lg">
              Trusted names you know and love — all under one roof
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {brands.map((b) => (
              <div
                key={b.name}
                className="gold-shimmer bg-white rounded-xl p-4 border border-cream-border shadow-sm hover:shadow-md transition-shadow flex flex-col items-center justify-center gap-3"
              >
                <img
                  src={b.img}
                  alt={b.name}
                  className="h-16 w-full object-contain"
                  loading="lazy"
                />
                <span className="text-sm font-medium text-stone-600">{b.name}</span>
              </div>
            ))}
          </div>

          <p className="text-center text-stone-400 mt-8 text-sm italic">
            …and many more brands added regularly!
          </p>
        </div>
      </section>

      {/* ══════════ CONTACT ══════════ */}
      <section id="contact" className="py-20 sm:py-28 bg-maroon text-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="divider-kolam font-serif text-3xl sm:text-4xl text-gold font-bold">
              <span className="px-4">Visit Us</span>
            </h2>
            <p className="mt-4 text-gold-light/70 max-w-2xl mx-auto text-lg">
              We&rsquo;d love to welcome you to our shop
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Map embed */}
            <div className="rounded-xl overflow-hidden shadow-lg border-2 border-gold/30">
              <iframe
                title="Sri Amman Silks Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3907.3!2d78.1!3d11.65!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf1bd7175e517%3A0x37538e8349ed4e4e!2sSri%20Amman%20Silks%20%26%20Traders!5e0!3m2!1sen!2sin!4v1700000000000"
                className="w-full h-64 md:h-80"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Contact info */}
            <div className="space-y-8">
              <div>
                <h3 className="font-serif text-xl text-gold font-bold mb-3">📍 Address</h3>
                <a
                  href="https://g.page/sri-amman-silks?share"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream/80 hover:text-gold transition-colors leading-relaxed"
                >
                  S.K. Complex, Minnampalli,<br />
                  Salem — 636106, Tamil Nadu
                </a>
              </div>

              <div>
                <h3 className="font-serif text-xl text-gold font-bold mb-3">📞 Phone</h3>
                <a
                  href="tel:+919942062100"
                  className="text-cream/80 hover:text-gold transition-colors text-lg"
                >
                  +91 99420 62100
                </a>
              </div>

              <div>
                <h3 className="font-serif text-xl text-gold font-bold mb-3">✉️ Email</h3>
                <a
                  href="mailto:sriammansilks16@gmail.com"
                  className="text-cream/80 hover:text-gold transition-colors"
                >
                  sriammansilks16@gmail.com
                </a>
              </div>

              <div>
                <h3 className="font-serif text-xl text-gold font-bold mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a
                    href="https://wa.me/message/KP3RYIMJA6ZCI1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.364 0-4.546-.82-6.265-2.192l-.438-.362-3.2 1.073 1.073-3.2-.362-.438A9.955 9.955 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/></svg>
                    WhatsApp
                  </a>
                  <a
                    href="https://www.instagram.com/sriammansilkstraders/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-colors text-sm font-medium"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                    Instagram
                  </a>
                  <a
                    href="https://www.facebook.com/sriamman.silks.3"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                    Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ ONLINE SHOP BANNER ══════════ */}
      <section className="py-16 bg-gold/10 border-y border-gold/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl text-maroon font-bold mb-4">
            Shop Online Anytime
          </h2>
          <p className="text-stone-600 mb-8 text-lg">
            Browse our catalogue and place orders through our online platform
          </p>
          <a
            href="https://app.sriammansilks.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-maroon text-gold font-semibold rounded-lg hover:bg-maroon-dark transition-colors shadow-lg text-lg"
          >
            Visit Our Online Store →
          </a>
        </div>
      </section>

      {/* ══════════ FOOTER ══════════ */}
      <footer className="bg-maroon-dark text-cream/60 py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo + Name */}
            <div className="flex items-center gap-3">
              <img src="/logo-sm.png" alt="Sri Amman Silks" className="h-8 w-8 rounded-full" />
              <span className="font-serif text-gold text-lg font-bold">
                Sri Amman Silks and Traders
              </span>
            </div>

            {/* Quick links */}
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a href="#" className="hover:text-gold transition-colors">Home</a>
              <a href="#about" className="hover:text-gold transition-colors">About</a>
              <a href="#collections" className="hover:text-gold transition-colors">Collections</a>
              <a href="#brands" className="hover:text-gold transition-colors">Brands</a>
              <a href="#contact" className="hover:text-gold transition-colors">Contact</a>
            </div>

            {/* Copyright */}
            <p className="text-sm text-center">
              © {new Date().getFullYear()} Sri Amman Silks and Traders. All rights reserved.
            </p>
          </div>

          <div className="mt-6 pt-6 border-t border-cream/10 text-center text-xs text-cream/40">
            S.K. Complex, Minnampalli, Salem — 636106, Tamil Nadu &nbsp;|&nbsp; +91 99420 62100
          </div>
        </div>
      </footer>
    </>
  );
}
