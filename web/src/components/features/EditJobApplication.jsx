import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useRecord } from "@/context/RecordContext";

export default function EditJobApplication() {
    const router = useRouter();
    const { id } = router.query;
    const {setRecord, record} = useRecord();

    const [application, setApplication] = useState({
        
    });
};