// import React from 'react'
// import InputField from './../components/InputField';

// const EmploymentType = ({handleChange}) => {
//   return (
//     <div>
//         <h4 className='text-lg font-mediumb-2'>Type of employment</h4>
//         <div>
//             <label className='sidebar-label-container'>
//                 <input type="radio" name="test" id="test" value="" onChange={handleChange}
//                 />
//                 <span className='checkmark'></span>Any
//             </label>

//             <InputField handleChange={handleChange} value="Full-time" title="Full-time" name="test"/>
//             <InputField handleChange={handleChange} value="Temporary" title="Temporary" name="test"/>
//             <InputField handleChange={handleChange} value="Part-time" title="Part-time" name="test"/>
//         </div>
//     </div>
//   )
// }

// export default EmploymentType



import React from 'react';
import InputField from './../components/InputField';

const EmploymentType = ({ handleChange }) => {
  return (
    <div>
      <h4 className='text-lg font-medium mb-2'>Type of Employment</h4>
      <div>
        <label className='sidebar-label-container'>
          <input type="radio" name="employmentType" value="" onChange={handleChange} />
          <span className='checkmark'></span>Any
        </label>
        <InputField handleChange={handleChange} value="Full-time" title="Full-time" name="employmentType" />
        <InputField handleChange={handleChange} value="Temporary" title="Temporary" name="employmentType" />
        <InputField handleChange={handleChange} value="Part-time" title="Part-time" name="employmentType" />
      </div>
    </div>
  );
};

export default EmploymentType;


// User
// it means value at the backend to distinguish b/w users right and name for grouping
// ChatGPT
// Exactly. Here's a clearer breakdown:

// Value: The value attribute is what distinguishes one option from another within the same group. When the form is submitted, the server receives the value of the selected radio button. It's crucial for differentiating between various options.

// Name: The name attribute groups together related radio buttons. All radio buttons with the same name attribute belong to the same group. This ensures that only one option within the group can be selected at any given time. When one radio button in the group is selected, all others are automatically deselected. This grouping mechanism is essential for defining the scope of selection and ensuring mutual exclusivity among options.





// Certainly! Let's break down the EmploymentType component line by line:

// jsx
// Copy code
// import React from 'react'
// import InputField from './../components/InputField';
// Imports:
// This imports the React library and the InputField component from the ./../components/InputField file.
// jsx
// Copy code
// const EmploymentType = ({handleChange}) => {
// Function Component Declaration:
// Defines a functional component named EmploymentType. It takes a prop named handleChange.
// jsx
// Copy code
//   return (
//     <div>
// JSX Structure:
// Begins the JSX structure by opening a <div> element.
// jsx
// Copy code
//         <h4 className='text-lg font-mediumb-2'>Type of employment</h4>
// Heading:
// Renders a heading "Type of employment" using an <h4> element with specific CSS classes for styling.
// jsx
// Copy code
//         <div>
// Nested <div>:
// Opens another <div> element to contain the radio buttons and input fields.
// jsx
// Copy code
//             <label className='sidebar-label-container'>
//                 <input type="radio" name="test" id="test" value="" onChange={handleChange}
//                 />
//                 <span className='checkmark'></span>Any
//             </label>
// Radio Buttons:
// Creates a radio button input labeled "Any".
// When selected, it triggers the handleChange function passed as a prop.
// jsx
// Copy code
//             <InputField handleChange={handleChange} value="Full-time" title="Full-time" name="test"/>
//             <InputField handleChange={handleChange} value="Temporary" title="Temporary" name="test"/>
//             <InputField handleChange={handleChange} value="Part-time" title="Part-time" name="test"/>
// InputField Components:
// Renders three instances of the InputField component:
// One for "Full-time" employment.
// One for "Temporary" employment.
// One for "Part-time" employment.
// Each input field has a corresponding value and title, and onChange event handler.
// jsx
// Copy code
//         </div>
//     </div>
//   )
// Closing Tags:
// Closes the nested <div> and the outermost <div> wrapping the component's content.
// Ends the component definition.
// jsx
// Copy code
// export default EmploymentType
// Export Statement:
// Exports the EmploymentType component, making it available for use in other parts of the application.













































































































































