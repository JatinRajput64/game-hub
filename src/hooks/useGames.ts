import useData from "./useData";
import { Genres } from "./useGenres";
import { platforms } from "./usePlatforms";

export interface Platform{
    id: number;
    name: string;
    slug: string;
}

export interface Games {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform: Platform}[];
    metacritic: number;
  }

const useGames = (selectedGenre : Genres | null, selectedPlatform : platforms | null) => 
  useData<Games>('/games', {
    params: {
      genres: selectedGenre?.id, 
      platforms: selectedPlatform?.id
    }}, 
    [selectedGenre?.id, selectedPlatform?.id]
  );

export default useGames;