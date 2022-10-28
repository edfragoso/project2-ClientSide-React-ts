import { Api } from "providers";

interface IProfile {
  id: string;
  title: string;
  imageUrl: string;
  userId: string
}

const getAllProfiles = () => Api.get<IProfile[]>('/profiles');

const createProfile = (profile: IProfile) =>Api.post('/profiles', profile)

const updateProfile = (id: string, profile: IProfile) =>Api.patch('/profiles/${id}', profile)

const deleteProfile = (id: string) =>Api.delete('/profiles/${id}')

export const ProfilesService = {
  getAllProfiles,
  createProfile,
  updateProfile,
  deleteProfile
}