// import React, { useState, useEffect } from 'react';
// import { useForm } from "react-hook-form";
// import { useLoaderData, useParams } from 'react-router-dom';
// import CreatableSelect from 'react-select/creatable';

// const UpdateJob = () => {
//     const { id } = useParams();
//     const jobData = useLoaderData();
//     const {
//       _id,
//       jobTitle,
//       companyName,
//       minPrice,
//       maxPrice,
//       salaryType,
//       jobLocation,
//       postingDate,
//       experienceLevel,
//       companyLogo,
//       employmentType,
//       description,
//       postedBy,
//       skills
//     } = jobData;

//     const [selectedOption, setSelectedOption] = useState(skills);
//     const { register, reset, handleSubmit, formState: { errors } } = useForm();

//     useEffect(() => {
//         reset({
//           jobTitle,
//           companyName,
//           minPrice,
//           maxPrice,
//           salaryType,
//           jobLocation,
//           postingDate,
//           experienceLevel,
//           companyLogo,
//           employmentType,
//           description,
//           postedBy
//         });
//     }, [jobData, reset]);

//     const onSubmit = (data) => {
//       data.skills = selectedOption.map(option => option.value);

//       fetch(`https://job-portal-backend-a057.onrender.com/job/${id}`, {
//         method: "PATCH",
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data)
//       })
//         .then((res) => res.json())
//         .then((result) => {
//           if (result.acknowledged) {
//             alert("Job Updated Successfully!");
//             reset();
//           } else {
//             alert("Error updating job.");
//           }
//         })
//         .catch((error) => {
//           console.error('Error updating job:', error);
//         });
//     };

//     const options = [
//       { value: "JavaScript", label: "JavaScript" },
//       { value: "HTML", label: "HTML" },
//       { value: "CSS", label: "CSS" },
//       { value: "React", label: "React" },
//       { value: "MongoDB", label: "MongoDB" },
//     ];

//     return (
//       <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
//         <div className="bg-[#FAFAFA] py-10 px-4 lg:px-16">
//           <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
//             {/* Form fields with defaultValue and register */}
//             <div className="create-job-flex">
//               <div className="lg:w-1/2 w-full ">
//                 <label className="block mb-2 text-lg">Job Title</label>
//                 <input
//                   type="text"
//                   defaultValue={jobTitle}
//                   {...register("jobTitle")}
//                   className="create-job-input"
//                 />
//               </div>
//               <div className="lg:w-1/2 w-full ">
//                 <label className="block mb-2 text-lg">Company name</label>
//                 <input
//                   type="text"
//                   placeholder="Ex: Microsoft"
//                   defaultValue={companyName}
//                   {...register("companyName")}
//                   className="create-job-input"
//                 />
//               </div>
//             </div>

//             <div className="create-job-flex">
//               <div className="lg:w-1/2 w-full ">
//                 <label className="block mb-2 text-lg">Minimum Salary</label>
//                 <input
//                   type="text"
//                   placeholder="$20k"
//                   defaultValue={minPrice}
//                   {...register("minPrice")}
//                   className="create-job-input"
//                 />
//               </div>
//               <div className="lg:w-1/2 w-full ">
//                 <label className="block mb-2 text-lg">Maximum Salary</label>
//                 <input
//                   type="text"
//                   placeholder="$120k"
//                   defaultValue={maxPrice}
//                   {...register("maxPrice")}
//                   className="create-job-input"
//                 />
//               </div>
//             </div>

//             <div className="create-job-flex">
//               <div className="lg:w-1/2 w-full ">
//                 <label className="block mb-2 text-lg">Salary Type</label>
//                 <select {...register("salaryType")} className="create-job-input">
//                   <option value={salaryType}>{salaryType}</option>
//                   <option value="Hourly">Hourly</option>
//                   <option value="Monthly">Monthly</option>
//                   <option value="Yearly">Yearly</option>
//                 </select>
//               </div>
//               <div className="lg:w-1/2 w-full ">
//                 <label className="block mb-2 text-lg">Job Location</label>
//                 <input
//                   type="text"
//                   placeholder="Ex: New York"
//                   defaultValue={jobLocation}
//                   {...register("jobLocation")}
//                   className="create-job-input"
//                 />
//               </div>
//             </div>

//             <div className="create-job-flex">
//               <div className="lg:w-1/2 w-full ">
//                 <label className="block mb-2 text-lg">Job Posting Date</label>
//                 <input
//                   type="date"
//                   defaultValue={postingDate}
//                   {...register("postingDate")}
//                   className="create-job-input"
//                 />
//               </div>
//               <div className="lg:w-1/2 w-full ">
//                 <label className="block mb-2 text-lg">Experience Level</label>
//                 <select {...register("experienceLevel")} className="create-job-input">
//                   <option value={experienceLevel}>{experienceLevel}</option>
//                   <option value="NoExperience">No Experience</option>
//                   <option value="Internship">Internship</option>
//                   <option value="Work Remotely">Work Remotely</option>
//                 </select>
//               </div>
//             </div>

//             <div>
//               <label className="block mb-2 text-lg">Required Skill Sets:</label>
//               <CreatableSelect
//                 className="create-job-input py-4"
//                 defaultValue={skills.map(skill => ({ value: skill, label: skill }))}
//                 onChange={setSelectedOption}
//                 options={options}
//                 isMulti
//               />
//             </div>

//             <div className="create-job-flex">
//               <div className="lg:w-1/2 w-full ">
//                 <label className="block mb-2 text-lg">Company Logo </label>
//                 <input
//                   type="url"
//                   placeholder="Paste your company logo URL: https://weshare.com/img1.png"
//                   defaultValue={companyLogo}
//                   {...register("companyLogo")}
//                   className="create-job-input"
//                 />
//               </div>
//               <div className="lg:w-1/2 w-full ">
//                 <label className="block mb-2 text-lg">Employment Type</label>
//                 <select {...register("employmentType")} className="create-job-input">
//                   <option value={employmentType}>{employmentType}</option>
//                   <option value="Full-time">Full-time</option>
//                   <option value="Part-time">Part-time</option>
//                   <option value="Temporary">Temporary</option>
//                 </select>
//               </div>
//             </div>

//             <div className="w-full">
//               <label className="block mb-2 text-lg">Job Description</label>
//               <textarea
//                 className="w-full pl-3 py-1.5 focus:outline-none placeholder:text-gray-600"
//                 rows={6}
//                 defaultValue={description}
//                 placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
//                 {...register("description")}
//               />
//             </div>

//             <div>
//               <label className="block mb-2 text-lg">Job Posted By</label>
//               <input
//                 type="email"
//                 defaultValue={postedBy}
//                 placeholder="Enter your email"
//                 {...register("postedBy")}
//                 className="create-job-input"
//               />
//             </div>
//             <input
//               type="submit"
//               className="block mt-12 bg-blue text-white font-semibold px-8 py-2 rounded-sm cursor-pointer"
//             />
//           </form>
//         </div>
//       </div>
//     );
// };

// export default UpdateJob;

import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useLoaderData, useParams } from 'react-router-dom';
import CreatableSelect from 'react-select/creatable';

const UpdateJob = () => {
  const { id } = useParams();
  const jobData = useLoaderData();
  const {
    jobTitle,
    companyName,
    minPrice,
    maxPrice,
    salaryType,
    jobLocation,
    postingDate,
    experienceLevel,
    companyLogo,
    employmentType,
    description,
    postedBy,
    skills
  } = jobData;

  const [selectedOption, setSelectedOption] = useState(skills.map(skill => ({ value: skill, label: skill })));
  const { register, reset, handleSubmit } = useForm();

  useEffect(() => {
    reset({
      jobTitle,
      companyName,
      minPrice,
      maxPrice,
      salaryType,
      jobLocation,
      postingDate,
      experienceLevel,
      companyLogo,
      employmentType,
      description,
      postedBy
    });
  }, [jobData, reset]);

  const onSubmit = (data) => {
    data.skills = selectedOption.map(option => option.value);

    fetch(`https://job-portal-backend-a057.onrender.com/job/${id}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.acknowledged) {
          alert("Job Updated Successfully!");
          reset();
        } else {
          alert("Error updating job.");
        }
      })
      .catch((error) => {
        console.error('Error updating job:', error);
      });
  };

  const options = [
    { value: "JavaScript", label: "JavaScript" },
    { value: "HTML", label: "HTML" },
    { value: "CSS", label: "CSS" },
    { value: "React", label: "React" },
    { value: "MongoDB", label: "MongoDB" },
  ];

  const handleChange = (selectedOptions) => {
    setSelectedOption(selectedOptions);
  };

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      <div className="bg-[#FAFAFA] py-10 px-4 lg:px-16">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full ">
              <label className="block mb-2 text-lg">Job Title</label>
              <input
                type="text"
                defaultValue={jobTitle}
                {...register("jobTitle")}
                className="create-job-input"
              />
            </div>
            <div className="lg:w-1/2 w-full ">
              <label className="block mb-2 text-lg">Company name</label>
              <input
                type="text"
                placeholder="Ex: Microsoft"
                defaultValue={companyName}
                {...register("companyName")}
                className="create-job-input"
              />
            </div>
          </div>

          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full ">
              <label className="block mb-2 text-lg">Minimum Salary</label>
              <input
                type="text"
                placeholder="$20k"
                defaultValue={minPrice}
                {...register("minPrice")}
                className="create-job-input"
              />
            </div>
            <div className="lg:w-1/2 w-full ">
              <label className="block mb-2 text-lg">Maximum Salary</label>
              <input
                type="text"
                placeholder="$120k"
                defaultValue={maxPrice}
                {...register("maxPrice")}
                className="create-job-input"
              />
            </div>
          </div>

          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full ">
              <label className="block mb-2 text-lg">Salary Type</label>
              <select {...register("salaryType")} className="create-job-input">
                <option value={salaryType}>{salaryType}</option>
                <option value="Hourly">Hourly</option>
                <option value="Monthly">Monthly</option>
                <option value="Yearly">Yearly</option>
              </select>
            </div>
            <div className="lg:w-1/2 w-full ">
              <label className="block mb-2 text-lg">Job Location</label>
              <input
                type="text"
                placeholder="Ex: New York"
                defaultValue={jobLocation}
                {...register("jobLocation")}
                className="create-job-input"
              />
            </div>
          </div>

          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full ">
              <label className="block mb-2 text-lg">Job Posting Date</label>
              <input
                type="date"
                defaultValue={postingDate}
                {...register("postingDate")}
                className="create-job-input"
              />
            </div>
            <div className="lg:w-1/2 w-full ">
              <label className="block mb-2 text-lg">Experience Level</label>
              <select {...register("experienceLevel")} className="create-job-input">
                <option value={experienceLevel}>{experienceLevel}</option>
                <option value="NoExperience">No Experience</option>
                <option value="Internship">Internship</option>
                <option value="Work Remotely">Work Remotely</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block mb-2 text-lg">Required Skill Sets:</label>
            <CreatableSelect
              className="create-job-input py-4"
              defaultValue={skills.map(skill => ({ value: skill, label: skill }))}
              onChange={handleChange}
              options={options}
              isMulti
            />
          </div>

          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full ">
              <label className="block mb-2 text-lg">Company Logo </label>
              <input
                type="url"
                placeholder="Paste your company logo URL: https://weshare.com/img1.png"
                defaultValue={companyLogo}
                {...register("companyLogo")}
                className="create-job-input"
              />
            </div>
            <div className="lg:w-1/2 w-full ">
              <label className="block mb-2 text-lg">Employment Type</label>
              <select {...register("employmentType")} className="create-job-input">
                <option value={employmentType}>{employmentType}</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Temporary">Temporary</option>
              </select>
            </div>
          </div>

          <div className="w-full">
            <label className="block mb-2 text-lg">Job Description</label>
            <textarea
              className="w-full pl-3 py-1.5 focus:outline-none placeholder:text-gray-600"
              rows={6}
              defaultValue={description}
              placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
              {...register("description")}
            />
          </div>

          <div>
            <label className="block mb-2 text-lg">Job Posted By</label>
            <input
              type="email"
              defaultValue={postedBy}
              placeholder="Enter your email"
              {...register("postedBy")}
              className="create-job-input"
            />
          </div>
          <input
            type="submit"
            className="block mt-12 bg-blue text-white font-semibold px-8 py-2 rounded-sm cursor-pointer"
            value="Update Job"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateJob;
