"use client";
import { BrandMark } from "@/components/ui/shared";
import type { Finish } from "@/data/fintech-demo";
export function CardChip() {
  return (
    <svg viewBox="0 0 50 38" aria-hidden="true" className="card-chip">
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
      className="contactless-mark"
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
      className={`bank-card finish-${finish} ${className}`}
      aria-label={`${finish} MONO sample payment card ending 0482`}
    >
      <svg
        className="card-etch"
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
      <div className="card-top">
        <span>
          <BrandMark brand="mono" />
          mono
        </span>
        <span>DEBIT</span>
      </div>
      <div className="card-hardware">
        <CardChip />
        <Contactless />
      </div>
      <p className="card-number">
        <span>••••</span>
        <span>••••</span>
        <span>••••</span>
        <span>0482</span>
      </p>
      <div className="card-bottom">
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
