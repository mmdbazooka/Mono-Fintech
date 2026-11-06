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
      className={`
        spending-bars flex items-end justify-between gap-[9px] h-[110px] pb-[23px] [&>div]:relative [&>div]:h-full
        [&>div]:w-full [&>div]:flex [&>div]:items-end [&>div]:justify-center [&>div>span]:block [&>div>span]:w-full
        [&>div>span]:bg-[image:linear-gradient(0deg,_#4762a5,_#6e8ad8)] [&>div>span]:[border-radius:4px_4px_0_0]
        [&>div>span]:[transition:height_0.5s_ease] [&>div>span]:max-w-[48px] [&>div>span]:min-h-[6px]
        [&_.bar-peak]:bg-[image:linear-gradient(0deg,_#7999f7,_#a8bdff)] [&_.bar-peak]:[box-shadow:0_0_25px_#7d9bf91a]
        [&_small]:absolute [&_small]:bottom-[-20px] [&_small]:left-0 [&_small]:right-0 [&_small]:text-center
        [&_small]:text-[7px] [&_small]:text-[#7086b0] [&_small]:leading-[1] [&_small]:whitespace-nowrap [&&_small]:m-0
        [@media(max-width:_1100px)]:gap-[6px] [@media(max-width:_760px)]:h-[100px] [@media(max-width:_760px)]:gap-[7px]
      ${
        large
          ? `
        large-bars h-[190px] pt-[20px] px-[5px] pb-[25px] gap-[18px] my-[20px] mx-0 [&&>div>span]:max-w-[42px]
        [&_small]:text-[8px] [&_small]:bottom-[-20px] [@media(max-width:_760px)]:h-[180px]
        [@media(max-width:_760px)]:gap-[16px]
      `
          : ""
      }`}
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
        <section
          id="personal"
          className={`
          mono-hero max-w-[1680px] m-auto grid [grid-template-columns:1.05fr_1fr] gap-[25px] min-h-[850px] pt-[180px]
          px-[var(--gutter)] pb-[85px] items-center relative isolate overflow-hidden [&::before]:content-['']
          [&::before]:absolute [&::before]:w-[70%] [&::before]:h-[90%] [&::before]:right-0 [&::before]:top-0
          [&::before]:z-[-1] [&::before]:bg-[image:radial-gradient(ellipse_at_center,_#2446a127,_transparent_70%)]
          [&::before]:pointer-events-none [&_h1]:text-[length:clamp(55px,_5.8vw,_87px)] [&_h1]:leading-[1.075]
          [&_h1]:tracking-[-0.065em] [&_h1]:whitespace-nowrap
          [&_h1>span]:bg-[image:linear-gradient(105deg,_#cbd5ff,_#7e98fa_65%)] [&_h1>span]:bg-clip-text
          [&_h1>span]:text-[transparent] [&_.signup-form]:max-w-[440px] [&_.signup-form]:gap-[7px]
          [&_.signup-form]:[grid-template-columns:1fr_auto] [&_.signup-form_input]:[border-color:#9eb5ff27]
          [&_.signup-form_input]:bg-[#ffffff03] [&_.signup-form_input]:text-[11px] [&_.signup-form_input]:min-h-[47px]
          [&_.signup-form_input]:rounded-[5px] [&_.signup-form_input]:p-[12px] [&_.signup-form>.button]:text-[10px]
          [&_.signup-form>.button]:gap-[15px] [&_.signup-form>.button]:py-[12px] [&_.signup-form>.button]:px-[16px]
          [&_.signup-form>.button]:min-h-[47px] [&_.form-note]:text-[8px] [&_.form-note]:text-[#6d7c9d]
          [&_.form-note]:mt-[6px] [@media(max-width:_1100px)]:[grid-template-columns:1.05fr_1fr]
          [@media(max-width:_1100px)]:pt-[165px] [@media(max-width:_1100px)]:min-h-[790px]
          [@media(max-width:_1100px)]:gap-[15px] [@media(max-width:_1100px)]:[&_h1]:text-[length:5.8vw]
          [@media(max-width:_1100px)]:[&_.signup-form]:gap-[6px]
          [@media(max-width:_1100px)]:[&_.signup-form>.button]:p-[10px]
          [@media(max-width:_1100px)]:[&_.signup-form>.button]:text-[8px]
          [@media(max-width:_1100px)]:[&_.signup-form>.button]:gap-[8px]
          [@media(max-width:_1100px)]:[&_.signup-form>input]:text-[9px]
          [@media(max-width:_1100px)]:[&_.signup-form>input]:p-[10px]
          [@media(max-width:_1100px)]:[&_.form-success]:p-[15px]
          [@media(max-width:_1100px)]:[&_.form-success_strong]:text-[12px]
          [@media(max-width:_1100px)]:[&_.form-success_p]:text-[10px] [@media(max-width:_760px)]:flex
          [@media(max-width:_760px)]:flex-col [@media(max-width:_760px)]:gap-[10px] [@media(max-width:_760px)]:pt-[125px]
          [@media(max-width:_760px)]:pb-[30px] [@media(max-width:_760px)]:min-h-0
          [@media(max-width:_760px)]:[&_h1]:text-[length:clamp(46px,_11.6vw,_78px)]
          [@media(max-width:_760px)]:[&_h1]:leading-[1.1]
          [@media(max-width:_760px)]:[&_.signup-form]:[grid-template-columns:1fr_auto]
          [@media(max-width:_760px)]:[&_.signup-form]:max-w-[460px]
          [@media(max-width:_760px)]:[&_.signup-form>.button]:text-[9px]
          [@media(max-width:_760px)]:[&_.signup-form>.button]:gap-[10px]
          [@media(max-width:_760px)]:[&_.signup-form>.button]:py-[11px]
          [@media(max-width:_760px)]:[&_.signup-form>.button]:px-[13px]
          [@media(max-width:_760px)]:[&_.signup-form>.button]:min-h-[45px]
          [@media(max-width:_760px)]:[&_.signup-form>input]:text-[10px]
          [@media(max-width:_760px)]:[&_.signup-form>input]:p-[11px]
          [@media(max-width:_760px)]:[&_.signup-form>input]:min-h-[45px]
          [@media(max-width:_760px)]:[&_.form-note]:text-[7px]
        `}
        >
          <div
            className={`
            mono-hero-copy [&>.eyebrow]:text-[8px] [&>.eyebrow]:tracking-[0.16em] [&>.eyebrow]:mb-[28px]
            [&>p:not(.eyebrow)]:text-[13px] [&>p:not(.eyebrow)]:text-[#9ba7c1] [&>p:not(.eyebrow)]:mt-[28px]
            [&>p:not(.eyebrow)]:mx-0 [&>p:not(.eyebrow)]:mb-[30px] [&>p:not(.eyebrow)]:leading-[1.9]
            [@media(max-width:_1100px)]:[&>.eyebrow]:text-[6px] [@media(max-width:_1100px)]:[&>p:not(.eyebrow)]:text-[11px]
            [@media(max-width:_760px)]:w-full [@media(max-width:_760px)]:[&>.eyebrow]:text-[7px]
            [@media(max-width:_760px)]:[&>.eyebrow]:tracking-[0.1em] [@media(max-width:_760px)]:[&>.eyebrow]:gap-[8px]
            [@media(max-width:_760px)]:[&>.eyebrow]:mb-[24px] [@media(max-width:_760px)]:[&>p:not(.eyebrow)]:text-[12px]
            [@media(max-width:_760px)]:[&>p:not(.eyebrow)]:mt-[23px] [@media(max-width:_760px)]:[&>p:not(.eyebrow)]:mx-0
            [@media(max-width:_760px)]:[&>p:not(.eyebrow)]:mb-[26px]
            [@media(max-width:_760px)]:[&>p:not(.eyebrow)]:leading-[1.9]
          `}
          >
            <p
              className={`
              eyebrow text-[10px] font-medium tracking-[0.15em] uppercase leading-[1.6] flex items-center gap-[10px]
              text-[var(--muted)] mb-[25px] [&_.dot]:w-[6px] [&_.dot]:h-[6px] [&_.dot]:inline-block
              [&_.dot]:bg-[var(--accent)] [&_.dot]:rounded-full
              [&_.dot]:[box-shadow:0_0_12px_color-mix(in_srgb,_var(--accent)_50%,_transparent)]
            `}
            >
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
              <br
                className={`desktop-break [@media(max-width:_760px)]:hidden`}
              />{" "}
              beautifully simple place.
            </p>
            <SignupForm compact button="Get early access" />
            <div
              className={`
              hero-trust flex items-center gap-[13px] mt-[35px] [&>p]:text-[10px] [&>p]:text-[#bdc7dd] [&>p]:leading-[1.5]
              [&_small]:block [&_small]:text-[#7181a4] [&_small]:text-[8px] [&_small]:mt-[3px]
              [@media(max-width:_760px)]:mt-[25px] [@media(max-width:_760px)]:gap-[11px]
              [@media(max-width:_760px)]:[&>p]:text-[9px] [@media(max-width:_760px)]:[&_small]:text-[7px]
            `}
            >
              <span
                className={`
                trust-avatars flex pl-[5px] [&>i]:not-italic [&>i]:grid [&>i]:place-items-center [&>i]:w-[28px] [&>i]:h-[28px]
                [&>i]:rounded-full [&>i]:bg-[#536384] [&>i]:text-[#c8d0e3] [&>i]:[border:2px_solid_var(--bg)] [&>i]:ml-[-5px]
                [&>i]:text-[8px] [&>i:nth-child(2)]:bg-[#6c686a] [&>i:nth-child(2)]:text-[#e2d3be]
                [&>i:nth-child(3)]:bg-[#4d6665] [&>i:nth-child(3)]:text-[#c6dfd0] [@media(max-width:_760px)]:[&>i]:w-[25px]
                [@media(max-width:_760px)]:[&>i]:h-[25px] [@media(max-width:_760px)]:[&>i]:text-[6px]
              `}
              >
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
          <div
            className={`
            floating-card-stage relative h-[550px] min-w-0 perspective-[1300px] [@media(max-width:_1100px)]:h-[520px]
            [@media(max-width:_760px)]:h-[455px] [@media(max-width:_760px)]:w-full [@media(max-width:_760px)]:max-w-[420px]
            [@media(max-width:_760px)]:my-0 [@media(max-width:_760px)]:mx-auto
          `}
          >
            <svg
              className={`card-orbits absolute w-[125%] h-full left-[-10%] top-0 max-w-none pointer-events-none`}
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
              className={`
                hero-card absolute w-[370px] [filter:drop-shadow(0_20px_30px_#0008)] [@media(min-width:_1700px)]:w-[420px]
                [@media(max-width:_1100px)]:w-[300px] [@media(max-width:_760px)]:w-[275px] hero-card-back
                [left:calc(50%_-_60px)] top-[20px] z-[1] opacity-[0.88]
                [&>.bank-card]:[transform:rotate(14deg)_rotateY(-15deg)] [@media(min-width:_1700px)]:[left:calc(50%_-_60px)]
                [@media(max-width:_1100px)]:[left:calc(50%_-_80px)] [@media(max-width:_1100px)]:top-[60px]
                [@media(max-width:_760px)]:[left:calc(50%_-_105px)] [@media(max-width:_760px)]:top-[30px]
              `}
              animate={reduced ? {} : { y: [0, -10, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            >
              <BankCard finish="blue" />
            </motion.div>
            <motion.div
              className={`
                hero-card absolute w-[370px] [filter:drop-shadow(0_20px_30px_#0008)] [@media(min-width:_1700px)]:w-[420px]
                [@media(max-width:_1100px)]:w-[300px] [@media(max-width:_760px)]:w-[275px] hero-card-middle
                [left:calc(50%_-_180px)] top-[120px] z-[2] [&>.bank-card]:[transform:rotate(-11deg)_rotateY(-10deg)]
                [@media(min-width:_1700px)]:[left:calc(50%_-_200px)] [@media(max-width:_1100px)]:[left:calc(50%_-_150px)]
                [@media(max-width:_1100px)]:top-[145px] [@media(max-width:_760px)]:[left:calc(50%_-_135px)]
                [@media(max-width:_760px)]:top-[115px]
              `}
              animate={reduced ? {} : { y: [0, 8, 0] }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            >
              <BankCard finish="silver" />
            </motion.div>
            <motion.div
              className={`
                hero-card absolute w-[370px] [filter:drop-shadow(0_20px_30px_#0008)] [@media(min-width:_1700px)]:w-[420px]
                [@media(max-width:_1100px)]:w-[300px] [@media(max-width:_760px)]:w-[275px] hero-card-front
                [left:calc(50%_-_245px)] top-[230px] z-[3] [&>.bank-card]:[transform:rotate(-16deg)_rotateY(-13deg)]
                [@media(min-width:_1700px)]:[left:calc(50%_-_260px)] [@media(max-width:_1100px)]:[left:calc(50%_-_190px)]
                [@media(max-width:_1100px)]:top-[240px] [@media(max-width:_760px)]:[left:calc(50%_-_155px)]
                [@media(max-width:_760px)]:top-[200px]
              `}
              animate={reduced ? {} : { y: [0, -6, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            >
              <BankCard />
            </motion.div>
            <div
              className={`
              floating-transaction absolute right-[-10px] bottom-[35px] z-[5] flex items-center gap-[11px]
              bg-[image:linear-gradient(130deg,_#243456f0,_#121d37f0)] [backdrop-filter:blur(15px)] py-[15px] px-[17px]
              [border:1px_solid_#a3b5f13b] rounded-[9px] [box-shadow:0_10px_40px_#0005] [transform:rotate(-3deg)]
              [&>span]:w-[31px] [&>span]:h-[31px] [&>span]:rounded-full [&>span]:grid [&>span]:place-items-center
              [&>span]:bg-[#829aff1c] [&>span]:text-[#b4c3ff] [&>div]:text-[10px] [&>div]:text-[#d6def3]
              [&>div]:leading-[1.6] [&_small]:block [&_small]:text-[8px] [&_small]:text-[#8595b9] [&>strong]:text-[11px]
              [&>strong]:leading-[1.6] [&>strong]:ml-[12px] [&>strong]:font-medium [&>strong>small]:text-[6px]
              [&>strong>small]:tracking-[0.1em] [&>strong>small]:text-right [@media(min-width:_1700px)]:bottom-[10px]
              [@media(max-width:_1100px)]:right-[-5px] [@media(max-width:_1100px)]:bottom-[25px]
              [@media(max-width:_1100px)]:p-[12px] [@media(max-width:_1100px)]:gap-[8px]
              [@media(max-width:_1100px)]:[&>div]:text-[8px] [@media(max-width:_1100px)]:[&>strong]:text-[9px]
              [@media(max-width:_1100px)]:[&>strong]:ml-[5px] [@media(max-width:_1100px)]:[&_small]:text-[6px]
              [@media(max-width:_760px)]:right-0 [@media(max-width:_760px)]:bottom-[20px]
              [@media(max-width:_760px)]:py-[11px] [@media(max-width:_760px)]:px-[13px] [@media(max-width:_760px)]:gap-[9px]
              [@media(max-width:_760px)]:[transform:rotate(-3deg)] [@media(max-width:_760px)]:[&>span]:w-[26px]
              [@media(max-width:_760px)]:[&>span]:h-[26px] [@media(max-width:_760px)]:[&>div]:text-[8px]
              [@media(max-width:_760px)]:[&>strong]:text-[9px] [@media(max-width:_760px)]:[&>strong]:ml-[10px]
              [@media(max-width:_760px)]:[&_small]:text-[6px] [@media(max-width:_760px)]:[&>strong>small]:text-[5px]
            `}
            >
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
            <p
              className={`
              card-stage-caption absolute bottom-[-15px] right-[25px] text-[7px] tracking-[0.2em] text-[#5f749f]
              [@media(max-width:_1100px)]:bottom-[-10px] [@media(max-width:_1100px)]:text-[6px]
              [@media(max-width:_760px)]:bottom-[-9px] [@media(max-width:_760px)]:text-[6px]
              [@media(max-width:_760px)]:right-0 micro font-medium uppercase leading-[1.6]
            `}
            >
              DESIGNED FOR THE WAY YOU LIVE.
            </p>
          </div>
        </section>
        <section
          className={`
          mono-trust-row max-w-[1504px] my-0 mx-auto flex items-center justify-between py-[33px] px-[var(--gutter)]
          [border-top:1px_solid_var(--line)] [border-bottom:1px_solid_var(--line)] gap-[20px] text-[#8c9bbc]
          [&>p]:text-[8px] [&>p]:tracking-[0.13em] [&>p]:leading-[1.9] [&>p>span]:text-[6px] [&>p>span]:text-[#8198bd]
          [&>span]:flex [&>span]:items-center [&>span]:gap-[11px] [&>span]:text-[10px] [&>span]:text-[#9baccd]
          [&>span>svg]:text-[#7e96cc] [&>span:last-child]:text-[7px] [&>span:last-child]:tracking-[0.1em]
          [&>span:last-child]:text-[#8198bd] [@media(max-width:_1100px)]:gap-[15px]
          [@media(max-width:_1100px)]:[&>span]:text-[8px] [@media(max-width:_1100px)]:[&>span]:gap-[8px]
          [@media(max-width:_1100px)]:[&>span:last-child]:hidden [@media(max-width:_760px)]:py-[28px]
          [@media(max-width:_760px)]:px-[25px] [@media(max-width:_760px)]:flex-wrap [@media(max-width:_760px)]:gap-[22px]
          [@media(max-width:_760px)]:justify-center [@media(max-width:_760px)]:[&>p]:w-full
          [@media(max-width:_760px)]:[&>p]:text-center [@media(max-width:_760px)]:[&>p]:text-[8px]
          [@media(max-width:_760px)]:[&>p>span]:text-[6px] [@media(max-width:_760px)]:[&>span]:text-[7px]
          [@media(max-width:_760px)]:[&>span]:gap-[6px] [@media(max-width:_760px)]:[&>span>svg]:w-[15px]
          [@media(max-width:_760px)]:[&>span>svg]:h-[15px]
        `}
        >
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
        <section
          id="features"
          className={`
          section py-[110px] px-[var(--gutter)] m-auto [@media(max-width:_1000px)]:pb-[85px]
          [@media(max-width:_760px)]:pb-[70px] mono-features max-w-[1400px] pt-[115px]
          [@media(max-width:_760px)]:pt-[70px]
        `}
        >
          <div
            className={`
            section-head flex items-end justify-between gap-[35px] mb-[50px] [&_h2]:text-[length:clamp(36px,_4.1vw,_60px)]
            [&_h2]:leading-[1.1] [&>p]:text-[var(--muted)] [&>p]:max-w-[340px] [&>p]:text-[12px] [&_.eyebrow]:mb-[18px]
            [@media(max-width:_1000px)]:gap-[25px] [@media(max-width:_1000px)]:[&>p]:max-w-[270px]
            [@media(max-width:_760px)]:block [@media(max-width:_760px)]:mb-[35px]
            [@media(max-width:_760px)]:[&>p]:mt-[22px] [@media(max-width:_760px)]:[&>p]:max-w-[400px]
            [@media(max-width:_760px)]:[&_h2]:text-[36px]
          `}
          >
            <div>
              <p
                className={`
                eyebrow text-[10px] font-medium tracking-[0.15em] uppercase leading-[1.6] flex items-center gap-[10px]
                text-[var(--muted)] mb-[25px] [&_.dot]:w-[6px] [&_.dot]:h-[6px] [&_.dot]:inline-block
                [&_.dot]:bg-[var(--accent)] [&_.dot]:rounded-full
                [&_.dot]:[box-shadow:0_0_12px_color-mix(in_srgb,_var(--accent)_50%,_transparent)]
              `}
              >
                THE EVERYDAY, RECONSIDERED
              </p>
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
          <div
            className={`
            mono-bento grid [grid-template-columns:repeat(6,_1fr)] gap-[17px] [&>article]:relative
            [&>article]:overflow-hidden [&>article]:bg-[image:linear-gradient(130deg,_#14213b,_#101b32)]
            [&>article]:[border:1px_solid_#a6bcf21c] [&>article]:rounded-[11px] [&>article]:p-[27px] [&_h3]:text-[29px]
            [&_h3]:leading-[1.15] [&_h3]:tracking-[-0.04em] [&_p]:text-[11px] [&_p]:text-[#8b9cbf] [&_p]:leading-[1.8]
            [&_p]:mt-[13px] [@media(max-width:_1100px)]:gap-[14px] [@media(max-width:_1100px)]:[&>article]:p-[23px]
            [@media(max-width:_1100px)]:[&_h3]:text-[26px] [@media(max-width:_760px)]:grid-cols-[1fr]
            [@media(max-width:_760px)]:gap-[14px] [@media(max-width:_760px)]:[&>article]:[grid-column:auto]
            [@media(max-width:_760px)]:[&>article]:p-[25px] [@media(max-width:_760px)]:[&>article]:min-h-0
            [@media(max-width:_760px)]:[&_h3]:text-[29px] [@media(max-width:_760px)]:[&_p]:text-[11px]
          `}
          >
            <article
              className={`spend-feature [grid-column:span_3] min-h-[390px] [@media(max-width:_760px)]:pb-[25px]! reveal-block`}
            >
              <div
                className={`
                feature-label flex items-center justify-between text-[#6e86b8] mb-[25px] [&>span]:text-[7px]
                [&>span]:tracking-[0.12em] [&>svg]:opacity-[0.7] [@media(max-width:_760px)]:mb-[22px]
                [@media(max-width:_760px)]:[&>span]:text-[7px]
              `}
              >
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
              <div
                className={`
                mini-spending grid [grid-template-columns:0.8fr_1.2fr] gap-[25px] items-end mt-[35px] pt-[25px] px-[20px]
                pb-[18px] bg-[#0a132699] [border:1px_solid_#93afff1a] rounded-[7px] [&>div:first-child>span]:text-[6px]
                [&>div:first-child>span]:tracking-[0.13em] [&>div:first-child>span]:text-[#8297be] [&_strong]:block
                [&_strong]:font-[family-name:var(--font-display)] [&_strong]:text-[32px] [&_strong]:tracking-[-0.06em]
                [&_strong]:font-medium [&_strong]:mt-[7px] [&_strong>span]:text-[#7e8eac] [&_strong>span]:text-[19px]
                [&_small]:text-[7px] [&_small]:text-[#8cb7c2] [&_small]:block [&_small]:my-[7px] [&_small]:mx-0
                [@media(max-width:_1100px)]:py-[20px] [@media(max-width:_1100px)]:px-[15px]
                [@media(max-width:_1100px)]:gap-[15px] [@media(max-width:_1100px)]:[&_strong]:text-[27px]
                [@media(max-width:_760px)]:py-[20px] [@media(max-width:_760px)]:px-[16px] [@media(max-width:_760px)]:mt-[25px]
                [@media(max-width:_760px)]:gap-[15px] [@media(max-width:_760px)]:[grid-template-columns:0.8fr_1.2fr]
                [@media(max-width:_760px)]:[&_strong]:text-[29px]
                [@media(max-width:_760px)]:[&>div:first-child>span]:text-[6px] [@media(max-width:_760px)]:[&_small]:text-[6px]
              `}
              >
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
            <article
              className={`accounts-feature [grid-column:span_3] min-h-[390px] [@media(max-width:_760px)]:h-[390px] reveal-block`}
            >
              <div
                className={`
                feature-label flex items-center justify-between text-[#6e86b8] mb-[25px] [&>span]:text-[7px]
                [&>span]:tracking-[0.12em] [&>svg]:opacity-[0.7] [@media(max-width:_760px)]:mb-[22px]
                [@media(max-width:_760px)]:[&>span]:text-[7px]
              `}
              >
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
              <div
                className={`
                account-mini relative max-w-[300px] mt-[25px] mx-auto mb-[-50px]
                bg-[image:linear-gradient(130deg,_#263956,_#17263e)] [border:1px_solid_#c8d4ee2b] rounded-[10px] p-[25px]
                [box-shadow:0_15px_40px_#0002] [transform:rotate(-3deg)] [&>span]:text-[9px] [&>span]:text-[#9dafce]
                [&>span]:flex [&>span]:justify-between [&>span>small]:tracking-[0.12em] [&>span>small]:text-[#647b9e]
                [&>strong]:block [&>strong]:font-[family-name:var(--font-display)] [&>strong]:text-[38px]
                [&>strong]:font-medium [&>strong]:tracking-[-0.055em] [&>strong]:mt-[10px] [&>strong]:mx-0 [&>strong]:mb-[22px]
                [&>div]:flex [&>div]:items-center [&>div]:justify-between [&>div]:[border-top:1px_solid_#9cb4dd1a]
                [&>div]:py-[14px] [&>div]:px-0 [&>div]:text-[10px] [&>div]:text-[#bbcbea] [&>div>span]:flex
                [&>div>span]:gap-[10px] [&>div>span]:items-center [&_.brand-mark]:w-[22px] [&_.brand-mark]:h-[22px]
                [&_.brand-mark]:text-[#c1cfff] [&_.brand-mark]:bg-[#9ab4ff17] [&_.brand-mark]:rounded-[4px]
                [&_.brand-mark]:p-[3px] [&_b]:text-[10px] [&_b]:font-normal [&_i]:not-italic [&_i]:w-[22px] [&_i]:h-[22px]
                [&_i]:grid [&_i]:place-items-center [&_i]:bg-[#99c5be17] [&_i]:text-[#9ac0ba] [&_i]:rounded-[4px]
                [@media(max-width:_760px)]:mt-[25px] [@media(max-width:_760px)]:mx-auto [@media(max-width:_760px)]:mb-[-25px]
                [@media(max-width:_760px)]:max-w-[275px] [@media(max-width:_760px)]:p-[23px]
                [@media(max-width:_760px)]:[&>strong]:text-[36px]
              `}
              >
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
            <article
              className={`
              travel-feature [grid-column:span_2] min-h-[310px] [&&_h3]:text-[24px]
              [@media(max-width:_1100px)]:[&&_h3]:text-[21px] [@media(max-width:_760px)]:[&&_h3]:text-[26px] reveal-block
            `}
            >
              <div
                className={`
                feature-label flex items-center justify-between text-[#6e86b8] mb-[25px] [&>span]:text-[7px]
                [&>span]:tracking-[0.12em] [&>svg]:opacity-[0.7] [@media(max-width:_760px)]:mb-[22px]
                [@media(max-width:_760px)]:[&>span]:text-[7px]
              `}
              >
                <span>03 / FREEDOM</span>
                <Plane size={19} />
              </div>
              <h3>Go a little further.</h3>
              <p>For wherever life takes you.</p>
              <div
                className={`
                travel-map relative mt-[15px] mx-[-20px] mb-[-25px] h-[155px] [&_svg]:w-full [&_svg]:h-full [&>span]:absolute
                [&>span]:bottom-[10px] [&>span]:left-[25px] [&>span]:[border:1px_solid_#a1bcff26] [&>span]:bg-[#172743d9]
                [&>span]:rounded-[6px] [&>span]:py-[10px] [&>span]:px-[12px] [&>span]:text-[7px]
                [&>span]:[backdrop-filter:blur(10px)] [&>span]:text-[#94a7cc] [&_b]:text-[10px] [&_b]:text-[#d2dcf2]
                [&_b]:font-normal [&_b]:ml-[12px] [&_small]:block [&_small]:mt-[5px] [&_small]:text-[7px]
                [&_small]:text-[#7c95bd] [@media(max-width:_760px)]:h-[180px] [@media(max-width:_760px)]:mt-[12px]
                [@media(max-width:_760px)]:[&>span]:bottom-[15px]
              `}
              >
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
            <article
              className={`
              security-feature [grid-column:span_2] min-h-[310px] [&&_h3]:text-[24px]
              [@media(max-width:_1100px)]:[&&_h3]:text-[21px] [@media(max-width:_760px)]:[&&_h3]:text-[26px] reveal-block
            `}
            >
              <div
                className={`
                feature-label flex items-center justify-between text-[#6e86b8] mb-[25px] [&>span]:text-[7px]
                [&>span]:tracking-[0.12em] [&>svg]:opacity-[0.7] [@media(max-width:_760px)]:mb-[22px]
                [@media(max-width:_760px)]:[&>span]:text-[7px]
              `}
              >
                <span>04 / CONTROL</span>
                <ShieldCheck size={19} />
              </div>
              <h3>Your card. Your call.</h3>
              <p>A little peace of mind, on tap.</p>
              <button
                className={`
                  security-lock flex items-center gap-[13px] mt-[35px] mx-0 mb-[8px] py-[18px] px-[14px] w-full bg-[#8da7e80a]
                  [border:1px_solid_#829de324] rounded-[8px] [transition:background_0.3s] [&>svg]:text-[#b4c8ff] [&>svg]:w-[24px]
                  [&>span]:text-[11px] [&>span]:text-left [&>span]:leading-[1.5] [&>span]:text-[#d1ddf4] [&_small]:block
                  [&_small]:text-[7px] [&_small]:text-[#7d93ba] [&_small]:mt-[5px] [&>i]:w-[28px] [&>i]:h-[16px]
                  [&>i]:bg-[#394867] [&>i]:rounded-[12px] [&>i]:ml-auto [&>i]:relative [&>i]:[transition:background_0.3s]
                  [&>i]:shrink-0 [&>i::after]:content-[''] [&>i::after]:w-[10px] [&>i::after]:h-[10px] [&>i::after]:rounded-full
                  [&>i::after]:absolute [&>i::after]:top-[3px] [&>i::after]:left-[3px] [&>i::after]:bg-[#9bacc7]
                  [&>i::after]:[transition:left_0.2s] [&.is-locked>i]:bg-[#7997ee] [&.is-locked>i::after]:left-[15px]
                  [&.is-locked>i::after]:bg-[#d7e4ff] [&.is-locked]:bg-[#759cf611] [@media(max-width:_1100px)]:py-[14px]
                  [@media(max-width:_1100px)]:px-[10px] [@media(max-width:_1100px)]:gap-[10px]
                  [@media(max-width:_1100px)]:[&>svg]:w-[20px] [@media(max-width:_1100px)]:[&>span]:text-[9px]
                  [@media(max-width:_1100px)]:[&_small]:text-[6px] [@media(max-width:_760px)]:mt-[27px]
                  [@media(max-width:_760px)]:py-[20px] [@media(max-width:_760px)]:px-[18px] [@media(max-width:_760px)]:gap-[15px]
                  [@media(max-width:_760px)]:[&>span]:text-[12px] [@media(max-width:_760px)]:[&_small]:text-[8px]
                  [@media(max-width:_760px)]:[&>svg]:w-[27px]
                ${locked ? "is-locked" : ""}`}
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
            <article
              className={`
              notifications-feature [grid-column:span_2] min-h-[310px] [&&_h3]:text-[24px] [&_.notification-mini]:flex
              [&_.notification-mini]:items-center [&_.notification-mini]:gap-[8px] [&_.notification-mini]:py-[12px]
              [&_.notification-mini]:px-0 [&_.notification-mini]:[border-top:1px_solid_#8ea7dd14]
              [&>.notification-mini:first-of-type]:mt-[25px] [@media(max-width:_1100px)]:[&&_h3]:text-[21px]
              [@media(max-width:_1100px)]:[&_.notification-mini]:flex-wrap
              [@media(max-width:_1100px)]:[&_.notification-mini]:gap-[6px] [@media(max-width:_760px)]:[&&_h3]:text-[26px]
              [@media(max-width:_760px)]:[&_.notification-mini]:py-[15px]
              [@media(max-width:_760px)]:[&_.notification-mini]:px-0
              [@media(max-width:_760px)]:[&_.notification-mini]:gap-[10px] reveal-block
            `}
            >
              <div
                className={`
                feature-label flex items-center justify-between text-[#6e86b8] mb-[25px] [&>span]:text-[7px]
                [&>span]:tracking-[0.12em] [&>svg]:opacity-[0.7] [@media(max-width:_760px)]:mb-[22px]
                [@media(max-width:_760px)]:[&>span]:text-[7px]
              `}
              >
                <span>05 / IN THE KNOW</span>
                <ArrowUpRight size={19} />
              </div>
              <h3>Stay a step ahead.</h3>
              <p>The little updates that make a difference.</p>
              <div
                className={`
                notification-mini [&>span]:w-[25px] [&>span]:h-[25px] [&>span]:grid [&>span]:place-items-center
                [&>span]:rounded-[6px] [&>span]:bg-[#b7a78b13] [&>span]:text-[#cbb695]
                [&:nth-last-child(1)>span]:bg-[#a0acd117] [&:nth-last-child(1)>span]:text-[#a5b5d6] [&>div]:text-[8px]
                [&>div]:leading-[1.5] [&>div]:text-[#c6d1e7] [&_small]:text-[6px] [&_small]:block [&_small]:text-[#7289b2]
                [&_small]:mt-[3px] [&>strong]:ml-auto [&>strong]:text-[8px] [&>strong]:text-right [&>strong]:leading-[1.5]
                [&>strong]:font-normal [&>strong>small]:text-[5px] [&>strong>small]:tracking-[0.05em]
                [@media(max-width:_1100px)]:[&>strong]:text-[7px] [@media(max-width:_1100px)]:[&>div]:text-[7px]
                [@media(max-width:_1100px)]:[&_small]:text-[5px] [@media(max-width:_760px)]:[&>div]:text-[9px]
                [@media(max-width:_760px)]:[&_small]:text-[7px] [@media(max-width:_760px)]:[&>strong]:text-[9px]
                [@media(max-width:_760px)]:[&>strong>small]:text-[5px]
              `}
              >
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
              <div
                className={`
                notification-mini [&>span]:w-[25px] [&>span]:h-[25px] [&>span]:grid [&>span]:place-items-center
                [&>span]:rounded-[6px] [&>span]:bg-[#b7a78b13] [&>span]:text-[#cbb695]
                [&:nth-last-child(1)>span]:bg-[#a0acd117] [&:nth-last-child(1)>span]:text-[#a5b5d6] [&>div]:text-[8px]
                [&>div]:leading-[1.5] [&>div]:text-[#c6d1e7] [&_small]:text-[6px] [&_small]:block [&_small]:text-[#7289b2]
                [&_small]:mt-[3px] [&>strong]:ml-auto [&>strong]:text-[8px] [&>strong]:text-right [&>strong]:leading-[1.5]
                [&>strong]:font-normal [&>strong>small]:text-[5px] [&>strong>small]:tracking-[0.05em]
                [@media(max-width:_1100px)]:[&>strong]:text-[7px] [@media(max-width:_1100px)]:[&>div]:text-[7px]
                [@media(max-width:_1100px)]:[&_small]:text-[5px] [@media(max-width:_760px)]:[&>div]:text-[9px]
                [@media(max-width:_760px)]:[&_small]:text-[7px] [@media(max-width:_760px)]:[&>strong]:text-[9px]
                [@media(max-width:_760px)]:[&>strong>small]:text-[5px]
              `}
              >
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
        <section
          id="insights"
          className={`
          section py-[110px] px-[var(--gutter)] m-auto [@media(max-width:_1000px)]:pt-[85px]
          [@media(max-width:_1000px)]:pb-[85px] [@media(max-width:_760px)]:pt-[70px] [@media(max-width:_760px)]:pb-[70px]
          mono-insights grid [grid-template-columns:1fr_1.1fr] gap-[90px] items-center max-w-[1400px]
          [@media(max-width:_1100px)]:gap-[45px] [@media(max-width:_760px)]:grid-cols-[1fr]
          [@media(max-width:_760px)]:gap-[35px]
        `}
        >
          <div
            className={`
            insights-copy [&>h2]:text-[length:clamp(36px,_4.1vw,_58px)] [&>h2]:leading-[1.1]
            [&>p:not(.eyebrow)]:text-[13px] [&>p:not(.eyebrow)]:text-[var(--muted)] [&>p:not(.eyebrow)]:my-[25px]
            [&>p:not(.eyebrow)]:mx-0 [&>ul]:list-none [&>ul]:p-0 [&>ul]:my-[30px] [&>ul]:mx-0 [&_li]:flex
            [&_li]:items-center [&_li]:gap-[12px] [&_li]:text-[11px] [&_li]:my-[17px] [&_li]:mx-0 [&_li]:text-[#b5c1dc]
            [&_li>svg]:text-[#8ba6f9] [@media(max-width:_760px)]:[&>h2]:text-[37px]
            [@media(max-width:_760px)]:[&>p:not(.eyebrow)]:text-[12px] [@media(max-width:_760px)]:[&_li]:text-[10px]
            [@media(max-width:_760px)]:[&_li]:gap-[9px]
          `}
          >
            <p
              className={`
              eyebrow text-[10px] font-medium tracking-[0.15em] uppercase leading-[1.6] flex items-center gap-[10px]
              text-[var(--muted)] mb-[25px] [&_.dot]:w-[6px] [&_.dot]:h-[6px] [&_.dot]:inline-block
              [&_.dot]:bg-[var(--accent)] [&_.dot]:rounded-full
              [&_.dot]:[box-shadow:0_0_12px_color-mix(in_srgb,_var(--accent)_50%,_transparent)]
            `}
            >
              KNOW YOUR MONEY. KNOW YOURSELF.
            </p>
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
            <span className={`concept-note text-[10px] text-[var(--muted)]`}>
              Interactive preview · Sample financial data
            </span>
          </div>
          <div
            className={`
            spending-panel [border:1px_solid_#91abec2a] rounded-[12px] bg-[image:linear-gradient(130deg,_#16233e,_#101a31)]
            p-[25px] [box-shadow:0_20px_60px_#0002] [@media(max-width:_1100px)]:p-[20px]
            [@media(max-width:_760px)]:py-[22px] [@media(max-width:_760px)]:px-[18px]
          `}
          >
            <div
              className={`
              spending-panel-top flex items-center justify-between gap-[10px] [&>span]:text-[11px] [&_.segmented]:[border:0]
              [&_.segmented]:p-[3px] [&_.segmented]:bg-[#08112288] [&_.segmented]:rounded-[5px]
              [&_.segmented_button]:text-[8px] [&_.segmented_button]:py-[6px] [&_.segmented_button]:px-[9px]
              [&_.segmented_button]:rounded-[3px] [&_.segmented_button[aria-pressed="true"]]:bg-[#293d66]
              [&_.segmented_button[aria-pressed="true"]]:text-[#ccdaff] [@media(max-width:_1100px)]:[&>span]:text-[10px]
              [@media(max-width:_760px)]:[&>span]:text-[10px] [@media(max-width:_760px)]:[&_.segmented_button]:text-[8px]
              [@media(max-width:_760px)]:[&_.segmented_button]:py-[6px]
              [@media(max-width:_760px)]:[&_.segmented_button]:px-[8px]
            `}
            >
              <span>Spending overview</span>
              <div
                className={`
                segmented inline-flex [border:1px_solid_var(--line)] p-[4px] rounded-[8px] gap-[4px]
                [&_button]:bg-[transparent] [&_button]:text-[var(--muted)] [&_button]:text-[11px] [&_button]:py-[10px]
                [&_button]:px-[16px] [&_button]:rounded-[5px] [&_button[aria-pressed="true"]]:bg-[var(--surface)]
                [&_button[aria-pressed="true"]]:text-[var(--text)] [&_button[aria-pressed="true"]]:[box-shadow:0_1px_8px_#0002]
                [&_button[aria-selected="true"]]:bg-[var(--surface)] [&_button[aria-selected="true"]]:text-[var(--text)]
                [&_button[aria-selected="true"]]:[box-shadow:0_1px_8px_#0002]
              `}
                aria-label="Spending timeframe"
              >
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
            <p
              className={`
              spending-total font-[family-name:var(--font-display)] text-[43px] tracking-[-0.05em] leading-[1.3] mt-[25px]
              [&>span]:block [&>span]:text-[#95bec6] [&>span]:font-[family-name:var(--font-body)] [&>span]:text-[8px]
              [&>span]:tracking-normal [&>span]:mt-[9px] [&_small]:text-[8px] [&_small]:text-[#7a8fb5] [&_small]:ml-[4px]
              [@media(max-width:_760px)]:text-[42px]
            `}
              aria-live="polite"
            >
              ${data.total}
              <span>
                ↓ {data.change}% <small>vs. previous {period}</small>
              </span>
            </p>
            <Bars values={data.values} labels={data.labels} large />
            <div
              className={`
              spending-categories grid [grid-template-columns:1fr_1fr] [gap:20px_25px] pt-[15px]
              [border-top:1px_solid_#a4bae322] [&>div]:text-[8px] [&>div]:relative [&>div]:pb-[8px] [&>div]:flex
              [&>div]:justify-between [&>div]:gap-[7px] [&>div>span]:flex [&>div>span]:gap-[5px] [&>div>span]:items-center
              [&>div>span]:text-[#8b9ec2] [&>div>span>i]:w-[4px] [&>div>span>i]:h-[4px] [&>div>span>i]:rounded-full
              [&_b]:font-normal [&_b]:text-[#c4d1ea] [&_b]:whitespace-nowrap [&>div>i]:absolute [&>div>i]:h-[2px]
              [&>div>i]:rounded-[2px] [&>div>i]:bg-[#7693e8] [&>div>i]:left-0 [&>div>i]:bottom-0 [&>div>i]:opacity-[0.35]
              [&>div>i]:max-w-full [@media(max-width:_1100px)]:[gap:18px_13px] [@media(max-width:_1100px)]:[&>div]:text-[7px]
              [@media(max-width:_760px)]:[gap:20px_15px] [@media(max-width:_760px)]:[&>div]:text-[7px]
            `}
            >
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
        <section
          id="cards"
          className={`
          section py-[110px] px-[var(--gutter)] m-auto [@media(max-width:_1000px)]:pb-[85px]
          [@media(max-width:_760px)]:pb-[70px] mono-card-config max-w-[1400px] text-center pt-[100px] relative
          [@media(max-width:_760px)]:pt-[30px]
        `}
        >
          <div
            className={`
            card-config-header [&>.eyebrow]:justify-center [&>h2]:text-[length:clamp(42px,_4.8vw,_70px)]
            [&>h2]:leading-[1.08] [&>p:not(.eyebrow)]:text-[12px] [&>p:not(.eyebrow)]:text-[var(--muted)]
            [&>p:not(.eyebrow)]:mt-[25px] [@media(max-width:_760px)]:[&>h2]:text-[44px]
            [@media(max-width:_760px)]:[&>p:not(.eyebrow)]:text-[11px]
          `}
          >
            <p
              className={`
              eyebrow text-[10px] font-medium tracking-[0.15em] uppercase leading-[1.6] flex items-center gap-[10px]
              text-[var(--muted)] mb-[25px] [&_.dot]:w-[6px] [&_.dot]:h-[6px] [&_.dot]:inline-block
              [&_.dot]:bg-[var(--accent)] [&_.dot]:rounded-full
              [&_.dot]:[box-shadow:0_0_12px_color-mix(in_srgb,_var(--accent)_50%,_transparent)]
            `}
            >
              A LITTLE MORE YOU
            </p>
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
            className={`
              large-card-stage relative h-[420px] max-w-[750px] mt-[25px] mx-auto mb-[20px] grid place-items-center
              perspective-[1400px] isolate [&>div:not(.card-floor)]:w-[475px] [&>div:not(.card-floor)]:relative
              [&>div:not(.card-floor)]:z-[1] [&_.bank-card]:[transform:rotate(-10deg)_rotateY(-13deg)_rotateX(8deg)]
              [&_.bank-card]:py-[34px] [&_.bank-card]:px-[36px] [&_.bank-card]:rounded-[19px]
              [&_.bank-card]:[transition:transform_0.5s]
              [&_.bank-card:hover]:[transform:rotate(-6deg)_rotateY(-8deg)_rotateX(5deg)]
              [&_.card-top>span:first-child]:text-[33px] [&_.card-top>span:first-child]:gap-[9px]
              [&_.card-top_.brand-mark]:w-[31px] [&_.card-top_.brand-mark]:h-[31px] [&_.card-top>span:last-child]:text-[8px]
              [&_.card-hardware]:mt-[30px] [&_.card-chip]:w-[43px] [&_.card-chip]:h-[33px] [&_.contactless-mark]:w-[24px]
              [&_.contactless-mark]:h-[24px] [&_.card-number]:mt-[18px] [&_.card-number]:gap-[23px]
              [&_.card-number]:text-[20px] [&_.card-number>span:not(:last-child)]:text-[21px] [&_.card-bottom]:mt-[23px]
              [&_.card-bottom>span]:text-[9px] [&_.card-bottom_small]:text-[6px] [&_.card-bottom_small]:mt-[5px]
              [&_.card-bottom>svg]:w-[46px] [&_.card-bottom>svg]:h-[29px]
              [&:where(.stage-silver)_.card-floor]:bg-[image:radial-gradient(ellipse,_#8c9ab044,_transparent_65%)]
              [&:where(.stage-blue)_.card-floor]:bg-[image:radial-gradient(ellipse,_#3e63d455,_transparent_65%)]
              [@media(max-width:_760px)]:h-[290px] [@media(max-width:_760px)]:mt-[15px] [@media(max-width:_760px)]:mx-[-10px]
              [@media(max-width:_760px)]:mb-[15px] [@media(max-width:_760px)]:[width:calc(100%_+_20px)]
              [@media(max-width:_760px)]:[&>div:not(.card-floor)]:w-[280px]
              [@media(max-width:_760px)]:[&_.bank-card]:py-[21px] [@media(max-width:_760px)]:[&_.bank-card]:px-[23px]
              [@media(max-width:_760px)]:[&_.bank-card]:rounded-[12px]
              [@media(max-width:_760px)]:[&_.bank-card]:[transform:rotate(-8deg)_rotateY(-9deg)_rotateX(5deg)]
              [@media(max-width:_760px)]:[&_.card-top>span:first-child]:text-[21px]
              [@media(max-width:_760px)]:[&_.card-top>span:first-child]:gap-[6px]
              [@media(max-width:_760px)]:[&_.card-top_.brand-mark]:w-[22px]
              [@media(max-width:_760px)]:[&_.card-top_.brand-mark]:h-[22px]
              [@media(max-width:_760px)]:[&_.card-top>span:last-child]:text-[5px]
              [@media(max-width:_760px)]:[&_.card-hardware]:mt-[16px] [@media(max-width:_760px)]:[&_.card-chip]:w-[28px]
              [@media(max-width:_760px)]:[&_.card-chip]:h-[21px] [@media(max-width:_760px)]:[&_.contactless-mark]:w-[17px]
              [@media(max-width:_760px)]:[&_.contactless-mark]:h-[17px]
              [@media(max-width:_760px)]:[&_.card-number]:text-[12px] [@media(max-width:_760px)]:[&_.card-number]:gap-[12px]
              [@media(max-width:_760px)]:[&_.card-number]:mt-[12px]
              [@media(max-width:_760px)]:[&_.card-number>span:not(:last-child)]:text-[13px]
              [@media(max-width:_760px)]:[&_.card-bottom]:mt-[14px]
              [@media(max-width:_760px)]:[&_.card-bottom>span]:text-[5px]
              [@media(max-width:_760px)]:[&_.card-bottom_small]:text-[4px]
              [@media(max-width:_760px)]:[&_.card-bottom>svg]:w-[27px]
              [@media(max-width:_760px)]:[&_.card-bottom>svg]:h-[17px]
              [@media(min-width:_761px)_and_(hover:_hover)]:[&_.bank-card]:[transform:rotate(-10deg)_rotateY(calc(-13deg_+_var(--tilt-x,_0deg)))_rotateX(calc(8deg_+_var(--tilt-y,_0deg)))]
              [@media(min-width:_761px)_and_(hover:_hover)]:[&_.bank-card:hover]:[transform:rotate(-10deg)_rotateY(calc(-13deg_+_var(--tilt-x,_0deg)))_rotateX(calc(8deg_+_var(--tilt-y,_0deg)))]
              stage-${cardFinishes[finish].key}`}
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
            <div
              className={`
              card-floor absolute left-[2%] right-[2%] top-[10%] bottom-0 z-[-1]
              bg-[image:radial-gradient(ellipse,_#2f4b8c55,_transparent_65%)] [transition:background_0.4s]
            `}
            />
            <motion.div
              key={finish}
              initial={reduced ? false : { y: 12, opacity: 0.4 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.35 }}
            >
              <BankCard finish={cardFinishes[finish].key} />
            </motion.div>
            <svg
              className={`config-coordinate absolute inset-0 w-full h-full pointer-events-none`}
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
          <div
            className={`
            card-config-bottom max-w-[750px] m-auto grid [grid-template-columns:1fr_1fr] items-center gap-[70px] text-left
            [&>div:last-child>strong]:text-[14px] [&>div:last-child>strong]:font-medium [&>div:last-child>p]:text-[11px]
            [&>div:last-child>p]:text-[var(--muted)] [&>div:last-child>p]:mt-[8px] [&>div:last-child>p]:mx-0
            [&>div:last-child>p]:mb-[10px] [&>div:last-child>span]:text-[7px] [&>div:last-child>span]:tracking-[0.07em]
            [&>div:last-child>span]:uppercase [&>div:last-child>span]:text-[#8198bd]
            [@media(max-width:_760px)]:grid-cols-[1fr] [@media(max-width:_760px)]:gap-[30px]
            [@media(max-width:_760px)]:text-center [@media(max-width:_760px)]:max-w-[350px]
            [@media(max-width:_760px)]:[&>div:last-child>p]:text-[11px]
            [@media(max-width:_760px)]:[&>div:last-child>p]:max-w-[320px]
            [@media(max-width:_760px)]:[&>div:last-child>p]:my-[10px]
            [@media(max-width:_760px)]:[&>div:last-child>p]:mx-auto
            [@media(max-width:_760px)]:[&>div:last-child>span]:text-[7px]
          `}
          >
            <div
              className={`
              card-swatches flex items-center gap-[25px] [&>button]:flex [&>button]:flex-col [&>button]:items-center
              [&>button]:gap-[11px] [&>button]:text-[9px] [&>button]:p-0 [&>button]:bg-[transparent]
              [&>button]:text-[#7185ae] [&_i]:w-[25px] [&_i]:h-[25px] [&_i]:rounded-full [&_i]:[border:4px_solid_var(--bg)]
              [&_i]:[outline:1px_solid_#8b9ec83b] [&_i]:[transition:outline_0.2s,_transform_0.2s]
              [&>button[aria-pressed="true"]]:text-[#d6e1fa] [&>button[aria-pressed="true"]>i]:[outline-color:#a9bdff]
              [&>button[aria-pressed="true"]>i]:[transform:scale(1.1)] [@media(max-width:_760px)]:justify-center
              [@media(max-width:_760px)]:gap-[30px] [@media(max-width:_760px)]:[&>button]:text-[9px]
            `}
              aria-label="Card finish"
            >
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
        <section
          id="transfers"
          className={`
          section py-[110px] px-[var(--gutter)] m-auto [@media(max-width:_1000px)]:pt-[85px]
          [@media(max-width:_1000px)]:pb-[85px] [@media(max-width:_760px)]:pb-[70px] transfer-story max-w-[1400px] grid
          [grid-template-columns:1fr_1fr] gap-[100px] items-center
          [&>div:last-child>h2]:text-[length:clamp(38px,_4.1vw,_60px)] [&>div:last-child>h2]:leading-[1.1]
          [&>div:last-child>p:not(.eyebrow)]:text-[13px] [&>div:last-child>p:not(.eyebrow)]:text-[var(--muted)]
          [&>div:last-child>p:not(.eyebrow)]:my-[25px] [&>div:last-child>p:not(.eyebrow)]:mx-0 [&_.text-link]:text-[11px]
          [@media(max-width:_1100px)]:gap-[45px] [@media(max-width:_760px)]:grid-cols-[1fr]
          [@media(max-width:_760px)]:gap-[25px] [@media(max-width:_760px)]:pt-[25px]
          [@media(max-width:_760px)]:[&>div:last-child>h2]:text-[40px]
          [@media(max-width:_760px)]:[&>div:last-child>p:not(.eyebrow)]:text-[12px]
        `}
        >
          <div
            className={`
            transfer-visual p-[25px] bg-[image:radial-gradient(ellipse_at_center,_#2f519a26,_transparent_70%)]
            [@media(max-width:_760px)]:py-[10px] [@media(max-width:_760px)]:px-0
          `}
          >
            <div
              className={`
              transfer-flow flex items-center justify-center gap-0 pt-[20px] px-0 pb-[45px] [&>i]:h-[1px] [&>i]:[flex:1]
              [&>i]:max-w-[65px] [&>i]:bg-[image:linear-gradient(90deg,_#698ee944,_#9cb4ff)] [&>i]:relative
              [&>i::after]:content-[''] [&>i::after]:absolute [&>i::after]:top-[-2px] [&>i::after]:left-0
              [&>i::after]:w-[5px] [&>i::after]:h-[5px] [&>i::after]:rounded-full [&>i::after]:bg-[#a1b8ff]
              [&>i::after]:[animation:transfer_4s_infinite_ease-in-out] [&>i:nth-of-type(2)::after]:[animation-delay:1s]
              [@media(max-width:_760px)]:pb-[40px]
            `}
            >
              <span
                className={`
                transfer-avatar relative w-[46px] h-[46px] rounded-full grid place-items-center bg-[#424f6b] text-[#c8d6ef]
                text-[12px] [border:1px_solid_#a4bbeb33] [&.friend]:bg-[#675963] [&.friend]:text-[#ecd2ce] [&>small]:absolute
                [&>small]:top-[55px] [&>small]:text-[8px] [&>small]:text-[#8fa1c5] [&>small]:whitespace-nowrap
              `}
              >
                AM<small>You</small>
              </span>
              <i />
              <span
                className={`
                transfer-core h-[65px] w-[65px] bg-[image:linear-gradient(130deg,_#2b3f6f,_#1a2745)] grid place-items-center
                [border:1px_solid_#94b0f55c] rounded-[15px] text-[#c3d4ff] [box-shadow:0_0_35px_#7c9fff17]
                [&>.brand-mark]:w-[34px] [&>.brand-mark]:h-[34px]
              `}
              >
                <BrandMark brand="mono" />
              </span>
              <i />
              <span
                className={`
                transfer-avatar relative w-[46px] h-[46px] rounded-full grid place-items-center bg-[#424f6b] text-[#c8d6ef]
                text-[12px] [border:1px_solid_#a4bbeb33] [&.friend]:bg-[#675963] [&.friend]:text-[#ecd2ce] [&>small]:absolute
                [&>small]:top-[55px] [&>small]:text-[8px] [&>small]:text-[#8fa1c5] [&>small]:whitespace-nowrap friend
              `}
              >
                JL<small>Jamie</small>
              </span>
            </div>
            <div
              className={`
              transfer-receipt max-w-[390px] m-auto bg-[image:linear-gradient(130deg,_#17243e,_#121e36)]
              [border:1px_solid_#9eb9ef24] rounded-[10px] p-[22px] [box-shadow:0_15px_40px_#0002] [&>div]:flex
              [&>div]:items-center [&>div]:gap-[10px] [&>div]:pb-[20px] [&>div]:[border-bottom:1px_solid_#94b0e11a]
              [&>div>span]:grid [&>div>span]:place-items-center [&>div>span]:w-[34px] [&>div>span]:h-[34px]
              [&>div>span]:rounded-full [&>div>span]:bg-[#7799ec17] [&>div>span]:text-[#a9c1ff] [&>div>p]:text-[10px]
              [&>div>p]:leading-[1.6] [&_small]:block [&_small]:text-[8px] [&_small]:text-[#7f95bc] [&_small]:mt-[3px]
              [&_strong]:text-[14px] [&_strong]:font-normal [&_strong]:ml-auto [&>ol]:my-[20px] [&>ol]:mx-0 [&>ol]:pt-0
              [&>ol]:pr-0 [&>ol]:pb-0 [&>ol]:pl-[19px] [&>ol]:list-none [&>ol]:relative [&>ol::before]:content-['']
              [&>ol::before]:absolute [&>ol::before]:left-[3px] [&>ol::before]:top-[6px] [&>ol::before]:bottom-[7px]
              [&>ol::before]:w-[1px] [&>ol::before]:bg-[#829de93d] [&_li]:text-[9px] [&_li]:text-[#9aafd5] [&_li]:flex
              [&_li]:items-center [&_li]:justify-between [&_li]:relative [&_li]:my-[18px] [&_li]:mx-0
              [&_li::before]:content-[''] [&_li::before]:absolute [&_li::before]:w-[6px] [&_li::before]:h-[6px]
              [&_li::before]:rounded-full [&_li::before]:left-[-18px] [&_li::before]:bg-[#8aa4ef]
              [&_li::before]:[border:2px_solid_#16253f] [&_li::before]:[box-shadow:0_0_0_1px_#829de944]
              [&_li:last-child]:text-[#bbd4fc] [&_li>span]:text-[7px] [&_li>span]:text-[#6780a7] [&>p]:text-[7px]
              [&>p]:text-[#5b779d] [&>p]:text-center [@media(max-width:_760px)]:p-[20px]
              [@media(max-width:_760px)]:[&>div>p]:text-[9px] [@media(max-width:_760px)]:[&_strong]:text-[12px]
            `}
            >
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
            <p
              className={`
              eyebrow text-[10px] font-medium tracking-[0.15em] uppercase leading-[1.6] flex items-center gap-[10px]
              text-[var(--muted)] mb-[25px] [&_.dot]:w-[6px] [&_.dot]:h-[6px] [&_.dot]:inline-block
              [&_.dot]:bg-[var(--accent)] [&_.dot]:rounded-full
              [&_.dot]:[box-shadow:0_0_12px_color-mix(in_srgb,_var(--accent)_50%,_transparent)]
            `}
            >
              CLOSER, WITHOUT THE COMPLICATIONS
            </p>
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
              className={`
                text-link inline-flex items-center gap-[10px] text-[12px] py-[5px] px-0 [border-bottom:1px_solid_var(--line)]
                bg-[transparent] [transition:gap_0.2s] [&:hover]:gap-[16px]
              `}
              onClick={() => setModal("A simpler way to start.")}
            >
              Explore the MONO concept
              <Arrow />
            </button>
          </div>
        </section>
        <section
          id="plans"
          className={`
          section py-[110px] px-[var(--gutter)] m-auto [@media(max-width:_1000px)]:pt-[85px]
          [@media(max-width:_1000px)]:pb-[85px] [@media(max-width:_760px)]:pt-[70px] [@media(max-width:_760px)]:pb-[70px]
          mono-pricing max-w-[1250px] [&_.section-head>div:last-child>p]:text-[10px]
          [&_.section-head>div:last-child>p]:text-[var(--muted)] [&_.section-head>div:last-child>p]:mb-[15px]
          [&_.segmented_button]:text-[10px] [&_.segmented_button>span]:text-[7px]
          [&_.segmented_button>span]:text-[#a3c1ff] [&_.segmented_button>span]:ml-[4px]
          [&_.segmented_button[aria-pressed="true"]]:bg-[#223252]
          [@media(max-width:_760px)]:[&_.section-head>div:last-child]:mt-[25px]
        `}
        >
          <div
            className={`
            section-head flex items-end justify-between gap-[35px] mb-[50px] [&_h2]:text-[length:clamp(36px,_4.1vw,_60px)]
            [&_h2]:leading-[1.1] [&>p]:text-[var(--muted)] [&>p]:max-w-[340px] [&>p]:text-[12px] [&_.eyebrow]:mb-[18px]
            [@media(max-width:_1000px)]:gap-[25px] [@media(max-width:_1000px)]:[&>p]:max-w-[270px]
            [@media(max-width:_760px)]:block [@media(max-width:_760px)]:mb-[35px]
            [@media(max-width:_760px)]:[&>p]:mt-[22px] [@media(max-width:_760px)]:[&>p]:max-w-[400px]
            [@media(max-width:_760px)]:[&_h2]:text-[36px]
          `}
          >
            <div>
              <p
                className={`
                eyebrow text-[10px] font-medium tracking-[0.15em] uppercase leading-[1.6] flex items-center gap-[10px]
                text-[var(--muted)] mb-[25px] [&_.dot]:w-[6px] [&_.dot]:h-[6px] [&_.dot]:inline-block
                [&_.dot]:bg-[var(--accent)] [&_.dot]:rounded-full
                [&_.dot]:[box-shadow:0_0_12px_color-mix(in_srgb,_var(--accent)_50%,_transparent)]
              `}
              >
                SIMPLE. FROM THE START.
              </p>
              <h2>
                Your pace.
                <br />
                <span>Your plan.</span>
              </h2>
            </div>
            <div>
              <p>Illustrative plans. No real charges.</p>
              <div
                className={`
                segmented inline-flex [border:1px_solid_var(--line)] p-[4px] rounded-[8px] gap-[4px]
                [&_button]:bg-[transparent] [&_button]:text-[var(--muted)] [&_button]:text-[11px] [&_button]:py-[10px]
                [&_button]:px-[16px] [&_button]:rounded-[5px] [&_button[aria-pressed="true"]]:bg-[var(--surface)]
                [&_button[aria-pressed="true"]]:text-[var(--text)] [&_button[aria-pressed="true"]]:[box-shadow:0_1px_8px_#0002]
                [&_button[aria-selected="true"]]:bg-[var(--surface)] [&_button[aria-selected="true"]]:text-[var(--text)]
                [&_button[aria-selected="true"]]:[box-shadow:0_1px_8px_#0002]
              `}
                aria-label="Plan billing period"
              >
                <button aria-pressed={!annual} onClick={() => setAnnual(false)}>
                  Monthly
                </button>
                <button aria-pressed={annual} onClick={() => setAnnual(true)}>
                  Annually <span>−25%</span>
                </button>
              </div>
            </div>
          </div>
          <div
            className={`
            mono-plan-grid grid [grid-template-columns:1fr_1fr] gap-[22px] [&>article]:relative
            [&>article]:[border:1px_solid_#9db9ef24] [&>article]:rounded-[12px]
            [&>article]:bg-[image:linear-gradient(130deg,_#14213b,_#101a30)] [&>article]:p-[34px]
            [&>article.plus-plan]:[background:radial-gradient(ellipse_at_top_right,_#4664ab33,_transparent_75%),_#15223f]
            [&>article.plus-plan]:[border-color:#879ef054] [&_h3]:text-[31px] [&>article>p]:text-[11px]
            [&>article>p]:text-[#92a5c8] [&>article>p]:mt-[10px] [&>article>small]:block [&>article>small]:text-[9px]
            [&>article>small]:text-[#6c83ac] [&>article>small]:mt-0 [&_ul]:list-none [&_ul]:py-[25px] [&_ul]:px-0
            [&_ul]:mt-[25px] [&_ul]:mx-0 [&_ul]:mb-0 [&_ul]:[border-top:1px_solid_#9db2df1c] [&_li]:flex [&_li]:gap-[10px]
            [&_li]:items-center [&_li]:text-[11px] [&_li]:text-[#b0c2e2] [&_li]:mb-[17px] [&_li>svg]:text-[#93adf3]
            [&_.button]:w-full [&_.button]:justify-between [&_.button]:text-[11px] [&_details]:mt-[20px]
            [&_summary]:list-none [&_summary]:flex [&_summary]:items-center [&_summary]:justify-between
            [&_summary]:text-[10px] [&_summary]:text-[#8ea6cc] [&_summary]:cursor-pointer
            [&_summary::-webkit-details-marker]:hidden [&_details>p]:text-[11px] [&_details>p]:text-[#8ea6cc]
            [&_details>p]:mt-[15px] [@media(max-width:_760px)]:grid-cols-[1fr] [@media(max-width:_760px)]:gap-[18px]
            [@media(max-width:_760px)]:[&>article]:p-[28px] [@media(max-width:_760px)]:[&_h3]:text-[32px]
            [@media(max-width:_760px)]:[&_li]:text-[11px]
          `}
          >
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
                <div
                  className={`
                  plan-top flex justify-between items-center mb-[22px] [&>.micro]:text-[7px] [&>.micro]:tracking-[0.12em]
                  [&>.micro]:text-[#8ea6d0] [&>span]:text-[#a6bfff] [&_.brand-mark]:w-[25px] [&_.brand-mark]:h-[25px]
                `}
                >
                  <p
                    className={`micro text-[10px] font-medium tracking-[0.15em] uppercase leading-[1.6]`}
                  >
                    {p.tag}
                  </p>
                  <span>
                    {i === 1 ? <BrandMark brand="mono" /> : <Plus size={23} />}
                  </span>
                </div>
                <h3>{p.name}</h3>
                <p>{p.desc}</p>
                <div
                  className={`
                  mono-price font-[family-name:var(--font-display)] text-[63px] tracking-[-0.065em] mt-[27px]
                  [&>span]:font-[family-name:var(--font-body)] [&>span]:text-[11px] [&>span]:tracking-normal [&>span]:ml-[10px]
                  [&>span]:text-[#96a8c8]
                `}
                >
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
                  className={`
                    button min-h-[49px] py-[15px] px-[22px] inline-flex items-center justify-center gap-[25px] text-[12px]
                    font-semibold tracking-[0.015em] [border:1px_solid_var(--line)] bg-[transparent]
                    [transition:background_0.2s,_transform_0.2s,_border-color_0.2s] whitespace-nowrap rounded-[6px]
                    [&:hover]:[transform:translateY(-2px)] [&:hover]:[border-color:var(--text)]
                    [&.primary]:[border-color:var(--accent)] [&.primary]:bg-[#879dff] [&.primary]:text-[#0b122a]
                    [&.primary]:[box-shadow:0_3px_20px_#617bff15]
                    [&.primary:hover]:bg-[color-mix(in_srgb,_var(--accent)_82%,_white)]
                    [&.primary:hover]:[border-color:transparent] [&.light]:bg-[var(--text)] [&.light]:text-[var(--bg)]
                    [&.ghost:hover]:bg-[rgba(255,_255,_255,_0.05)] [@media(max-width:_760px)]:text-[11px]
                    [@media(max-width:_760px)]:py-[14px] [@media(max-width:_760px)]:px-[18px] [@media(max-width:_760px)]:gap-[20px]
                  ${i === 1 ? "primary" : "ghost"}`}
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
        <section
          id="questions"
          className={`
          section py-[110px] px-[var(--gutter)] m-auto [@media(max-width:_1000px)]:pb-[85px]
          [@media(max-width:_760px)]:pb-[70px] mono-faq max-w-[1250px] grid [grid-template-columns:1fr_1.4fr] gap-[100px]
          pt-[50px] [&_h2]:text-[45px] [&_h2]:leading-[1.1] [&_.text-link]:text-[11px] [&_.text-link]:mt-[28px]
          [&_.faq-list_summary]:text-[13px] [&_.faq-list_p]:text-[12px] [@media(max-width:_1100px)]:gap-[50px]
          [@media(max-width:_760px)]:grid-cols-[1fr] [@media(max-width:_760px)]:gap-[35px]
          [@media(max-width:_760px)]:pt-[25px] [@media(max-width:_760px)]:[&_h2]:text-[40px]
        `}
        >
          <div>
            <p
              className={`
              eyebrow text-[10px] font-medium tracking-[0.15em] uppercase leading-[1.6] flex items-center gap-[10px]
              text-[var(--muted)] mb-[25px] [&_.dot]:w-[6px] [&_.dot]:h-[6px] [&_.dot]:inline-block
              [&_.dot]:bg-[var(--accent)] [&_.dot]:rounded-full
              [&_.dot]:[box-shadow:0_0_12px_color-mix(in_srgb,_var(--accent)_50%,_transparent)]
            `}
            >
              LET’S KEEP THINGS CLEAR
            </p>
            <h2>
              A few good
              <br />
              questions.
            </h2>
            <button
              onClick={() => setModal("Happy to clear things up.")}
              className={`
                text-link inline-flex items-center gap-[10px] text-[12px] py-[5px] px-0 [border-bottom:1px_solid_var(--line)]
                bg-[transparent] [transition:gap_0.2s] [&:hover]:gap-[16px]
              `}
            >
              Start a conversation
              <Arrow />
            </button>
          </div>
          <FAQ items={faq} />
        </section>
        <section
          className={`
          section py-[110px] px-[var(--gutter)] max-w-[1680px] m-auto mono-finale relative isolate text-center pt-[100px]
          pb-[110px] overflow-hidden [&::before]:content-[''] [&::before]:absolute [&::before]:top-0 [&::before]:bottom-0
          [&::before]:left-[15%] [&::before]:right-[15%]
          [&::before]:bg-[image:radial-gradient(ellipse,_#284ba43d,_transparent_70%)] [&::before]:z-[-1]
          [&>.brand-mark]:w-[38px] [&>.brand-mark]:h-[38px] [&>.brand-mark]:mt-0 [&>.brand-mark]:mx-auto
          [&>.brand-mark]:mb-[25px] [&>.brand-mark]:text-[#acbfff] [&>.eyebrow]:justify-center [&>.eyebrow]:text-[8px]
          [&>.eyebrow]:tracking-[0.17em] [&_h2]:text-[length:clamp(44px,_5vw,_74px)] [&_h2]:leading-[1.08]
          [&_h2>span]:text-[#95acff] [&>p:not(.eyebrow)]:text-[#94a8ce] [&>p:not(.eyebrow)]:text-[12px]
          [&>p:not(.eyebrow)]:mt-[25px] [&>p:not(.eyebrow)]:mx-0 [&>p:not(.eyebrow)]:mb-[30px] [&_.signup-form]:m-auto
          [&_.signup-form]:max-w-[440px] [&_.signup-form]:[grid-template-columns:1fr_auto]
          [&_.signup-form>input]:text-[11px] [&_.signup-form>input]:bg-[#ffffff04]
          [&_.signup-form>input]:[border-color:#9cb7f331] [&_.signup-form>.button]:text-[10px]
          [&_.signup-form>.button]:gap-[15px] [&_.form-note]:text-[8px] [&_.form-note]:text-[#6f86b0]
          [&_.form-success]:max-w-[500px] [&_.form-success]:m-auto [@media(max-width:_760px)]:pt-[60px]
          [@media(max-width:_760px)]:pb-[80px] [@media(max-width:_760px)]:[&_h2]:text-[40px]
          [@media(max-width:_760px)]:[&>p:not(.eyebrow)]:text-[11px]
          [@media(max-width:_760px)]:[&_.signup-form]:grid-cols-[1fr]
          [@media(max-width:_760px)]:[&_.signup-form]:gap-[10px]
          [@media(max-width:_760px)]:[&_.signup-form]:max-w-[350px]
          [@media(max-width:_760px)]:[&_.signup-form>.button]:min-h-[47px]
          [@media(max-width:_760px)]:[&_.signup-form>.button]:text-[11px]
          [@media(max-width:_760px)]:[&_.signup-form>input]:min-h-[47px]
          [@media(max-width:_760px)]:[&_.form-note]:text-[7px]
        `}
        >
          <BrandMark brand="mono" />
          <p
            className={`
            eyebrow text-[10px] font-medium tracking-[0.15em] uppercase leading-[1.6] flex items-center gap-[10px]
            text-[var(--muted)] mb-[25px] [&_.dot]:w-[6px] [&_.dot]:h-[6px] [&_.dot]:inline-block
            [&_.dot]:bg-[var(--accent)] [&_.dot]:rounded-full
            [&_.dot]:[box-shadow:0_0_12px_color-mix(in_srgb,_var(--accent)_50%,_transparent)]
          `}
          >
            MAKE ROOM FOR MORE
          </p>
          <h2>
            Your next chapter.
            <br />
            <span>A little more MONO.</span>
          </h2>
          <p>Less friction between your money and your life.</p>
          <SignupForm button="Join the waitlist" />
          <button
            className={`
            mono-login flex gap-[8px] items-center bg-[transparent] text-[#7f96bf] text-[9px] mt-[25px] mx-auto mb-0
            [@media(max-width:_760px)]:text-[8px]
          `}
            onClick={() => setModal("signin")}
          >
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
