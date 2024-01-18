export default function Page({ params }: { params: { collection: string } }) {
  return <>{params.collection}</>;
}
