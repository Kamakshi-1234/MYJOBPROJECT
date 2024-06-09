import React from 'react'
import InputField from './../components/InputField';

const JobPostingData = ({handleChange}) => {
    const now=new Date();
    const twentyFourHoursAgo=new Date(now-24*60*60*1000);
    const sevenDaysAgo=new Date(now-7*24*60*60*1000);
    const thirtyDaysAgo=new Date(now-30*24*60*60*1000);


    const oneYearAgo = new Date(now.setFullYear(now.getFullYear() - 1));
   

    // Convert dates to string

    // Convert date to string
    const twentyFourHoursAgoDate= twentyFourHoursAgo.toISOString().slice(0,11);
    const sevenDaysAgoDate=sevenDaysAgo.toISOString().slice(0,10);
    const thirtyDaysAgoDate=thirtyDaysAgo.toISOString().slice(0,10);
    const oneYearAgoDate = oneYearAgo.toISOString().slice(0, 10);
    
  return (
    <div>
        <h4 className='text-lg font-mediumb-2'>Date of posting</h4>
        <div>
            <label className='sidebar-label-container'>
                <input type="radio" name="test12" id="test12" value="" onChange={handleChange}
                />
                <span className='checkmark'></span>All time
            </label>

            <InputField handleChange={handleChange} value={twentyFourHoursAgoDate} title="Last 24 hours" name="test12"/>
            <InputField handleChange={handleChange} value={sevenDaysAgoDate} title="Last 7 days" name="test12"/>
            <InputField handleChange={handleChange} value={thirtyDaysAgoDate} title="Last Month" name="test12"/>
            <InputField handleChange={handleChange} value={oneYearAgoDate} title="Last 1 Year" name="test12" />
        </div>
    </div>
  )
}

export default JobPostingData


/*   
Certainly, let's break down each line of the JobPostingData component:

import React from 'react': This imports the React library, which is necessary for creating React components.

import InputField from './../components/InputField';: This imports the InputField component from the specified path. It's assumed that InputField is a custom component used in the project.

const JobPostingData = ({handleChange}) => {: This defines a functional component named JobPostingData. It takes an object as its argument and extracts the handleChange function from it using object destructuring. This function is expected to handle changes in the input fields.

const now=new Date();: This creates a new Date object representing the current date and time.

const twentyFourHoursAgo=new Date(now-24*60*60*1000);: This calculates a date 24 hours ago by subtracting 24 hours (in milliseconds) from the current date.

const sevenDaysAgo=new Date(now-7*24*60*60*1000);: This calculates a date 7 days ago by subtracting 7 days (in milliseconds) from the current date.

const thirtyDaysAgo=new Date(now-30*24*60*60*1000);: This calculates a date 30 days ago by subtracting 30 days (in milliseconds) from the current date.

const twentyFourHoursAgoDate= twentyFourHoursAgo.toISOString().slice(0,10);: This converts the date calculated 24 hours ago to a string in the format YYYY-MM-DD.

const sevenDaysAgoDate=sevenDaysAgo.toISOString().slice(0,10);: This converts the date calculated 7 days ago to a string in the format YYYY-MM-DD.

const thirtyDaysAgoDate=thirtyDaysAgo.toISOString().slice(0,10);: This converts the date calculated 30 days ago to a string in the format YYYY-MM-DD.

<div>: This starts a container div element for the component's content.

<h4 className='text-lg font-mediumb-2'>Date of posting</h4>: This renders a heading indicating the purpose of the component.

<div>: This starts a nested div element.

<label className='sidebar-label-container'>: This starts a label element with a class name for styling purposes.

<input type="radio" name="test12" id="test12" value="" onChange={handleChange} />: This renders a radio input element. When selected, it triggers the handleChange function provided as a prop.

<span className='checkmark'></span>: This renders an empty span element used for styling a custom radio button appearance.

All time: This is the label text for the radio button indicating that the user wants to see job postings from all time periods.

<InputField handleChange={handleChange} value={twentyFourHoursAgoDate} title="Last 24 hours" name="test12"/>: This renders an InputField component with props. It represents an option for filtering job postings from the last 24 hours.

<InputField handleChange={handleChange} value={sevenDaysAgoDate} title="Last 7 days" name="test12"/>: This renders another InputField component representing an option for filtering job postings from the last 7 days.

<InputField handleChange={handleChange} value={thirtyDaysAgoDate} title="Last Month" name="test12"/>: This renders another InputField component representing an option for filtering job postings from the last month.

</div>: This closes the nested div element.

</div>: This closes the container div element for the component's content.

export default JobPostingData: This exports the JobPostingData component as the default export of the module, making it available for use in other parts of the application.

In summary, this component provides options for filtering job postings based on the date of posting, allowing users to select from different time periods such as the last 24 hours, last 7 days, and last month. It uses the handleChange function to handle changes in the radio input fields.

 */