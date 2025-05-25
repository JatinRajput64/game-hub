import { GameQuery } from "@/App";
import { Heading } from "@chakra-ui/react";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.platforms?.name || ""} ${
    gameQuery.genres?.name || ""
  } Games`;
  return (
    <Heading size="5xl" marginBottom={5}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
