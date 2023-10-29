import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import Navigation from './src/navigation/Navigation';
import { ProductsProvider } from './src/screens/ProductsContext';
import { toastConfig } from './src/utils/ToastConfig';
import Toast from 'react-native-toast-message';


export default function App() {

  return (
    <>
      <ProductsProvider>
        <View style={styles.container}>
          <Navigation />
        </View>
      </ProductsProvider>
      <Toast config={toastConfig} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
