import React from 'react'
import Button from './Button';
import InputField from './../components/InputField';

const Salary = ({handleClick,handleChange}) => {
  return (
    <div>
        <h4 className='text-lg font-medium mb-2'>Salary</h4>
        <div className='mb-4'>
          <Button onClickHandler={handleClick} value="Hourly" title="Hourly" />
          <Button onClickHandler={handleClick} value="Monthly" title="Monthly" />
          <Button onClickHandler={handleClick} value="Yearly" title="Yearly" />
        </div>

        <div>
        <label className='sidebar-label-container'>
                <input type="radio" name="test" id="test" value="" onChange={handleChange}
                />
                <span className='checkmark'></span>All
            </label>

            <InputField handleChange={handleChange} value={30} title="< 30000k" name="test2"/>
            <InputField handleChange={handleChange} value={50} title="< 50000k" name="test2"/>
            <InputField handleChange={handleChange} value={80} title="< 80000k" name="test2"/>
            <InputField handleChange={handleChange} value={100} title="< 100000k" name="test2"/>
        </div>
    </div>
  )
}

export default Salary




























































// Let's break down the provided code line by line:

// javascript
// Copy code
// import React from 'react'
// import Button from './Button';
// import InputField from './../components/InputField';
// This section imports the necessary dependencies for the component: React, Button, and InputField. React is imported to create React components, while Button and InputField are assumed to be custom components used within this component.
// javascript
// Copy code
// const Salary = ({handleClick, handleChange}) => {
// This line defines a functional component named Salary. It takes an object as its argument and extracts the handleClick and handleChange functions from it using object destructuring. These functions are expected to handle click events and changes in input fields, respectively.
// javascript
// Copy code
//   return (
//     <div>
//         <h4 className='text-lg font-medium mb-2'>Salary</h4>
// This section returns JSX, rendering the component's content. It starts with a div element containing a heading (h4) for the salary section.
// javascript
// Copy code
//         <div className='mb-4'>
//           <Button onClickHandler={handleClick} value="" title="Hourly" />
//           <Button onClickHandler={handleClick} value="Monthly" title="Monthly" />
//           <Button onClickHandler={handleClick} value="Yearly" title="Yearly" />
//         </div>
// This renders a div element with a class name for styling purposes. Inside this div, it renders three Button components. Each Button component has an onClickHandler prop set to handleClick, which presumably handles click events, and a value prop representing the salary type. The title prop provides the text displayed on the button.
// javascript
// Copy code
//         <div>
//         <label className='sidebar-label-container'>
//                 <input type="radio" name="test" id="test" value="" onChange={handleChange}
//                 />
//                 <span className='checkmark'></span>All
//             </label>
// This section renders a radio input element with a label. The input element is used for filtering, and the label provides a description. The onChange event is handled by the handleChange function.
// javascript
// Copy code
//             <InputField handleChange={handleChange} value={30} title="< 30000k" name="test2"/>
//             <InputField handleChange={handleChange} value={50} title="< 50000k" name="test2"/>
//             <InputField handleChange={handleChange} value={80} title="< 80000k" name="test2"/>
//             <InputField handleChange={handleChange} value={100} title="< 100000k" name="test2"/>
//         </div>
//     </div>
// This section renders four InputField components, presumably for setting salary ranges. Each InputField component has props including handleChange for handling changes, value representing the salary range, title providing a description, and name for identifying the input field.
// javascript
// Copy code
// export default Salary
// This exports the Salary component as the default export of the module, making it available for use in other parts of the application.
// This component appears to be a UI component for setting and filtering salary ranges. It provides buttons for selecting salary types (hourly, monthly, yearly) and input fields for specifying salary ranges. Additionally, it includes a radio input for selecting all salary ranges.


// 2 / 2

// User
// object destructuring explain object destructing
// ChatGPT
// Object destructuring is a feature in JavaScript that allows you to extract properties from objects and bind them to variables in a concise and convenient way. It provides a shorthand syntax for extracting multiple properties from an object and assigning them to variables.

// Here's a basic example to illustrate object destructuring:

// javascript
// Copy code
// // Object with properties
// const person = {
//   firstName: 'John',
//   lastName: 'Doe',
//   age: 30,
//   city: 'New York'
// };

// // Object destructuring
// const { firstName, lastName, age, city } = person;

// console.log(firstName); // Output: John
// console.log(lastName);  // Output: Doe
// console.log(age);       // Output: 30
// console.log(city);      // Output: New York
// In the example above:

// We have an object person with properties such as firstName, lastName, age, and city.
// Using object destructuring, we extract these properties from the person object and assign them to variables with the same names (firstName, lastName, age, city).
// We can then use these variables directly, as shown in the console.log() statements.
// Object destructuring can also be used with function parameters. For example:

// javascript
// Copy code
// // Function with object parameter
// function greetPerson({ firstName, lastName }) {
//   console.log(`Hello, ${firstName} ${lastName}!`);
// }

// // Object
// const person = {
//   firstName: 'John',
//   lastName: 'Doe'
// };

// // Call the function with object destructuring
// greetPerson(person); // Output: Hello, John Doe!
// In this example:

// The greetPerson function takes an object as a parameter.
// Inside the function, object destructuring is used to extract the firstName and lastName properties from the object parameter directly.
// When calling the function, we pass the person object, and object destructuring automatically extracts the required properties.
// Object destructuring is particularly useful when working with complex objects or when you need to access multiple properties of an object in a concise manner. It helps improve code readability and reduces the need for repetitive object property access.

// User
//        <InputField handleChange={handleChange} value={30} title="< 30000k" name="test2"/> wht is this value 30 here
// ChatGPT
// In the line <InputField handleChange={handleChange} value={30} title="< 30000k" name="test2"/>, the value={30} represents the initial value assigned to the InputField component.

// In a typical scenario, an InputField component might represent an input field where users can enter data. The value prop is used to specify the initial value of that input field.

// So, in this specific case, the initial value of the InputField component is set to 30. This means that when the component is rendered, the input field will initially display the value 30.

// However, it's worth noting that the value 30 doesn't necessarily have a specific meaning without further context. It could represent any kind of data that is appropriate for the InputField component, such as a numeric value, a string, or any other type of data depending on the requirements of the application.

// User
//    <InputField handleChange={handleChange} value={30} title="< 30000k" name="test2"/> will there any differnece in UI if I don't use value = {30}
// ChatGPT
// Yes, there would be a difference in the UI if you don't use the value={30} prop in the <InputField> component.

// When you specify value={30}, you're setting the initial value of the input field to 30. This means that when the component is rendered, the input field will be pre-filled with the value 30. Users can then interact with the input field, such as editing the value or submitting the form containing the input field.

// However, if you don't use the value prop or provide an initial value, the input field will be empty when the component is rendered. Users would need to enter a value manually into the input field themselves.

// So, the difference in UI lies in whether the input field is pre-filled with a default value (30 in this case) or left empty when the component is initially rendered. Depending on your application's requirements, you may choose to pre-fill the input field with a default value or leave it empty for users to input their own values.

// User
// But in UI it is visible like radio button < 30,000k so what is role of 30
// ChatGPT
// I see, I misunderstood your question. In the context of the <InputField> component with title="< 30000k", the value={30} is indeed not directly related to the displayed text < 30000k.

// In this case, the value={30} might be used for internal logic or functionality within the InputField component. It could represent a default or initial value for some aspect of the component's behavior, but it may not directly affect the displayed text or the user interface visible to the user.

// The displayed text < 30000k likely indicates a range or condition related to the input field, such as accepting values less than 30,000k. The value={30} may be used in conjunction with this condition, but it's not directly responsible for the displayed text.

// To better understand the role of value={30}, you would need to examine the implementation of the InputField component or the surrounding code to see how it's utilized within the component's logic. It's possible that it's used for setting initial state, handling form submissions, or other internal purposes.

// User
// value = {30000} i can also use this instead of value = {30} yes or no?
// ChatGPT
// Yes, you can use value={30000} instead of value={30} in the <InputField> component if 30000 is the intended value.

// The value prop is typically used to specify the initial value of an input field. If 30000 is the value that you want to be initially displayed in the input field, then value={30000} would achieve that.

// So, both value={30} and value={30000} are valid, but they represent different initial values for the input field. The choice between them would depend on the specific requirements and context of your application.

// User
// import React from 'react'
// import Button from './Button';
// import InputField from './../components/InputField';

// const Salary = ({handleClick,handleChange}) => {
//   return (
//     <div>
//         <h4 className='text-lg font-medium mb-2'>Salary</h4>
//         <div className='mb-4'>
//           <Button onClickHandler={handleClick} value="" title="Hourly" />
//           <Button onClickHandler={handleClick} value="Monthly" title="Monthly" />
//           <Button onClickHandler={handleClick} value="Yearly" title="Yearly" />
//         </div>

//         <div>
//         <label className='sidebar-label-container'>
//                 <input type="radio" name="test" id="test" value="" onChange={handleChange}
//                 />
//                 <span className='checkmark'></span>All
//             </label>

//             <InputField handleChange={handleChange} value={30} title="< 30000k" name="test2"/>
//             <InputField handleChange={handleChange} value={50} title="< 50000k" name="test2"/>
//             <InputField handleChange={handleChange} value={80} title="< 80000k" name="test2"/>
//             <InputField handleChange={handleChange} value={100} title="< 100000k" name="test2"/>
//         </div>
//     </div>
//   )
// }

// export default Salary This is Salary.jsx function what will this pass to home.jsx file import React, { useEffect, useState } from "react";
// import Banner from "../components/Banner";
// import Card from "./../components/Card";
// import Jobs from "./Jobs";
// import Sidebar from "./../sidebar/Sidebar";
// import Newsletter from './../components/Newsletter';
// const Home = () => {
//   const [query, setQuery] = useState("");
//   const handleInputChange = (e) => {
//     setQuery(e.target.value);
//   };
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [jobs, setJobs] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 6;
//   useEffect(() => {
//     setIsLoading(true);
//     console.log(import.meta.env.VITE_BACKEND_URL+"/all-jobs");
//     fetch(import.meta.env.VITE_BACKEND_URL+"/all-jobs")

//       .then((res) => res.json())
//       .then((data) => {
//         setJobs(data);
//         setIsLoading(false);
//       });
//   }, []);

//   // Filter jobs by title
//   const filteredItems = jobs.filter(
//     (job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1
//   );

//   // Radio Filtering
//   const handleChange = (e) => {
//     setSelectedCategory(e.target.value);
//   };
//   // Button based Filtering
//   const handleClick = (e) => {
//     setSelectedCategory(e.target.value);
//   };

//   // Calculate the indexed range
//   const calculatePageRange = () => {
//     const startIndex = (currentPage - 1) * itemsPerPage;
//     const endIndex = startIndex + itemsPerPage;
//     return { startIndex, endIndex };
//   };

//   // Function for the next page
//   const nextPage = () => {
//     if (currentPage < Math.ceil(filteredItems.length / itemsPerPage)) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   // Function for the previous page
//   const prevPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   // Main function
//   const filteredData = (jobs, selected, query) => {
//     let filteredJobs = jobs;
//     // filter input items
//     if (query) {
//       filteredJobs = filteredItems;
//     }

//     // category filtering
//     if (selected) {
//       filteredJobs = filteredJobs.filter(
//         ({
//           jobLocation,
//           maxPrice,
//           experienceLevel,
//           salaryType,
//           employmentType,
//           postingDate,
//         }) =>
//           jobLocation.toLowerCase() === selected.toLowerCase() ||
//           parseInt(maxPrice) <= parseInt(selected) ||
//           salaryType.toLowerCase() === selected.toLowerCase() || postingDate >=selected ||
//           employmentType.toLowerCase() === selected.toLowerCase() || experienceLevel.toLowerCase()==selected.toLowerCase()
//       );
//     }

//     // Slice the data based on current page
//     const { startIndex, endIndex } = calculatePageRange();
//     filteredJobs = filteredJobs.slice(startIndex, endIndex);

//     return filteredJobs.map((data, i) => <Card data={data} key={i} />);
//   };

//   const result = filteredData(jobs, selectedCategory, query);

//   return (
//     <div>
//       <Banner query={query} handleInputChange={handleInputChange} />

//       {/* Main Content */}

//       <div className="bg-[#FAFAFA] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12">
//         {/* Left side */}
//         <div className="bg-white p-4 rounded">
//           <Sidebar handleChange={handleChange} handleClick={handleClick} />
//         </div>

//         {/* Job cards */}
//         <div className="bg-white p-4 rounded-sm col-span-2">
//           {isLoading ? (
//             <p className="font-medium">Loading...</p>
//           ) : result.length > 0 ? (
//             <Jobs result={result} />
//           ) : (
//             <>
//               <h3 className="text-lg font-bold mb-2">{result.length} Jobs</h3>
//               <p>No data found</p>
//             </>
//           )}

//           {/* Pagination is here! */}
//           {result.length > 0 ? (
//             <div className="flex justify-center mt-4 space-x-4">
//               <button
//                 onClick={prevPage}
//                 className="hover:underline"
//                 disabled={currentPage === 1}
//               >
//                 Previous
//               </button>
//               <span className="mx-2">
//                 Page {currentPage} of{" "}
//                 {Math.ceil(filteredItems.length / itemsPerPage)}
//               </span>
//               <button
//                 onClick={nextPage}
//                 disabled={
//                   currentPage === Math.ceil(filteredItems.length / itemsPerPage)
//                 }
//                 className="hover:underline"
//               >
//                 Next
//               </button>
//             </div>
//           ) : (
//             ""
//           )}
//         </div>

//         {/* Right Side */}
//         <div className="bg-white p-4 rounded"><Newsletter /></div>
//       </div>
//     </div>
//   );
// };

// export default Home;



// just tell me what i ask
// ChatGPT
// In the Salary.jsx file, the Salary component exports a JSX structure that includes UI elements like buttons and input fields. Specifically, it renders a section related to salary, consisting of buttons for selecting different salary options (Hourly, Monthly, Yearly) and input fields for filtering based on salary ranges.

// The InputField components within this structure receive props like handleChange, value, title, and name. These props are likely used for handling user input and passing data to parent components.

// When this Salary component is imported into the Home.jsx file, it will be used as part of the larger UI for the home page. The Salary component will contribute its UI elements related to salary selection and filtering to the overall layout of the home page.

// In summary, the Salary component encapsulates UI elements related to salary selection and filtering, and when used within the Home component, it contributes to the overall UI of the home page.