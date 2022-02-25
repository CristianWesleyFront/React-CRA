import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import createSagaMiddleware from 'redux-saga';
import { exempleActions, initialState } from 'store/exemple/exemple.reducer';
import { exempleSaga } from 'store/exemple/exemple.saga';

const reduxSagaMonitorOptions = {};
const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);

const mockStore = configureMockStore([sagaMiddleware]);

describe('[SAGAS] Exemple Fluxo', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  const getMokeData = { codigo: 123, nomeFantasia: 'Test 123' };
  const notFoundPayload = {
    status: 404,
    mensage: 'Usuário não encontrado',
  };
  const notFoundRoutePayload = {
    status: 404,
    mensage: 'Rota não encontrado',
  };
  const errPayload = {
    status: 500,
    mensage: 'Error no servidor',
  };

  it('creates GET_USERS, GET_USERS_SUCCESS after successfuly fetching users', done => {
    const expectedActions = [
      exempleActions.getUser('123'),
      exempleActions.dataUser(getMokeData),
    ];

    const store = mockStore(initialState);
    sagaMiddleware.run(exempleSaga);

    store.dispatch(exempleActions.getUser('123'));

    moxios.wait(function () {
      let request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: getMokeData,
      });
    }, 1000);

    store.subscribe(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expectedActions);
      if (actions.length >= expectedActions.length) {
        expect(actions).toEqual(expectedActions);
        done();
      }
    });
  });

  it('creates GET_USERS, GET_USERS_ERROR after not found users', done => {
    const expectedActions = [
      exempleActions.getUser('123'),
      exempleActions.errorUser(notFoundPayload),
    ];

    const store = mockStore(initialState);
    sagaMiddleware.run(exempleSaga);

    store.dispatch(exempleActions.getUser('123'));

    moxios.wait(function () {
      let request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: { codigo: null, nomeFantasia: 'Test 123' },
      });
    }, 1000);

    store.subscribe(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expectedActions);
      if (actions.length >= expectedActions.length) {
        expect(actions).toEqual(expectedActions);
        done();
      }
    });
  });

  it('creates GET_USERS, GET_USERS_ERROR after not found Route', done => {
    const expectedActions = [
      exempleActions.getUser('123'),
      exempleActions.errorUser(notFoundRoutePayload),
    ];

    const store = mockStore(initialState);
    sagaMiddleware.run(exempleSaga);

    store.dispatch(exempleActions.getUser('123'));

    moxios.wait(function () {
      let request = moxios.requests.mostRecent();
      request.respondWith({
        status: 400,
        response: {},
      });
    }, 1000);

    store.subscribe(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expectedActions);
      if (actions.length >= expectedActions.length) {
        expect(actions).toEqual(expectedActions);
        done();
      }
    });
  });

  it('creates GET_USERS, GET_USERS_ERROR after sever error', done => {
    const expectedActions = [
      exempleActions.getUser('123'),
      exempleActions.errorUser(errPayload),
    ];

    const store = mockStore(initialState);
    sagaMiddleware.run(exempleSaga);

    store.dispatch(exempleActions.getUser('123'));

    moxios.wait(function () {
      let request = moxios.requests.mostRecent();
      request.respondWith({
        status: 500,
        response: {},
      });
    }, 1000);

    store.subscribe(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expectedActions);
      if (actions.length >= expectedActions.length) {
        expect(actions).toEqual(expectedActions);
        done();
      }
    });
  });
});
