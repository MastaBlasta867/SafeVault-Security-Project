function sanitizeInput(input) {
  return input.replace(/[<>'"$;]/g, "");
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validateUserInput(user) {
  if (!isValidEmail(user.email)) {
    throw new Error("Invalid email address.");
  }
  user.name = sanitizeInput(user.name);
  return user;
}

module.exports = { validateUserInput };
