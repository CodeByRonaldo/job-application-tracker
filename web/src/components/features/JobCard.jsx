import React from "react";
import { useRecord } from "@/context/RecordContext";

export default function JobCard({id, companyTitle, location, jobTitle, status}) {
  const { setRecord, record } = useRecord();
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
        } catch (error) {
        console.error('Error saving to local storage', error)
        };
    };
    
    // Update context
    setRecord(prevRecords => {
        const updatedApplications = prevRecords.applications.filter((_, i) => i !== id);
        return { ...prevRecords, applications: updatedApplications };
    });
  };

  return (
  <div className="max-w-7xl mx-auto mb-4">
    <a href='#' className={`block max-w-sm p-6 bg-white border ${borderColor} rounded-lg inset-shadow-sm border-b-8 border-[#14ae5c] hover:shadow-lg`}>
    <button className="w-md h-md bg-black text-white" onClick={handleDelete} >Delete</button> {/* Added "Delete" text */}
      <h2 className="text-xl font-bold text-[#1e1e1e] truncate">{companyTitle}</h2>
      <p className="text-sm text-[#b3b3b3] truncate">{location}</p>
      <h1 className="text-4xl font-semibold text-[#1e1e1e] line-clamp-2">{jobTitle}</h1>
    </a>
  </div>
  );
}