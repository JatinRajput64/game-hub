import apiClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import { FetchResponse } from "@/services/api-client";
import genre from "@/data/genre";

export interface Genres {
    id: number;
    name: string;
    image_background: string;
}

const useGenres = () => useQuery({
        queryKey: ["genres"],
        queryFn: () => 
            apiClient
                .get<FetchResponse<Genres>>('/genres')
                .then(res => res.data),
        staleTime: 24 * 60 * 60 * 1000, //24hrs,
        initialData: { results: genre, count: genre.length }
    })


export default useGenres;