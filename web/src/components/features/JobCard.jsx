import React, { useEffect, useState, useRef } from "react";
import { useRecord } from "@/context/RecordContext";

export default function JobCard({id, companyTitle, location, jobTitle, status}) {
  const { setRecord, record } = useRecord();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const statusColors = {
    'Awaiting': 'border-[#bde3ff]',
    'Considered': 'border-[#3dadff]',
    'Interviewed': 'border-[#66d575]',
    'Hired': 'border-[#14ae5c]',
  }
  const borderColor = statusColors[status] || 'border-black';

  const handleDelete = () => {
    // Obtain the stored data from record
    const storedRecord = JSON.parse(localStorage.getItem('record'));
    // True if there are any stored data inside record
    if (storedRecord && storedRecord.applications) {
      // copy data and assign it to updatedApplications array
      const updatedApplications = [...storedRecord.applications];
      // Remove the index array from copied data
      updatedApplications.splice(id, 1);
      // Update the stored data
      storedRecord.applications = updatedApplications;
      // Save it into localStorage
      try {
        localStorage.setItem('record', JSON.stringify(record));
        console.log('Delete record: ', record)
        } catch (error) {
        console.error('Error saving to local storage', error)
        };
    };
    
    // Update context
    setRecord(prevRecords => {
        const updatedApplications = prevRecords.applications.filter((_, i) => i !== id);
        return { ...prevRecords, applications: updatedApplications };
    });

    setShowDropdown(false);
  };

  const handleEdit = () => {
    console.log('Edit your job application:', id);

    setShowDropdown(false);
  }

  const handleShowDetails = () => {
    console.log('Show details of your job application:', id)
  }

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="max-w-7xl mx-auto mb-4 relative">
    <div className={`block max-w-sm p-6 bg-white border ${borderColor} rounded-lg inset-shadow-sm border-b-8 hover:shadow-lg`}>
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <h2 className="text-xl font-bold text-[#1e1e1e] truncate">{companyTitle}</h2>
          <p className="text-sm text-[#b3b3b3] truncate">{location}</p>
          <h1 className="text-4xl font-semibold text-[#1e1e1e] line-clamp-2">{jobTitle}</h1>
        </div>
        <div className="relative" ref={dropdownRef}>
          <button 
            onClick={(e) => {
              e.preventDefault();
              setShowDropdown(!showDropdown);
            }}
            className="p-2 text-gray-600 hover:text-gray-800"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
            </svg>
          </button>
          
          {showDropdown && (
            <div className="absolute left-0 w-48 bg-white rounded-md shadow-lg z-10 border border-gray-200">
              <div className="py-1">
                <button
                  onClick={handleShowDetails}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Show more details
                </button>
                <button
                  onClick={handleEdit}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Edit
                </button>
                <button
                  onClick={handleDelete}
                  className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                >
                  Delete
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
  );
}