"use client";

import React, { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import JobCard from "@/components/features/JobCard.jsx";
import { useRecord } from "@/context/RecordContext";

export default function Page() {
  const { setRecord, record } = useRecord();

  useEffect(() => {
    const savedRecord = localStorage.getItem('record');
    if (savedRecord) {
      try {
        const parsedRecord = JSON.parse(savedRecord);
        setRecord(parsedRecord);
      } catch (error) {
        console.error('Error parsing JSON from local storage', error)
      }
    }
  }, []);

  return (
    <>
    <Header />
    {record.applications.map((application, index) => (
      <JobCard key={index} id={index} companyTitle={application.company.c_name} location={application.company.c_location} jobTitle={application.position.p_title} status={application.applicationDetails.app_status} />
    ))}
    </>
  )
}