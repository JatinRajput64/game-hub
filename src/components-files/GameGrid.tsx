import useGames from "@/hooks/useGames";
import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { data, error, isLoading, hasNextPage, fetchNextPage } = useGames();

  const gameCardSkeletonArr = [1, 2, 3, 4, 5, 6];

  const dataLength =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  return (
    <InfiniteScroll
      dataLength={dataLength}
      next={() => fetchNextPage()}
      hasMore={hasNextPage}
      loader={<Spinner />}
    >
      {error && <Text>{error.message}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} gap={6} padding="10px">
        {isLoading &&
          gameCardSkeletonArr.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((g) => (
              <GameCardContainer key={g.id}>
                <GameCard game={g}></GameCard>
              </GameCardContainer>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
    </InfiniteScroll>
  );
};

export default GameGrid;
