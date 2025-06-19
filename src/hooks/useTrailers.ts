import { Trailer } from "@/entities/Trailer";
import ApiClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";


const useTrailers = (slug: string) => { 
    const apiClient = new ApiClient<Trailer>(`/games/${slug}/movies`);
    
    return useQuery({
        queryKey: ['trailers', slug],
        queryFn: apiClient.getAll
    });
}

export default useTrailers;