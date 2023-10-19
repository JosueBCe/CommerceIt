# Overview
.Net 6.0 Web Api with 3 main tables stored in DynamoDB, secured by Auth0 authentication and authorization 


[Software Demo Video](https://youtu.be/50su8QJij48)

# Cloud Database

Tables: 
- Users: List of the users, including the admin and registered clients 
- Products: List of the products with the necessary information to display in the backend and frontend 
- Cart: List of the products added to the cart by the authenticated user and associated with the client id and barcode

# Development Environment
- .Net 6
- C#, JS, HTML, CSS
- RESTful API's
- CORS and policies
- Auth0 authentication and OpenID
- AspNetCore Authentication JwtBearer

# Useful Websites

- [Auth0 Docs](https://auth0.com/docs/quickstart/backend/aspnet-core-webapi)
- [Browser debugging](https://sectigostore.com/blog/how-to-fix-err-ssl-protocol-error/)
- [Authentication Implementation (deprecated but useful for a starting point)](https://github.com/auth0-developer-hub/spa_react_javascript_hello-world/tree/main/src)

# Future Work

- Continue improving the UX/UI in the frontend and mobile
- Perform authorized CRUD operations in the frontend and mobile
- Manage roles and users and grant different access depending on the role. 
