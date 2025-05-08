import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CricticScore = ({ score }: Props) => {
  const badgeColor = score > 75 ? "green" : score > 60 ? "yellow" : "";

  return (
    <Badge
      colorPalette={badgeColor}
      fontSize="14px"
      borderRadius="4px"
      paddingX={2}
    >
      {score}
    </Badge>
  );
};

export default CricticScore;
