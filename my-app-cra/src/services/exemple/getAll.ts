import { requestGet } from 'utils/http/request';
import { api } from '.';

interface IgetCep {
  cep: string;
}

export const getCounty = (params: IgetCep) => {
  const { cep } = params;

  return requestGet(api, `/${cep}`);
};
