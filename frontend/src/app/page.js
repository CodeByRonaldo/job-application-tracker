"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/layout/Header";
import JobCard from "@/components/features/JobCard.jsx";
import { useRecord } from "@/context/RecordContext";

export default function Page() {
  const router = useRouter();
  const { record } = useRecord();
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    if (record?.applications) {
      setApplications(record.applications);
      console.log(applications)
    }
  }, [applications, record])

  useEffect(() => {
    if (record && record.company && record.company.c_name) {
      setApplications((prevApplications) => [
        ...prevApplications,
        {
          company: record.company.c_name,
          location: record.company.c_location,
          title: record.position.p_title,
          status: record.applicationDetails.app_status,
        },
      ]);
    }
  }, [record]);

  console.log(record)

  return (
    <>
    <Header />
    {applications.map((application, index) => (
      <JobCard key={index} companyTitle={application.company} location={application.location} jobTitle={application.title} status={application.status} />
    ))}
    </>
  )
}