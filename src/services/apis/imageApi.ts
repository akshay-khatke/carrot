import {Request} from 'models';
import url from 'services/urls';

const imageApi = ({get, post, put}: Request) => {
  const getImages = (params?: any) => {
    return get({url: url.common.commonUrl.image, params});
  };
  return {
    getImages,
  };
};

export default imageApi;
