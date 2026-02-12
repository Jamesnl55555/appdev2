import { StatusBar } from 'expo-status-bar';
// import LotsOfStyles from './components/LotsOfStyles';
import FixedDimensionsBasics from './components/FixedDimensionsBasics';
import { View } from 'react-native';

export default function App() {
  return (
    <View>
      {/* <LotsOfStyles /> */}
      <FixedDimensionsBasics />
      <StatusBar style="auto" />
    </View>
  );
}
