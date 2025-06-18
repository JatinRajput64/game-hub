import { Genres } from "./Genres";
import { Platforms } from "./Platforms";
import { Publishers } from "./Publishers";


export interface Games {
  id: number;
  name: string;
  slug: string;
  genres: Genres[];
  publishers: Publishers[];
  description_raw: string;
  background_image: string;
  parent_platforms: { platform: Platforms; }[];
  metacritic: number;
  rating_top: number;
}
