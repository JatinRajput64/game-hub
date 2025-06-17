import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import { Games } from "./useGames";

const apiClient = new APIClient<Games>('/games');

const useGame = (slug: string) => useQuery({
        queryKey: ["game", slug],
        queryFn: () => apiClient.get(slug)
    })

export default useGame;