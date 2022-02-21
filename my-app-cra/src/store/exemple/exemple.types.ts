import { IError } from 'types';

export interface IUser {
  codigo: number;
  nomeFantasia: string;
}
export interface ExempleState {
  user: IUser | null;
  loading: boolean;
  error: IError | null;
}
