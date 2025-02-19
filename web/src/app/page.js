"use client";

import React, { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import JobCard from "@/components/features/JobCard.jsx";
import { useRecord } from "@/context/RecordContext";

export default function Page() {
  const { setRecord, record } = useRecord();
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const savedRecord = localStorage.getItem('record');
    if (savedRecord) {
      try {
        const parsedRecord = JSON.parse(savedRecord);
        setRecord(parsedRecord);
        console.log('record: (homepage)' ,record.applications)
      } catch (error) {
        console.error('Error parsing JSON from local storage', error)
        localStorage.removeItem('record');
      }
    }
  }, []);

  useEffect(() => {
    console.log('Current state of record', record.applications)
    if (record && record.applications) {
      const newApplications = record.applications.map((application, index) => ({
        company: application.company.c_name,
        location: application.company.c_location,
        title: application.position.p_title,
        status: application.applicationDetails.app_status,
      }));

      setApplications(newApplications)
      console.log('Current state of application:', applications);
    } else {
      console.log('Record or record.applications is not set');
    }
  }, [record]);

  return (
    <>
    <Header />
    {applications.map((application, index) => (
      <JobCard key={index} companyTitle={application.company} location={application.location} jobTitle={application.title} status={application.status} />
    ))}
    </>
  )
}