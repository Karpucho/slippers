import { call, put, takeEvery } from "redux-saga/effects";
import {
  loginUserAC,
  createUserAC,
  updateUserAC,
} from "../actionCreators/usersAC";

async function fetchData({ url, method, headers, body }) {
  const response = await fetch(url, { method, headers, body });
  return await response.json();
}

function* postUserWorker(action) {
  const newUser = yield call(fetchData, {
    url: "/api/registration",
    method: "POST",
    headers: {
      "Content-Type": "Application/json",
    },
    credentials:'include',
    body: JSON.stringify(action.payload),
  });
  yield put(createUserAC(newUser));
}

function* putUserWorker(action) {
  const user = yield call(fetchData, {
    url: "/api/users/:id",
    method: "PUT",
    headers: {
      "Content-Type": "Application/json",
    },
    body: JSON.stringify(action.payload),
  });
  yield put(updateUserAC(user));
}

export function* globalWatcher() {
  yield takeEvery("FETCH_CREATE_USER", postUserWorker);
  yield takeEvery("FETCH_UPDATE_USER", putUserWorker);
}
