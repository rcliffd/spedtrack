import React from "react";
import NewStaffForm from "../components/AdminForms/NewStaffForm";
import NewSchoolForm from "../components/AdminForms/NewSchoolForm";
import NewDistrictForm from "../components/AdminForms/NewDistrictForm";
import NewStateForm from "../components/AdminForms/NewStateForm";

class Admin extends React.Component {
    render () {
        return (
            <div>
                <NewStateForm />
                <NewDistrictForm />
                <NewSchoolForm />
                <NewStaffForm />
            </div>
        )
    }
}

export default Admin;