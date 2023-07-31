import {Request} from 'models';
import url from 'services/urls';

const moviesApi = ({get, post, put}: Request) => {
  const getMovies = (params?: any) => {
    return get({url: url.common.commonUrl.movies, params});
  };
  return {
    getMovies,
  };
};

export default moviesApi;
