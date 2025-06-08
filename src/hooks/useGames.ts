import { GameQuery } from "@/App";
import APIClient, { FetchResponse } from "@/services/api-client";
import { Platforms } from "./usePlatforms";
import { InfiniteData, QueryKey, useInfiniteQuery } from "@tanstack/react-query";

const apiClient = new APIClient<Games>('/games');

export interface Games {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform: Platforms}[];
    metacritic: number;
    rating_top: number;
  }

const useGames = (gameQuery: GameQuery) => useInfiniteQuery<FetchResponse<Games>, Error, InfiniteData<FetchResponse<Games>, number>, QueryKey, number>({
  queryKey: ['games', gameQuery],
  queryFn: ({pageParam = 1}) => 
    apiClient
      .getAll({
        params: {
          genres: gameQuery.genreId, 
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam
        }
      }),
  initialPageParam : 1,
  getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
  },
  staleTime: 24 * 60 * 60 * 1000 //24hrs
});

export default useGames;