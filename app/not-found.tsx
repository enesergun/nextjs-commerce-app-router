import Image from "next/image";
import Link from "next/link";
import Button from "@/app/ui/elements/button";

export default function NotFound() {
  return (
    <div className="h-[50vh] flex flex-col items-center justify-center">
      <Image
        src="/not-found.jpg"
        alt="Not Found Page"
        width={350}
        height={200}
      />
      <p>Aradığınız sayfa bulunamadı</p>
      <Link href="/">
        <Button text="Anasayfaya Dön" />
      </Link>
    </div>
  );
}
