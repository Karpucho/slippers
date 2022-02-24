import { call, put, takeEvery} from 'redux-saga/effects'
import { loginUserAC, createUserAC} from '../actionCreators/usersAC'


async function fetchData({ url, method, headers, body }) {
  const response = await fetch(url, { method, headers, body });
  return await response.json();
}

function* postUserWorker(action) {
  const newUser = yield call(fetchData, {
    url: "/signup",
    method: "POST",
    headers: {
      'Content-Type': 'Application/json'
    },
    body:JSON.stringify(action.payload),
  })
  yield put(createUserAC(newUser))
}

export function* globalWatcher() {
  yield takeEvery('FETCH_CREATE_USER', postUserWorker)
}
