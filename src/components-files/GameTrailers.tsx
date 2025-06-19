import useTrailers from "@/hooks/useTrailers";

interface Props {
  slug: string;
}

const GameTrailers = ({ slug }: Props) => {
  const { data: trailers, isLoading, error } = useTrailers(slug);

  if (isLoading) return null;

  if (error) throw error;

  const firstTrailer = trailers?.results[0];

  return firstTrailer ? (
    <video
      controls
      src={trailers?.results[0].data[480]}
      poster={trailers?.results[0].preview}
      width="100%"
    />
  ) : null;
};

export default GameTrailers;
