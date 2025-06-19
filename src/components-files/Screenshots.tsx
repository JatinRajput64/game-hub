import useScreenshots from "@/hooks/useScreenshots";
import { Image, SimpleGrid } from "@chakra-ui/react";

interface Props {
  id: number | string;
}

const Screenshots = ({ id }: Props) => {
  const { data: screenshots, isLoading, error } = useScreenshots(id);

  if (isLoading) return null;

  if (error) throw error;

  return (
    <SimpleGrid gap={2} columns={{ sm: 1, md: 2 }}>
      {screenshots?.results.map((image) => (
        <Image src={image.image} key={image.id} />
      ))}
    </SimpleGrid>
  );
};

export default Screenshots;
