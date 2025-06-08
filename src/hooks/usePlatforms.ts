import platforms from "@/data/platforms";
import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";

const apiClient = new APIClient<Platforms>('/platforms/lists/parents');

export interface Platforms{
    id: number;
    name: string;
    slug: string;
}

const usePlatforms = () => useQuery({
    queryKey: ['platforms'],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'), //24hrs
    initialData: platforms
})

export default usePlatforms;