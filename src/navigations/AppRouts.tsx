import {View} from 'react-native';
import { Dashboard } from '../screens/films';

type IProps={
    
}
const AppRoutes:React.FC<IProps> = () => {
  return (
    <View>
      <Dashboard />
    </View>
  );
};

export default AppRoutes;
