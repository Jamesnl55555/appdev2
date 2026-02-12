import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
// import Flex from './components/Flex';
// import FlexDirectionBasics from './components/FlexDirectionBasics';
// import DirectionLayout from './components/DirectionLayout';
// import JustifyContentBasics from './components/JustifyContentBasics';
import AlignItemsLayout from './components/AlignItemsLayout';

export default function App() {
  return (
    <View style={{flex: 1}}>
      {/* <Flex /> */}
      {/* <FlexDirectionBasics /> */}
      {/* <DirectionLayout /> */}
      {/* <JustifyContentBasics /> */}
      <AlignItemsLayout />
      <StatusBar style="auto" />
    </View>
  );
}