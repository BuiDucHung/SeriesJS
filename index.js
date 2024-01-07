
// Liên quan tới tham chiếu tham trị coppy một đơi tượng
// Link https://rahuulmiishra.medium.com/javascript-interview-question-write-a-function-which-deep-clones-a-object-46a7b503f20c
function deepClone(obj) {
    if (obj === null || typeof obj !== "object") {
      return obj; // Base case: return primitive types or null
    }
    if (Array.isArray(obj)) {
      return obj.map((item) => deepClone(item));
    }
    const clonedObj = {};
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        clonedObj[key] = deepClone(obj[key]);
      }
    }
    return clonedObj;
  }
  
  const originalObject = {
    name: "John",
    age: 25,
    hobbies: ["reading", "coding"],
    address: {
      city: "Example City",
      zip: "12345",
    },
  };

  const clonedObject = deepClone(originalObject);
  clonedObject.age = 26;
  console.log('object', originalObject);
  console.log('new Object', clonedObject);
  