import { StatusBar } from 'expo-status-bar';
import LotsOfStyles from './components/LotsOfStyles';
import { View } from 'react-native';
export default function App() {
  return (
    <View>
      <LotsOfStyles />
      <StatusBar style="auto" />
    </View>
  );
}
