import axios from 'axios';
interface IgetCep {
  cep: string;
}

export const getCounty = (params: IgetCep): Promise<any> => {
  return axios.get(`${process.env.REACT_APP_API}/${params.cep}`);
};
