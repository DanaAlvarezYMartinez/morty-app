import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
} from 'react-native';
import MainStack from './navigation/MainStack';
import { AuthProvider } from './context/AuthContext';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <AuthProvider>
        <MainStack />
      </AuthProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
