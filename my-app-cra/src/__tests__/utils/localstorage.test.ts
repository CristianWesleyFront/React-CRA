import { getStorage, removeStorage, setStorage } from 'utils/localstorage';

describe('LocalStorage', () => {
  it('Should return test to equal hello word', () => {
    setStorage('test', 'hello word');
    expect(getStorage('test')).toEqual('hello word');
  });
  it('Should not return test', () => {
    expect(getStorage('test1')).toEqual(null);
  });
  it('Should remove test', () => {
    setStorage('test', 'hello word');
    expect(getStorage('test')).toEqual('hello word');
    removeStorage('test');
    expect(getStorage('test')).toEqual('');
  });
});
