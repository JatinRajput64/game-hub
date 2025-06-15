import APIClient, { FetchResponse } from "@/services/api-client";
import useGameQueryStore from "@/Store";
import { InfiniteData, QueryKey, useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import { Platforms } from "./usePlatforms";

const apiClient = new APIClient<Games>('/games');

export interface Games {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform: Platforms}[];
    metacritic: number;
    rating_top: number;
  }

const useGames = () => { 
  const gameQuery = useGameQueryStore(s=>s.gameQuery);
  return useInfiniteQuery<FetchResponse<Games>, Error, InfiniteData<FetchResponse<Games>, number>, QueryKey, number>({
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
    staleTime: ms('24h') //24hrs
  });
}

export default useGames;