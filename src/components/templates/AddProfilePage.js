"use client";
import React, { useState } from "react";
function AddProfilePage() {
  const [profileData, setProfileData] = useState({
    title: "",
    description: "",
    location: "",
    phone: "",
    price: "",
    realState: "",
    contructionDate: new Date(),
    category: "",
    rules: [],
    amenities: [],
  });
  return <div>AddProfilePage</div>;
}

export default AddProfilePage;
