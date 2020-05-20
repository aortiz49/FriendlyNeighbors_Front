const host = 'localhost';
const port = '8080';
const appName = 's3_neighborhood-api';
const rootApi = 'api';

export const environment = {
  production: false,
  apiUrl: `http://${host}:${port}/${appName}/${rootApi}/`,
  apiUrl2: `http://${host}:${port}/${appName}/${rootApi}`
};
