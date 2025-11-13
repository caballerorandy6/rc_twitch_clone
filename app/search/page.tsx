type Props = {
  searchParams: Promise<{ q?: string }>;
};

export default async function SearchPage({ searchParams }: Props) {
  const { q } = await searchParams;

  return (
    <div>
      {/* Búsqueda de streams y categorías */}
    </div>
  );
}
