# Social Assistance Fund Web Application

This repository contains a simple Vue.js front-end application that interacts with a Spring Boot API to manage social assistance fund applications. It includes features for listing, adding, editing, and approving applicants.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or later)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Spring Boot API](#spring-boot-api) (ensure the API is running on `http://localhost:8080`)

## Installation

### Clone the Repository

```bash
git clone https://github.com/lelambonzo/social-assistance-frontend.git
cd social-assistance-frontend
```

### Install Dependencies

Run the following command to install the necessary dependencies:

```bash
npm install
```

## Configuration

Ensure that the API URL in your Vue.js application is correctly set to the Spring Boot API URL. This should be configured in the Axios requests within the Vue components.

For example, update the Axios URL in `src/components/ApplicantList.vue` and `src/components/ApplicantForm.vue` if necessary:

```js
axios.get('http://localhost:8080/api/applicants')
```

## Running the Application

To start the Vue.js development server, use the following command:

```bash
npm run dev
```

This will start the application on `http://localhost:3000` by default. Open your browser and navigate to this URL to access the application.

## Screenshots

![Alt text](public/ScreenShot B.png?raw=true "Add Applicant")

## Usage

### Pages

- **Home**: View the list of all applicants and manage them (approve, edit, delete).
- **Add Applicant**: Form to add a new applicant.
- **Edit Applicant**: Form to edit an existing applicant.

### API Endpoints

The application interacts with the following API endpoints:

- `GET /api/applicants`: Retrieve all applicants
- `POST /api/applicants`: Add a new applicant
- `PUT /api/applicants/{id}`: Update an existing applicant
- `DELETE /api/applicants/{id}`: Delete an applicant
- `PATCH /api/applicants/{id}/approve`: Approve an applicant

## Troubleshooting

- **CORS Errors**: Ensure your Spring Boot API is configured to allow requests from `http://localhost:3000`. Refer to the [Spring Boot CORS configuration](#cors-configuration) section if you encounter CORS issues.
- **API Not Running**: Verify that your Spring Boot API is up and running on `http://localhost:8080`.

## Contributing

Feel free to submit issues and pull requests to improve the application. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Vue.js](https://vuejs.org/) for the front-end framework.
- [Spring Boot](https://spring.io/projects/spring-boot) for the back-end framework.
