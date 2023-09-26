
import Toast from 'react-native-toast-message';

// Function that implements the toast feature
// It will be applied through the app to notify the user
// about results of the actions taken  

export const showToast = (messageTitle, messageDescription, type = "success") => {
    Toast.show({
        type: type,
        text1: messageTitle,
        text2: messageDescription,
        topOffset: 50
    });
}



/* customize toast style 

continue with section of list 

add comments and read me and that's all for now.  
*/