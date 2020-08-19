import members from './members/members.service.js';

// eslint-disable-next-line no-unused-vars
export default function (app) {
  app.configure(members);
};
