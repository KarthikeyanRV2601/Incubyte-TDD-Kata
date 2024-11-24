# **String Calculator - A Test-Driven Development Project**

## **Project Overview**

The **String Calculator** project demonstrates the application of **Test-Driven Development (TDD)** principles alongside a user-focused frontend design. This project delivers a modular, scalable, and user-friendly string calculator with robust tests and an elegant interface.

---

### **Features**

#### **Backend Logic**
- **String Calculation**:
  - Handles empty strings, single numbers, and multiple comma-separated numbers.
  - Supports new line (`\n`) delimiters for flexible input.
  - Allows custom delimiters (e.g., `//;\n1;2`).
  - Throws descriptive errors for negative numbers, listing invalid inputs.
  - Processes any number of inputs efficiently.

#### **Frontend UI**
- **Interactive and User-Friendly**:
  - Input box for entering strings.
  - Dynamic result display with error handling.
  - Input rules are displayed.
  - Input field validation is handled
- **Responsive Design**:
  - Sleek, modern interface optimized for desktop and mobile views.
  - Intuitive interactions for a seamless user experience.

#### **Testing**
- **Backend TDD**: Comprehensive test cases for all possible scenarios:
  - Empty strings, valid inputs, and custom delimiters.
  - Negative number exceptions and invalid input handling.
- **Frontend Testing with Cypress**:
  - End-to-end tests for UI functionality and validation.

---

## **Tech Stack**

| **Technology**   | **Usage**                                |
|-------------------|------------------------------------------|
| **TypeScript**    | Core logic and type-safe development.    |
| **React**         | Frontend framework for building the UI.  |
| **Node.js**       | Backend support for serving the app.     |
| **CSS/SCSS**      | Styling for responsive, modern design.   |
| **Jest**          | Unit and integration testing.            |

---

## **Project Structure**

The project follows a modular structure for scalability and maintainability:
- **`module.components`**: Reusable React components.
- **`module.models`**: Types and interfaces for data handling.
- **`module.pages`**: Page-specific components.
- **`module.utils`**: Utility functions for core logic.
- **`module.styles`**: SCSS files for styling.
- **`module.tests`**: Jest and Cypress test cases.
- **`module.resources`**: Translations and static resources.

---

## **Setup Guide**

### **1. Clone the Repository**

```bash
git clone <repository_url> string-calculator-tdd
cd string-calculator-tdd
