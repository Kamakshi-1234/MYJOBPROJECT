// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { selectUsers } from '../store/usersSlice';
// import App from '../App';
// import Home from '../Pages/Home';
// import About from '../Pages/About';
// import PostJob from '../Pages/PostJob';
// import MyJobs from '../Pages/MyJobs';
// import SalaryPage from '../Pages/SalaryPage';
// import UpdateJob from '../Pages/UpdateJob';
// import JobDetails from '../Pages/JobDetails';
// import Login from '../Pages/Login';
// import MyApplications from '../Pages/MyApplications'; 

// const Router = () => {
//     const user = useSelector(selectUsers);

//     return (
//         <>
//             {user.currentUser ? (
//                 <BrowserRouter>
//                     <Routes>
//                         <Route path="/" element={<App />}>
//                             <Route index element={<Home />} />
//                             <Route path="about" element={<About />} />
//                             <Route path="post-job" element={<PostJob />} />
//                             <Route path="my-job" element={<MyJobs />} />
//                             <Route path="salary" element={<SalaryPage />} />
//                             <Route
//                                 path="edit-job/:id"
//                                 element={<UpdateJob />}
//                                 loader={({ params }) => fetch(`https://job-portal-backend-a057.onrender.com/all-jobs/${params.id}`)}
//                             />
//                             <Route path="job/:id" element={<JobDetails />} />
//                             <Route path="my-applications" element={<MyApplications />} /> {/* New route */}
//                         </Route>
//                     </Routes>
//                 </BrowserRouter>
//             ) : <Login />
//             }
//         </>
//     );
// };

// export default Router;


import React from 'react';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUsers } from '../store/usersSlice';
import App from '../App';
import Home from '../Pages/Home';
import About from '../Pages/About';
import PostJob from '../Pages/PostJob';
import MyJobs from '../Pages/MyJobs';
import SalaryPage from '../Pages/SalaryPage';
import UpdateJob from '../Pages/UpdateJob';
import JobDetails from '../Pages/JobDetails';
import Login from '../Pages/Login';
import MyApplications from '../Pages/MyApplications';

const Router = () => {
    const user = useSelector(selectUsers);

    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
            children: [
                { index: true, element: <Home /> },
                { path: "about", element: <About /> },
                { path: "post-job", element: <PostJob /> },
                { path: "my-job", element: <MyJobs /> },
                { path: "salary", element: <SalaryPage /> },
                { 
                    path: "edit-job/:id", 
                    element: <UpdateJob />,
                    loader: async ({ params }) => {
                        const response = await fetch(`https://job-portal-backend-a057.onrender.com/all-jobs/${params.id}`);
                        if (!response.ok) throw new Error('Failed to fetch job data');
                        return response.json();
                    }
                },
                { path: "job/:id", element: <JobDetails /> },
                { path: "my-applications", element: <MyApplications /> },
            ]
        }
    ]);

    return (
        <>
            {user.currentUser ? (
                <RouterProvider router={router} />
            ) : <Login />}
        </>
    );
};

export default Router;
