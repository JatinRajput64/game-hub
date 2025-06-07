import { Skeleton, SkeletonText, Card } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card.Root>
      <Skeleton height="250px" />
      <Card.Body>
        <SkeletonText noOfLines={2} />
      </Card.Body>
    </Card.Root>
  );
};

export default GameCardSkeleton;
