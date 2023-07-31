import commonController from 'services/urls/common';

const url = {
  common: commonController(),
};

const LOCAL = false;
const BASE_URL = __DEV__
  ? !LOCAL
    ? {
        // Development
        MOVIES: 'https://swapi-graphql.netlify.app/.netlify/',
        IMAGE:'https://picsum.photos/v2/'
      }
    : {
        // local
        MOVIES: 'https://swapi-graphql.netlify.app/.netlify/',
        IMAGE:'https://picsum.photos/v2/'

      }
  : {
      // Production
      MOVIES: 'https://swapi-graphql.netlify.app/.netlify/',
      IMAGE:'https://picsum.photos/v2/'
    };

export {BASE_URL};

export default url;
