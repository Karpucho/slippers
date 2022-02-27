import { call, put, takeEvery } from "redux-saga/effects";
import {
  loginUserAC,
  createUserAC,
  updateUserAC,
} from "../actionCreators/usersAC";

import {
  updateProductCardAC,
  initCurrentProductCardAC,
} from "../actionCreators/productsAC";



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
    credentials: "include",
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

function* putProductWorker(action) {
  const product = yield call(fetchData, {
    url: `/products/edit/${action.payload.id}`,
    method: "PUT",
    headers: {
      "Content-Type": "Application/json",
    },
    body: JSON.stringify(action.payload.item),
  });
  yield put(updateProductCardAC(product));
}

function* getCurrentProductWorker(action) {
  const cuurentProd = yield call(fetchData, {
    url: `/products/edit/${action.payload}`,
    method: "GET",
  });
  yield put(initCurrentProductCardAC(cuurentProd));
}

export function* globalWatcher() {
  yield takeEvery("FETCH_CREATE_USER", postUserWorker);
  yield takeEvery("FETCH_UPDATE_USER", putUserWorker);
  yield takeEvery("FETCH_UPDATE_PRODUCT", putProductWorker);
  yield takeEvery("FETCH_CURRENT_PRODUCT", getCurrentProductWorker);
}
