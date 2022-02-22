import { RedocOptions } from 'nestjs-redoc';

export const SWAGGER = {
  title: 'API documment',
  description: 'This is API documment',
  version: '1.0',
};

export const redocOptions: RedocOptions = {
  title: SWAGGER.title,
  logo: {
    url: 'https://redocly.github.io/redoc/petstore-logo.png',
    backgroundColor: '#F0F0F0',
    altText: 'Something',
  },
  sortPropsAlphabetically: true,
  hideDownloadButton: true,
  hideHostname: true,
  auth: {
    enabled: true,
    user: 'admin',
    password: '123456',
  },
  tagGroups: [
    {
      name: 'Core resources',
      tags: ['cats'],
    },
  ],
};
