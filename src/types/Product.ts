export interface ProductResponse {
  product?: any;
  id?: string;
  title?: string;
  image?: string;
  year?: number;
  score?: number;
  description?: string;
  trailer?: string;
  gameplay?: string;
}

export interface ProfileResponse {
  id: number;
  usuario: string;
  foto: string;
}
