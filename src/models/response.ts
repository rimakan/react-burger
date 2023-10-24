import { Product } from './product';
import { User } from './user';

export interface AuthResponse {
  success: boolean;
  user: User;
  accessToken: string;
  refreshToken: string;
}

export interface TokenRefreshResponse extends Omit<AuthResponse, 'user'> {
  success: boolean;
  accessToken: string;
  refreshToken: string;
}

export interface LogoutResponse extends Omit<TokenRefreshResponse, 'accessToken' | 'refreshToken'> {
  success: boolean;
  message: string;
}

export interface IngredientsResponse {
  data: Product[];
}

export interface IngredientsResponse {
  data: Product[];
}

export interface UserResponse extends Omit<AuthResponse, 'accessToken' | 'refreshToken'> {
  success: boolean;
  user: User;
}
