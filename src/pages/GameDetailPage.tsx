import ExpandableText from "@/components-files/ExpandableText";
import GameAttributes from "@/components-files/GameAttributes";
import useGame from "@/hooks/useGame";
import { Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <>
      <Heading size="5xl">{game.name}</Heading>
      <ExpandableText children={game.description_raw} />
      <GameAttributes game={game} />
    </>
  );
};

export default GameDetailPage;
