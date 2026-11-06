"use client";
import { BrandMark } from "@/components/ui/shared";
import type { Finish } from "@/data/fintech-demo";
export function CardChip() {
  return (
    <svg
      viewBox="0 0 50 38"
      aria-hidden="true"
      className={`
      card-chip w-[35px] h-[27px] text-[#c3b88d] [@media(max-width:_1100px)]:w-[29px]
      [@media(max-width:_1100px)]:h-[22px] [@media(max-width:_760px)]:w-[28px] [@media(max-width:_760px)]:h-[21px]
    `}
    >
      <rect
        x="1"
        y="1"
        width="48"
        height="36"
        rx="7"
        fill="currentColor"
        fillOpacity=".55"
        stroke="currentColor"
      />
      <path
        d="M15 1v9L7 16v6l8 6v9m20-36v9l8 6v6l-8 6v9M1 19h11m26 0h11M15 10h20v18H15V10Zm10 0v18"
        fill="none"
        stroke="var(--chip-line,#564f42)"
        strokeWidth="1"
      />
    </svg>
  );
}
export function Contactless() {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`
        contactless-mark w-[19px] h-[19px] opacity-[0.6] [@media(max-width:_760px)]:w-[16px]
        [@media(max-width:_760px)]:h-[16px]
      `}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 9a5 5 0 0 1 0 6m4-9a10 10 0 0 1 0 12m4-15a15 15 0 0 1 0 18m4-21a20 20 0 0 1 0 24"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
export default function BankCard({
  finish = "midnight",
  className = "",
}: {
  finish?: Finish;
  className?: string;
}) {
  return (
    <div
      className={`
        bank-card [--chip-line:#625b49] relative w-full aspect-[1.586] rounded-[15px] overflow-hidden py-[26px]
        px-[28px] bg-[image:linear-gradient(135deg,_#363b49,_#202330_60%,_#323643)] [border:1px_solid_#c4cbd647]
        text-[#e1e5ec] [box-shadow:inset_0_1px_1px_#ffffff38,_inset_-2px_-3px_2px_#0008,_0_15px_50px_#0005] isolate
        [transition:background_0.4s,_color_0.4s] [container-type:inline-size] [&::before]:content-['']
        [&::before]:absolute [&::before]:inset-0
        [&::before]:bg-[image:linear-gradient(_120deg,_transparent_15%,_#ffffff12_25%,_transparent_55%_)]
        [&::before]:z-[-1] [&::after]:content-[''] [&::after]:absolute [&::after]:inset-0 [&::after]:z-[-1]
        [&::after]:opacity-[0.045]
        [&::after]:[background-image:url('data:image/svg+xml,%3Csvg_xmlns='http://www.w3.org/2000/svg'_width='120'_height='120'%3E%3Cfilter_id='n'%3E%3CfeTurbulence_type='fractalNoise'_baseFrequency='.9'_numOctaves='3'_stitchTiles='stitch'/%3E%3C/filter%3E%3Cpath_fill='%23fff'_filter='url(%23n)'_d='M0_0h120v120H0z'/%3E%3C/svg%3E')]
        [&:where(.finish-silver)]:[--chip-line:#9b9c9c]
        [&:where(.finish-silver)]:bg-[image:linear-gradient(_125deg,_#b8c1ce,_#e0e5ec_30%,_#9faabf_70%,_#c4ccd8_)]
        [&:where(.finish-silver)]:text-[#25324a] [&:where(.finish-silver)]:[border-color:#f0f2ff77]
        [&:where(.finish-blue)]:bg-[image:linear-gradient(130deg,_#496bc3,_#203d8b_65%,_#4967ad)]
        [&:where(.finish-blue)]:text-[#d9e4ff] [&:where(.finish-blue)]:[border-color:#92a7ff66]
        [&:where(.finish-silver)_.card-etch]:text-[#394e7d33] [&:where(.finish-silver)_.card-chip]:text-[#a3a7aa]
        [@media(min-width:_1700px)]:py-[30px] [@media(min-width:_1700px)]:px-[32px]
        [@media(max-width:_1100px)]:p-[21px] [@media(max-width:_760px)]:py-[19px] [@media(max-width:_760px)]:px-[21px]
        [@media(max-width:_760px)]:rounded-[12px] finish-${finish} ${className}`}
      aria-label={`${finish} MONO sample payment card ending 0482`}
    >
      <svg
        className={`card-etch absolute w-full h-full right-[-2%] top-0 text-[#ffffff40] z-[-1]`}
        viewBox="0 0 400 250"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M160 280V40c0-35 38-45 58-9l43 82 42-82c20-36 58-26 58 9v240M194 280V52l67 126 66-126v228"
          stroke="currentColor"
          strokeWidth=".7"
        />
        <path
          d="M148 280V40c0-48 57-65 82-17l31 59 31-59c25-48 82-31 82 17v240"
          stroke="currentColor"
          strokeWidth=".5"
        />
      </svg>
      <div
        className={`
        card-top flex items-center justify-between [&>span:first-child]:flex [&>span:first-child]:items-center
        [&>span:first-child]:gap-[7px] [&>span:first-child]:font-[family-name:var(--font-display)]
        [&>span:first-child]:text-[25px] [&>span:first-child]:tracking-[-0.07em] [&>span:first-child]:font-semibold
        [&_.brand-mark]:w-[24px] [&_.brand-mark]:h-[24px] [&>span:last-child]:text-[6px]
        [&>span:last-child]:tracking-[0.2em] [&>span:last-child]:opacity-[0.65]
        [@media(max-width:_1100px)]:[&>span:first-child]:text-[22px]
        [@media(max-width:_1100px)]:[&_.brand-mark]:w-[22px] [@media(max-width:_1100px)]:[&_.brand-mark]:h-[22px]
        [@media(max-width:_760px)]:[&>span:first-child]:text-[20px]
        [@media(max-width:_760px)]:[&>span:first-child]:gap-[5px] [@media(max-width:_760px)]:[&_.brand-mark]:w-[20px]
        [@media(max-width:_760px)]:[&_.brand-mark]:h-[20px] [@media(max-width:_760px)]:[&>span:last-child]:text-[5px]
      `}
      >
        <span>
          <BrandMark brand="mono" />
          mono
        </span>
        <span>DEBIT</span>
      </div>
      <div
        className={`
        card-hardware flex gap-[14px] items-center mt-[22px] [@media(min-width:_1700px)]:mt-[28px]
        [@media(max-width:_1100px)]:mt-[14px] [@media(max-width:_760px)]:mt-[15px]
        [@media(max-width:_760px)]:gap-[12px]
      `}
      >
        <CardChip />
        <Contactless />
      </div>
      <p
        className={`
        card-number flex gap-[16px] items-center font-[family-name:var(--font-display)] text-[15px] tracking-[0.18em]
        mt-[14px] leading-[1.2] [&>span:not(:last-child)]:tracking-[0.08em] [&>span:not(:last-child)]:text-[17px]
        [@media(min-width:_1700px)]:mt-[20px] [@media(max-width:_1100px)]:mt-[11px]
        [@media(max-width:_1100px)]:text-[12px] [@media(max-width:_1100px)]:gap-[13px]
        [@media(max-width:_1100px)]:[&>span:not(:last-child)]:text-[14px] [@media(max-width:_760px)]:mt-[10px]
        [@media(max-width:_760px)]:text-[11px] [@media(max-width:_760px)]:gap-[13px]
        [@media(max-width:_760px)]:[&>span:not(:last-child)]:text-[13px]
      `}
      >
        <span>••••</span>
        <span>••••</span>
        <span>••••</span>
        <span>0482</span>
      </p>
      <div
        className={`
        card-bottom flex items-end justify-between mt-[17px] [&>span]:text-[7px] [&>span]:tracking-[0.14em]
        [&>span]:leading-[1.4] [&_small]:block [&_small]:text-[5px] [&_small]:tracking-[0.15em] [&_small]:opacity-[0.5]
        [&_small]:mt-[4px] [&>svg]:opacity-[0.7] [&>svg]:w-[35px] [&>svg]:h-[22px]
        [@media(min-width:_1700px)]:mt-[24px] [@media(max-width:_1100px)]:mt-[14px]
        [@media(max-width:_1100px)]:[&>span]:text-[6px] [@media(max-width:_1100px)]:[&_small]:text-[4px]
        [@media(max-width:_1100px)]:[&>svg]:w-[28px] [@media(max-width:_1100px)]:[&>svg]:h-[18px]
        [@media(max-width:_760px)]:mt-[14px] [@media(max-width:_760px)]:[&>span]:text-[5px]
        [@media(max-width:_760px)]:[&_small]:text-[4px] [@media(max-width:_760px)]:[&_small]:tracking-[0.1em]
        [@media(max-width:_760px)]:[&>svg]:w-[27px] [@media(max-width:_760px)]:[&>svg]:h-[16px]
      `}
      >
        <span>
          ALEX MORGAN<small>THE EVERYDAY, ELEVATED</small>
        </span>
        <svg
          viewBox="0 0 50 30"
          width="40"
          fill="none"
          aria-label="Original MONO payment symbol"
        >
          <circle cx="18" cy="15" r="12" stroke="currentColor" />
          <circle cx="32" cy="15" r="12" stroke="currentColor" />
        </svg>
      </div>
    </div>
  );
}
