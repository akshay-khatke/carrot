
import {moviesApi} from 'services/apis';
import createAxios from 'services/axios';
import {BASE_URL} from 'services/urls';
import imageApi from './apis/imageApi';

const {instance: moviesInstance, ...movies} = createAxios(BASE_URL.MOVIES);
const {instance: imageInstance, ...image} = createAxios(BASE_URL.IMAGE);


const api = {
  movies: moviesApi(movies),
  image:imageApi(image)
};

export default api;
