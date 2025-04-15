import { p2e } from "@/utils/functions";
import { Input } from "antd";

function TextInput({ label, name, form, setForm, textArea = false }) {
  const changeHandler = (e) => {
    const { value } = e.target;
    setForm({ ...form, [name]: p2e(value) });
  };
  return (
    <div className="w-full">
      {textArea ? (
        <textarea
          name={name}
          value={form[name]}
          onChange={changeHandler}
          type="text"
        />
      ) : (
        <Input
          addonBefore={label}
          value={form[name]}
          onChange={changeHandler}
          type={name.includes("password") ? "password" : "text"}
          style={{ direction: "ltr" }}
          className="w-full"
        />
      )}
    </div>
  );
}

export default TextInput;
