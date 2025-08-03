const { validateUserInput } = require("../validation/inputValidator");
const { login, authorize } = require("../auth/auth");

function runSecurityTests() {
  // Input validation test
  try {
    const user = validateUserInput({ name: "Eve<alert>", email: "eve@example.com" });
    console.log("✅ Input validation passed:", user);
  } catch (e) {
    console.error("❌ Input validation failed:", e.message);
  }

  // Login test
  const loggedInUser = login("admin", "securePass123");
  if (loggedInUser) {
    console.log("✅ Login successful:", loggedInUser);
  } else {
    console.error("❌ Login failed");
  }

  // Authorization test
  const access = authorize(loggedInUser, "admin");
  console.log(access ? "✅ RBAC successful" : "❌ RBAC failed");
}

runSecurityTests();
