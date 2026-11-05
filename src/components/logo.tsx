import { asset } from "@/lib/paths";

/** Wordmark for dark backgrounds. Swap the file in src/theme by editing this path. */
export function Logo({ className = "logo-img" }: { className?: string }) {
  return (
    // Vector wordmark. next/image does not optimize SVG, and the file is already SVGO'd.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={asset("/logo/kgg-logo-white.svg")}
      alt="Kenton Global Group"
      width={2400}
      height={1200}
      className={className}
    />
  );
}
