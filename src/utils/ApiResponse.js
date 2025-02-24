// The ApiResponse class is a custom response handler that ensures all API responses have a standardized structure. It simplifies sending responses by automatically including status code, data, message, and success status.

// Define a class to standardize API responses
class ApiResponse {
  /**
   * Constructor to create an instance of ApiResponse
   * @param {number} statusCode - HTTP status code (e.g., 200, 201, 400, 500)
   * @param {any} data - The actual response data (object, array, string, etc.)
   * @param {string} message - A custom message (default: "Success")
   */
  constructor(statusCode, data, message = "Success") {
    this.statusCode = statusCode; // Store HTTP status code
    this.data = data; // Store response data
    this.message = message; // Store custom message
    this.success = statusCode < 400; // Set success = true for status codes below 400
  }
}

// Export the class to use in other parts of the application
export { ApiResponse };

// class ApiResponse {
//   constructor(statusCode, data, message = "Success") {
//     this.statusCode = statusCode;
//     this.data = data;
//     this.message = message;
//     this.success = statusCode < 400;
//   }
// }
