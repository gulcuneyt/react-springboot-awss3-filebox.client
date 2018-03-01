
## FileBox Demo Client Application

FileBox is a demo application that simulates managing of customers and their any kind of uploaded files. This repository is the client side of the application. The server side project is available on [FileBox Demo Server Application](https://github.com/gulcuneyt/react-springboot-awss3-filebox.server.git) link.

The client application is developed with React.js. The project is generated from [Facebook Create React App Configuration](https://github.com/facebook/create-react-app) template.

I recommend you [Atom](https://atom.io) text editor to run and inspect the code in your local environment. It is developed by Github.

The server side is a spring boot project that enables managing users and files on [Amazon S3 Cloud](https://aws.amazon.com/s3/). REST services for CRUD operations on users and files are implemented.

### Technologies & Frameworks

* React.js
* Axios
* React Dropzone
* React JSX
* Babel
* Yarn


### Run the Application

You need a package manager tool like npm or yarn to run the application. I recommend yarn which is developed by facebook and is easy to use. You can install it from [yarn web site](https://yarnpkg.com/en/docs/install).

You can start the application with the following commands. You should type it in the project folder.

	$ npm start
or

	$ yarn start


### Features of the Application

**1. Create User**
Enter a username and press save. It will create an object in AWS S3 as a folder.

<img src="images/p1.png" width="50%" height="auto">

**2. List Users, Get User Fies, Delete User**

Users are listed in the main page. You can get user files or delete a user from the list. The files added to AWS S3 are stored in the owner user folder.

<img src="images/p2.png"  width="50%" height="auto">

**3.Upload A File**

The uploaded file is put in the owner user folder and the file list is refreshed after adding.

<img src="images/p3.png"  width="50%" height="auto">

**4.Delete or Download File**

The added file can be downloaded or deleted from the file list.

<img src="images/p4.png"  width="50%" height="auto">
