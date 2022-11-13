export type Movie_entity = {
  id: number;
  title: string;
  platform: string;
  genre: string;
  was_assisted: boolean;
  movie_review: null | string;
};

export type Movie = Omit<Movie_entity, "id">;

export type Platform = {
  id: number;
  name: string;
};

export type Watch = {
  movie_review: string;
  was_assisted: boolean;
};
