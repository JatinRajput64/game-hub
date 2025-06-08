import { GameQuery } from "@/App";
import useGenres from "@/hooks/useGenres";
import usePlatforms from "@/hooks/usePlatforms";
import { Heading } from "@chakra-ui/react";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data: platforms } = usePlatforms();

  const selectedPlatform = platforms.results.find(
    (platform) => platform.id === gameQuery.platformId
  )?.name;

  const { data: genres } = useGenres();

  const selectedGenre = genres.results.find(
    (genre) => genre.id === gameQuery.genreId
  )?.name;

  const heading = `${selectedPlatform || ""} ${selectedGenre || ""} Games`;
  return (
    <Heading size="5xl" marginBottom={5}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
