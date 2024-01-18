import React from "react";
export default function Layout({
  params,
  children,
}: {
  params: { slug: string };
  children: React.ReactNode;
}) {
  return (
    <>
      <div>layout</div>
      {children}
    </>
  );
}
