import React, { useState,useEffect } from 'react'
import PageHeader from './../components/PageHeader';

const Salary = () => {
  const[searchText,setSearchText]=useState("");
  const [salary,setSalary]=useState([]);

  useEffect(()=>{
    fetch("salary.json").then(res=>res.json()).then(data=>{
      setSalary(data);
    })
  },[searchText])

  const handleSearch = () => {
    const filtered = salary.filter(
      (job) =>
        job.title.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
    );
    // console.log(filtered);
    setSalary(filtered);
  };

  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
      <PageHeader title="Estimate Salary" path=" / Salary"/>

      <div className='mt-5'>
        <div className='search-box p-2 text-center mb-2'>
          <input type="text" name="search" id="search" className='py-2 pl-3 border focus:outline-none lg:w-6/12 mb-4 w-full' value={searchText} onChange={(e)=>setSearchText(e.target.value) }/>
          <button className='bg-blue text-white font-semibold px-8 py-2 rounded-sm' onClick={handleSearch}>Search</button>
        </div>
      </div>

      {/* Salary Display Card */}
      <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12 my-12 items-center'>
        {
          salary.map((data)=>{
            return(
              <div key={data.id} className='shadow px-4 py-8'>
                <h4 className='font-semibold text-xl'>{data.title}</h4>
                <p className='my-2 font-medium text-blue text-lg'>{data.salary}</p>
                <div className='flex flex-wrap gap-4'>
                  <a href="" className='underline'>{data.status}</a>
                  <a href="" className='underline'>{data.skills}</a>
                </div>
              </div>
            )
          })
        }
      </div>

    </div>
  )
}

export default Salary
















// User
// useEffect(()=>{
//     fetch("salary.json").then(res=>res.json()).then(data=>{
//       setSalary(data);
//     })
//   },[searchText]) explain this
// ChatGPT
// This useEffect hook is responsible for fetching data from a file named "salary.json" when the component is mounted or when the searchText dependency changes.

// Let's break it down step by step:

// useEffect(() => { ... }, [searchText]): This is a useEffect hook that takes a callback function as its first argument and an array of dependencies as its second argument. The useEffect hook will execute the callback function when the component mounts and whenever any of the dependencies in the array change. In this case, the useEffect will execute when the component mounts and whenever the value of searchText changes.
// fetch("salary.json"): This initiates a fetch request to the file named "salary.json" to retrieve data.
// .then(res => res.json()): This part of the code processes the response from the fetch request. It calls the .json() method on the response object, which returns a promise containing the JSON data from the response.
// .then(data => { setSalary(data); }): This part of the code handles the JSON data obtained from the previous step. It takes the JSON data and updates the state using the setSalary function. This will cause a re-render of the component with the newly fetched data.
// So, in summary, this useEffect hook fetches data from "salary.json" when the component mounts or when the searchText dependency changes. Once the data is fetched, it updates the state variable salary with the fetched data, triggering a re-render of the component with the updated data.

// User
// const handleSearch = () => {
//     const filtered = salary.filter(
//       (job) =>
//         job.title.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
//     );
//     // console.log(filtered);
//     setSalary(filtered);
//   }; explain
// ChatGPT
// This handleSearch function is responsible for filtering the salary data based on the searchText input provided by the user.

// Let's break it down step by step:

// const filtered = salary.filter(...);: This line filters the salary array based on a callback function provided to the filter method. The filter method iterates over each element in the salary array and returns a new array containing only the elements for which the callback function returns true.
// (job) => ...: This is the callback function passed to the filter method. It takes each element (job) of the salary array as an argument and performs a comparison to determine whether to include it in the filtered array.
// job.title.toLowerCase().indexOf(searchText.toLowerCase()) !== -1: This part of the callback function performs the actual filtering. It converts both the title of each job object and the searchText input to lowercase using the toLowerCase method to perform a case-insensitive comparison. Then, it checks if the searchText string is found within the title string of the current job object using the indexOf method. If the searchText is found (i.e., the indexOf method returns a value not equal to -1), it means that the job should be included in the filtered array.
// setSalary(filtered);: Once the filtering is done, the filtered array is set as the new state of the salary variable using the setSalary function. This will cause a re-render of the component with the filtered salary data, updating the UI to display only the jobs that match the search criteria.
// In summary, the handleSearch function filters the salary data based on the searchText input provided by the user, updating the UI to display only the jobs that match the search criteria.

// User
// job. from where i am fetching job variable??
// ChatGPT
// Apologies for the confusion. It seems I made an assumption about the data structure based on the variable name salary. From your previous explanation, it appears that the data represents job listings rather than salary information.

// In that case, the job variable would represent each individual job listing object within the salary array. The salary array likely contains multiple job listings, with each job listing having properties such as title, company, location, etc.

// So, when I referred to job.title in the handleSearch function, I was assuming that each job listing object within the salary array had a title property representing the job title. However, if your job listing objects have a different structure, you would need to adjust the property names accordingly.

// For example, if your job listing objects have a jobTitle property instead of title, you would replace job.title with job.jobTitle in the handleSearch function.

// Here's the corrected explanation:

// The handleSearch function filters the salary data based on the searchText input provided by the user, updating the UI to display only the jobs that match the search criteria. It iterates over each job listing object in the salary array, and for each job, it checks if the searchText string is found within the jobTitle property (or whatever property represents the job title in your data). If a job title contains the search text, the job listing is included in the filtered array. Finally, the filtered array is set as the new state of the salary variable, triggering a re-render to display the filtered job listings.

// User
// <PageHeader title="Estimate Salary" path=" / Salary"/> why in component we used title and path??
// ChatGPT
// In the <PageHeader> component, the title and path props are used to customize the content of the header. Here's an explanation of their purposes:

// title: This prop specifies the main title or heading of the page. It helps users quickly understand the purpose or topic of the page they are viewing. In your example, the title "Estimate Salary" indicates that the page is related to estimating salaries.
// path: This prop specifies the path or URL associated with the page. It can be useful for navigation or for providing additional context about the page's location within a website or application. For example, the path "/Salary" could indicate that the page is part of a larger section of the website related to salary information.
// By using these props, the <PageHeader> component can dynamically generate a header that reflects the title of the page and provides a link or path for users to navigate to or understand the location of the page within the website or application.

// User
// but this page url is something else not path url and in UI where will be title visible??
// ChatGPT
// You're correct that the path prop in <PageHeader> may not directly affect the URL of the page. The path prop typically represents the route within the application or website, which is used for navigation purposes.

// As for where the title prop is visible in the UI, it depends on how the <PageHeader> component is implemented and styled in your application. Typically, the title would be displayed prominently at the top of the page, often styled with larger font size or bold text to indicate its importance as the main heading of the page.

// For example, if your <PageHeader> component renders a section at the top of the page with the title inside a <h1> or <h2> element, then the title would be visible to users when they view the page in their browser.

// If you're unsure about how the <PageHeader> component is styled or where it appears in your application, you may need to inspect the code or consult the documentation or styling guidelines provided for your project.

// User
// wht is use of title and path??
// ChatGPT
// The title and path props are typically used in components like <PageHeader> for navigation and user interface (UI) purposes:

// Title: The title prop represents the title or heading of the page or section. It provides a descriptive name for the content being displayed. The title is often displayed prominently at the top of the page to provide context to the user about what they are viewing.
// Path: The path prop represents the route or URL path within the application or website. It specifies the location of the page or section within the application's navigation hierarchy. The path is used for navigation purposes, allowing users to navigate to specific pages or sections within the application.
// By using these props, components like <PageHeader> can dynamically display relevant information and provide navigation links based on the current context of the application. For example, the title might change based on the page being viewed, and the path might determine the destination when the user clicks on the title or navigational link.

// In summary, the title and path props help improve the usability and navigation experience of the application by providing descriptive titles and defining navigation paths for different pages or sections.

// User
//   <input type="text" name="search" id="search" className='py-2 pl-3 border focus:outline-none lg:w-6/12 mb-4 w-full' value={searchText} onChange={(e)=>setSearchText(e.target.value) }/> explain??
// ChatGPT
// This code snippet represents an <input> element commonly used for search functionality in a web application. Here's a breakdown of each part:

// Type Attribute: type="text" specifies that this input field accepts text input.
// Name Attribute: name="search" assigns the name "search" to the input field. This name can be used to reference the input field in JavaScript or when submitting a form.
// ID Attribute: id="search" assigns the ID "search" to the input field. This ID can be used to target the input field for styling or manipulation in JavaScript.
// Class Attribute: className='py-2 pl-3 border focus:outline-none lg:w-6/12 mb-4 w-full' assigns multiple CSS classes to the input field. These classes define the appearance and behavior of the input field. Here's what each class does:
// py-2: Adds padding on the y-axis (top and bottom).
// pl-3: Adds padding on the left side.
// border: Adds a border around the input field.
// focus:outline-none: Removes the outline when the input field is focused.
// lg:w-6/12: Sets the width of the input field to take up 6/12 (or 50%) of the available space on large screens.
// mb-4: Adds margin at the bottom of the input field.
// w-full: Sets the width of the input field to 100% of its container.
// Value Attribute: value={searchText} binds the value of the input field to the state variable searchText. This means that the input field will display the value stored in the searchText state variable, and any changes to the input field will update the searchText state variable.
// onChange Attribute: onChange={(e)=>setSearchText(e.target.value)} specifies a callback function that will be called whenever the value of the input field changes. In this case, it updates the searchText state variable with the new value entered into the input field.
// Overall, this <input> element creates a text input field with search functionality, where users can enter text, and the entered text is stored in the searchText state variable for further processing or filtering of data.

// User
// {
//           salary.map((data)=>{
//             return(
//               <div key={data.id} className='shadow px-4 py-8'>
//                 <h4 className='font-semibold text-xl'>{data.title}</h4>
//                 <p className='my-2 font-medium text-blue text-lg'>{data.salary}</p>
//                 <div className='flex flex-wrap gap-4'>
//                   <a href="" className='underline'>{data.status}</a>
//                   <a href="" className='underline'>{data.skills}</a>
//                 </div>
//               </div>
//             )
//           })
//         } when this function will actually display the value?? and explain the function also
// ChatGPT
// This code snippet is a JavaScript expression that maps over the salary array and generates a list of JSX elements based on the data in the array. Let's break down how it works:

// salary.map(): This method iterates over each element in the salary array and executes a function for each element.
// Function in map():
// It takes a single argument data, which represents each element in the salary array.
// It returns a JSX element for each data item.
// JSX Element Returned:
// <div key={data.id} className='shadow px-4 py-8'>: This creates a <div> element with a unique key prop set to data.id for React to efficiently track each rendered item. It also applies some styling using tailwind CSS classes.
// <h4 className='font-semibold text-xl'>{data.title}</h4>: This creates a heading element <h4> with the job title retrieved from data.title.
// <p className='my-2 font-medium text-blue text-lg'>{data.salary}</p>: This creates a paragraph element <p> displaying the salary retrieved from data.salary.
// <div className='flex flex-wrap gap-4'>: This creates a <div> element with flexbox properties and a gap between child elements.
// <a href="" className='underline'>{data.status}</a>: This creates an anchor <a> element displaying the job status retrieved from data.status. The underline class applies an underline style.
// <a href="" className='underline'>{data.skills}</a>: This creates another anchor <a> element displaying the job skills retrieved from data.skills.
// When Will It Display?
// This JSX expression will display the generated list of elements whenever it is placed within the render function of a React component and that component is rendered.
// Explanation:
// The map() function iterates over each item in the salary array.
// For each item, it creates a <div> element containing job details such as title, salary, status, and skills.
// These elements are then rendered to the DOM, displaying the job information for each item in the salary array.
