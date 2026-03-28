import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const brands = [
  {
    name: "Mithai Co.",
    category: "Food",
    description:
      "Artisan Indian sweets made with grandma's recipes, zero preservatives.",
    upvotes: 248,
  },
  {
    name: "Chanderi Lab",
    category: "Fashion",
    description:
      "Handloom Chanderi fabric reimagined for contemporary Indian wardrobes.",
    upvotes: 189,
  },
  {
    name: "Mitti Works",
    category: "Home Decor",
    description:
      "Handcrafted terracotta homeware from rural Rajasthan artisans.",
    upvotes: 132,
  },
  {
    name: "Spice Route",
    category: "Food",
    description:
      "Single-origin Indian spices sourced directly from small-scale farmers.",
    upvotes: 97,
  },
  {
    name: "Woven Stories",
    category: "Fashion",
    description:
      "Sustainable handwoven textiles by tribal weavers across Northeast India.",
    upvotes: 210,
  },
  {
    name: "Green Roots",
    category: "Beauty",
    description:
      "Ayurvedic skincare rooted in traditional Indian herbal knowledge.",
    upvotes: 155,
  },
];

const steps = [
  {
    number: "01",
    title: "Apply",
    description:
      "Any Indian D2C brand can apply for free — no gatekeeping, no fees.",
  },
  {
    number: "02",
    title: "Get Verified",
    description:
      "We check GST registration, founder identity, and real product listings.",
  },
  {
    number: "03",
    title: "Launch Day",
    description:
      "Your brand goes live to our entire community of conscious buyers.",
  },
  {
    number: "04",
    title: "Community Votes",
    description:
      "Real buyers upvote, leave reviews, and make purchases directly.",
  },
];

const CATEGORIES = [
  "Food",
  "Fashion",
  "Handicraft",
  "Beauty",
  "Home Decor",
  "Other",
];

type FormState = {
  brandName: string;
  yourName: string;
  whatsapp: string;
  category: string;
  instagram: string;
  about: string;
};

const emptyForm: FormState = {
  brandName: "",
  yourName: "",
  whatsapp: "",
  category: "",
  instagram: "",
  about: "",
};

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function App() {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitted, setSubmitted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  if (typeof window !== "undefined") {
    window.onscroll = () => setScrolled(window.scrollY > 20);
  }

  function validate() {
    const e: Partial<FormState> = {};
    if (!form.brandName.trim()) e.brandName = "Required";
    if (!form.yourName.trim()) e.yourName = "Required";
    if (!form.whatsapp.trim()) e.whatsapp = "Required";
    if (!form.category) e.category = "Required";
    if (!form.instagram.trim()) e.instagram = "Required";
    if (!form.about.trim()) e.about = "Required";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (validate()) setSubmitted(true);
  }

  function set(field: keyof FormState) {
    return (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    };
  }

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "#0a0a0a", color: "#f2f2f2" }}
    >
      {/* ── NAVBAR ── */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled
            ? "rgba(10,10,10,0.95)"
            : "rgba(10,10,10,0.70)",
          backdropFilter: "blur(14px)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <button
            type="button"
            onClick={() => scrollTo("hero")}
            className="flex items-center gap-3 cursor-pointer bg-transparent border-0 p-0"
            data-ocid="nav.link"
          >
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center font-black text-sm select-none"
              style={{ backgroundColor: "#ffffff", color: "#0a0a0a" }}
            >
              CL
            </div>
            <span
              className="font-bold text-lg tracking-tight"
              style={{ color: "#f2f2f2" }}
            >
              Culture Loop
            </span>
          </button>

          <button
            type="button"
            onClick={() => scrollTo("apply")}
            className="btn-white px-5 py-2 text-sm font-bold"
            data-ocid="nav.primary_button"
          >
            Apply as a Brand
          </button>
        </div>
      </header>

      {/* ── HERO ── */}
      <section
        id="hero"
        className="topo-pattern min-h-screen flex items-center justify-center text-center pt-16"
      >
        <div className="max-w-4xl mx-auto px-6 py-32">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-8 tracking-widest uppercase"
              style={{
                border: "1px solid rgba(255,255,255,0.2)",
                color: "#e0e0e0",
                backgroundColor: "rgba(255,255,255,0.05)",
              }}
            >
              <span style={{ color: "#ffffff" }}>✦</span>
              Community-Curated · 100% Verified
            </div>

            <h1
              className="font-black leading-tight tracking-tight mb-6"
              style={{
                fontSize: "clamp(2.8rem, 7vw, 5rem)",
                color: "#f2f2f2",
              }}
            >
              India&apos;s Brands{" "}
              <span style={{ color: "#ffffff" }}>Deserve</span>
              <br />
              to Be Found.
            </h1>

            <p
              className="text-lg leading-relaxed mb-10 max-w-2xl mx-auto"
              style={{ color: "#a9a9a9" }}
            >
              We verify, curate and launch India&apos;s most genuine homegrown
              D2C brands — no ads, no fake reviews, just real community trust.
            </p>

            <div className="flex items-center justify-center gap-4 flex-wrap">
              <button
                type="button"
                onClick={() => scrollTo("apply")}
                className="btn-white px-8 py-3.5 text-base font-bold"
                data-ocid="hero.primary_button"
              >
                Apply as a Brand
              </button>
              <button
                type="button"
                onClick={() => scrollTo("brands")}
                className="btn-ghost px-8 py-3.5 text-base"
                data-ocid="hero.secondary_button"
              >
                Discover Brands
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section
        id="stats"
        style={{
          borderTop: "1px solid rgba(255,255,255,0.08)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {[
              {
                num: "1.2M+",
                label: "Indian Brands",
                sub: "waiting to be discovered",
              },
              {
                num: "Zero",
                label: "Paid Placements",
                sub: "community decides everything",
              },
              {
                num: "100%",
                label: "Verified",
                sub: "every brand manually checked",
              },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="py-12 px-8 flex flex-col items-center text-center"
                style={{
                  borderRight:
                    i < 2 ? "1px solid rgba(255,255,255,0.08)" : undefined,
                }}
              >
                <span
                  className="font-black text-5xl mb-1 leading-none"
                  style={{ color: "#ffffff" }}
                >
                  {stat.num}
                </span>
                <span
                  className="font-bold text-lg mt-1"
                  style={{ color: "#f2f2f2" }}
                >
                  {stat.label}
                </span>
                <span className="text-sm mt-1" style={{ color: "#7a7a7a" }}>
                  {stat.sub}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BRAND CARDS ── */}
      <section id="brands" className="py-28">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2
              className="font-black text-4xl md:text-5xl tracking-tight mb-4"
              style={{ color: "#f2f2f2" }}
            >
              Community <span style={{ color: "#ffffff" }}>Favorites</span>
            </h2>
            <p className="text-lg" style={{ color: "#7a7a7a" }}>
              Verified brands loved and upvoted by real buyers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {brands.map((brand, i) => (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className="card-brand p-6 flex flex-col gap-4"
                data-ocid={`brands.item.${i + 1}`}
              >
                <div className="flex items-start justify-between">
                  <span
                    className="text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider"
                    style={{
                      border: "1px solid rgba(255,255,255,0.2)",
                      color: "#e0e0e0",
                      backgroundColor: "rgba(255,255,255,0.05)",
                    }}
                  >
                    {brand.category}
                  </span>
                  <div
                    className="flex items-center gap-1 text-sm"
                    style={{ color: "#7a7a7a" }}
                  >
                    <span style={{ color: "#ffffff" }}>▲</span>
                    <span
                      className="font-semibold"
                      style={{ color: "#a9a9a9" }}
                    >
                      {brand.upvotes}
                    </span>
                  </div>
                </div>

                <div>
                  <h3
                    className="font-black text-xl mb-1"
                    style={{ color: "#f2f2f2" }}
                  >
                    {brand.name}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "#7a7a7a" }}
                  >
                    {brand.description}
                  </p>
                </div>

                <button
                  type="button"
                  className="mt-auto self-start text-sm font-semibold px-4 py-2 rounded-full transition-all duration-200"
                  style={{
                    border: "1px solid rgba(255,255,255,0.2)",
                    color: "#e0e0e0",
                    backgroundColor: "transparent",
                  }}
                  onMouseEnter={(e) => {
                    (
                      e.currentTarget as HTMLButtonElement
                    ).style.backgroundColor = "rgba(255,255,255,0.08)";
                  }}
                  onMouseLeave={(e) => {
                    (
                      e.currentTarget as HTMLButtonElement
                    ).style.backgroundColor = "transparent";
                  }}
                  data-ocid={`brands.secondary_button.${i + 1}`}
                >
                  View Brand →
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section
        id="how"
        className="py-28"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2
              className="font-black text-4xl md:text-5xl tracking-tight mb-4"
              style={{ color: "#f2f2f2" }}
            >
              How It <span style={{ color: "#ffffff" }}>Works</span>
            </h2>
            <p className="text-lg" style={{ color: "#7a7a7a" }}>
              From application to community launch — a transparent process.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="step-card p-8 flex flex-col gap-4"
                data-ocid={`how.item.${i + 1}`}
              >
                <span
                  className="font-black text-5xl leading-none"
                  style={{ color: "#ffffff" }}
                >
                  {step.number}
                </span>
                <h3 className="font-black text-xl" style={{ color: "#f2f2f2" }}>
                  {step.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#7a7a7a" }}
                >
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── APPLICATION FORM ── */}
      <section
        id="apply"
        className="py-28"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div className="max-w-2xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-10">
              <h2
                className="font-black text-4xl md:text-5xl tracking-tight mb-4"
                style={{ color: "#f2f2f2" }}
              >
                Apply to <span style={{ color: "#ffffff" }}>Launch</span>
              </h2>
              <p style={{ color: "#7a7a7a" }}>
                Fill this form and we&apos;ll get back to you within 48 hours.
              </p>
            </div>

            <div className="form-card p-8 md:p-10">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12 flex flex-col items-center gap-4"
                    data-ocid="apply.success_state"
                  >
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold"
                      style={{
                        backgroundColor: "rgba(255,255,255,0.12)",
                        color: "#ffffff",
                      }}
                    >
                      ✓
                    </div>
                    <h3
                      className="font-black text-2xl"
                      style={{ color: "#f2f2f2" }}
                    >
                      Application Received!
                    </h3>
                    <p
                      className="text-lg leading-relaxed"
                      style={{ color: "#a9a9a9" }}
                    >
                      We received your application! We&apos;ll WhatsApp you
                      within 48 hours.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-5"
                    noValidate
                    data-ocid="apply.modal"
                  >
                    {/* Row 1 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-1.5">
                        <label
                          htmlFor="brandName"
                          className="text-sm font-semibold"
                          style={{ color: "#d0d0d0" }}
                        >
                          Brand Name <span style={{ color: "#ffffff" }}>*</span>
                        </label>
                        <input
                          id="brandName"
                          type="text"
                          className="dark-input px-4 py-3 text-sm w-full"
                          placeholder="e.g. Mithai Co."
                          value={form.brandName}
                          onChange={set("brandName")}
                          data-ocid="apply.input"
                        />
                        {errors.brandName && (
                          <span
                            className="text-xs"
                            style={{ color: "#e06c75" }}
                            data-ocid="apply.error_state"
                          >
                            {errors.brandName}
                          </span>
                        )}
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label
                          htmlFor="yourName"
                          className="text-sm font-semibold"
                          style={{ color: "#d0d0d0" }}
                        >
                          Your Name <span style={{ color: "#ffffff" }}>*</span>
                        </label>
                        <input
                          id="yourName"
                          type="text"
                          className="dark-input px-4 py-3 text-sm w-full"
                          placeholder="Full name"
                          value={form.yourName}
                          onChange={set("yourName")}
                          data-ocid="apply.input"
                        />
                        {errors.yourName && (
                          <span
                            className="text-xs"
                            style={{ color: "#e06c75" }}
                            data-ocid="apply.error_state"
                          >
                            {errors.yourName}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Row 2 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-1.5">
                        <label
                          htmlFor="whatsapp"
                          className="text-sm font-semibold"
                          style={{ color: "#d0d0d0" }}
                        >
                          WhatsApp Number{" "}
                          <span style={{ color: "#ffffff" }}>*</span>
                        </label>
                        <input
                          id="whatsapp"
                          type="text"
                          className="dark-input px-4 py-3 text-sm w-full"
                          placeholder="+91 XXXXX XXXXX"
                          value={form.whatsapp}
                          onChange={set("whatsapp")}
                          data-ocid="apply.input"
                        />
                        {errors.whatsapp && (
                          <span
                            className="text-xs"
                            style={{ color: "#e06c75" }}
                            data-ocid="apply.error_state"
                          >
                            {errors.whatsapp}
                          </span>
                        )}
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label
                          htmlFor="category"
                          className="text-sm font-semibold"
                          style={{ color: "#d0d0d0" }}
                        >
                          Category <span style={{ color: "#ffffff" }}>*</span>
                        </label>
                        <select
                          id="category"
                          className="dark-input px-4 py-3 text-sm w-full appearance-none"
                          value={form.category}
                          onChange={set("category")}
                          data-ocid="apply.select"
                          style={{ cursor: "pointer" }}
                        >
                          <option
                            value=""
                            disabled
                            style={{ backgroundColor: "#111" }}
                          >
                            Select category
                          </option>
                          {CATEGORIES.map((c) => (
                            <option
                              key={c}
                              value={c}
                              style={{ backgroundColor: "#111" }}
                            >
                              {c}
                            </option>
                          ))}
                        </select>
                        {errors.category && (
                          <span
                            className="text-xs"
                            style={{ color: "#e06c75" }}
                            data-ocid="apply.error_state"
                          >
                            {errors.category}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Instagram */}
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="instagram"
                        className="text-sm font-semibold"
                        style={{ color: "#d0d0d0" }}
                      >
                        Instagram Page Link{" "}
                        <span style={{ color: "#ffffff" }}>*</span>
                      </label>
                      <input
                        id="instagram"
                        type="text"
                        className="dark-input px-4 py-3 text-sm w-full"
                        placeholder="https://instagram.com/yourbrand"
                        value={form.instagram}
                        onChange={set("instagram")}
                        data-ocid="apply.input"
                      />
                      {errors.instagram && (
                        <span
                          className="text-xs"
                          style={{ color: "#e06c75" }}
                          data-ocid="apply.error_state"
                        >
                          {errors.instagram}
                        </span>
                      )}
                    </div>

                    {/* About */}
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="about"
                        className="text-sm font-semibold"
                        style={{ color: "#d0d0d0" }}
                      >
                        Tell us about your brand in 2 lines{" "}
                        <span style={{ color: "#ffffff" }}>*</span>
                      </label>
                      <textarea
                        id="about"
                        rows={3}
                        className="dark-input px-4 py-3 text-sm w-full resize-none"
                        placeholder="What makes your brand special?"
                        value={form.about}
                        onChange={set("about")}
                        data-ocid="apply.textarea"
                      />
                      {errors.about && (
                        <span
                          className="text-xs"
                          style={{ color: "#e06c75" }}
                          data-ocid="apply.error_state"
                        >
                          {errors.about}
                        </span>
                      )}
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="w-full py-4 text-base font-black rounded-xl mt-2 transition-all duration-200"
                      style={{
                        backgroundColor: "#ffffff",
                        color: "#0a0a0a",
                      }}
                      onMouseEnter={(e) => {
                        (
                          e.currentTarget as HTMLButtonElement
                        ).style.backgroundColor = "#e0e0e0";
                        (e.currentTarget as HTMLButtonElement).style.transform =
                          "translateY(-1px)";
                      }}
                      onMouseLeave={(e) => {
                        (
                          e.currentTarget as HTMLButtonElement
                        ).style.backgroundColor = "#ffffff";
                        (e.currentTarget as HTMLButtonElement).style.transform =
                          "translateY(0)";
                      }}
                      data-ocid="apply.submit_button"
                    >
                      Submit Application
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer
        className="py-10"
        style={{
          borderTop: "1px solid rgba(255,255,255,0.08)",
          backgroundColor: "rgba(0,0,0,0.3)",
        }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
            <div className="flex items-center gap-3">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center font-black text-sm select-none"
                style={{ backgroundColor: "#ffffff", color: "#0a0a0a" }}
              >
                CL
              </div>
              <span className="font-bold text-lg" style={{ color: "#f2f2f2" }}>
                Culture Loop
              </span>
            </div>

            <p className="text-sm font-medium" style={{ color: "#7a7a7a" }}>
              Curated by community. Trusted by India.
            </p>

            <button
              type="button"
              onClick={() => scrollTo("apply")}
              className="btn-white px-6 py-2.5 text-sm font-bold"
              data-ocid="footer.primary_button"
            >
              Apply as a Brand
            </button>
          </div>

          <div
            style={{
              borderTop: "1px solid rgba(255,255,255,0.06)",
              marginBottom: "1.5rem",
            }}
          />

          <div
            className="flex flex-col md:flex-row items-center justify-between gap-2 text-xs"
            style={{ color: "#4a4a4a" }}
          >
            <span>
              © {new Date().getFullYear()} Culture Loop · Bhopal, India · No
              paid placements. Ever.
            </span>
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
                typeof window !== "undefined" ? window.location.hostname : "",
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
              style={{ color: "#4a4a4a" }}
            >
              Built with love using caffeine.ai
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
