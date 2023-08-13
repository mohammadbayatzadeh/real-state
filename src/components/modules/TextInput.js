import React from "react";

function TextInput({
  title,
  name,
  profileData,
  setProfileData,
  textArea = false,
}) {
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };
  return (
    <div>
      <p>{title}</p>
      {textArea ? (
        <textarea
          name={name}
          value={profileData[name]}
          onChange={(e) => changeHandler(e)}
          type="text"
        />
      ) : (
        <input
          name={name}
          value={profileData[name]}
          onChange={(e) => changeHandler(e)}
          type="text"
        />
      )}
    </div>
  );
}

export default TextInput;
