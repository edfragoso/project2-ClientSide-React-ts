import { Api } from "providers";

interface IGenre {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

const getAllGenres = () => Api.get<IGenre>('/genres');

const createGenre = (genre: IGenre) => Api.post<IGenre>('/genres', genre);

const updateGenre = (id: string, genre: IGenre) => Api.patch<IGenre>('/genres/${id}', genre);

const deleteGenre = (id:string) => Api.delete('/genres/${id}')

export const GenresService = {
  getAllGenres,
  createGenre,
  updateGenre,
}