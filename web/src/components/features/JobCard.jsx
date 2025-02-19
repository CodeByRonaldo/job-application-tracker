import React from "react";

export default function JobCard({companyTitle, location, jobTitle, status}) {
  const statusColors = {
    'Awaiting': 'border-[#bde3ff]',
    'Considered': 'border-[#3dadff]',
    'Interviewed': 'border-[#66d575]',
    'Hired': 'border-[#14ae5c]',
  }

  const borderColor = statusColors[status] || 'border-black';

  return (
  <div className="max-w-7xl mx-auto mb-4">
    <a href='#' className={`block max-w-sm p-6 bg-white border ${borderColor} rounded-lg inset-shadow-sm border-b-8 border-[#14ae5c] hover:shadow-lg`}>
      <h2 className="text-xl font-bold text-[#1e1e1e] truncate">{companyTitle}</h2>
      <p className="text-sm text-[#b3b3b3] truncate">{location}</p>
      <h1 className="text-4xl font-semibold text-[#1e1e1e] line-clamp-2">{jobTitle}</h1>
    </a>
  </div>
  );
}