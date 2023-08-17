type ReturnResult = string | null;

export const validateEmail = (email: string): ReturnResult => {
  if (!email) {
    return 'Email is required';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    return 'Email is invalid';
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
