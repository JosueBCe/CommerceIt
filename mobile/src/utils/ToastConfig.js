import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';

export const toastConfig = {
  /* 
  * Configuration of the Toast styles based on the message type
  */

  success: (props) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: '#5cb85c', backgroundColor: "#1E1E1E", height: 80 }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        color: "white",
        fontSize: 17
      }}
      text2Style={{
        color: "#5cb85c",
        fontSize: 14
      }}
    />
  ),
  error: (props) => (
    <ErrorToast
      style={{ borderLeftColor: '#DD6142', backgroundColor: "white", height: 80 }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      {...props}
      text1Style={{
        fontSize: 17
      }}
      text2Style={{
        color: "#DD6142",
        fontSize: 15
      }}
    />
  ),

}