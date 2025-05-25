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
    <CardRoot>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconsList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CricticScore score={game.metacritic}></CricticScore>
        </HStack>
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </CardRoot>
  );
};

export default GameCard;
