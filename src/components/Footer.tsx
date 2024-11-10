import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-black">
      <p className="text-xs text-muted-foreground">
        &copy; 2024 IT Consultant. All rights reserved.
      </p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <Link
          href="#"
          className="text-xs hover:underline underline-offset-4"
          prefetch={false}
        >
          Terminos de servicio
        </Link>
        <Link
          href="#"
          className="text-xs hover:underline underline-offset-4"
          prefetch={false}
        >
          Privacidad
        </Link>
      </nav>
    </footer>
  );
}
