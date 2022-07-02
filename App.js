import {
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import MainStack from './navigation/MainStack';
import { AuthProvider } from './context/AuthContext';
import { FavProvider } from './context/FavContext';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <AuthProvider>
        <FavProvider>
          <MainStack />
        </FavProvider>
      </AuthProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
