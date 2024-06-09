import React from "react";
import { Link } from "react-router-dom";
import { FiMapPin,FiClock, FiDollarSign, FiCalendar } from 'react-icons/fi';
const Card = ({ data }) => {
  const {_id,
    companyName,
    companyLogo,
    minPrice,
    maxPrice,
    salaryType,
    jobLocation,
    employmentType,
    postingDate,
    description,
    jobTitle,
  } = data;
  return (
    <section className="card">
      <Link to={`/job/${_id}`} className="flex gap-4 flex-col  sm:flex-row items-start">
        <img src={companyLogo} alt="" className="h-20"/>
        <div>
          <h1 className="text-primary mb-1">{companyName}</h1>
          <h3 className="text-lg font-semibold mb-2">{jobTitle}</h3>
          <div className="flex gap-2 text-primary/70 text-base flex-wrap mb-2">
            <span className="flex items-center gap-2"><FiMapPin/> {jobLocation}</span>
            <span className="flex items-center gap-2"><FiClock /> {employmentType}</span>
            <span className="flex items-center gap-2"><FiDollarSign/> {minPrice}-{maxPrice}k</span>
            <span className="flex items-center gap-2"><FiCalendar/> {postingDate}</span>
          </div>
          <p className="text-base text-primary/70">{description}</p>
        </div>
      </Link>
    </section>
  );
};

export default Card;


// <Link>: This is a component provided by React Router for creating hyperlinks to different routes within your application. It prevents the default behavior of an anchor (<a>) tag and allows client-side navigation without a full page reload.
// to={/job/${_id}}': This sets the destination URL for the hyperlink. It uses template literals (${}) to include the _idof the job dynamically in the URL. So, when you click on this link, it will navigate to a route like/job/6568ccd388d5d6b135c8ade8, where 6568ccd388d5d6b135c8ade8is the_id` of the job.
// className="flex gap-4 flex-col sm:flex-row items-start": This sets the CSS classes for styling the hyperlink. It applies Flexbox layout properties to arrange the child elements horizontally on small screens (sm:flex-row) and vertically on larger screens (flex-col). gap-4 adds a gap of 1rem between the child elements, and items-start aligns the child elements at the start of the flex container.
// Overall, this line of code creates a hyperlink that, when clicked, navigates to the job details page corresponding to the _id of the job, with specific styling applied to the layout of the elements within the link.


// In your current implementation, clicking anywhere within the <Link> component, including the image, will navigate to the specified URL. The entire area covered by the <Link> (which wraps around the image and the div containing text) is clickable and will trigger navigation.
// If you want only the image to be clickable and navigate to the link, you need to move the <Link> component inside the image tag



//const Card = ({ data }) => {: Defines a functional React component named Card that takes data as a prop.

//  const {
//   _id,
//   companyName,
//   companyLogo,
//   minPrice,
//   maxPrice,
//   salaryType,
//   jobLocation,
//   employmentType,
//   postingDate,
//   description,
//   jobTitle,
// } = data;


//Destructures the data object to extract specific properties for easier access within the component.

//<Link to={/job/${_id}} ... >: Uses the Link component to create a navigable link to a job detail page using the job's _id.











































































































