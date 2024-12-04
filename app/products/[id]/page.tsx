export default async function FirstPost({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  return (
    <div>
      <h1>Product {params.id}</h1>
    </div>
  );
}
