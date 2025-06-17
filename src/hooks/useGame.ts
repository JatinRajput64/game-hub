import { Games } from "@/entities/Games";
import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";


const apiClient = new APIClient<Games>('/games');

const useGame = (slug: string) => useQuery({
        queryKey: ["game", slug],
        queryFn: () => apiClient.get(slug)
    })

export default useGame;