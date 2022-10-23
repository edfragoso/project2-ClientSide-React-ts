export interface ProductResponse {
  product?: any;
  id?: string | number;
  title: string | undefined;
  image?: string;
  year?: number;
  score?: number;
  description?: string;
  trailer?: string;
  gameplay?: string;
  category?: number;
  genero?: string;
}

export interface ProfileResponse {
  id: number;
  usuario: string;
  foto: string;
}
