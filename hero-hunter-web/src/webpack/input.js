/* eslint-disable @typescript-eslint/no-var-requires */
const { ifDevelopment } = require('./utils');

const inputs = ifDevelopment(
  {
    app: ['./src/index.tsx'],
  },
  {
    app: ['./src/index.tsx'],
    // serverError: ['./src/pages/errors/server-error/server-error.tsx'],
    // maintenanceError: ['./src/pages/errors/maintenance-error/maintenance-error.tsx'],
  },
);

module.exports = { inputs };
