import Rx from 'rx';
import Ractive from 'ractive';


import env from '../config/current-env.js';
import apiUriByEnv from '../config/auth-api.js';

import {Permissions} from '../lib/permissions.js';

var ractive = new Ractive({
  el: '#container',
  template: '#template',
  data: { store: {}, error: false } 
});

const current$ = Permissions.authGroups$;

current$.catch((e) => {
  console.log("CAUGHT!");
  ractive.set('error', true)
});

current$.subscribe(
    (m) => { 
      ractive.set('store', m)
    },
    (e) => {
      ractive.set('redirectUrl', window.location.href)
      ractive.set('apiUrl', apiUriByEnv[env])
      ractive.set('error', true)
    }
);
