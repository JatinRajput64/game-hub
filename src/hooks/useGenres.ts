
import Genre from "@/data/genre";

export interface Genres {
    id: number;
    name: string;
    image_background: string;
}

const useGenres = () => ({data: Genre, isLoading: false, error: null})

export default useGenres;