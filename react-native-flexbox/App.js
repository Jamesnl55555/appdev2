import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Flex from './components/Flex';
export default function App() {
  return (
    <View>
      <Flex />
      <StatusBar style="auto" />
    </View>
  );
}