import React from "react";
import { Calendar } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import InputIcon from "react-multi-date-picker/components/input_icon";

function CustumDatePicker({ profileData, setProfileData }) {
  const changeHandler = (e) => {
    const date = new Date(e);
    setProfileData({ ...profileData, contructionDate: date });
  };

  return (
    <div>
      <p>تاریخ ساخت</p>
      <Calendar
        calendar={persian}
        render={<InputIcon />}
        locale={persian_fa}
        value={profileData.contructionDate}
        onChange={changeHandler}
        onlyMonthPicker
        calendarPosition="bottom-right"
      />
    </div>
  );
}

export default CustumDatePicker;
