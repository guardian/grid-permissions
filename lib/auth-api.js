import Rx from 'rx';

import {Client} from 'theseus';
import {Http} from 'any-http-reqwest';
import {Moment} from 'moment'

import env from '../config/current-env.js';
import apiUriByEnv from '../config/auth-api.js';

const client = new Client({
    promise: Promise,
    http: new Http({
        withCredentials: true
    })
});

export const AuthApi = {
  groups: function groups() {
    const apiUrl = apiUriByEnv[env];
    const api = client.resource(apiUrl);

    return Rx.Observable.fromPromise(
      api
        .follow('permissions')
        .follow('groups')
        .get({},{withCredentials: true})
    );
  }
};
