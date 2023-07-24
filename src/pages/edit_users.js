// edit-user.js
import React from "react";
import UserEditForm from "../components/common/UserEditForm";
import Layout from "@/components/layout/Layout";

const EditUserPage = () => {
  return (
    <Layout>
      <div className="">
        <h1 className="text-2xl text-center text-white font-bold mb-4">
          Edit User Profile
        </h1>
        <UserEditForm />
      </div>
    </Layout>
  );
};

export default EditUserPage;
