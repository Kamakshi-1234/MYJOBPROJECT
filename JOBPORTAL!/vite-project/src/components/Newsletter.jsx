import React from 'react'
import {FaEnvelopeOpenText, FaRocket} from 'react-icons/fa6'
const Newsletter = () => {
  return (
    <div>
        {/* 1st Part */}
        <div>
            <h3 className='text-lg font-bold mb-2 flex items-center gap-2'><FaEnvelopeOpenText /> Email me for jobs </h3>
            <p className='text-primary/75 text-base mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, sit. Vitae, doloribus nam. Sunt, ipsum.</p>
            <div className='w-full space-y-4'>
                <input type="email" name="email" id="email" placeholder='name@mail.com' className='w-full block py-2 pl-3 border focus:outline:none' />
                <input type="submit" value={"Subcribe"} className='w-full block py-2 pl-3 border focus:outline: bg-blue rounded-sm text-white cursor-pointer font-semibold' />
            </div>
        </div>

        {/* 2nd Part */}
        <div className='mt-20'>
            <h3 className='text-lg font-bold mb-2 flex items-center gap-2'><FaRocket /> Get noticed faster </h3>
            <p className='text-primary/75 text-base mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, sit. Vitae, doloribus nam. Sunt, ipsum.</p>
            <div className='w-full space-y-4'>
                <input type="email" name="email" id="email" placeholder='name@mail.com' className='w-full block py-2 pl-3 border focus:outline:none' />
                <input type="submit" value={"Upload your resume"} className='w-full block py-2 pl-3 border focus:outline: bg-blue rounded-sm text-white cursor-pointer font-semibold' />
            </div>
        </div>
    </div>
  )
}

export default Newsletter



// Newsletter.jsx































// //[21:26, 22/5/2024] ⚔️🗡️: Form Submission: When a form is submitted, the name attribute of the input field is used as the key in the key-value pair sent to the server. This allows the server to identify and process the form data correctly.
// [21:27, 22/5/2024] ⚔️🗡️: FormData Object: When using the FormData API in JavaScript to manually handle form submissions, the name attribute is used to append the correct data.