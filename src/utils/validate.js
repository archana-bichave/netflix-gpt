export const checkValidData = (values, isSignIn) => {
  const errors = {};

  // Name validation (letters and spaces only)
  if(!isSignIn) {
    if (!values.name) {
        errors.name = 'Name is required';
    } else if (!/^[A-Za-z\s]+$/.test(values.name)) {
        errors.name = 'Name can only contain letters and spaces';
    }
  }

  // Email validation
  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  // Password validation
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/;

  if (!values.password) {
    errors.password = 'Password is required';
  } else if (!passwordRegex.test(values.password)) {

    errors.password = isSignIn ? "Invalid Password" : "Password must be at least 6 characters and include uppercase, lowercase, number, and special character";
  }

  return errors;
};
