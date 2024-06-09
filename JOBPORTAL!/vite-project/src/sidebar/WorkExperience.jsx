// import React from 'react'
// import InputField from './../components/InputField';

// const WorkExperience = ({handleChange}) => {
//   return (
//     <div>
//         <h4 className='text-lg font-mediumb-2'>Work Experience</h4>
//         <div>
//             <label className='sidebar-label-container'>
//                 <input type="radio" name="test" id="test" value="" onChange={handleChange}
//                 />
//                 <span className='checkmark'></span>Any Experience
//             </label>

//             <InputField handleChange={handleChange} value="internship" title="Internship" name="test"/>
//             <InputField handleChange={handleChange} value="work remotely" title="Work remotely" name="test"/>

//         </div>
//     </div>
//   )
// }

// export default WorkExperience



import React from 'react';
import InputField from './../components/InputField';

const WorkExperience = ({ handleChange }) => {
  return (
    <div>
      <h4 className='text-lg font-medium mb-2'>Work Experience</h4>
      <div>
        <label className='sidebar-label-container'>
          <input type="radio" name="experience" value="" onChange={handleChange} />
          <span className='checkmark'></span>Any Experience
        </label>
        <InputField handleChange={handleChange} value="internship" title="Internship" name="experience" />
        <InputField handleChange={handleChange} value="work remotely" title="Work remotely" name="experience" />
      </div>
    </div>
  );
};

export default WorkExperience;





// Sure, let's break down the WorkExperience component line by line:

// jsx
// Copy code
// import React from 'react'
// import InputField from './../components/InputField';
// Import statements:
// Importing the necessary modules, React from 'react' and InputField from '../components/InputField'. This allows you to use React and the InputField component within this file.
// jsx
// Copy code
// const WorkExperience = ({handleChange}) => {
// Function component declaration:
// Declares a functional component named WorkExperience. It accepts props, with handleChange being one of the props passed to it.
// jsx
// Copy code
//   return (
//     <div>
// JSX structure begins:
// Opens a <div> element to wrap the content of the component.
// jsx
// Copy code
//         <h4 className='text-lg font-mediumb-2'>Work Experience</h4>
// Heading:
// Displays a heading "Work Experience" using an <h4> element with specific styling classes.
// jsx
// Copy code
//         <div>
// Opening a nested <div>:
// Opens another <div> to contain the radio buttons and input fields.
// jsx
// Copy code
//             <label className='sidebar-label-container'>
//                 <input type="radio" name="test" id="test" value="" onChange={handleChange}
//                 />
//                 <span className='checkmark'></span>Any Experience
//             </label>
// Radio button for "Any Experience":
// Creates a radio button input with a label "Any Experience".
// When selected, it triggers the handleChange function passed as a prop.
// jsx
// Copy code
//             <InputField handleChange={handleChange} value="internship" title="Internship" name="test"/>
//             <InputField handleChange={handleChange} value="work remotely" title="Work remotely" name="test"/>
// InputField components:
// Renders two instances of the InputField component:
// One for "Internship" with a value of "internship".
// Another for "Work remotely" with a value of "work remotely".
// These components allow users to input data related to work experience and trigger the handleChange function when the input changes.
// jsx
// Copy code
//         </div>
//     </div>
//   )
// Closing tags:
// Closes the nested <div> and the outermost <div> wrapping the component's content.
// Ends the component definition.
// jsx
// Copy code
// export default WorkExperience
// Export statement:
// Exports the WorkExperience component, making it available for import and use in other parts of the application.
































