import React from "react";
import Header from "@/components/layout/Header";
export default function NewRecord() {
return (
<>
<Header />
<div className="flex flex-col items-center">
   <div className='justify-start'>
      <h1 className="text-4xl font-bold">New Record</h1>
      <p className="">Fill in the details of your job application</p>
   </div>
   <form>
      <div>
         <h2 className="text-2xl font-bold border-b-2 border-[#1e1e1e] mb-2 mt-4">Company Information</h2>
         <div className="grid grid-cols-2 gap-x-2 gap-y-2">
            <input className='text-black rounded-lg placeholder-gray-600 w-full px-4 py-2.5 bg-gray-200 focus:outline-none transition duration-50 ease-in-out transform border-transparent focus:bg-white focus:border-[#1e1e1e] focus:shadow-outline focus:ring-2 ring-offset-2 ring-[#1e1e1e] placeholder:italic' type='text' placeholder="Company Name *" required />
            <input className="text-black rounded-lg placeholder-gray-600 w-full px-4 py-2.5 bg-gray-200 focus:outline-none transition duration-50 ease-in-out transform border-transparent focus:bg-white focus:border-[#1e1e1e] focus:shadow-outline focus:ring-2 ring-offset-2 ring-[#1e1e1e] placeholder:italic" type='text' placeholder="Company Location" />
            <input className="text-black rounded-lg placeholder-gray-600 w-full px-4 py-2.5 bg-gray-200 focus:outline-none transition duration-50 ease-in-out transform border-transparent focus:bg-white focus:border-[#1e1e1e] focus:shadow-outline focus:ring-2 ring-offset-2 ring-[#1e1e1e] placeholder:italic" type='text' placeholder="Company Website" />
            <input className="text-black rounded-lg placeholder-gray-600 w-full px-4 py-2.5 bg-gray-200 focus:outline-none transition duration-50 ease-in-out transform border-transparent focus:bg-white focus:border-[#1e1e1e] focus:shadow-outline focus:ring-2 ring-offset-2 ring-[#1e1e1e] placeholder:italic" type='text' placeholder="Staff Number Range" />
         </div>
         <h2 className="text-2xl font-bold border-b-2 border-[#1e1e1e] mb-2 mt-4">Position Information</h2>
         <div className="grid grid-cols-2 gap-x-2 gap-y-2">
            <input className="text-black rounded-lg placeholder-gray-600 w-full px-4 py-2.5 bg-gray-200 focus:outline-none transition duration-50 ease-in-out transform border-transparent focus:bg-white focus:border-[#1e1e1e] focus:shadow-outline focus:ring-2 ring-offset-2 ring-[#1e1e1e] placeholder:italic" type='text' placeholder="Position Title *" required />
            <input className="text-black rounded-lg placeholder-gray-600 w-full px-4 py-2.5 bg-gray-200 focus:outline-none transition duration-50 ease-in-out transform border-transparent focus:bg-white focus:border-[#1e1e1e] focus:shadow-outline focus:ring-2 ring-offset-2 ring-[#1e1e1e] placeholder:italic" type='text' placeholder="Salary" />
            <input className="text-black rounded-lg placeholder-gray-600 w-full px-4 py-2.5 bg-gray-200 focus:outline-none transition duration-50 ease-in-out transform border-transparent focus:bg-white focus:border-[#1e1e1e] focus:shadow-outline focus:ring-2 ring-offset-2 ring-[#1e1e1e] placeholder:italic" type='text' placeholder="Competition" />
            <input className="text-black rounded-lg placeholder-gray-600 w-full px-4 py-2.5 bg-gray-200 focus:outline-none transition duration-50 ease-in-out transform border-transparent focus:bg-white focus:border-[#1e1e1e] focus:shadow-outline focus:ring-2 ring-offset-2 ring-[#1e1e1e] placeholder:italic" type='text' placeholder="Benefits" />
         </div>
         <div className="mt-4 ">
            <textarea 
               className="text-black rounded-lg placeholder-gray-600 w-full px-4 py-2.5 bg-gray-200 focus:outline-none transition duration-50 ease-in-out transform border-transparent focus:bg-white focus:border-[#1e1e1e] focus:shadow-outline focus:ring-2 ring-offset-2 ring-[#1e1e1e] placeholder:italic"
               placeholder="Task(s)"
               rows={5}
               cols={100}
               />
         </div>
         <h2 className="text-2xl font-bold border-b-2 border-[#1e1e1e] mb-2 mt-4">Application Details</h2>
         <div className="grid grid-cols-2 gap-x-2 gap-y-2">
            <select className="text-black text-gray-600 rounded-lg italic w-full px-4 py-2.5 bg-gray-200 focus:outline-none transition duration-50 ease-in-out transform border-transparent focus:bg-white focus:border-[#1e1e1e] focus:shadow-outline focus:ring-2 ring-offset-2 ring-[#1e1e1e]">
               <option  className="italic">Application Status *</option>
               <option  >Awaiting</option>
               <option  >Considered</option>
               <option  >Interview</option>
               <option  >Interview</option>
            </select>
            {/* <input className="text-black rounded-lg placeholder-gray-600 w-full px-4 py-2.5 bg-gray-200 focus:outline-none transition duration-50 ease-in-out transform border-transparent focus:bg-white focus:border-[#1e1e1e] focus:shadow-outline focus:ring-2 ring-offset-2 ring-[#1e1e1e] placeholder:italic" type='text' placeholder="Application Status" required /> */}
            <input className="text-black rounded-lg italic text-gray-600 w-full px-4 py-2.5 bg-gray-200 focus:outline-none transition duration-50 ease-in-out transform border-transparent focus:bg-white focus:border-[#1e1e1e] focus:shadow-outline focus:ring-2 ring-offset-2 ring-[#1e1e1e] placeholder:italic" type='date' required />
         </div>
         <h2 className="text-2xl font-bold border-b-2 border-[#1e1e1e] mb-2 mt-4">Additional Information</h2>
         <div>
            <textarea
               className="text-black rounded-lg placeholder-gray-600 w-full px-4 py-2.5 bg-gray-200 focus:outline-none transition duration-50 ease-in-out transform border-transparent focus:bg-white focus:border-[#1e1e1e] focus:shadow-outline focus:ring-2 ring-offset-2 ring-[#1e1e1e] placeholder:italic"
               placeholder="Add any additional information..."
               rows={5}
               cols={100}
               />
         </div>
      </div>
      <div className="mt-1 place-self-end">
         <button type="button" className="border rounded-lg py-2 px-5 mr-2 transition duration-200 ease-in-out hover:bg-gray-200 hover:border-gray-400">Cancel</button>
         <button type='submit' className="bg-[#1e1e1e] rounded-lg text-white py-2 px-5 transition duration-200 ease-in-out hover:bg-black">Submit Application</button>
      </div>
   </form>
</div>
</>
)
}