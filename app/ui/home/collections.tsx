import React from "react";
import Image from "next/image";

function TripleCollections() {
  return (
    <div className="grid gap-y-2.5 p-4 lg:px-6 max-w-screen-xl mx-auto md:grid-cols-2 md:gap-x-2.5">
      <div className=" md:row-start-1 md:row-end-3">
        <Image
          src="https://picsum.photos/550/800"
          width={611}
          height={800}
          alt="image 1"
          className="w-full h-full rounded-2xl"
        />
      </div>
      <div className="">
        <Image
          src="https://picsum.photos/611/440"
          width={611}
          height={440}
          alt="image 1"
          className="w-full rounded-2xl"
        />
      </div>
      <div className="md:col-start-2">
        <Image
          src="https://picsum.photos/611/440"
          width={6110}
          height={440}
          alt="image 1"
          className="w-full rounded-2xl"
        />
      </div>
    </div>
  );
}
function QuaternaryCollections() {
  return (
    <div className="grid gap-y-2.5 p-4 lg:px-6 max-w-screen-xl mx-auto md:grid-cols-2 md:gap-x-2.5">
      <div className="">
        <Image
          src="https://picsum.photos/611/440"
          width={611}
          height={440}
          alt="image 1"
          className="w-full h-full rounded-2xl"
        />
      </div>
      <div className="">
        <Image
          src="https://picsum.photos/611/440"
          width={611}
          height={440}
          alt="image 1"
          className="w-full rounded-2xl"
        />
      </div>
      <div className="">
        <Image
          src="https://picsum.photos/611/440"
          width={6110}
          height={440}
          alt="image 1"
          className="w-full rounded-2xl"
        />
      </div>
      <div className="">
        <Image
          src="https://picsum.photos/611/440"
          width={611}
          height={440}
          alt="image 1"
          className="w-full rounded-2xl"
        />
      </div>
    </div>
  );
}

export default function Collections() {
  return (
    <>
      <TripleCollections />
      <QuaternaryCollections />
    </>
  );
}
