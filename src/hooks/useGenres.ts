import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import genre from "@/data/genre";

const apiClient = new APIClient<Genres>('/genres');

export interface Genres {
    id: number;
    name: string;
    image_background: string;
}

const useGenres = () => useQuery({
        queryKey: ["genres"],
        queryFn: apiClient.getAll,
        staleTime: 24 * 60 * 60 * 1000, //24hrs,
        initialData: { results: genre, count: genre.length }
    })

export default useGenres;