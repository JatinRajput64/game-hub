import { SimpleGrid, Text } from "@chakra-ui/react";
import CricticScore from "./CricticScore";
import GameDefinitionItem from "./GameDefinitionItem";
import { Games } from "@/entities/Games";

interface Props {
  game: Games;
}

const GameAttributes = ({ game }: Props) => {
  return (
    <SimpleGrid columns={2} as="dl">
      <GameDefinitionItem term="Platforms">
        {game.parent_platforms.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </GameDefinitionItem>

      <GameDefinitionItem term="Metascore">
        <CricticScore score={game.metacritic} />
      </GameDefinitionItem>

      <GameDefinitionItem term="Genres">
        {game.genres.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </GameDefinitionItem>

      <GameDefinitionItem term="Publishers">
        {game.publishers?.map((publisher) => (
          <Text key={publisher.id}>{publisher.name}</Text>
        ))}
      </GameDefinitionItem>
    </SimpleGrid>
  );
};

export default GameAttributes;
