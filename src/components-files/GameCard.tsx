import { Games } from "@/hooks/useGames";
import { CardBody, CardRoot, Heading, HStack, Image } from "@chakra-ui/react";
import PlatformIconsList from "./PlatformIconsList";
import CricticScore from "./CricticScore";
import getCroppedImageUrl from "@/services/image-url";

interface props {
  game: Games;
}

const GameCard = ({ game }: props) => {
  return (
    <CardRoot width="350px" borderRadius="10px" overflow="hidden">
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformIconsList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CricticScore score={game.metacritic}></CricticScore>
        </HStack>
      </CardBody>
    </CardRoot>
  );
};

export default GameCard;
