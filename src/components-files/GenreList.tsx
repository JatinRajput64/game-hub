import useGenres from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import { Heading, HStack, Image, Link, List } from "@chakra-ui/react";
import GenreListSkeleton from "./GenreListSkeleton";
import useGameQueryStore from "@/Store";

const GenreList = () => {
  const setGenreId = useGameQueryStore((s) => s.setGenreId);
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const { data, isLoading, error } = useGenres();
  const genreListSkeletonArr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
  ];

  if (error) return null;

  return (
    <>
      <Heading size="2xl" marginBottom={2}>
        Genres
      </Heading>
      <List.Root>
        {isLoading &&
          genreListSkeletonArr.map((g) => (
            <List.Item key={g} listStyleType="none" paddingY="5px">
              <GenreListSkeleton />
            </List.Item>
          ))}
        {data?.results.map((g) => (
          <List.Item key={g.id} listStyleType="none" paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={getCroppedImageUrl(g.image_background)}
              ></Image>
              <Link
                fontWeight={g.id === selectedGenreId ? "bold" : "normal"}
                onClick={() => setGenreId(g.id)}
              >
                {g.name}
              </Link>
            </HStack>
          </List.Item>
        ))}
      </List.Root>
    </>
  );
};

export default GenreList;
