export type Movie_entity = {
  id: number;
  title: string;
  platform: string;
  genre: string;
  status: boolean;
  note: null | string;
};

export type Movie = Omit<Movie_entity, "id">;

export type Platform = {
  id: number;
  name: string;
};
