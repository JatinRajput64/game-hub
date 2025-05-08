import { Skeleton, CardRoot, CardBody, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <CardRoot width="350px" borderRadius="10px" overflow="hidden">
      <Skeleton height="250px" />
      <CardBody>
        <SkeletonText noOfLines={2} />
      </CardBody>
    </CardRoot>
  );
};

export default GameCardSkeleton;
