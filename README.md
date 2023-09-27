# Overview

This is a React Native mobile application, which implements CRUD operations using async storage allowing users to interact and save their data (products) in the cart and make payments requests. 

The purpose of this application is to strengthening my abilities to developer full stack react applications, implementing intially the mobile version. 



[Software Demo Video](http://youtube.link.goes.here)   

[WireFrame & MockUp](https://www.figma.com/file/zHEfeiNomW9MPvgQ3QvD5R/My-App?type=design&node-id=0%3A1&mode=design&t=QAjX9pBZrmw28UFu-1)

## Detailed Description

### Screens and Implementations

#### Home Screen Implementations: 
- Navigation through the app with stack navigation
* List of products searchable by title or product description 
* Grid of products photos
* Button to add product to the cart
* Button to view the product in the Single Product Screen 

#### Products Screen: 
* Hero image with adapted background to adjust to the user screen size 
* Filterable list of products, matching products by category, price range and from cheaper price to higher 

#### Cart Screen: 
* Hero image background adapted to adjust to the user screen size 
* List of items addeed to the cart. 
* Asynchronous methods for adding, updating, and deleting items in the cart list using Async Storage.

### Styling: 

#### NativeWind
* Adaptable layout 
* Minimalist 
* Respect of white spaces and hierarchy of font texts 

#### React Native StyleSheet  
* Complementary sytles
* Consistency in design and color choice 
* IOS and Android styles support 

### More features: 

#### Toast messages
* Notification to the user when adding a new product to the cart
* Notification to the user when deleting a product from the cart
* Notification to the user when payment is made successfully


## Development Environment

* React Native (Expo) 
* React.Js 
* NativeWind CSS
* Tailwind
* React-Navigation
* React Native Async Storage 


## Useful Websites

* [Web Site Name](http://url.link.goes.here)
* [Stack OverFlow Forum](https://stackoverflow.com/questions/67623952/error-virtualizedlists-should-never-be-nested-inside-plain-scrollviews-with-th)
* [React Hooks Tutorial ](https://www.youtube.com/watch?v=HYKDUF8X3qI&ab_channel=CosdenSolutions)
 *scroll https://www.youtube.com/watch?v=T9LWjpHCW_E&ab_channel=BungFerdly

## Future Work
* Improve performance implementing hooks like useMemo and useReducer to handle the state of the data
* Create and connect to a Cloud Database 
* Add the functionality to perform CRUD operations with products
* Add the functionality to switch the currency which products are priced
* Add functionality to set the app language by location