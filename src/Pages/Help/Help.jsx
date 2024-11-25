import React from "react";
import HelpCard from "./HelpCard";
import "./Help.css";

const Help = () => {
  const helpSections = [
    {
      title: "How to Login",
      content: [
        "Enter your registered email address or username in the login field.",
        "Enter your password in the password field.",
        "Click the Login button to access your account.",
      ],
    },
    {
      title: "Forgot Password",
      content: [
        "Ensure your email address/username and password are correct.",
        "Check your internet connection and try again.",
        "Clear your browser cache or try a different browser.",
      ],
    },
    {
      title: "New User Registration",
      content: [
        "If you don’t have an account, click the Register or Sign Up link.",
        "Fill out the registration form with your details and submit.",
        "Verify your email if required, then log in using your new credentials.",
      ],
    },
    {
      title: "Account Lockout",
      content: [
        "After multiple failed login attempts, your account may be temporarily locked for security reasons.",
        "Wait for a few minutes and try again, or contact support for assistance.",
      ],
    },
    {
      title: "Property Title",
      content: [
        "Enter a descriptive title for your property, e.g., 'Modern 2BHK Apartment in Downtown.'",
        "Ensure the title is clear and concise for better visibility.",
      ],
    },
    {
      title: "Property Type",
      content: [
        "Select the property type from the dropdown menu (e.g., Apartment, Villa, Commercial Space).",
        "This helps categorize your property correctly for potential viewers.",
      ],
    },
    {
      title: "Owner Details",
      content: [
        "Provide the owner’s name and contact information.",
        "Ensure accuracy to avoid issues during inquiries.",
      ],
    },
    {
      title: "Location Information",
      content: [
        "Enter the property's latitude and longitude for precise mapping.",
        "Provide the full address, including street, city, and postcode.",
      ],
    },
    {
      title: "Documents Upload",
      content: [
        "Upload essential documents like Aadhar Card, PAN Card, and Property Papers.",
        "Ensure the file formats are supported (e.g., PDF, JPG, PNG).",
      ],
    },
    {
      title: "Loan and Payment Details",
      content: [
        "Specify if there’s any loan associated with the property.",
        "Include details of the total amount, paid amount, and balance (if applicable).",
      ],
    },
    {
      title: "Nominee Information",
      content: [
        "Add the nominee's name and date of birth if required.",
        "This is useful for properties under joint ownership or inheritance.",
      ],
    },
    {
      title: "Additional Features",
      content: [
        "Mention purchase date, terms, and other relevant information.",
        "Add details about amenities or special features (if applicable).",
      ],
    },
    {
      title: "Property Images",
      content: [
        "Upload high-quality images of the property to attract more attention.",
        "Ensure each image represents different angles or rooms of the property.",
      ],
    },
    {
      title: "Save or Submit",
      content: [
        "Double-check the information before clicking the Save or Submit button.",
        "Once submitted, the property will be listed and visible to viewers.",
      ],
    },
  ];

  return (
    <div className="help-background-img">
      <div className="help-background">
        <div className="help-body">
          <h2 className="help-main-heading">Help Section</h2>
          {helpSections.map((section, index) => (
            <HelpCard
              key={index}
              title={section.title}
              content={section.content}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Help;
