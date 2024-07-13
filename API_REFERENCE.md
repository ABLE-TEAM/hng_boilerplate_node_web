# HNG Stage 2 Endpoint Definition

## Overview

API endpoints for stage 2 task

## Base URL

- Live URL: `https://example.com/api/v1`
- Staging URL: `https://staging.example.com/api/v1`

## Authentication
### Register

#### Create an account for a new user

- **Endpoint:** `/auth/register`
- **Method:** `POST`
- **Description:** Create an account for a new user

##### Body

```json
{
  "first_name": "Garfield",
  "last_name": "Shenko",
  "email": "garfield.shenko@gmail.com",
  "phone": "1234567890"
}
```
**Success Response:**

- **Code:** '201'
- **Content:**

```json
{
  "status": true,
  "message": "Your account has been created",
  "token": "access-token-here"
}
```

**Error Responses:**

- **Code:** 422
- **Content:**

```json
{
  "status": false,
  "message": "One or more required fields missing"
}
```
- **Code:** 409
- **Content:**

```json
{
  "status": false,
  "message": "Account with the email already exists"
}
```
### Login

#### Log a registered user into the app

- **Endpoint:** `/auth/login`
- **Method:** `POST`
- **Description:** Logs a registered user in

##### Body

```json
{
  "email": "garfield.shenko@gmail.com",
  "phone": "1234567890"
}
```
**Success Response:**

- **Code:** '200'
- **Content:**

```json
{
  "status": true,
  "message": "Login successful",
  "token": "access-token-here"
}
```

**Error Responses:**

- **Code:** 422
- **Content:**

```json
{
  "status": false,
  "message": "One or more required fields missing"
}
```
- **Code:** 401
- **Content:**

```json
{
  "status": false,
  "message": "Invalid credentials provided"
}
```

### Change password

#### Changes password for an authenticated user

- **Endpoint:** `/auth/change-password`
- **Method:** `POST`
- **Description:** Updates a user's password
- **Authorisation:** Required
  - **Type:** Bearer [JWT]
  - **Summary:** This endpoint requires a valid JWT token in the authorisation header


##### Body

```json
{
  "old_password": "12345",
  "new_password": "67890"
}
```
**Success Response:**

- **Code:** '200'
- **Content:**

```json
{
  "status": true,
  "message": "Password changed successfully"
}
```

**Error Responses:**

- **Code:** 422
- **Content:**

```json
{
  "status": false,
  "message": "One or more required fields missing"
}
```
- **Code:** 401
- **Content:**

```json
{
  "status": false,
  "message": "Invalid password provided, please check and try again"
}
```
### Profile

#### Get Profile

- **Endpoint:** `/api/profile`  
- **Method:** `GET`  
- **Description:** Fetch the profile of the authenticated user  

##### Success Response  

- **Code:** 200  
- **Content:**  

```json
{
  "status": true,
  "message": "Profile fetched successfully",
  "profile": {
    "id": "user-id",
    "name": "User Name",
    "email": "User Email",
    "phone": "User Phone Number"
  }
}
```

#### Update Profile    

- **Endpoint:** /api/profile    
- **Method:** PUT  
- **Description:** Update the profile of the authenticated user  

**Body**  

```json
{
  "name": "New User Name",
  "email": "New User Email",
  "phone": "New User Phone Number"
}
```

**Success Response**  

- **Code:** 200  
- **Content:**  

```json
{
  "status": true,
  "message": "Profile updated successfully",
  "profile": {
    "id": "user-id",
    "name": "New User Name",
    "email": "New User Email",
    "phone": "New User Phone Number"
  }
}
```

**Error Responses**  

- **Code:** 422  
- **Content:**  

```json
{
  "status": false,
  "message": "One or more required fields missing"
}
```

- **Code:** 409  
- **Content:**  
JSON

{
  "status": false,
  "message": "Email already in use"
}

#### Delete Profile  

- **Endpoint:** `/api/profile`  
- **Method:** `DELETE`  
- **Description:** Delete the profile of the authenticated user  

##### Success Response  

- **Code:** 200  
- **Content:**  

```json
{
  "status": true,
  "message": "Profile deleted successfully"
}
```

  **Error Response**  

- **Code:** 404  
- **Content:**  

```json  
{
  "status": false,
  "message": "Profile not found"
}
```

- **Code:** 500  
- **Content:**  

```json  
{
  "status": false,
  "message": "Internal server error"
}
```

#### Create Organisation  

- **Endpoint:** /api/organisation  
- **Method:** POST  
- **Description:** Creates a new organisation for a user  

**Request Body**  

- **Content-Type:** application/json  

```json  
{
  "name": "Golf lovers",
  "description": "Association for lovers of golf game"
}
```  
> **Required Fields:** name  

**Success Response**  

- **Code:** 201  
- **Content:**  

```json  
{
  "message": "Organisation created successfully"
}
```  
  **Error Response**  

- **Code:** 422  
- **Content:**  

```json  
{
  "message": "Name is required to create an organisation"
}
```

#### Get All User’s Organisations  

- **Endpoint:** /api/organisation  
- **Method:** GET  
- **Description:** Returns all organisations a user is part of, including both those the user created and others  

**Query Parameters**  

- **creator:** boolean - Returns only organisations a user created if true, only organisations where user is a member if false, all organisations if not specified.  

**Success Response**  

- **Code:** 200  
- **Content:**  

```json  
{
  "message": "Fetched organisation successfully",
  "data": [
    {
      "name": "Impala golden",
      "description": "Resurrecting faith in mankind",
      "creator": false
    }
  ]
}
```

#### Update Organisation Details  

- **Endpoint:** /api/organisation  
- **Method:** PATCH  
- **Description:** Update details of an organisation a user created  

**Request Body**

- **Content-Type:** application/json  

```json  
{
  "name": "New name",
  "description": "New description"
}
```

**Success Response**  

- **Code:** 200  
- **Content:**  

```json  
{
  "message": "Organisation details updated successfully"
}
```

  **Error Response**  

- **Code:** 422  
- **Content:**  

```json  
{
  "message": "Enter fields to update"
}
```

- **Code:** 500  
- **Content:**  

```json  
{
  "message": "Something went wrong, please try again later"
}
```

#### Delete Organisation  

- **Endpoint:** /api/organisation  
- **Method:** DELETE  
- **Description:** User can only delete organisations they created. Note: All organisation details will be lost.  

**Success Response**  

- **Code:** 200  
- **Content:**  

```json  
{
  "message": "Organisation deleted successfully"
}
```

  **Error Response**  

- **Code:** 403  
- **Content:**  

```json 
{
  "message": "User can only delete organisations they created"
}
```

- **Code:** 404  
- **Content:**  

```json  
{
  "message": "Organisation not found"
}
```

- **Code:** 500  
- **Content:**  

```json  
{
  "message": "Something went wrong, please try again later"
}
```

#### Add User to Organisation  

- **Endpoint:** /api/organisation/{org_id}/users  
- **Method:** POST  
- **Description:** A user can only add other users to an organisation they created.  

**Success Response**   

- **Code:** 200  
- **Content:**  

```json  
{
  "message": "User added to organisation successfully"
}
```

  **Error Response**  

- **Code:** 422  
- **Content:**  

```json  
{
  "message": "User_id is required to add user to an organisation"
}
```

- **Code:** 403
- **Content:**

```json  
{
  "message": "You can only add users to organisation you created."
}
```

- **Code:** 404
- **Content:**

```json  
{
  "message": "User not found"
}
```

- **Code:** 409
- **Content:**

```json  
{
  "message": "User is already a member of this organisation"
}
```

#### Remove User from Organisation  

- **Endpoint:** /api/organisation/{org_id}/users  
- **Method:** PATCH  
- **Description:** A user can only remove other users from organisation they created.  

**Success Response**  

- **Code:** 200  
- **Content:**  

```json  
{
  "message": "User removed from organisation successfully"
}
```

  **Error Response**  

- **Code:** 422  
- **Content:**  

```json  
{
  "message": "User_id is required to remove user from an organisation"
}
```

- **Code:** 403  
- **Content:**  

```json  
{
  "message": "You can only remove users from organisation you created."
}
```
  
- **Code:** 404  
- **Content:**  

```json  
{
  "message": "User not found"
}
```

- **Code:** 400  
- **Content:**  

```json  
{
  "message": "User is not a member of this organisation"
}
```
  
#### Get a User in Your Organisation  

- **Endpoint:** /api/users/{id}  
- **Method:** GET  
- **Description:** Returns the profile of the user  
 
**Path Parameters**  

> **id (required):** The user ID to return.  

**Success Response**  

- **Code:** 200  
- **Content:**  

```json  
{
  "message": "Fetched user successfully",
  "data": {
    "first_name": "Impala",
    "last_name": "Golden",
    "phone": "1234567",
    "email": "impala.golden@gmail.com"
  }
}
```

  **Error Response**  

- **Code:** 403  
- **Content:**  

```json  
{
  "message": "You can only get users in organisations you created."
}
```

- **Code:** 404  
- **Content:**  

```json  
{
  "message": "User not found"
}
```

### Get All Subscriptions  

- **Endpoint:** /api/subscription  
- **Method:** GET  
- **Description:** Returns all subscriptions  

**Success Response**  

- **Code:** 200
- **Content:**

```json  
{
  "message": "Fetched subscriptions successfully",
  "data": [
    {
      "name": "Basic",
      "price": 10
    }
  ]
}
```

### Add a New Subscription Plan  

- **Endpoint:** /api/subscription  
- **Method:** POST  
- **Description:** SuperAdmin creates a new subscription plan  

**Request Body**  

- **Content-Type:** application/json  


```json  
{
  "name": "Basic",
  "price": 5
}
```

> **Required Fields:** name, price  

**Success Response**  

- **Code:** 201  
- **Content:**  

```json  
{
  "message": "Plan created successfully"
}
```

  **Error Response**  

- **Code:** 403  
- **Content:**  

```json  
{
  "message": "Only an admin can create a subscription plan."
}
```

- **Code:** 422  
- **Content:**  

```json  
{
  "message": "Name and price are required to create a new plan"
}
```

### Update a Subscription Plan  

- **Endpoint:** /api/subscription/{id}  
- **Method:** PATCH  
- **Description:** Admin updates a plan they have created before  

- **Path Parameters**  

> **id (required):** The subscription plan ID to update.  

**Request Body**  

- **Content-Type:** application/```json  

```json  
{
  "name": "New Plan Name",
  "price": 10
}
```

**Success Response**  

- **Code:** 200  
- **Content:**  

```json  
{
  "message": "Plan updated successfully"
}
```

  **Error Response**  

- **Code:** 422  
- **Content:**  

```json  
{
  "message": "Enter name or price to update plan."
}
```

- **Code:** 403  
- **Content:**  

```json  
{
  "message": "You do not have access to this function."
}
```

- **Code:** 404  
- **Content:**  

```json  
{
  "message": "Subscription plan not found"
}
```

### Delete Subscription Plan  

- **Endpoint:** /api/subscription/{id}  
- **Method:** DELETE  
- **Description:** Deletes subscription plan  

**Path Parameters**  

> **id (required):** The subscription plan ID to delete.  

**Success Response**  

- **Code:** 200  
- **Content:**  

```json  
{
  "message": "Plan deleted successfully"
}
```

  **Error Response**  
- **Code:** 403  
- **Content:**  

```json  
{
  "message": "You do not have access to this function."
}
```

- **Code:** 500  
- **Content:**  

```json  
{
  "message": "Something went wrong, please try again later"
}
```

### Subscribe to a Plan  

- **Endpoint:** /api/subscribe/{plan_id}  
- **Method:** POST  
- **Description:** Users can subscribe to a plan already created by admin  

**Path Parameters**  

> **plan_id (required):** ID of the subscription plan to subscribe to.  

**Success Response**  

- **Code:** 200  
- **Content:**  

```json  
{
  "message": "Subscribed successfully"
}
```

  **Error Response**  

- **Code:** 404  
- **Content:**  

```json  
{
  "message": "Subscription plan not found"
}
```

- **Code:** 500  
- **Content:**  

```json  
{
  "message": "Something went wrong, please try again later"
}
```

#### Get User Notifications  

- **Endpoint:** /api/notifications  
- **Method:** GET  
- **Description:** Returns all notifications for a user  

**Success Response**  

- **Code:** 200  
- **Content:**  

```json  
{
  "message": "Fetched notifications successfully",
  "data": [
    {
      "message": "Your subscription has been renewed",
      "date": "2024-07-13T18:40:33Z"
    }
  ]
}
```     

  