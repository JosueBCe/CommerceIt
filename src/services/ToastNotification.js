
import Toast from 'react-native-toast-message';

/* 
* Toast component: it implements the toast feature
* It will be applied through the app to notify the user
* about results of the actions taken 
* (successful payment, add new product or delete product from the cart)  
*/

export const showToast = (messageTitle, messageDescription, type = "success") => {
    Toast.show({
        type: type,
        text1: messageTitle,
        text2: messageDescription,
        topOffset: 50
    });
}

