// import React from 'react'
// import Location from './Location';
// import Salary from './Salary';
// import JobPostingData from './JobPostingData';
// import WorkExperience from './WorkExperience';
// import EmploymentType from './EmploymentType';

// const Sidebar = ({handleChange,handleClick}) => {
//   return (
//     <div className='space-y-5'>
//         <h3 className='text-lg font-bold mb-2'>Filters</h3>

//         <Location handleChange={handleChange}/>

//         <Salary handleChange={handleChange} handleClick={handleClick}/>

//         <JobPostingData handleChange={handleChange}/>

//         <WorkExperience handleChange={handleChange}/>

//         <EmploymentType handleChange={handleChange}/>
//     </div>
//   )
// }

// export default Sidebar


import React from 'react';
import Location from './Location';
import Salary from './Salary';
import JobPostingData from './JobPostingData';
import WorkExperience from './WorkExperience';
import EmploymentType from './EmploymentType';

const Sidebar = ({
  handleLocationChange,
  handleSalaryChange,
  handleExperienceChange,
  handleEmploymentTypeChange,
}) => {
  return (
    <div className='space-y-5'>
      <h3 className='text-lg font-bold mb-2'>Filters</h3>

      <Location handleChange={handleLocationChange} />
      <Salary handleChange={handleSalaryChange} />
      <JobPostingData handleChange={handleExperienceChange} />
      <WorkExperience handleChange={handleExperienceChange} />
      <EmploymentType handleChange={handleEmploymentTypeChange} />
    </div>
  );
};

export default Sidebar;
