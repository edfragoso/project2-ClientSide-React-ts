import { Api } from "providers";

interface IGame {
  id: string;
  title: string;
  image: string;
  description: string;
  year: string;
  score: string;
  trailer: string;
  gameplay: string;
  genreId: string;
}

const getAllGames = () => Api.get<IGame[]>('/games');

const createGame = (game: IGame) =>Api.post('/games', game)

const updateGame = (id: string, game: IGame) =>Api.patch('/games/${id}', game)

const deleteGame = (id: string) =>Api.delete('/games/${id}')

export const GamesService = {
  getAllGames,
  createGame,
  updateGame,
  deleteGame
}