// import React, { useEffect, useState } from "react";
// import { Link } from 'react-router-dom';

// const MyJobs = () => {
//   const [jobs, setJobs] = useState([]);
//   const [filteredJobs, setFilteredJobs] = useState([]);
//   const [searchText, setSearchText] = useState("");
//   const [isLoading, setIsLoading] = useState(true);

//   const [currPage, setCurrPage] = useState(1);
//   const itemsPerPage = 4;

//   useEffect(() => {
//     setIsLoading(true);
//     fetch(`https://job-portal-backend-a057.onrender.com/all-jobs`)
//       .then(res => {
//         if (!res.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return res.json();
//       })
//       .then(data => {
//         setJobs(data);
//         setFilteredJobs(data);
//         setIsLoading(false);
//       })
//       .catch(error => {
//         console.error('Fetch error:', error);
//         setIsLoading(false);
//       });
//   }, []);

//   const indexOfLastItem = currPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currJobs = filteredJobs.slice(indexOfFirstItem, indexOfLastItem);

//   const nextPage = () => {
//     if (indexOfLastItem < filteredJobs.length) {
//       setCurrPage(currPage + 1);
//     }
//   };

//   const prevPage = () => {
//     if (currPage > 1) {
//       setCurrPage(currPage - 1);
//     }
//   };

//   const handleSearch = () => {
//     const filtered = jobs.filter(
//       (job) =>
//         job.jobTitle.toLowerCase().includes(searchText.toLowerCase())
//     );
//     setFilteredJobs(filtered);
//     setCurrPage(1);
//   };

//   const handleDelete = (id) => {
//     fetch(`http://localhost:5173/job/${id}`, {
//       method: "DELETE",
//     })
//       .then(res => {
//         if (!res.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return res.json();
//       })
//       .then(data => {
//         if (data.acknowledged) {
//           alert("Job Deleted Successfully!!!");
//           const updatedJobs = jobs.filter(job => job._id !== id);
//           setJobs(updatedJobs);
//           setFilteredJobs(updatedJobs);
//         }
//       })
//       .catch(error => {
//         console.error('Delete error:', error);
//       });
//   };

//   return (
//     <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
//       <div className="my-jobs-container">
//         <h1 className="text-center p-4">All Posted Jobs</h1>
//         <div className="search-box p-2 text-center mb-2">
//           <input
//             type="text"
//             name="search"
//             id="search"
//             className="py-2 pl-3 border focus:outline-none lg:w-6/12 mb-4 w-full"
//             value={searchText}
//             onChange={(e) => setSearchText(e.target.value)}
//           />
//           <button
//             className="bg-blue text-white font-semibold px-8 py-2 rounded-sm mb-4"
//             onClick={handleSearch}
//           >
//             Search
//           </button>
//         </div>
//       </div>

//       <section className="py-1 bg-blueGray-50">
//         <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-5">
//           <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
//             <div className="rounded-t mb-0 px-4 py-3 border-0">
//               <div className="flex flex-wrap items-center">
//                 <div className="relative w-full px-4 max-w-full flex-grow flex-1">
//                   <h3 className="font-semibold text-base text-blueGray-700">
//                     All Jobs ({filteredJobs.length})
//                   </h3>
//                 </div>
//                 <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
//                   <Link
//                     to="/post-job"
//                     className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
//                     type="button"
//                   >
//                     Post A New Job
//                   </Link>
//                 </div>
//               </div>
//             </div>

//             <div className="block w-full overflow-x-auto">
//               <table className="items-center bg-transparent w-full border-collapse">
//                 <thead>
//                   <tr>
//                     <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
//                       S.No.
//                     </th>
//                     <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
//                       Title
//                     </th>
//                     <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
//                       Company Name
//                     </th>
//                     <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
//                       Salary
//                     </th>
//                     <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
//                       Edit
//                     </th>
//                     <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
//                       Delete
//                     </th>
//                   </tr>
//                 </thead>
//                 {isLoading ? (
//                   <tbody>
//                     <tr>
//                       <td colSpan="6" className="text-center py-4">Loading...</td>
//                     </tr>
//                   </tbody>
//                 ) : (
//                   <tbody>
//                     {currJobs.map((job, index) => (
//                       <tr key={job._id}>
//                         <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
//                           {indexOfFirstItem + index + 1}
//                         </td>
//                         <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
//                           {job.jobTitle}
//                         </td>
//                         <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
//                           {job.companyName}
//                         </td>
//                         <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
//                           ${job.minPrice}-{job.maxPrice}
//                         </td>
//                         <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
//                           <Link to={`/edit-job/${job._id}`} className="text-blue-500">Edit</Link>
//                         </td>
//                         <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
//                           <button
//                             className="bg-red-700 py-2 px-6 text-white rounded-sm"
//                             onClick={() => handleDelete(job._id)}
//                           >
//                             Delete
//                           </button>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 )}
//               </table>
//             </div>
//           </div>
//         </div>

//         {/* Pagination */}
//         <div className="flex justify-center text-black space-x-8">
//           {currPage > 1 && <button className="hover:underline" onClick={prevPage}>Previous</button>}
//           {indexOfLastItem < filteredJobs.length && <button className="hover:underline" onClick={nextPage}>Next</button>}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default MyJobs;



import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

const MyJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const [currPage, setCurrPage] = useState(1);
  const itemsPerPage = 4;

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://job-portal-backend-a057.onrender.com/all-jobs`)
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        setIsLoading(false);
      });
  }, [searchText]);

  // pagination
  const indexOfLastItem = currPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currJobs = jobs.slice(indexOfFirstItem, indexOfLastItem);

  // next and previous button
  const nextPage = () => {
    if (indexOfLastItem < jobs.length) {
      setCurrPage(currPage + 1);
    }
  }

  const prevPage = () => {
    if (currPage > 1) {
      setCurrPage(currPage - 1);
    }
  }

  const handleSearch = () => {
    const filtered = jobs.filter(
      (job) =>
        job.jobTitle.toLowerCase().includes(searchText.toLowerCase())
    );
    setJobs(filtered);
    setIsLoading(false);
  };

  const handleDelete = (id) => {
    console.log(id);
    fetch(`https://job-portal-backend-a057.onrender.com/job/${id}`, {
      method: "DELETE"
    }).then(res => res.json()).then(data => {
      if (data.acknowledged === true) {
        alert("Job Deleted Successfully!!!");
        window.location.reload();
      }
    });
  };

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      <div className="my-jobs-container">
        <h1 className="text-center p-4">All Posted Jobs</h1>
        <div className="search-box p-2 text-center mb-2">
          <input
            type="text"
            name="search"
            id="search"
            className="py-2 pl-3 border focus:outline-none lg:w-6/12 mb-4 w-full"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="bg-blue text-white font-semibold px-8 py-2 rounded-sm mb-4"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>

      {/* table */}

      <section className="py-1 bg-blueGray-50">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-5">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
            <div className="rounded-t mb-0 px-4 py-3 border-0">
              <div className="flex flex-wrap items-center">
                <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                  <h3 className="font-semibold text-base text-blueGray-700">
                    All Jobs ({jobs.length})
                  </h3>
                </div>
                <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                  <Link to="/post-job"
                    className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    Post A New Job
                  </Link>
                </div>
              </div>
            </div>

            <div className="block w-full overflow-x-auto">
              <table className="items-center bg-transparent w-full border-collapse ">
                <thead>
                  <tr>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      S.No.
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Title
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Company Name
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Salary
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Edit
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Delete
                    </th>
                  </tr>
                </thead>

                {
                  isLoading ? (
                    <div className="flex items-center justify-center h-20"><p>Loading...</p></div>
                  ) : (
                    <tbody>
                      {
                        currJobs.map((job, index) => {
                          return (
                            <tr key={job._id}>
                              <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                                {index + 1}
                              </th>
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                                {job.jobTitle}
                              </td>
                              <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                {job.companyName}
                              </td>
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                ${job.minPrice}-{job.maxPrice}
                              </td>
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                <button>
                                  <Link to={`/edit-job/${job._id}`}>Edit</Link>
                                </button>
                              </td>
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                <button className="bg-red-700 py-2 px-6 text-white rounded-sm" onClick={() => {
                                  handleDelete(job._id);
                                }} >Delete</button>
                              </td>
                            </tr>
                          )
                        })
                      }
                    </tbody>
                  )
                }

              </table>
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-center text-black space-x-8">
          {
            currPage > 1 && (<button className="hover:underline" onClick={prevPage}>Previous</button>)
          }
          {
            indexOfLastItem < jobs.length && (<button className="hover:underline" onClick={nextPage}>Next</button>)
          }
        </div>

      </section>
    </div>
  );
};

export default MyJobs;
