import { Box, Grid, GridItem, HStack } from "@chakra-ui/react";
import NavBar from "./components-files/NavBar";
import GameGrid from "./components-files/GameGrid";
import GenreList from "./components-files/GenreList";
import { useState } from "react";
import PlatformSelector from "./components-files/PlatformSelector";
import SortSelector from "./components-files/SortSelector";
import GameHeading from "./components-files/GameHeading";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar
          onSearchText={(searchText) =>
            setGameQuery({ ...gameQuery, searchText })
          }
        />
      </GridItem>
      <GridItem
        area="aside"
        display={{ base: "none", lg: "block" }}
        paddingX={5}
      >
        <GenreList
          onSelectedGenre={(genre) =>
            setGameQuery({ ...gameQuery, genreId: genre.id })
          }
          selectedGenreId={gameQuery.genreId}
        />
      </GridItem>
      <GridItem area="main">
        <Box paddingLeft={2}>
          <GameHeading gameQuery={gameQuery} />
          <HStack spaceX={4} marginBottom={5}>
            <PlatformSelector
              setSelectedPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platformId: platform.id })
              }
              selectedPlatformId={gameQuery.platformId}
            />
            <SortSelector
              selectSortOrder={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
              selectedSortOrder={gameQuery.sortOrder}
            />
          </HStack>
        </Box>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
