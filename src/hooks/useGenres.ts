import genre from "@/data/genre";
import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";

const apiClient = new APIClient<Genres>('/genres');

export interface Genres {
    id: number;
    name: string;
    image_background: string;
}

const useGenres = () => useQuery({
        queryKey: ["genres"],
        queryFn: apiClient.getAll,
        staleTime: ms('24h'), //24hrs,
        initialData: genre
    })

export default useGenres;