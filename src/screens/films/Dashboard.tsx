import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import api from 'services';
import { MovieCardModel } from 'models';
import { Colors } from 'theme';
import { MovieCard } from 'screens/films';


type DashboardProps = {};

const Dashboard: React.FC<DashboardProps> = ({ }) => {
  const [apiData, setApiData] = useState<Array<MovieCardModel>>([]);
  useEffect(() => {
    getMoviesDataList();
  }, []);


  const fetchRandomImages = async (input: number, movieNames: any) => {
    try {
      const response = await api.image.getImages({ input })

      const mergedData = movieNames.map((item: MovieCardModel, index: number) => ({
        ...item,
        imageUrl: response.data[index].download_url
      }));
      setApiData(mergedData);
    } catch (error) {
      console.error('Error fetching random images:', error);
    }
  };



  //apis...
  const getMoviesDataList = async () => {
    const query = `
  query {
    allFilms {
      films {
        title
        director
        releaseDate
      }
    }
  }
`;
    const { data, status } = await api.movies.getMovies({ query });

    setApiData(data.data.allFilms.films);

    fetchRandomImages(data?.data?.allFilms?.films?.length, data.data.allFilms.films)

  };

  const renderItem = ({ item, index }: { item: MovieCardModel; index: number }) => {
    return <MovieCard item={item} index={index} />;
  };
  return (
    <View>
      <FlatList
        data={apiData}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryColor,
    padding: 10,
  },
});
