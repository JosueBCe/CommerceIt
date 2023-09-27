import Toast, { BaseToast} from 'react-native-toast-message';

export const toastConfig = {
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