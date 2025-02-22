    // Function to add new empty application
    export const addEmptyApplication = () => {
        setRecord(prevRecord => {
            const newApp = APPLICATION;
            return {
                ...prevRecord,
                applications: [...(prevRecord.applications || [], newApp)]
            };
        });
    };

    // Function to add an application with data
    export const addApplication = (appData) => {
        setRecord(prevRecord => {
            const newApp = {...APPLICATION, ...appData};
            return {
                ...prevRecord,
                applications: [...(prevRecord.applications || []), newApp]
            };
        });
    };

    // Function to update an existing application
    export const updateApplication = (id, appData) => {
        setRecord(prevRecord => {
            if (!prevRecord.applications || !prevRecord.applications[id]) {
                return prevRecord;
            };

            const updatedApp = [...prevRecord.applications];
            updatedApp[id] = {
                ...updatedApp[id],
                ...appData
            };
            return {
                ...prevRecord,
                applications: updateApp
            }
        });
    };

    // Function to delete an existing application
    export const deleteApplication = (id, appData) => {
        setRecord(prevRecord => {
            if (!prevRecord.applications) {
                return prevRecord;
            };

            const updatedApp = prevRecord.applications.filter((_, index) => index !== id);
            return {
                ...prevRecord,
                applications: updatedApp
            };
        });
    };