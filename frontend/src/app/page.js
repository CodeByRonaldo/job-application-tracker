import React from "react";
import Header from "@/components/layout/Header";
import JobCard from "@/components/features/JobCard.jsx";

export default function Page() {
  const applications = [
    { company: "company_1", location: "Calgary, Alberta", title: "Software Developer", status: "Awaiting" },
    { company: "company_2", location: "Edmonton, Alberta", title: "Sales Representative", status: "Considered" },
    { company: "company_3", location: "Vancouver, British Columbia", title: "Data Engineer", status: "Considered" },
    { company: "company_4", location: "Calgary, Alberta", title: "Backend Developer", status: "Interviewed" },
    { company: "company_5", location: "Calgary, Alberta", title: "Frontend Developer", status: "Interviewed" },
    { company: "company_5", location: "Calgary, Alberta", title: "AHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH", status: "Hired" },
  ]

  return (
    <>
    <Header />
    {applications.map((application, index) => (
      <JobCard key={index} companyTitle={application.company} location={application.location} jobTitle={application.title} status={application.status} />
    ))}
    </>
  )
}