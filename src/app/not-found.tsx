import Link from "next/link";

export default function NotFound() {
  return (
    <main id="content" className="mx-auto flex min-h-screen max-w-[1100px] flex-col justify-center border-x border-border px-5 md:px-10">
      <p className="label">Error 404</p>
      <h1 className="mt-3 font-display text-[clamp(3rem,10vw,7rem)] font-black uppercase leading-[0.85] text-fg">
        Not on
        <br />
        this sheet
      </h1>
      <p className="mt-6 max-w-md text-lg">This page doesn&apos;t exist. It may have moved when the site was rebuilt.</p>
      <p className="mt-10 flex flex-wrap gap-3">
        <Link href="/" className="btn btn-solid">
          Home
        </Link>
        <Link href="/#work" className="btn btn-outline">
          Work
        </Link>
      </p>
    </main>
  );
}
