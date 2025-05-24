import useGenres, { Genres } from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import { HStack, Image, Link, List } from "@chakra-ui/react";
import GenreListSkeleton from "./GenreListSkeleton";

interface Props {
  onSelectedGenre: (genre: Genres) => void;
}

const GenreList = ({ onSelectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  const genreListSkeletonArr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
  ];

  if (error) return null;

  return (
    <List.Root>
      {isLoading &&
        genreListSkeletonArr.map((g) => (
          <List.Item key={g} listStyleType="none" paddingY="5px">
            <GenreListSkeleton />
          </List.Item>
        ))}
      {data.map((g) => (
        <List.Item key={g.id} listStyleType="none" paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(g.image_background)}
            ></Image>
            <Link onClick={() => onSelectedGenre(g)}>{g.name}</Link>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default GenreList;
