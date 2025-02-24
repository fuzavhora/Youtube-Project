// ApiError class is a custom error handler that extends JavaScript’s built-in Error class. This is useful in a backend application for standardized error responses in APIs.

// Define a custom error class by extending the built-in Error class
class ApiError extends Error {
  /**
   * Constructor to create an instance of ApiError
   * @param {number} statusCode - HTTP status code (e.g., 400, 404, 500)
   * @param {string} message - Error message (default: "Something went wrong")
   * @param {Array} errors - Additional error details (default: [])
   * @param {string} stack - Optional stack trace for debugging
   */
  constructor(
    statusCode,
    message = "Something went wrong",
    errors = [],
    stack = ""
  ) {
    super(message); // Call the parent Error class constructor with the message

    this.statusCode = statusCode; // Store HTTP status code
    this.data = null; // Default data field (can be modified if needed)
    this.message = message; // Store custom error message
    this.success = false; // Always false since this represents an error
    this.errors = errors; // Store additional error details

    // If a custom stack trace is provided, use it; otherwise, generate one
    if (stack) {
      this.stack = stack;
    } else {
      // Capture the correct stack trace for debugging
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

// Export the ApiError class for use in other files
export { ApiError };

// class ApiError extends Error {
//   constructor(
//     //cunstructor parameter
//     statusCode, //http statuscode e.g. 400,404,500
//     message = "Somthing went wrong", // custom error msg
//     errors = [], // Additional details about error
//     statck = "" //stack trace for debugging (optional)
//   ) {
//     //assign custome property
//     super(message);
//     this.statusCode = statusCode;
//     this.data = null;
//     this.message = message;
//     this.success = false;
//     this.errors = errors;

//     if (statck) {
//       this.stack = statck;
//     } else {
//       Error.captureStackTrace(this, this.constructor);
//     }
//   }
// }

// export { ApiError };
