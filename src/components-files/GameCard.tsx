import { Games } from "@/hooks/useGames";
import { CardBody, CardRoot, Heading, Image } from "@chakra-ui/react";

interface props {
  game: Games;
}

const GameCard = ({ game }: props) => {
  return (
    <CardRoot maxW="sw" borderRadius="10px" overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </CardRoot>
  );
};

export default GameCard;
