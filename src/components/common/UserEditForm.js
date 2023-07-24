// UserEditForm.js
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useDropzone } from "react-dropzone";
import Select from "react-select/async";
import supabase from "../../../supabase/supabase";

const UserEditForm = () => {
  const { handleSubmit, control } = useForm();
  const [profileImageFile, setProfileImageFile] = useState(null);
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    maxFiles: 1,
    multiple: false,
    onDrop: (acceptedFiles) => {
      setProfileImageFile(acceptedFiles[0]);
    },
  });

  const loadPlatforms = async () => {
    // Implement fetching platforms from Supabase or an API
    // For simplicity, we'll use some sample data here.
    return [
      { value: "instagram", label: "Instagram" },
      { value: "facebook", label: "Facebook" },
      { value: "tiktok", label: "TikTok" },
      { value: "twitter", label: "Twitter" },
      { value: "snapchat", label: "SnapChat" },
      // Add more platforms here
    ];
  };

  const loadCategories = async () => {
    // Implement fetching categories from Supabase or an API
    // For simplicity, we'll use some sample data here.
    return [
      { value: "entertainment", label: "Entertainment" },
      { value: "media", label: "Media" },
      // Add more categories here
    ];
  };

  const handleFormSubmit = async (data) => {
    // Convert selected values to array of strings
    data.platforms = data.platforms.map((platform) => platform.value);
    data.categories = data.categories.map((category) => category.value);

    if (profileImageFile) {
      // Upload the profile image to Supabase storage
      const fileUrl = `uploads/${profileImageFile.name}`;
      await supabase.storage
        .from("user_profile_images")
        .upload(fileUrl, profileImageFile);
      data.profileImage = fileUrl; // Save the public URL to data object
    }

    // Save data to Supabase table
    // await supabase.from("influencers").insert([data]).eq("influencer");
    // alert("Data has been successfully uploaded to Supabase!");
  };

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="flex-col justify-center items-center w-full max-w-lg mx-auto"
    >
      {/* Upload Image */}
      <div
        {...getRootProps()}
        className="text-center dropzone border-dashed border-2 border-gray-300 p-4 mt-4"
      >
        <input {...getInputProps()} />
        <p className="text-white">
          Drag and drop a profile image here, or click to select an image
        </p>
      </div>
      {acceptedFiles.length > 0 && (
        <div className="flex flex-col items-center mt-4">
          <h4 className="text-lg text-white font-bold mb-2">Selected Image:</h4>
          <img
            src={URL.createObjectURL(acceptedFiles[0])}
            alt="Selected"
            className="w-24 h-24 object-cover rounded-full mb-2"
          />
        </div>
      )}

      {/* Other Form Fields */}
      <div className="flex flex-col mt-4">
        <div className="flex w-full">
          <div className="flex-1">
            <label className="text-white" htmlFor="name">
              Name
            </label>
            <Controller
              name="name"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <input className="w-full rounded" {...field} />
              )}
            />
          </div>
          <div className="flex-1 ml-2">
            <label className="text-white">Username</label>
            <Controller
              name="username"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <input className="w-full rounded" {...field} />
              )}
            />
          </div>
        </div>
        <div className="w-full">
          <label className="text-white">Bio</label>
          <Controller
            name="bio"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <textarea className="w-full rounded" rows={4} {...field} />
            )}
          />
        </div>
      </div>

      {/* Select Platform */}
      <div className="mt-4">
        <label className="text-white">Platforms</label>
        <Controller
          name="platforms"
          control={control}
          defaultValue={[]}
          render={({ field }) => (
            <Select
              {...field}
              isMulti
              cacheOptions
              defaultOptions
              loadOptions={loadPlatforms}
            />
          )}
        />
      </div>

      {/* Select Categories */}
      <div className="mt-4">
        <label className="text-white">Categories</label>
        <Controller
          name="categories"
          control={control}
          defaultValue={[]}
          render={({ field }) => (
            <Select
              {...field}
              isMulti
              cacheOptions
              defaultOptions
              loadOptions={loadCategories}
            />
          )}
        />
      </div>

      {/* Type Audience Demographics */}
      <div className="flex w-full mt-4">
        <div className="flex-1">
          <label className="text-white">Audience Demographics</label>
          <Controller
            name="audienceDemographics"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input className="w-full rounded" {...field} />
            )}
          />
        </div>

        {/* Base Price */}
        <div className="flex-1 ml-2">
          <label className="text-white">Base Price</label>
          <Controller
            name="basePrice"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input className="w-full rounded" {...field} type="number" />
            )}
          />
        </div>
      </div>
      <button
        type="submit"
        className="w-full mt-6 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      >
        Save Changes
      </button>
    </form>
  );
};

export default UserEditForm;
