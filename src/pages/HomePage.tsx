import { Box, Grid, GridItem, HStack } from "@chakra-ui/react";
import GameGrid from "@/components-files/GameGrid";
import GenreList from "@/components-files/GenreList";
import PlatformSelector from "@/components-files/PlatformSelector";
import SortSelector from "@/components-files/SortSelector";
import GameHeading from "@/components-files/GameHeading";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem
        area="aside"
        display={{ base: "none", lg: "block" }}
        paddingX={5}
      >
        <GenreList />
      </GridItem>
      <GridItem area="main">
        <Box paddingLeft={2}>
          <GameHeading />
          <HStack spaceX={4} marginBottom={5}>
            <PlatformSelector />
            <SortSelector />
          </HStack>
        </Box>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
