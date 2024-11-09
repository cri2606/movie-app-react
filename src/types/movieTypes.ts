export type MovieType = {
    id: number ;
    adult?: boolean;
    backdrop_path?: string;
    title?: string;
    name?: string;
    original_language?: string;
    original_title?: string,
    overview?: string;
    poster_path?: string;
    media_type?: string;
    genre_ids?: number [];
    popularity?: number;
    release_date?: string;
    video?: boolean;
    vote_average?: number;
    vote_count?:number;
    known_for_department?: string;
    profile_path?: string;
    role?: string;
};

