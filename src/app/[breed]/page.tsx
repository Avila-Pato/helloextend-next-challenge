
import FavoriteImage from "@/components/FavoriteImage";

interface Props {
  params: {
    breed: string;
  };
}

export default async function BreedPage({ params: { breed } }: Props) {
  const response = await fetch(
    `https://dog.ceo/api/breed/${breed}/images/random/4`
  );
  const { message: images } = (await response.json()) as { message: string[] };

  return (
    <section className="mt-4 grid xl:grid-cols-4 sm:grid-cols-2  gap-4">
      {images.map((image) => (
        <FavoriteImage key={image} src={image} />
      ))}
    </section>
  );
}
