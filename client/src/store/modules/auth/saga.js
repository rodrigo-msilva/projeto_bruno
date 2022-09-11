import { call, put, all, takeLatest} from 'redux-saga/effects'
import { toast } from 'react-toastify'
import { get } from 'lodash'
import * as actions from './actions'
import * as types from '../types'
import api from '../../../services/api'
import axios from 'axios'

function* loginSagaRequest({payload}) {
    try {
        
        const response = yield call(api.post, '/tokens', payload)
        yield put(actions.loginSuccess({ ...response.data }))
        toast.success('Usuário logado com sucesso!')

        api.defaults.headers.authorization = `Bearer ${response.data.token}`
        
        
    } catch(err) {
        toast.error('Usuário ou senha inválidos')
        yield put(actions.loginFailure())
    }
}

function* persistRehydrate({payload}) {
    const token = get(payload, 'auth.token','')
    if(!token) return;
    api.defaults.headers.authorization = `Bearer ${token}`
}

export default all([
    takeLatest(types.LOGIN_REQUEST, loginSagaRequest),
    takeLatest(types.PERSIST_REHYDRATE, persistRehydrate)
])

