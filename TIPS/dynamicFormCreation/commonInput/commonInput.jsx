/* eslint-disable react/prop-types */
const CommonInput = ({
  label,
  type,
  name,
  onChange,
  id,
  placeholder,
  value,
}) => {
  return (
    <>
      <label htmlFor="">{label}</label>
      <input
        name={name}
        id={id}
        type={type || 'text'}
        value={value}
        placeholder={placeholder || "Enter Value Here"}
        onChange={onChange}
      />
    </>
  );
};

export default CommonInput;
