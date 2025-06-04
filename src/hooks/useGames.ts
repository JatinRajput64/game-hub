import { GameQuery } from "@/App";
import { useQuery } from "@tanstack/react-query";
import apiClient from "@/services/api-client";
import { FetchResponse } from "@/services/api-client";
import { Platforms } from "./usePlatforms";

export interface Games {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform: Platforms}[];
    metacritic: number;
    rating_top: number;
  }

const useGames = (gameQuery: GameQuery) => useQuery({
  queryKey: ['games', gameQuery],
  queryFn: () =>
    apiClient
      .get<FetchResponse<Games>>('/games', {
        params: {
          genres: gameQuery.genres?.id, 
          parent_platforms: gameQuery.platforms?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText
        }
      })
      .then(res=>res.data),
  staleTime: 5 * 60 * 1000
})

export default useGames;