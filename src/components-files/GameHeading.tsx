import { GameQuery } from "@/App";
import useGenre from "@/hooks/useGenre";
import usePlatform from "@/hooks/usePlatform";
import { Heading } from "@chakra-ui/react";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const selectedPlatform = usePlatform(gameQuery.platformId);

  const selectedGenre = useGenre(gameQuery.genreId);

  const heading = `${selectedPlatform?.name || ""} ${
    selectedGenre?.name || ""
  } Games`;
  return (
    <Heading size="5xl" marginBottom={5}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
