const commonController = () => {
  const getCommonUrl = (url: string) => `${url}`;

  const commonUrl = {
    movies: getCommonUrl(`functions/index`),
    image: getCommonUrl(`list?limit=`),

  };

  return {
    commonUrl,
  };
};

export default commonController;
