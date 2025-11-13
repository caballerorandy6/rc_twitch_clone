type Props = {
  params: Promise<{ channel: string }>;
};

export default async function LiveChannelPage({ params }: Props) {
  const { channel } = await params;

  return (
    <div>
      {/* Vista de stream individual con reproductor y chat */}
    </div>
  );
}
