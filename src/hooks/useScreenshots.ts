import { Screenshots } from "@/entities/Screenshots";
import ApiClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";


const useScreenshots = (id: number | string) => {
    const apiClient = new ApiClient<Screenshots>(`/games/${id}/screenshots`);

    return useQuery({
        queryKey: ['screenshots', id],
        queryFn: apiClient.getAll
    });
}

export default useScreenshots;