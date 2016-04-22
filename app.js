import Rx from 'rx';
import Ractive from 'ractive';

import {Permissions} from '../lib/permissions.js';

var ractive = new Ractive({
  el: '#container',
  template: '#template',
  data: { store: {} } 
});

const current$ = Permissions.authGroups$ 

current$.subscribe((m) => ractive.set('store', m));
