# Overview

This is a React Native mobile application, which implements CRUD operations using async storage allowing users to interact and save their data (products) in the cart and make payment requests. 

The purpose of this application is to strengthen my abilities to develop full-stack react applications, implementing initially the mobile version. Then scaling to more complex versions integrating the frontend, backend, and cloud database. 



[Software Demo Video](http://youtube.link.goes.here)   

[WireFrame & MockUp](https://www.figma.com/file/zHEfeiNomW9MPvgQ3QvD5R/My-App?type=design&node-id=0%3A1&mode=design&t=QAjX9pBZrmw28UFu-1)

## Detailed Description

### Screens and Implementations

#### Home Screen Implementations: 
- Navigation through the app with stack navigation
* List of products searchable by title or product description 
* Grid of products photos
* Button to add the product to the cart
* Button to view the product in the Single Product Screen 

#### Products Screen: 
* Hero image with adapted background to adjust to the user's screen size 
* Filterable list of products, matching products by category, price range, and from cheaper price to higher 

#### Cart Screen: 
* Hero image background adapted to adjust to the user's screen size 
* List of items added to the cart. 
* Asynchronous methods for adding, updating, and deleting items in the cart list using Async Storage.

### Styling: 

#### React Native StyleSheet  
* Complementary styles
* Consistency in design and color choice 
* IOS and Android styles support 
* Adaptable layout 
* Minimalist 
* Respect for white spaces and hierarchy of font texts 

### More features: 

#### Toast messages
* Notification to the user when adding a new product to the cart
* Notification to the user when deleting a product from the cart
* Notification to the user when payment is made successfully


## Development Environment

* React Native (Expo) 
* React.Js 
* React-Navigation
* React Native Async Storage 
* Code editor: VS Code
* NPM 

## Useful Websites

* [Toast Docs](https://github.com/calintamas/react-native-toast-message/blob/HEAD/docs/custom-layouts.md)
* [ScrollView React Native](https://reactnative.dev/docs/scrollview)
* [Async Storage React Native](https://blog.logrocket.com/guide-react-natives-asyncstorage/)
* [useEffect React.js](https://react.dev/reference/react/useEffect)
* [React Navigation Docs](https://reactnavigation.org/docs/getting-started/)
* [Stack Navigator](https://reactnavigation.org/docs/stack-navigator/)
* [Tab Navigator](https://reactnavigation.org/docs/bottom-tab-navigator/)
* [Stack OverFlow Forum](https://stackoverflow.com/questions/67623952/error-virtualizedlists-should-never-be-nested-inside-plain-scrollviews-with-th)
* [React Hooks Tutorial ](https://www.youtube.com/watch?v=HYKDUF8X3qI&ab_channel=CosdenSolutions)
* [Scrolling](https://www.youtube.com/watch?v=T9LWjpHCW_E&ab_channel=BungFerdly)
* [React Props](https://www.w3schools.com/react/react_props.asp)


## Future Work
* Improve performance by implementing hooks like useMemo and useReducer to handle the state of the data
* Create and connect to a Cloud Database 
* Add the functionality to perform CRUD operations with products
* Add the functionality to switch the currency in which products are priced
* Add functionality to set the app language by location
* Handle the case of creating a new product, updating image and location
* Add user authentication functionality 
* Deploy the first version 
