"use client"; // Error components must be Client Components

import Button from "@/app/ui/elements/button";
import Image from "next/image";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="h-[50vh] flex flex-col items-center justify-center">
      <Image src="/error.jpg" alt="Error Image" width={350} height={200} />
      <h2 className="text-xl sm:text-2xl font-bold text-cyan-950 my-4 text-center">
        Birtakım hatalar!
      </h2>
      <div>
        <Button
          text="Yeniden Dene"
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
        />
      </div>
    </div>
  );
}
