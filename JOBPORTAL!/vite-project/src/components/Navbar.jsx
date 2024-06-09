import React, { useState } from "react";
import Logo from "/images/Logo.png";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import {signOut} from "firebase/auth"
import { auth } from '../firebase/firebase.config.js'
import {useDispatch} from 'react-redux'; 
import {setUser} from '../store/usersSlice'
const Navbar = () => {  

  const dispatch =  useDispatch();
function handleSignOut(){
  if(confirm('Are you sure you want to Log Out?')){
  signOut(auth).then(() => {
dispatch(setUser(null));
  }).catch((error) => {
console.log(error)
  });
}
}




  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuToggler = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const navItems = [
    { path: "/", title: "Start a search" },
    { path: "/my-job", title: "My Jobs" },
    { path: "/salary", title: "Salary Estimate" },
    { path: "/post-job", title: "Post a Job" },
   
  ];
  return (
    <header className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      <nav className="flex justify-between items-center py-6">
        <a href="/" className="flex items-center gap-2 text-2xl text-black">
          <img src={Logo} alt="logo" className="h-20" />
          <span>GetHired</span>
        </a>
        {/* Nav items for large devices */}
        {
          /* 
          
          
          hidden md:flex gap-12: => this means that css makes the ul hidden to all screen sizes but
          md:flex : This class sets the display property to flex, but only on screens that are medium-sized (768px) and larger. This means that on medium-sized screens and larger, the element will be displayed as a flex container, overriding the hidden class.
          On smaller screens (less than 768px):
The ul element will be hidden because the hidden class is applied.
On medium screens and larger (768px and above):
The ul element will be displayed as a flex container due to the md:flex class. This overrides the hidden class, making the element visible and applying flexbox layout to its children.
          
          */
        }
        <ul className=" hidden md:flex gap-12">
          {navItems.map(({ path, title }) => (
            <li key={path} className="text-base text-primary">
              {
                /* The to prop of the NavLink component expects a string that represents the destination URL. If you have a variable path containing the destination URL, you can directly pass it to the to prop without using curly braces.*/
              }
              <NavLink
                to={path}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {title}
              </NavLink>
            </li>
          ))}
        </ul>
        {/* Sign up and Log in Button */}
        <div className="text-base text-primary font-medium space-x-5 hidden lg:block">
          {/* <Link to="/login" className="py-2 px-5 border rounded">
            Log in
          </Link>
          <Link
            to="/sign-up"
            className="py-2 px-5 border rounded bg-blue text-white"
          >
            Sign up
          </Link> */}
            <NavLink to="/my-applications">My Applications</NavLink>

                 <button   
                  onClick={(e) => { handleSignOut(e) }}
                  className="active btn btn-block">
                LogOut
                </button>
         






        </div>




        {/* Mobile Menu */}

        {
          /*  md:hidden:  not be visible for 768 and above pixels*/
        }
        <div className="md:hidden block">
          <button onClick={handleMenuToggler}>
            {isMenuOpen ? (
              <FaXmark className="w-5 h-5 text-primary" />
            ) : (
              <FaBarsStaggered className="w-5 h-5 text-primary" />
            )}
          </button>
        </div>
      </nav>



      {
        /* <ul className="hidden md:flex gap-12">:

This <ul> element is meant for large devices (medium-sized screens and larger).
It uses Tailwind CSS classes to define its behavior:
hidden: Hides the <ul> element on all screen sizes by default.
md:flex: Displays the <ul> element as a flex container only on screens that are medium-sized (768px) and larger. This overrides the hidden class, making the element visible on medium-sized screens and larger.
gap-12: Applies a gap (spacing) of 3rem (48px) between each child element inside the flex container.
{navItems.map(({ path, title }) => (:

This line maps through the navItems array to generate list items (<li>) for each navigation item.
navItems is an array of objects with path and title properties.
<li key={path} className="text-base text-primary">:

Each list item (<li>) gets a unique key based on the path.
It has the following classes applied:
text-base: Sets the base text size.
text-primary: Sets the text color to a primary color (assuming it's defined in your Tailwind CSS configuration).
<NavLink to={path} className={({ isActive }) => (isActive ? "active" : "")}>:

NavLink is used to navigate to the specified path.
It has a dynamic class applied based on whether the link is currently active.
If the link is active, it applies the active class to style it accordingly.
{title}:

Renders the title of the navigation item as the text content of the link.
Combined Effect:
On small screens (< 768px):
The navigation items are hidden (hidden class).
On medium screens and larger (≥ 768px):
The navigation items are displayed as a horizontal list with a gap between each item (md:flex gap-12).
Each navigation item is a clickable link (<NavLink>) styled according to its active state.
This code ensures that on larger screens, the navigation items are displayed horizontally with appropriate styling, providing a user-friendly navigation experience.*/
      }

      {/* Navitems for mobile */}
      <div
        className={`px-4 bg-black py-5 rounded-sm ${
          isMenuOpen ? "" : "hidden"
        } lg:hidden`}
      >
        <ul className="">
          {navItems.map(({ path, title }) => (
            <li
              key={path}
              className="text-base text-white first:text-white py-1"
            >
              <NavLink
                to={path}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {/* {title} */}
                title
              </NavLink>
            </li>
          ))}
          <li className="text-white py-1">
            <Link to="/login" className="mr-5">
              Log in
            </Link>
            <Link
              to="/sign-up"
              className=""
            >
              Sign up
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;

/*<div className={px-4 bg-black py-5 rounded-sm ${isMenuOpen ? "" : "hidden"} lg:hidden}>:

This div element contains the mobile navigation menu.
It has dynamic classes based on the isMenuOpen state. If the menu is open, it displays (""), otherwise, it is hidden ("hidden").
On larger screens (lg and above), it is hidden (lg:hidden).
It has some styling applied using Tailwind CSS:
px-4: Adds horizontal padding of 1rem.
bg-black: Sets the background color to black.
py-5: Adds vertical padding of 1.25rem.
rounded-sm: Applies small rounded corners to the div.
<ul className="">:

This ul element contains the list of navigation items for the mobile menu.
It has an empty class attribute, meaning no additional styles are applied directly.
{navItems.map(({ path, title }) => (:

This line maps through the navItems array to generate list items (<li>) for each navigation item.
navItems is an array of objects with path and title properties.
<li key={path} className="text-base text-white first:text-white py-1">:

Each list item (<li>) gets a unique key based on the path.
It has the following classes applied:
text-base: Sets the base text size.
text-white: Sets the text color to white.
first:text-white: Ensures the first list item has white text (redundant here since all items have text-white).
py-1: Adds vertical padding of 0.25rem.
<NavLink to={path} className={({ isActive }) => (isActive ? "active" : "")}>:

NavLink is used to navigate to the specified path.
It has a dynamic class applied based on whether the link is currently active.
If the link is active, it applies the active class to style it accordingly.
{title}:

Renders the title of the navigation item as the text content of the link.
<li className="text-white py-1">:

This <li> contains the login and sign-up links.
It has a similar styling to other list items, with white text and vertical padding.
<Link to="/login" className="mr-5">:

This is a link to the login page.
It has a right margin of 0.75rem (5px) for spacing (mr-5).
<Link to="/sign-up" className="">:

This is a link to the sign-up page.
It doesn't have any additional classes, meaning it inherits the default styles.
Combined Effect:
On smaller screens (including mobile devices), the mobile navigation menu is displayed when isMenuOpen is true.
The menu contains navigation links and login/sign-up options.
Navigation links are styled with white text and padding.
The active link is styled differently using the active class.
The login and sign-up links are styled similarly to the navigation links.
This code provides a responsive mobile navigation menu with appropriate styling and functionality.





 */







/* explain navItems and navlink where will link change which link change and how go deeper
ChatGPT
Certainly! Let's dive deeper into the navItems array and the NavLink component, and explore how they work together to create navigation links in the React application:

navItems:
The navItems array contains objects representing navigation links in your application. Each object in the array has two properties:

path: Specifies the destination URL for the navigation link.
title: Represents the text to display for the navigation link.
For example:

javascript
Copy code
const navItems = [
  { path: "/", title: "Start a search" },
  { path: "/my-job", title: "My Jobs" },
  { path: "/salary", title: "Salary Estimate" },
  { path: "/post-job", title: "Post a Job" },
];
In this array:

The "Start a search" link navigates to the root URL ("/").
The "My Jobs" link navigates to /my-job.
The "Salary Estimate" link navigates to /salary.
The "Post a Job" link navigates to /post-job.
NavLink:
The NavLink component is used for creating navigation links in React applications. It is similar to the Link component from react-router-dom, but with additional functionality to apply styles to the active link based on the current URL.

Here's how NavLink works:

to prop: Specifies the destination URL for the navigation link.
className prop: Accepts a function that returns a string. This string represents the additional class to apply to the link based on whether it is currently active or not.
For example:

jsx
Copy code
<NavLink
  to={path}
  className={({ isActive }) => (isActive ? "active" : "")}
>
  {title}
</NavLink>
In this usage:

The to prop is dynamically set to the path of each navigation item in the navItems array.
The className prop applies the class "active" to the link if it is currently active (i.e., if the current URL matches the to prop).
The title is used as the text content of the navigation link.
Combined Effect:
When rendering navigation links in your React application, you map through the navItems array and create a NavLink component for each item.
Each NavLink is configured with the appropriate to prop to navigate to the specified URL.
The className prop allows you to apply custom styling to the active navigation link, providing visual feedback to the user about their current location within the application.
This combination of navItems and NavLink provides a flexible and dynamic way to manage navigation links in your React application, making it easy to add, update, or remove links as needed while ensuring consistent styling and behavior.

if it is currently active means the url of browser??
ChatGPT
Yes, exactly! When we say "if it is currently active," we're referring to whether the URL in the browser's address bar matches the destination URL specified in the to prop of the NavLink component.

The NavLink component provided by react-router-dom automatically adds an active class to the rendered link when its to prop matches the current URL. This allows you to apply specific styling to the active link to visually indicate to users which page they are currently on.

So, in the className prop of NavLink, when we use isActive, it's a boolean value that NavLink provides based on whether the current URL matches the to prop of the NavLink component.

For example, if the current URL in the browser is "/my-job" and you have a NavLink component like this:

jsx
Copy code
<NavLink to="/my-job" className={({ isActive }) => (isActive ? "active" : "")}>
  My Jobs
</NavLink>
Then, the NavLink component will have the active class applied to it because its to prop matches the current URL, indicating that it is currently active.

Each NavLink is configured with the appropriate to prop to navigate to the specified URL. who will do this configuring??
ChatGPT
In a React application using react-router-dom, the configuration of each NavLink component with the appropriate to prop to navigate to the specified URL is done by the developer.

When you define your navigation links using NavLink components, you manually specify the to prop for each NavLink to determine where it should navigate when clicked.

Here's an example of how you might configure NavLink components:

jsx
Copy code
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" exact>Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/services">Services</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};
In this example:

Each NavLink component has a to prop that specifies the destination URL.
When a NavLink is clicked, the React Router handles the navigation to the specified URL without a full page reload, providing a smooth single-page application (SPA) experience.
So, the developer is responsible for configuring each NavLink component with the appropriate to prop based on the desired navigation behavior of the application.

then wht is isActive role here??
ChatGPT
The isActive role in the NavLink component allows you to conditionally apply a class to the link based on whether it is currently active or not.

When a NavLink component is active (i.e., when its to prop matches the current URL), isActive is set to true. This allows you to dynamically apply styles to the active link to visually indicate to users which page they are currently on.

Here's how isActive works in the context of a NavLink component:

jsx
Copy code
<NavLink 
  to="/about" 
  className={({ isActive }) => (isActive ? "active" : "")}
>
  About
</NavLink>
In this example:

The to prop of the NavLink specifies the destination URL.
The className prop uses a function that takes an object with a property named isActive.
If isActive is true (meaning the current URL matches the to prop of the NavLink), the active class is applied to the link, indicating that it is currently active.
So, isActive allows you to conditionally apply styles to the NavLink based on its active state, enhancing the user experience by providing visual feedback about the current page or route within the application.

what actually isActive is??
ChatGPT
In the context of the NavLink component provided by react-router-dom, isActive is a boolean value that indicates whether the current URL matches the destination URL specified in the to prop of the NavLink.

Here's how it works:

When a NavLink component is rendered, react-router-dom checks if the current URL matches the to prop of that NavLink.
If the current URL matches the to prop, isActive is set to true; otherwise, it's set to false.
This isActive boolean value is then passed to the className function provided to the NavLink, allowing you to conditionally apply styles based on whether the link is currently active or not.
For example:

jsx
Copy code
<NavLink 
  to="/about" 
  className={({ isActive }) => (isActive ? "active" : "")}
>
  About
</NavLink>
In this example:

If the current URL matches /about, isActive will be true, and the active class will be applied to the NavLink, styling it accordingly.
If the current URL doesn't match /about, isActive will be false, and no additional class will be applied to the NavLink.
So, isActive is essentially a flag provided by react-router-dom to indicate whether a NavLink is currently active or not based on the current URL.





*/





/*how key optimise react code??
ChatGPT
The key prop in React optimizes code primarily in the context of rendering lists efficiently. Here's how it achieves optimization:

Efficient Reconciliation:

React uses the key prop to track each element in the list. When the list changes (items are added, removed, or reordered), React compares the new list with the previous list using these keys.
With the help of keys, React can identify which elements have changed, been added, or been removed more efficiently.
React can then update the UI by only re-rendering the elements that have actually changed, reducing unnecessary re-renders and improving performance.
Avoiding Unnecessary DOM Manipulations:

When a list is rendered without keys, React has to resort to a less efficient method of comparing elements by index. This can lead to unnecessary DOM manipulations.
With keys, React can perform more accurate comparisons based on the identity of the elements, avoiding unnecessary DOM manipulations and resulting in a smoother user experience.
Optimized Rendering:

By providing stable and unique keys, React can optimize the rendering process by efficiently identifying which elements need to be updated or re-rendered.
This optimization is particularly beneficial in scenarios where lists are dynamic and frequently updated, as it minimizes the computational overhead of rendering and updating the UI.
Reduced Component Re-creation:

When elements in a list are re-ordered, React can identify the movement of elements more accurately using keys.
With keys, React can typically reposition existing components instead of recreating them, which can lead to significant performance improvements, especially in complex UIs with nested components.
In summary, the key prop in React optimizes code by facilitating efficient list rendering and reconciliation. It helps React identify and track individual elements in lists, enabling more accurate updates to the UI and reducing unnecessary re-renders, ultimately improving the performance and responsiveness of React applications.





 */



/* why I donot need to pass whole URL to the to prop and only destination value compare??
ChatGPT
In React applications using React Router, when you specify the to prop for a NavLink component, you typically provide a relative path or route endpoint instead of the complete URL. Here's why:

Declarative Routing:

React Router uses declarative routing, where you define the structure of your application's routes and links using components and props.
By providing a relative path or route endpoint to the to prop, you declare the destination relative to the root URL of your application. React Router handles the routing internally and constructs the complete URL based on the current location.
Dynamic Routing:

Using relative paths allows for dynamic routing within your application. You can define routes and links based on the structure of your application, making it easier to manage and maintain.
React Router automatically constructs the complete URL by appending the relative path to the current base URL, ensuring consistency across different parts of your application.
Abstracting Navigation Logic:

Providing only the destination value to the to prop abstracts away the underlying navigation logic and implementation details.
It allows you to focus on defining the structure of your application's routes and links without worrying about the complete URLs or the intricacies of navigation handling.
Flexibility and Portability:

Using relative paths makes your application more flexible and portable. It enables you to easily refactor or change the base URL or route structure without needing to update every occurrence of the complete URL in your code.
It also simplifies deployment and hosting, as you can deploy your application to different environments without having to modify URLs based on the deployment location.
In summary, by providing only the destination value (relative path or route endpoint) to the to prop of a NavLink component, you leverage the benefits of declarative and dynamic routing in React Router. It simplifies navigation handling, improves code maintainability, and enhances the flexibility and portability of your React applications.*/