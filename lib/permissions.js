import Rx from 'rx';
import {AuthApi} from './auth-api.js'

const authGroups$ = AuthApi.groups().map((g) => {
  return g.data;
});

export const Permissions = { authGroups$ }; 
