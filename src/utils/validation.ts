type ReturnResult = string | null;

export const validateIsRequire = (value: string): ReturnResult => {
  if (!value) {
    return 'This field is required';
  }

  return null;
};

export const validateEmail = (email: string): ReturnResult => {
  if (!email) {
    return 'Email is required';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    return 'Email has wrong format!';
  }

  return null;
};

export const validatePassword = (password: string): ReturnResult => {
  if (!password) {
    return 'Password is required';
  }

  if (password.length < 6) {
    return 'Password must be at least 6 characters';
  }

  return null;
};

export const validateUsername = (username: string): ReturnResult => {
  if (!username) {
    return 'Username is required';
  }

  if (username.length < 3) {
    return 'Username must be at least 3 characters';
  }

  if (username.includes(' ')) {
    return 'Username cannot contain spaces';
  }

  return null;
};

export const validateName = (name: string): ReturnResult => {
  if (!name) {
    return 'Name is required';
  }

  const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;

  if (!nameRegex.test(name)) {
    return 'Name must be characters!';
  }

  return null;
};

export const validateConfirmPassword = (
  password: string,
  confirmPassword: string
): ReturnResult => {
  if (!confirmPassword) {
    return 'Confirm password is required';
  }

  if (password !== confirmPassword) {
    return 'Confirm password does not match';
  }

  return null;
};

export const validateNumberPhone = (numberPhone: string): ReturnResult => {
  if (!numberPhone) {
    return 'Number phone is required';
  }

  const numberPhoneRegex = /^\d{10}$/;

  if (!numberPhoneRegex.test(numberPhone)) {
    return 'Number phone has wrong format!';
  }

  return null;
};
