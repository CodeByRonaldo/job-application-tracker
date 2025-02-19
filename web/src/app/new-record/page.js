'use client'
import React, { useState } from 'react';
import Header from "@/components/layout/Header";
import { useRecord } from '@/context/RecordContext';
import RecordForm from '@/components/forms/RecordForm';

export default function NewRecord() {
   const { setRecord } = useRecord();

   // Handle submit
   const handleSubmit = (e) => {
      e.preventDefault();

      // Update records in context
      setRecord(prevRecords => ({
         ...prevRecords,
         applications: [...(prevRecords.applications || []), record]
      }));
      try {
         localStorage.setItem('record', JSON.stringify(record));
      } catch (error) {
         console.error('Error saving to local storage', error)
      }
   };


return (
<>
<Header />
<div className="flex flex-col max-w-7xl mx-auto">
   <div className='justify-start'>
      <h1 className="text-4xl font-bold">New Record</h1>
   </div>
   <RecordForm onSubmit={handleSubmit} />
</div>
</>
)
}