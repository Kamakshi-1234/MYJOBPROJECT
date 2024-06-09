// import React, { useEffect, useState } from 'react'
// import PageHeader from './../components/PageHeader';
// import { useParams } from 'react-router-dom';
// import { FaLocationDot,FaClock,FaDollarSign } from "react-icons/fa6";
// import Swal from 'sweetalert2'

// const JobDetails = () => {
//     const {id}=useParams();
//     const [job,setJob]=useState([])
//     useEffect(()=>{
//         fetch(`${"https://job-portal-backend-a057.onrender.com"}/all-jobs/${id}`).then(res=>res.json()).then(data=>{
//             setJob(data);
//         })
//     },[])

//     const handleApply=async()=>{
//         const { value: url } = await Swal.fire({
//             input: "url",
//             inputLabel: "URL address",
//             inputPlaceholder: "Enter the URL"
//           });
//           if (url) {
//             Swal.fire(`Entered URL: ${url}`);
//           }
//     }

//   return (
//     <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
//         <PageHeader title="Job Details Page " path={` / Single Job`}/>

//         <div>
//             <h4 className='font-bold mt-3'>Job ID: {job._id}</h4>    
//             <h2 className='font-semibold text-blue text-2xl mt-2'>{job.jobTitle} @ {job.companyName}</h2>
//             <h5 className='font-light mt-2'>{job.description}</h5>
//             <div className='flex flex-wrap gap-5 mt-2'>
//             <span className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1  font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10"><FaLocationDot/><pre> </pre>{job.jobLocation}</span>
//             <span className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1  font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10"><FaClock/><pre> </pre>{job.salaryType}</span>
//             <span className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1  font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10"><FaDollarSign/><pre> </pre>${job.minPrice}-{job.maxPrice}K </span>
//             </div>
//             <button className='bg-blue px-8 py-2 text-white mt-6' onClick={handleApply}>Apply Now</button>
//         </div>
//     </div>
//   )
// }

// export default JobDetails





import React, { useState } from 'react';
import ApplicationForm from './ApplicationForm'; // Import the ApplicationForm component

const JobDetails = () => {
  const [showApplicationForm, setShowApplicationForm] = useState(false); // State to track if the application form should be shown

  // Function to handle Apply Now button click
  const handleApplyNowClick = () => {
    setShowApplicationForm(true);
  };

  return (
    <div>
      {/* Application form (conditionally rendered) */}
      {showApplicationForm ? (
        <ApplicationForm />
      ) : (
        <div>
          {/* Job Details content */}
          <h2>Job Title</h2>
          <p>Job description goes here...</p>
          {/* Apply Now button */}
          <button onClick={handleApplyNowClick}>Apply Now</button>
        </div>
      )}
    </div>
  );
};

export default JobDetails;




// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { uploadResume } from '../services/resumeService.jsx'; // You need to implement this service

// const JobDetails = () => {
//   const { id } = useParams();
//   const [resume, setResume] = useState(null);

//   const handleResumeUpload = (event) => {
//     const file = event.target.files[0];
//     setResume(file);
//   };

//   const handleSubmitApplication = () => {
//     // Assuming you have a function to submit the application to the backend
//     // along with resume and other details
//     submitApplication(id, { resume, /* other details */ });
//   };

//   return (
//     <div>
//       <h1>Job Details Page</h1>
//       <input type="file" onChange={handleResumeUpload} />
//       <button onClick={handleSubmitApplication}>Apply Now</button>
//     </div>
//   );
// };

// export default JobDetails;





































// Yes, you're correct. The <PageHeader> component with the prop path={ / Single Job} indicates that the current page is located at the /Single Job route within your application. This typically suggests that the content displayed on this page pertains to details about a single job listing.

// The backticks and ${} syntax are used for string interpolation in JavaScript, allowing dynamic values to be inserted into a string. In this case, the string / Single Job is being inserted into the path prop, indicating the route where this page is located.

// User
// then from which url this code    fetch(`${"https://job-portal-backend-a057.onrender.com"}/all-jobs/${id}`).then(res=>res.json()).then(data=>{   } will fetch the id 
// ChatGPT
// The useParams hook from react-router-dom is being used to extract the id parameter from the URL. The id parameter is typically part of the route path.

// For example, if your route is defined like this:

// jsx
// Copy code
// <Route path="/jobs/:id" component={JobDetails} />
// Then a URL like /jobs/123 would contain the id parameter with a value of 123. The useParams hook allows you to access this parameter in your component. In this case, it's being used to extract the id from the URL path, which is then used in the fetch call to retrieve specific job details from the backend API.

// User
// now when the pop up come enter url which url i need to enter so that it can show me right value
// ChatGPT
// To test the functionality of the handleApply function and see how it reacts to different URLs, you can enter any valid URL when prompted. Since the function is simply displaying the entered URL in a Swal alert, the content of the URL doesn't affect the behavior of the application itself.

// So, you can enter any URL you like, such as https://www.example.com or https://job-portal-backend-a057.onrender.com/all-jobs/123 or any other URL you prefer. The function will display the entered URL in the alert.

// User
// after entering url it is not giving me anything but just show me url in pop up  only
// ChatGPT
// It seems like the current implementation of the handleApply function only displays the entered URL in a popup and doesn't perform any further actions with it. If you want the application to do something specific with the entered URL, you'll need to modify the handleApply function accordingly.

// For example, if you want the application to fetch data from the entered URL and display it, you would need to add logic to fetch the data and handle it appropriately. Here's a basic example of how you might modify the handleApply function to fetch data from the entered URL:

// javascript
// Copy code
// const handleApply = async () => {
//     const { value: url } = await Swal.fire({
//         input: "url",
//         inputLabel: "URL address",
//         inputPlaceholder: "Enter the URL"
//     });

//     if (url) {
//         fetch(url) // Fetch data from the entered URL
//             .then(res => res.json())
//             .then(data => {
//                 // Do something with the fetched data, such as displaying it
//                 console.log(data); // Output the data to the console for now
//             })
//             .catch(error => {
//                 // Handle any errors that occur during the fetch
//                 console.error('Error fetching data:', error);
//             });
//     }
// }
// In this modified version, after the user enters a URL and clicks "OK" in the popup, the application will attempt to fetch data from the entered URL using fetch. If successful, it will log the fetched data to the console. You can then modify this logic to suit your specific requirements, such as displaying the fetched data in the UI.

// User
// again the fucntion not giving anything now??
// ChatGPT
// It seems like there might be an issue with how the fetch request is being made. Let's try a different approach to fetch the data. We can use a try-catch block to handle any errors that might occur during the fetch process. Here's the modified handleApply function:

// javascript
// Copy code
// const handleApply = async () => {
//     const { value: url } = await Swal.fire({
//         input: "url",
//         inputLabel: "URL address",
//         inputPlaceholder: "Enter the URL"
//     });

//     if (url) {
//         try {
//             const response = await fetch(url);
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             const data = await response.json();
//             console.log('Fetched data:', data);
//             // Do something with the fetched data, such as displaying it in the UI
//             // setJob(data); // For example, if you want to update the state with the fetched data
//         } catch (error) {
//             console.error('Error fetching data:', error);
//         }
//     }
// }
// In this version, we're using async/await syntax to make the fetch request and handle the response. If there's an error during the fetch process, it will be caught in the catch block, and an error message will be logged to the console. If the fetch is successful, the fetched data will be logged to the console.

// Make sure to replace the console.log statement with the appropriate logic to handle the fetched data according to your application's requirements.

// User
//    const {id}=useParams();
//     const [job,setJob]=useState([])
//     useEffect(()=>{
//         fetch(`${"https://job-portal-backend-a057.onrender.com"}/all-jobs/${id}`).then(res=>res.json()).then(data=>{
//             setJob(data);
//         })
//     },[])
// explain this line by line
// ChatGPT
// Sure, let's break down the code line by line:

// const {id}=useParams();: This line uses the useParams hook from react-router-dom to extract the id parameter from the URL. This id parameter is typically passed as part of the URL route, allowing dynamic routing.

// const [job,setJob]=useState([]): This line initializes a state variable job using the useState hook. job will hold the data fetched from the API. setJob is a function used to update the job state.

// useEffect(() => { ... }, []): This line invokes the useEffect hook. The callback function inside useEffect will be executed after the component is mounted. The second argument ([]) specifies the dependency array. Since it's an empty array, the effect will only run once after the component mounts.

// fetch(${"https://job-portal-backend-a057.onrender.com"}/all-jobs/${id}`)`: This line makes a GET request to the specified URL, which includes the id parameter extracted from the URL. It fetches the details of a specific job using the provided id.

// .then(res => res.json()): This line converts the HTTP response into JSON format. The json() method returns a promise that resolves with the result of parsing the body text as JSON.

// .then(data => { setJob(data); }): This line sets the state variable job to the fetched data. When the data is successfully retrieved from the API, it updates the job state with the fetched data. This triggers a re-render, and the UI is updated with the fetched job details.

// Overall, this code fetches job details from the API based on the id parameter extracted from the URL and updates the component's state with the fetched data, allowing it to be rendered in the UI.

// User
// fetch(${"https://job-portal-backend-a057.onrender.com"}/all-jobs/${id}`) so basically this function will give the data of url https://job-portal-backend-a057.onrender.com with id whtever we give in url and that data after fetch request is displayed on  UI of specific id right??
// ChatGPT
// Yes, that's correct! The fetch function in the code makes a GET request to the specified URL, which includes the id parameter extracted from the URL route. This URL is constructed by combining the base URL "https://job-portal-backend-a057.onrender.com" with the /all-jobs/${id} path.

// So, when you navigate to a URL like "https://example.com/all-jobs/123", where 123 is the id of the job you want to retrieve, the fetch function sends a request to "https://job-portal-backend-a057.onrender.com/all-jobs/123".

// The data returned by this request will contain the details of the job with the specified id. After fetching the data successfully, it is displayed on the UI based on the job state, which gets updated using setJob(data).

// User
// setJob(data); this is rendering change in UI??
// ChatGPT
// Yes, exactly! The setJob(data) function updates the job state with the data received from the API request. When the state is updated, React re-renders the component, and any parts of the UI that depend on the job state will be updated to reflect the new data. So, setJob(data) triggers a re-render of the component with the updated job details displayed on the UI.

// User
//   const handleApply=async()=>{
//         const { value: url } = await Swal.fire({
//             input: "url",
//             inputLabel: "URL address",
//             inputPlaceholder: "Enter the URL"
//           });
//           if (url) {
//             Swal.fire(`Entered URL: ${url}`);
//           }
//     }  explain this line by line
// ChatGPT
// Sure, let's break down the code line by line:

// const handleApply = async() => {: This declares an asynchronous function named handleApply.

// const { value: url } = await Swal.fire({: This line uses Swal.fire() to create a modal dialog using SweetAlert2. The function returns a promise that resolves with an object containing a value property, which is assigned to the variable url.

// input: "url",: This specifies that the input field type for the modal dialog should be a URL.

// inputLabel: "URL address",: This sets the label for the input field to "URL address".

// inputPlaceholder: "Enter the URL": This sets the placeholder text for the input field to "Enter the URL".

// if (url) {: This checks if the url variable has a truthy value (i.e., if the user entered a URL in the input field).

// Swal.fire(Entered URL: ${url});: If a URL was entered, this line displays a new SweetAlert2 modal dialog with the message "Entered URL: " followed by the URL entered by the user.

// So, in summary, this function opens a modal dialog prompting the user to enter a URL. If the user enters a URL and clicks "OK", another modal dialog is shown displaying the entered URL.

// User
//   <PageHeader title="Job Details Page " path={` / Single Job`}/> I donot get role of this / single Job when i enter url http://localhost:5173/job/:6568ccd388d5d6b135c8ade8 then this will take me to a new page where there is Apply now button but why i  have used this /Single Job
// ChatGPT
// The path prop in the <PageHeader> component likely serves as a breadcrumb or a navigation indication for users. It specifies the path or route that the current page represents within the application.

// In your case, the path is set to "/Single Job", indicating that the current page represents a single job listing within the application. This information could be useful for users to understand their current location within the application's navigation hierarchy.

// For example, if a user navigates to a specific job listing page with the URL http://localhost:5173/job/:6568ccd388d5d6b135c8ade8, the <PageHeader> component might display "Job Details Page" as the title and "Single Job" as the path. This helps users understand that they are viewing the details of a single job listing within the application.

// So, the path prop serves more of a descriptive or navigational purpose within the UI, helping users understand their current location within the application's navigation structure.

// User
// or example, if a user navigates to a specific job listing page with the URL http://localhost:5173/job/:6568ccd388d5d6b135c8ade8, the <PageHeader> component might display "Job Details Page" as the title and "Single Job" as the path. This helps users understand that they are viewing the details of a single job listing within the application. to whom Page Header will display that current url is Single Page
// wht will happen if i not used thi current Url
// ChatGPT
// The path prop in the <PageHeader> component is typically used to indicate the current location or context within the application. It's not directly tied to the current URL in the browser's address bar but rather serves as a descriptive label for the current page or section of the application.

// If you choose not to use the path prop to specify the current context, the <PageHeader> component would still render without this information. However, including descriptive information like "Single Job" in the path prop helps users understand their current location within the application's navigation structure, especially when they navigate deep into the application.

// So, not using the path prop wouldn't break anything in your application, but it could potentially make the UI less informative for users, especially if they rely on breadcrumbs or navigation hints to understand where they are within the application.

