import useGenre from "@/hooks/useGenre";
import usePlatform from "@/hooks/usePlatform";
import useGameQueryStore from "@/Store";
import { Heading } from "@chakra-ui/react";

const GameHeading = () => {
  const selectedPlatform = usePlatform(
    useGameQueryStore((s) => s.gameQuery.platformId)
  );
  const selectedGenre = useGenre(useGameQueryStore((s) => s.gameQuery.genreId));

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
