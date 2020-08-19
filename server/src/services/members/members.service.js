
import { Members } from './members.class';

import createModel from '../../models/members.model';
import hooks from './members.hooks';

export default function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/members', new Members(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('members');

  service.hooks(hooks);
}
