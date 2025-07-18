

export default function CtaButtonV2({
  className,
  url,
  cta,
}: {
  className?: string;
  url?: string;
  cta?: string;
}) {
  const button = url ? (
    <a
      className={
        className ||
        "block transition box-border relative mx-auto my-[1em] h-fit py-[0.3em] 2xs:py-[0.5em] md:py-[0.65em] px-[1em] text-center w-[min(40.25rem,83.85vw)] md:w-[min(40.25rem,53.67vw)] newDesktop:w-[min(30.5rem,25.42vw)] rounded-xl bg-brandPrimary text-white hover:bg-white focus:bg-white hover:text-brandPrimary focus:text-brandPrimary border-2 border-current border-solid font-cta text-[max(1rem,0.75em)] phablet:text-[1.02em] md:text-[1em] newDesktop:text-[1.02em]"
      }
      href={url}
    >
      {cta || "Shop Now"}
    </a>
  ) : (
    <div
      className={
        className ||
        "block transition box-border relative mx-auto my-[1em] h-fit py-[0.3em] 2xs:py-[0.5em] md:py-[0.65em] px-[1em] text-center w-[min(40.25rem,83.85vw)] md:w-[min(40.25rem,53.67vw)] newDesktop:w-[min(30.5rem,25.42vw)] rounded-xl bg-brandPrimary text-white hover:bg-white focus:bg-white hover:text-brandPrimary focus:text-brandPrimary border-2 border-current border-solid font-cta text-[max(1rem,0.75em)] phablet:text-[1.02em] md:text-[1em] newDesktop:text-[1.02em]"
      }
    >
      {cta || "Shop Now"}
    </div>
  );
  return <>{button}</>;
}
