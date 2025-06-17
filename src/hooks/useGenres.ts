import genre from "@/data/genre";
import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import { Genres } from "../entities/Genres";

const apiClient = new APIClient<Genres>('/genres');

const useGenres = () => useQuery({
        queryKey: ["genres"],
        queryFn: apiClient.getAll,
        staleTime: ms('24h'), //24hrs,
        initialData: genre
    })

export default useGenres;