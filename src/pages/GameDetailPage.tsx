import ExpandableText from "@/components-files/ExpandableText";
import GameAttributes from "@/components-files/GameAttributes";
import GameTrailers from "@/components-files/GameTrailers";
import Screenshots from "@/components-files/Screenshots";
import useGame from "@/hooks/useGame";
import { Box, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <SimpleGrid columns={{ sm: 1, md: 2 }} gap={6}>
      <Box>
        <Heading size="5xl">{game.name}</Heading>
        <ExpandableText children={game.description_raw} />
        <GameAttributes game={game} />
      </Box>
      <Box>
        <GameTrailers slug={game.slug} />
        <Screenshots id={game.id} />
      </Box>
    </SimpleGrid>
  );
};

export default GameDetailPage;
