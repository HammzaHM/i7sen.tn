
import { Members } from './members.class';

import createModel from '../../models/members.model';
import hooks from './members.hooks';

export default function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  app.use('/members', new Members(options, app));

  const service = app.service('members');

  service.hooks(hooks);
}
