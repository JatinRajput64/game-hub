import { GameQuery } from "@/App";
import useData from "./useData";

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

const useGames = (gameQuery : GameQuery) => 
  useData<Games>('/games', {
    params: {
      genres: gameQuery.genres?.id, 
      parent_platforms: gameQuery.platforms?.id
    }}, 
    [gameQuery]
  );

export default useGames;