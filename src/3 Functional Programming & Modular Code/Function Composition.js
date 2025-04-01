// Function Composition (Breaking Complex Functions into Smaller Ones)
// Function composition is about chaining small, reusable functions together to create more complex logic.

const trim = str => str.trim();
const toLowerCase = str => str.toLowerCase();
const removeSpecialChars = str => str.replace(/[^a-z0-9]/g, "");

const sanitizeUsername = str => removeSpecialChars(toLowerCase(trim(str)));

console.log(sanitizeUsername("  John_Doe!@ ")); // "johndoe"
