import { Games } from "@/hooks/useGames";
import { CardBody, CardRoot, Heading, Image } from "@chakra-ui/react";
import PlatformIconsList from "./PlatformIconsList";

interface props {
  game: Games;
}

const GameCard = ({ game }: props) => {
  return (
    <CardRoot maxW="sw" borderRadius="10px" overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <PlatformIconsList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
      </CardBody>
    </CardRoot>
  );
};

export default GameCard;
