import { AxiosPromise, AxiosRequestConfig } from "axios";

type Request = {
  get: (config: AxiosRequestConfig) => AxiosPromise<any>;
  post: (config: AxiosRequestConfig) => AxiosPromise<any>;
  put: (config: AxiosRequestConfig) => AxiosPromise<any>;
};


interface ReduxModel {
  posts: Array<any>;

}
type MovieCardModel = {
  title: string;
  director: string
  releaseDate: string,
  imageUrl: string
}
export type {
  ReduxModel,
  Request,
  MovieCardModel

}