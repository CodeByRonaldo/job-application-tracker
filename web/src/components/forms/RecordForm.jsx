'use client'
import React, {useState } from 'react';
import { useRecord } from '@/context/RecordContext';

export default function RecordForm({ onSubmit }) {
    const { setRecord, record } = useRecord();
    const [company, setCompany] = useState({ c_name: "", c_location: "", c_website: "", staff_range: "", });
    const [position, setPosition] = useState({ p_title: "", salary: "", competition: "", benefits: "", tasks: "", });
    const [applicationDetails, setApplicationDetails] = useState({ app_status: "", date: "", });
    const [moreInfo, setMoreInfo] = useState({ info: "", });

    // Handle submit
    const handleSubmit = (e) => {
        e.preventDefault();

        // Aggregate the data into the record datafile
        const record = {
            company,
            position,
            applicationDetails,
            moreInfo,
        };

        setRecord(prevRecords => ({
            ...prevRecords,
            applications: [...(prevRecords.applications || []), record]
        }));
        try {
        localStorage.setItem('record', JSON.stringify(record));
        } catch (error) {
        console.error('Error saving to local storage', error)
        };
        
        // Clear form
        setCompany({ c_name: "", c_location: "", c_website: "", staff_range: "" });
        setPosition({ p_title: "", salary: "", competition: "", benefits: "", tasks: "" });
        setApplicationDetails({ app_status: "", date: "" });
        setMoreInfo({ info: "" });
    };

    return (
        <form onSubmit={handleSubmit} >
        <div>
            <h2 className="text-2xl font-bold border-b-2 border-[#1e1e1e] line-clamp-2 mb-2 mt-4">Company Information</h2>
            <div className="grid grid-cols-2 gap-x-2 gap-y-2">
                <input className='text-black rounded-lg placeholder-gray-600 w-full px-4 py-2.5 bg-gray-200 focus:outline-none transition duration-50 ease-in-out transform border-transparent focus:bg-white focus:border-[#1e1e1e] focus:shadow-outline focus:ring-2 ring-offset-2 ring-[#1e1e1e] placeholder:italic' type='text' placeholder="Company Name *" name='c_name' value={company.c_name} onChange={(e) => setCompany({ ...company, c_name: e.target.value, })} required />
                <input className="text-black rounded-lg placeholder-gray-600 w-full px-4 py-2.5 bg-gray-200 focus:outline-none transition duration-50 ease-in-out transform border-transparent focus:bg-white focus:border-[#1e1e1e] focus:shadow-outline focus:ring-2 ring-offset-2 ring-[#1e1e1e] placeholder:italic" type='text' placeholder="Company Location *" name='c_location' value={company.c_location} onChange={(e) => setCompany({ ...company, c_location: e.target.value, })} />
                <input className="text-black rounded-lg placeholder-gray-600 w-full px-4 py-2.5 bg-gray-200 focus:outline-none transition duration-50 ease-in-out transform border-transparent focus:bg-white focus:border-[#1e1e1e] focus:shadow-outline focus:ring-2 ring-offset-2 ring-[#1e1e1e] placeholder:italic" type='text' placeholder="Company Website" name='c_website' value={company.c_website} onChange={(e) => setCompany({ ...company, c_website: e.target.value, })} />
                <input className="text-black rounded-lg placeholder-gray-600 w-full px-4 py-2.5 bg-gray-200 focus:outline-none transition duration-50 ease-in-out transform border-transparent focus:bg-white focus:border-[#1e1e1e] focus:shadow-outline focus:ring-2 ring-offset-2 ring-[#1e1e1e] placeholder:italic" type='text' placeholder="Staff Number Range" name='staff_range' value={company.staff_range} onChange={(e) => setCompany({ ...company, staff_range: e.target.value, })} />
            </div>
            <h2 className="text-2xl font-bold border-b-2 border-[#1e1e1e] mb-2 mt-4">Position Information</h2>
            <div className="grid grid-cols-2 gap-x-2 gap-y-2">
                <input className="text-black rounded-lg placeholder-gray-600 w-full px-4 py-2.5 bg-gray-200 focus:outline-none transition duration-50 ease-in-out transform border-transparent focus:bg-white focus:border-[#1e1e1e] focus:shadow-outline focus:ring-2 ring-offset-2 ring-[#1e1e1e] placeholder:italic" type='text' placeholder="Position Title *" name='p_title' value={position.p_title} onChange={(e) => setPosition({ ...position, p_title: e.target.value, })} required />
                <input className="text-black rounded-lg placeholder-gray-600 w-full px-4 py-2.5 bg-gray-200 focus:outline-none transition duration-50 ease-in-out transform border-transparent focus:bg-white focus:border-[#1e1e1e] focus:shadow-outline focus:ring-2 ring-offset-2 ring-[#1e1e1e] placeholder:italic" type='text' placeholder="Salary" name='salary' value={position.salary} onChange={(e) => setPosition({ ...position, salary: e.target.value, })} />
                <input className="text-black rounded-lg placeholder-gray-600 w-full px-4 py-2.5 bg-gray-200 focus:outline-none transition duration-50 ease-in-out transform border-transparent focus:bg-white focus:border-[#1e1e1e] focus:shadow-outline focus:ring-2 ring-offset-2 ring-[#1e1e1e] placeholder:italic" type='text' placeholder="Competition" name='competition' value={position.competition} onChange={(e) => setPosition({ ...position, competition: e.target.value, })} />
                <input className="text-black rounded-lg placeholder-gray-600 w-full px-4 py-2.5 bg-gray-200 focus:outline-none transition duration-50 ease-in-out transform border-transparent focus:bg-white focus:border-[#1e1e1e] focus:shadow-outline focus:ring-2 ring-offset-2 ring-[#1e1e1e] placeholder:italic" type='text' placeholder="Benefits" name='benefits' value={position.benefits} onChange={(e) => setPosition({ ...position, benefits: e.target.value, })} />
            </div>
            <div className="mt-4 ">
                <textarea 
                className="text-black rounded-lg placeholder-gray-600 w-full px-4 py-2.5 bg-gray-200 focus:outline-none transition duration-50 ease-in-out transform border-transparent focus:bg-white focus:border-[#1e1e1e] focus:shadow-outline focus:ring-2 ring-offset-2 ring-[#1e1e1e] placeholder:italic"
                placeholder="Task(s)"
                rows={5}
                cols={100}
                name='tasks'
                value={position.tasks}
                onChange={(e) => setPosition({ ...position, tasks: e.target.value, })}
                />
            </div>
            <h2 className="text-2xl font-bold border-b-2 border-[#1e1e1e] mb-2 mt-4">Application Details</h2>
            <div className="grid grid-cols-2 gap-x-2 gap-y-2">
                <select className="text-black text-gray-600 rounded-lg italic w-full px-4 py-2.5 bg-gray-200 focus:outline-none transition duration-50 ease-in-out transform border-transparent focus:bg-white focus:border-[#1e1e1e] focus:shadow-outline focus:ring-2 ring-offset-2 ring-[#1e1e1e]" name='app_status'  value={applicationDetails.app_status} onChange={(e) => setApplicationDetails({ ...applicationDetails, app_status: e.target.value, })} >
                <option value=''  className="italic">Application Status *</option>
                <option  value='Awaiting' >Awaiting</option>
                <option value='Considered' >Considered</option>
                <option value='Interviewed' >Interviewed</option>
                <option value='Hired' >Hired</option>
                </select>
                <input className="text-black rounded-lg italic text-gray-600 w-full px-4 py-2.5 bg-gray-200 focus:outline-none transition duration-50 ease-in-out transform border-transparent focus:bg-white focus:border-[#1e1e1e] focus:shadow-outline focus:ring-2 ring-offset-2 ring-[#1e1e1e] placeholder:italic" type='date' name='date' value={applicationDetails.date} onChange={(e) => setApplicationDetails({ ...applicationDetails, date: e.target.value, })} required />
            </div>
            <h2 className="text-2xl font-bold border-b-2 border-[#1e1e1e] mb-2 mt-4">Additional Information</h2>
            <div>
                <textarea
                className="text-black rounded-lg placeholder-gray-600 w-full px-4 py-2.5 bg-gray-200 focus:outline-none transition duration-50 ease-in-out transform border-transparent focus:bg-white focus:border-[#1e1e1e] focus:shadow-outline focus:ring-2 ring-offset-2 ring-[#1e1e1e] placeholder:italic"
                placeholder="Add any additional information..."
                rows={5}
                cols={100}
                name='info'
                value={moreInfo.info}
                onChange={(e) => setMoreInfo({ ...moreInfo, info: e.target.value })}
                />
            </div>
        </div>
        <div className="mt-1 mb-4 place-self-end">
            <button type='submit' className="bg-[#1e1e1e] text-lg rounded-lg text-white py-2 px-6 transition duration-200 ease-in-out hover:bg-black">Submit</button>
        </div>
    </form>
    )
}