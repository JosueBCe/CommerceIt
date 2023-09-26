import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import Navigation from './src/navigation/Navigation';
import { ProductsProvider } from './src/screens/ProductsContext';
import Toast, { BaseToast} from 'react-native-toast-message';
export default function App() {
  const toastConfig = {

    success: (props) => (
      <BaseToast
        {...props}
        style={{ borderLeftColor: '#5cb85c', borderRightColor: "#5cb85c", backgroundColor: "#373737" }}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        text1Style={{
          color: "white",
          fontSize: 17
        }}
        text2Style={{
          color: "white",
          fontSize: 14
        }}
      />
    ),
  }

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
