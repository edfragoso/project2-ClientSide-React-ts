import { Api } from "providers";

interface IUser {
  id: string;
  name: string;
  email: string;
  password:string;
  cpf: string;
  updatedAt?: Date;
  createdAt?: Date;
}

const getAllUsers = () => Api.get<IUser[]>('/users');

const createUser = (user: IUser) =>Api.post('/users', user)

const updateUser = (id: string, user: IUser) =>Api.patch('/users/${id}', user)

const deleteUser = (id: string) =>Api.delete('/users/${id}')

export const GamesService = {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser
}