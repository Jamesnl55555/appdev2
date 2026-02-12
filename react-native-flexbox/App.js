import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
// import Flex from './components/Flex';
import FlexDirectionBasics from './components/FlexDirectionBasics';

export default function App() {
  return (
    <View style={{flex: 1}}>
      {/* <Flex /> */}
      <FlexDirectionBasics />
      <StatusBar style="auto" />
    </View>
  );
}