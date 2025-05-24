import { SkeletonText, HStack, Box, SkeletonCircle } from "@chakra-ui/react";

const GenreListSkeleton = () => {
  return (
    <HStack>
      <Box>
        <SkeletonCircle size={12} />
      </Box>
      <SkeletonText noOfLines={2} />
    </HStack>
  );
};

export default GenreListSkeleton;
