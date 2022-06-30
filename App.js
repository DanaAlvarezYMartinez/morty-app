import { ImageBackground, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import MainStack from './navigation/MainStack';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
       <MainStack />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
