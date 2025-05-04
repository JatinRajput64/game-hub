import useGames from "@/hooks/useGames";
import { Text } from "@chakra-ui/react";

const GameGrid = () => {
  const { games, error } = useGames();
  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((g) => (
          <li key={g.id} id={g.id.toString()}>
            {g.name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
