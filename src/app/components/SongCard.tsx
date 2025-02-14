import Image, { StaticImageData } from "next/image";

export default function SongCard({
  cover,
  artist,
  title,
}: {
  cover: StaticImageData;
  artist: string;
  title: string;
}) {
  return (
    <div
      className="p-8 shadow-lg bg-white/20 backdrop-blur-md rounded-md border border-white/40"
    >
      <Image
        src={cover}
        alt='album cover'
        width={170}
        height={170}
        className="rounded-md"
      />

      <p className="text-2xl text-white leading-none mt-2">{title}</p>
      <p className="text-xl leading-none">by {artist}</p>
    </div>
  );
}