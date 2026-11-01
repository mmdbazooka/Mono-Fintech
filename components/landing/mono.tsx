"use client";
import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowUpRight,
  ArrowRight,
  Check,
  LockKeyhole,
  UnlockKeyhole,
  ChevronDown,
  Plus,
  ShoppingBag,
  Coffee,
  Plane,
  ArrowDownLeft,
  ShieldCheck,
  Globe,
} from "lucide-react";
import {
  SiteHeader,
  ScrollEffects,
  Footer,
  SignupForm,
  ContactModal,
  FAQ,
  BrandMark,
  Arrow,
} from "@/components/ui/shared";
import BankCard from "./bank-card";
import {
  spendingData,
  cardFinishes,
  faq,
  type Period,
} from "@/data/fintech-demo";
function Bars({
  values = [42, 63, 48, 86, 57, 72, 95],
  labels = ["M", "T", "W", "T", "F", "S", "S"],
  large = false,
}: {
  values?: readonly number[];
  labels?: readonly string[];
  large?: boolean;
}) {
  return (
    <div
      className={`spending-bars ${large ? "large-bars" : ""}`}
      role="img"
      aria-label={`Demo spending chart: ${values.map((v, i) => `${labels[i]} ${v} relative units`).join(", ")}`}
    >
      {values.map((v, i) => (
        <div key={i}>
          <span
            className={
              i === values.indexOf(Math.max(...values)) ? "bar-peak" : ""
            }
            style={{ height: `${v}%` }}
          />
          <small>{labels[i]}</small>
        </div>
      ))}
    </div>
  );
}
export default function MonoLanding() {
  const [modal, setModal] = useState<string | null>(null);
  const [locked, setLocked] = useState(true);
  const [period, setPeriod] = useState<Period>("week");
  const [finish, setFinish] = useState(0);
  const [annual, setAnnual] = useState(false);
  const reduced = useReducedMotion();
  const data = spendingData[period];
  return (
    <>
      <ScrollEffects />
      <SiteHeader
        brand="mono"
        links={[
          { label: "Personal", href: "#personal" },
          { label: "Business", href: "#plans" },
          { label: "Features", href: "#features" },
          { label: "Pricing", href: "#plans" },
          { label: "Resources", href: "#questions" },
        ]}
        action="Open an account"
        onSecondary={() => setModal("signin")}
        onAction={() => setModal("Your next chapter starts here.")}
      />
      <main id="main">
        <section id="personal" className="mono-hero">
          <div className="mono-hero-copy">
            <p className="eyebrow">
              <span className="dot" />A NEW PERSPECTIVE ON EVERYDAY MONEY
            </p>
            <h1>
              Banking that
              <br />
              <span>moves with you.</span>
            </h1>
            <p>
              Life doesn’t stand still. Neither should your money.
              <br />
              Spend, save and see the bigger picture — all in one
              <br className="desktop-break" /> beautifully simple place.
            </p>
            <SignupForm compact button="Get early access" />
            <div className="hero-trust">
              <span className="trust-avatars">
                <i>AM</i>
                <i>JL</i>
                <i>SK</i>
              </span>
              <p>
                Less friction. More possibility.
                <small>A banking concept built around real life.</small>
              </p>
            </div>
          </div>
          <div className="floating-card-stage">
            <svg
              className="card-orbits"
              viewBox="0 0 650 600"
              fill="none"
              aria-hidden="true"
            >
              <ellipse
                cx="320"
                cy="320"
                rx="310"
                ry="180"
                transform="rotate(-30 320 320)"
                stroke="#7299ff20"
              />
              <ellipse
                cx="320"
                cy="320"
                rx="260"
                ry="140"
                transform="rotate(-30 320 320)"
                stroke="#7299ff12"
              />
              <path
                d="M20 400h80l40-60 50 32 70-100 50 35 100-100h200"
                stroke="#789fff1d"
              />
              <circle cx="411" cy="207" r="4" fill="#7595ff55" />
            </svg>
            <motion.div
              className="hero-card hero-card-back"
              animate={reduced ? {} : { y: [0, -10, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            >
              <BankCard finish="blue" />
            </motion.div>
            <motion.div
              className="hero-card hero-card-middle"
              animate={reduced ? {} : { y: [0, 8, 0] }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            >
              <BankCard finish="silver" />
            </motion.div>
            <motion.div
              className="hero-card hero-card-front"
              animate={reduced ? {} : { y: [0, -6, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            >
              <BankCard />
            </motion.div>
            <div className="floating-transaction">
              <span>
                <ArrowDownLeft size={16} />
              </span>
              <div>
                A little good news.<small>Salary received</small>
              </div>
              <strong>
                +$4,850.00<small>JUST NOW</small>
              </strong>
            </div>
            <p className="card-stage-caption micro">
              DESIGNED FOR THE WAY YOU LIVE.
            </p>
          </div>
        </section>
        <section className="mono-trust-row">
          <p>
            YOUR EVERYDAY.
            <br />
            <span>WITHOUT THE COMPLICATIONS.</span>
          </p>
          <span>
            <ShieldCheck size={20} />
            Thoughtful controls
          </span>
          <span>
            <Globe size={20} />A wider perspective
          </span>
          <span>
            <LockKeyhole size={19} />
            Privacy by design
          </span>
          <span>ONE APP. LESS ADMIN.</span>
        </section>
        <section id="features" className="section mono-features">
          <div className="section-head">
            <div>
              <p className="eyebrow">THE EVERYDAY, RECONSIDERED</p>
              <h2>
                A little less banking.
                <br />
                <span>A lot more living.</span>
              </h2>
            </div>
            <p>
              All the things you need.
              <br />
              None of the things you don’t.
            </p>
          </div>
          <div className="mono-bento">
            <article className="spend-feature reveal-block">
              <div className="feature-label">
                <span>01 / CLARITY</span>
                <ArrowUpRight size={20} />
              </div>
              <h3>
                See where it goes.
                <br />
                Choose where it takes you.
              </h3>
              <p>
                Your spending, in perspective.
                <br />
                So the next decision feels a little clearer.
              </p>
              <div className="mini-spending">
                <div>
                  <span>YOUR SPENDING</span>
                  <strong>
                    $1,284<span>.50</span>
                  </strong>
                  <small>↓ 12.4% from last week</small>
                </div>
                <Bars />
              </div>
            </article>
            <article className="accounts-feature reveal-block">
              <div className="feature-label">
                <span>02 / SIMPLICITY</span>
                <Plus size={20} />
              </div>
              <h3>
                One place.
                <br />
                All your possibilities.
              </h3>
              <p>
                A clear view of your money.
                <br />A little more peace of mind.
              </p>
              <div className="account-mini">
                <span>
                  Your total balance<small>•••</small>
                </span>
                <strong>$12,840.60</strong>
                <div>
                  <span>
                    <BrandMark brand="mono" />
                    Everyday
                  </span>
                  <b>$4,280.60</b>
                </div>
                <div>
                  <span>
                    <i>↗</i>A little later
                  </span>
                  <b>$8,560.00</b>
                </div>
              </div>
            </article>
            <article className="travel-feature reveal-block">
              <div className="feature-label">
                <span>03 / FREEDOM</span>
                <Plane size={19} />
              </div>
              <h3>Go a little further.</h3>
              <p>For wherever life takes you.</p>
              <div className="travel-map">
                <svg viewBox="0 0 350 170" fill="none" aria-hidden="true">
                  <defs>
                    <pattern
                      id="map-grid"
                      width="8"
                      height="8"
                      patternUnits="userSpaceOnUse"
                    >
                      <circle cx="2" cy="2" r="1" fill="#7897dc33" />
                    </pattern>
                  </defs>
                  <path
                    d="m25 45 30-23 47 8 22 27-22 25-23-5-11 23-19-20-13-9Zm74 51 23 5 15 34-17 31-13-15-4-26ZM162 35l31-12 23 12 28-9 53 20 19 26-26 19-30-10-16 17-21-9-12 16-29-19-10-29ZM172 78l34 4 12 23-15 41-18-8-12-27ZM272 128l26-7 21 17-3 15-33 2Z"
                    fill="url(#map-grid)"
                  />
                  <path
                    d="M76 65Q145-15 215 63"
                    stroke="#7596ff"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                  />
                  <circle cx="76" cy="65" r="4" fill="#8eabff" />
                  <circle cx="215" cy="63" r="4" fill="#8eabff" />
                </svg>
                <span>
                  EUR <b>€1,240.00</b>
                  <small>→ USD $1,340.69</small>
                </span>
              </div>
            </article>
            <article className="security-feature reveal-block">
              <div className="feature-label">
                <span>04 / CONTROL</span>
                <ShieldCheck size={19} />
              </div>
              <h3>Your card. Your call.</h3>
              <p>A little peace of mind, on tap.</p>
              <button
                className={`security-lock ${locked ? "is-locked" : ""}`}
                onClick={() => setLocked(!locked)}
                aria-pressed={locked}
                aria-label={locked ? "Unfreeze demo card" : "Freeze demo card"}
              >
                {locked ? (
                  <LockKeyhole size={34} />
                ) : (
                  <UnlockKeyhole size={34} />
                )}
                <span>
                  {locked ? "Card frozen" : "Card active"}
                  <small>
                    Tap to {locked ? "unfreeze" : "freeze"} · Local preview
                  </small>
                </span>
                <i />
              </button>
            </article>
            <article className="notifications-feature reveal-block">
              <div className="feature-label">
                <span>05 / IN THE KNOW</span>
                <ArrowUpRight size={19} />
              </div>
              <h3>Stay a step ahead.</h3>
              <p>The little updates that make a difference.</p>
              <div className="notification-mini">
                <span>
                  <Coffee size={17} />
                </span>
                <div>
                  A good morning, made.<small>Morning Ritual · Coffee</small>
                </div>
                <strong>
                  −$5.50<small>JUST NOW</small>
                </strong>
              </div>
              <div className="notification-mini">
                <span>
                  <ShoppingBag size={17} />
                </span>
                <div>
                  Something just for you.
                  <small>Everyday Objects · Shopping</small>
                </div>
                <strong>
                  −$48.00<small>12 MIN AGO</small>
                </strong>
              </div>
            </article>
          </div>
        </section>
        <section id="insights" className="section mono-insights">
          <div className="insights-copy">
            <p className="eyebrow">KNOW YOUR MONEY. KNOW YOURSELF.</p>
            <h2>
              The bigger picture.
              <br />
              <span>In the little details.</span>
            </h2>
            <p>
              Find your rhythm. Spot the patterns.
              <br />
              Make space for the things that matter most.
            </p>
            <ul>
              {[
                "See your spending, beautifully organized.",
                "A clearer view, from this week to this year.",
                "Insights that fit the way you live.",
              ].map((t) => (
                <li key={t}>
                  <Check size={15} />
                  {t}
                </li>
              ))}
            </ul>
            <span className="concept-note">
              Interactive preview · Sample financial data
            </span>
          </div>
          <div className="spending-panel">
            <div className="spending-panel-top">
              <span>Spending overview</span>
              <div className="segmented" aria-label="Spending timeframe">
                {(["week", "month", "year"] as const).map((p) => (
                  <button
                    key={p}
                    aria-pressed={period === p}
                    onClick={() => setPeriod(p)}
                  >
                    {p[0].toUpperCase() + p.slice(1)}
                  </button>
                ))}
              </div>
            </div>
            <p className="spending-total" aria-live="polite">
              ${data.total}
              <span>
                ↓ {data.change}% <small>vs. previous {period}</small>
              </span>
            </p>
            <Bars values={data.values} labels={data.labels} large />
            <div className="spending-categories">
              {data.categories.map(([name, value, width], i) => (
                <div key={name}>
                  <span>
                    <i
                      style={{
                        background: [
                          "#819bff",
                          "#617de0",
                          "#475cae",
                          "#34416c",
                        ][i],
                      }}
                    />
                    {name}
                  </span>
                  <b>{value}</b>
                  <i style={{ width: `${width}%` }} />
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="cards" className="section mono-card-config">
          <div className="card-config-header">
            <p className="eyebrow">A LITTLE MORE YOU</p>
            <h2>
              Good design.
              <br />
              <span>In your hands.</span>
            </h2>
            <p>
              Three finishes. One considered idea.
              <br />
              The everyday deserves something extraordinary.
            </p>
          </div>
          <div
            className={`large-card-stage stage-${cardFinishes[finish].key}`}
            onPointerMove={(event) => {
              if (reduced || !window.matchMedia("(hover: hover)").matches)
                return;
              const rect = event.currentTarget.getBoundingClientRect();
              event.currentTarget.style.setProperty(
                "--tilt-x",
                `${((event.clientX - rect.left) / rect.width - 0.5) * 8}deg`,
              );
              event.currentTarget.style.setProperty(
                "--tilt-y",
                `${((event.clientY - rect.top) / rect.height - 0.5) * -8}deg`,
              );
            }}
            onPointerLeave={(event) => {
              event.currentTarget.style.setProperty("--tilt-x", "0deg");
              event.currentTarget.style.setProperty("--tilt-y", "0deg");
            }}
          >
            <div className="card-floor" />
            <motion.div
              key={finish}
              initial={reduced ? false : { y: 12, opacity: 0.4 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.35 }}
            >
              <BankCard finish={cardFinishes[finish].key} />
            </motion.div>
            <svg
              className="config-coordinate"
              viewBox="0 0 600 400"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M20 60V20h40M540 20h40v40M20 340v40h40M540 380h40v-40"
                stroke="#718dd13c"
              />
            </svg>
          </div>
          <div className="card-config-bottom">
            <div className="card-swatches" aria-label="Card finish">
              {cardFinishes.map((f, i) => (
                <button
                  key={f.key}
                  aria-pressed={finish === i}
                  onClick={() => setFinish(i)}
                >
                  <i style={{ background: f.color }} />
                  {f.name}
                </button>
              ))}
            </div>
            <div aria-live="polite">
              <strong>{cardFinishes[finish].name}</strong>
              <p>{cardFinishes[finish].desc}</p>
              <span>{cardFinishes[finish].detail}</span>
            </div>
          </div>
        </section>
        <section id="transfers" className="section transfer-story">
          <div className="transfer-visual">
            <div className="transfer-flow">
              <span className="transfer-avatar">
                AM<small>You</small>
              </span>
              <i />
              <span className="transfer-core">
                <BrandMark brand="mono" />
              </span>
              <i />
              <span className="transfer-avatar friend">
                JL<small>Jamie</small>
              </span>
            </div>
            <div className="transfer-receipt">
              <div>
                <span>
                  <ArrowUpRight size={20} />
                </span>
                <p>
                  A little something for Jamie.
                  <small>Weekend plans, sorted.</small>
                </p>
                <strong>$120.00</strong>
              </div>
              <ol>
                <li>
                  Payment created<span>14:32</span>
                </li>
                <li>
                  On its way<span>14:32</span>
                </li>
                <li>
                  Demo complete
                  <Check size={12} />
                </li>
              </ol>
              <p>Illustrative timeline · No money moves</p>
            </div>
          </div>
          <div>
            <p className="eyebrow">CLOSER, WITHOUT THE COMPLICATIONS</p>
            <h2>
              Money moves.
              <br />
              <span>Life happens.</span>
            </h2>
            <p>
              For the shared dinner. The spontaneous trip.
              <br />
              The everyday moments that mean everything.
              <br />
              An idea for moving money with a little less effort.
            </p>
            <button
              className="text-link"
              onClick={() => setModal("A simpler way to start.")}
            >
              Explore the MONO concept
              <Arrow />
            </button>
          </div>
        </section>
        <section id="plans" className="section mono-pricing">
          <div className="section-head">
            <div>
              <p className="eyebrow">SIMPLE. FROM THE START.</p>
              <h2>
                Your pace.
                <br />
                <span>Your plan.</span>
              </h2>
            </div>
            <div>
              <p>Illustrative plans. No real charges.</p>
              <div className="segmented" aria-label="Plan billing period">
                <button aria-pressed={!annual} onClick={() => setAnnual(false)}>
                  Monthly
                </button>
                <button aria-pressed={annual} onClick={() => setAnnual(true)}>
                  Annually <span>−25%</span>
                </button>
              </div>
            </div>
          </div>
          <div className="mono-plan-grid">
            {[
              {
                name: "Essential",
                tag: "EVERYTHING YOU NEED",
                desc: "Everyday money, beautifully uncomplicated.",
                price: 0,
                yearly: 0,
                features: [
                  "Your everyday account concept",
                  "A beautifully designed virtual card",
                  "Clear spending insights",
                  "Simple local transfer preview",
                ],
              },
              {
                name: "Plus",
                tag: "A LITTLE SOMETHING EXTRA",
                desc: "More room for the life you want to live.",
                price: 8,
                yearly: 6,
                features: [
                  "Everything in Essential",
                  "Your choice of physical card finish",
                  "Advanced spending perspectives",
                  "Priority support concept",
                ],
              },
            ].map((p, i) => (
              <article className={i === 1 ? "plus-plan" : ""} key={p.name}>
                <div className="plan-top">
                  <p className="micro">{p.tag}</p>
                  <span>
                    {i === 1 ? <BrandMark brand="mono" /> : <Plus size={23} />}
                  </span>
                </div>
                <h3>{p.name}</h3>
                <p>{p.desc}</p>
                <div className="mono-price">
                  ${annual ? p.yearly : p.price}
                  <span>/ month</span>
                </div>
                <small>
                  {i === 0
                    ? "Free, by design."
                    : annual
                      ? "$72 billed yearly · Sample price"
                      : "Billed monthly · Sample price"}
                </small>
                <ul>
                  {p.features.map((f) => (
                    <li key={f}>
                      <Check size={14} />
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  className={`button ${i === 1 ? "primary" : "ghost"}`}
                  onClick={() =>
                    setModal(`A little more ${p.name.toLowerCase()}.`)
                  }
                >
                  Join the {p.name} waitlist
                  <ArrowRight size={16} />
                </button>
                <details>
                  <summary>
                    What’s included?
                    <ChevronDown size={14} />
                  </summary>
                  <p>
                    {i === 0
                      ? "An illustrative everyday account, simple budgeting tools and a clean view of your spending. There is no real bank account or financial service."
                      : "An illustrative premium upgrade with three material studies and expanded sample insights. No card is ordered and no payment is collected."}
                  </p>
                </details>
              </article>
            ))}
          </div>
        </section>
        <section id="questions" className="section mono-faq">
          <div>
            <p className="eyebrow">LET’S KEEP THINGS CLEAR</p>
            <h2>
              A few good
              <br />
              questions.
            </h2>
            <button
              onClick={() => setModal("Happy to clear things up.")}
              className="text-link"
            >
              Start a conversation
              <Arrow />
            </button>
          </div>
          <FAQ items={faq} />
        </section>
        <section className="section mono-finale">
          <BrandMark brand="mono" />
          <p className="eyebrow">MAKE ROOM FOR MORE</p>
          <h2>
            Your next chapter.
            <br />
            <span>A little more MONO.</span>
          </h2>
          <p>Less friction between your money and your life.</p>
          <SignupForm button="Join the waitlist" />
          <button className="mono-login" onClick={() => setModal("signin")}>
            Already exploring? Try demo login
            <ArrowUpRight size={13} />
          </button>
        </section>
      </main>
      <Footer
        brand="mono"
        links={[
          { label: "Features", href: "#features" },
          { label: "The card", href: "#cards" },
          { label: "Your plan", href: "#plans" },
        ]}
      />
      <ContactModal
        open={!!modal}
        onClose={() => setModal(null)}
        title={
          modal === "signin" ? "A concept, not an account." : (modal ?? "")
        }
        kind={modal === "signin" ? "signin" : "interest"}
      />
    </>
  );
}
