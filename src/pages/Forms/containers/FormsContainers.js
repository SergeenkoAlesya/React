//import { useState } from "react";
import { useForm } from "hooks";
import { useState } from "react";

const FormsContainers = () => {
  const { form, handleChange, handleReset } = useForm({
    email: "",
    password: "",
  });

  const [checked, setChecked] = useState(false);
  const handleCheckboxToggle = (even) => {
    setChecked(even.target.checked);
  };
  /*
    const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const handleFormChange = ({ target }) => {
    const { name, value } = target;

    setForm((state) => ({
      ...state,
      [name]: value,
    }));
  };

  const handleFormChange = (inputKey) => {
    return (event) => {
      setForm((state) => ({
        ...state,
        [inputKey]: event.target.value,
      }));
    };
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(form);
  };
*/
  return (
    <>
      <h1> Forms</h1>

      <form
        onSubmt={(event) => {
          event.preventDefault();
        }}
        action=""
      >
        <label>
          <p>Email</p>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
        </label>
        <label>
          <p>Password</p>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Submit</button>
        <input
          type="checkbox"
          checked={checked}
          onChange={handleCheckboxToggle}
        ></input>
      </form>
    </>
  );
};

export default FormsContainers;
