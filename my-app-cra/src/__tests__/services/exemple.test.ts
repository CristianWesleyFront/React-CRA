import axios from 'axios';
import { getCounty } from 'services/exemple';

describe('[API] Exemple', () => {
  beforeEach(() => {
    axios.get = jest.fn();
  });

  it('httpClient is called as expected', () => {
    getCounty({ cep: '123' });
    expect(axios.get).toHaveBeenCalledWith(
      `${process.env.REACT_APP_API}/${123}`,
    );
  });
});
