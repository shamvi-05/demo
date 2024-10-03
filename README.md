# API Chaining Dashboard

This project demonstrates complex API interactions using API chaining in a responsive web application. The app allows users to fetch a list of users, create posts for a selected user, and fetch comments for a post, all through chained API calls. The app is built using **React.js** and **Tailwind CSS**.

## User Interface 


<details>
  <summary> Video </summary>
 

https://github.com/user-attachments/assets/579c332f-b608-45d3-9024-5e64a931e602



  </details>
<details>
<summary> Screenshot-1 </summary>
  
<img width="1435" alt="Screenshot 2024-10-03 at 7 39 33 PM" src="https://github.com/user-attachments/assets/11cf84e5-c236-4df3-b89d-19ffc0fb0f7f">
</details>
<details>
<summary> UI Responsive</summary>
<img width="1137" alt="Screenshot 2024-10-03 at 7 46 36 PM" src="https://github.com/user-attachments/assets/deccde41-ac96-4ce9-a56a-ddc5815ce8a0">


</details>

## Features

- **API Chaining**: Chain multiple API requests together.
  - Fetch a list of users.
  - Create a new post for a selected user.
  - Fetch comments for a specific post.
  
- **Responsive Design**: Fully responsive layout styled with Tailwind CSS.
  
- **Loading and Error Handling**: Handle loading states and display error messages when API calls fail.

## Setup Instructions

### Prerequisites

- Node.js (>=14.x)
- NPM 

### Steps to Run the Application

1. **Clone the repository**:
   ```bash
   git clone <repository-url>

2. **Navigate to the project directory**:
   ```bash
   cd demo

3. **Install Axios:**:
   ```bash
   npm install axios

4. **Setup Tailwind:**:
  

### Approach

This project was developed to demonstrate API chaining, where the response from one API call is used as an input for the next API request. Below is a step-by-step explanation of how the API chaining is implemented:

#### Fetching Users:

 - A GET request is made to https://jsonplaceholder.typicode.com/users to fetch a list of users.
 - Users are displayed in a dropdown menu for selection.
 - Creating a Post:After selecting a user, a form allows the creation of a new post by providing a title and body.
 - A POST request is made to https://jsonplaceholder.typicode.com/posts with the post data and the selected user's ID.
 - The response from the POST request is saved to display the created post.
 - Fetching Comments: A button is provided to fetch comments for a created post.
 - A GET request is made to https://jsonplaceholder.typicode.com/comments?postId={postId}, where {postId} is the ID of the created post.The response displays a list of comments for the post.
- State Management:React's useState hook is used to manage states for users, posts, comments, loading states, and error messages.
- Error Handling: Error states are managed with useState to display messages if an API request fails.
- Loading States:Visual loading indicators are shown when data is being fetched from the API.

 #### Assumptions and Decisions
 - Mock APIs: This app uses the mock API service provided by jsonplaceholder.typicode.com. These APIs are suitable for prototyping, but in a real-world application, production-level APIs would be used.

- Basic Error Handling: Basic error messages are displayed in case of request failures.

- Form Simplicity: The form for creating posts doesn't include advanced validations (like ensuring fields are not empty) but could be extended for better user experience.

#### Completed Features
- Fetching a list of users via a GET request.
- Creating a new post for a selected user via a POST request.
- Fetching comments for a created post via a GET request with the post ID.
- Proper state management using React hooks (useState).
- Loading and error states to improve user experience.
- Clean and responsive design using Tailwind CSS.

  
#### Known Issues
- The comments can only be fetched for the most recently created post, as the current implementation only supports a single post's comment retrieval.

- No form validation is implemented for the post creation form, which means empty fields can be submitted.

#### Future Improvements
- Input Validation: Implement validation to ensure that posts cannot be created with empty fields.

- Caching: Implement caching to reduce redundant API calls for the same data.

- Enhanced Error Handling: Add more detailed error handling for different error scenarios, such as network issues or invalid data.



