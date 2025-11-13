type Props = {
  params: Promise<{ slug: string }>;
};

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;

  return (
    <div>
      {/* Streams filtrados por categoría (Gaming, Creative, etc) */}
    </div>
  );
}
