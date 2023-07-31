import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { MovieCardModel } from 'models';
import { Colors } from 'theme';
import Pinchable from 'react-native-pinchable';
import moment from 'moment';
type PostCardProps = {
  item: MovieCardModel;
  index: number;
};
const { width, height } = Dimensions.get('window');

const MoviesCard: React.FC<PostCardProps> = ({ item, index }) => {

  return (
    <View style={styles.cardContainer}>
      <Text style={styles.title}>{item.title}</Text>
      <Pinchable
        minimumZoomScale={1}
        maximumZoomScale={3}
        style={{ paddingVertical: 10 }}>
        <Image
          resizeMode="center"
          style={styles.image}
          source={{ uri: item?.imageUrl }}
        />
      </Pinchable>
      <View style={{ flexDirection: 'row', flex: 1 }}>
        <View style={{ flex: 1 }}>
          <Text style={styles.label}>Director</Text>
          <Text style={styles.value}>{item.director}</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.label}>Release Date</Text>
          <Text style={styles.value}>
            {moment(item.releaseDate).format('DD MMM YYYY')}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default MoviesCard;

const styles = StyleSheet.create({
  label: {
    color: Colors.black,
    fontSize: 16,
  },
  value: {
    fontSize: 14,
  },
  cardContainer: {
    flex: 1,
    padding: 10,
    marginHorizontal: 10,
    marginVertical: 10,
    elevation: 1,
    backgroundColor: Colors.primaryColor,
    borderRadius: 10,
    height: height / 4,
  },
  title: { fontSize: 18, fontWeight: 'bold', color: Colors.black },
  image: { width: width / 1.2, height: height / 8 }
});
