import { GameQuery } from "@/App";
import APIClient, { FetchResponse } from "@/services/api-client";
import { Platforms } from "./usePlatforms";
import { useQuery } from "@tanstack/react-query";

const apiClient = new APIClient<Games>('/games');

export interface Games {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform: Platforms}[];
    metacritic: number;
    rating_top: number;
  }

const useGames = (gameQuery: GameQuery) => useQuery<FetchResponse<Games>, Error>({
  queryKey: ['games', gameQuery],
  queryFn: () => 
    apiClient
      .getAll({
        params: {
          genres: gameQuery.genres?.id, 
          parent_platforms: gameQuery.platforms?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText
        }
      })
});

export default useGames;