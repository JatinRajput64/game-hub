import useGames from "@/hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

const GameGrid = () => {
  const { data, error, isLoading } = useGames();
  const gameCardSkeletonArr = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} gap={10} padding="10px">
        {isLoading &&
          gameCardSkeletonArr.map((skeleton) => (
            <GameCardContainer>
              <GameCardSkeleton key={skeleton}></GameCardSkeleton>
            </GameCardContainer>
          ))}
        {data.map((g) => (
          <GameCardContainer>
            <GameCard key={g.id} game={g}></GameCard>
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
