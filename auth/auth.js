function login(username, password) {
  // Dummy user for demonstration
  const user = {
    username: "admin",
    password: "securePass123",
    role: "admin"
  };

  if (username === user.username && password === user.password) {
    return { username: user.username, role: user.role };
  }
  return null;
}

function authorize(user, requiredRole) {
  return user && user.role === requiredRole;
}

module.exports = { login, authorize };
