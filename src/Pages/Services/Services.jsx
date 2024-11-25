// Services.js
import React from "react";
import ServiceCard from "./ServiceCard"; // Import ServiceCard component
import "./Services.css"

const servicesData = [
  {
    title: "Add Property",
    items: [
      "Add new properties with detailed information such as title, location, type, and images.",
      "Upload essential documents for each property (e.g., Aadhar card, PAN card, property papers).",
    ],
  },
  {
    title: "View Property Details",
    items: [
      "Access detailed information about a property, including location, owner details, loan status, and additional features.",
    ],
  },
  {
    title: "Property Record Management",
    items: [
      "Store and manage all property records securely in one place.",
      "Edit or update property details as needed.",
    ],
  },
  {
    title: "Document Viewing",
    items: [
      "View and download important documents related to properties such as property papers, ID proofs, and loan information.",
    ],
  },
  {
    title: "Explore New Properties",
    items: [
      "Browse a variety of properties listed by other users.",
      "Filter properties based on location, type, and price to find suitable options.",
    ],
  },
  {
    title: "Loan and Payment Tracking",
    items: [
      "View and track loan details, including total amount, payments made, and the balance remaining.",
    ],
  },
  {
    title: "Nominee Management",
    items: [
      "Add and update nominee information for properties with joint ownership or inheritance details.",
    ],
  },
  {
    title: "Secure User Account",
    items: [
      "Protect your account with secure login and password management features.",
      "View and manage personal information and property-related records in your account.",
    ],
  },
  {
    title: "Authentication for Documents",
    items: [
      "Implement a secure authentication system to protect sensitive documents.",
      "Allow only authorized users (property owners or admins) to upload, view, and download property-related documents.",
      "Use multi-factor authentication (MFA) for additional security, especially when accessing or sharing critical documents like property papers, IDs, or contracts.",
      "Add encryption for documents to ensure data privacy and protection from unauthorized access.",
    ],
  },
  {
    title: "User Registration & Account Management",
    items: [
      "Enable users to create an account to manage properties.",
      "Allow users to update their profile information, including email, password, and contact details.",
      "Provide options for users to reset their password in case of forgotten credentials.",
    ],
  },
  {
    title: "Property Management",
    items: [
      "Allow users to add new properties with all necessary details such as title, location, and images.",
      "Provide options to edit or delete properties that have been previously added.",
      "Add the ability to mark properties as sold, rented, or active.",
    ],
  },
  {
    title: "Document Upload and Management",
    items: [
      "Enable users to upload property-related documents like Aadhar, PAN card, property papers, etc.",
      "Add support for multiple file formats (e.g., PDF, JPG, PNG).",
      "Include a preview option for documents to allow users to view them before uploading.",
      "Store documents in a secure and organized way for easy retrieval.",
    ],
  },
  {
    title: "Property Search and Filters",
    items: [
      "Provide advanced search functionality with filters such as property type, location, price range, etc.",
      "Add a feature for users to bookmark or save favorite properties for later review.",
    ],
  },
  {
    title: "Property Analytics and Reporting",
    items: [
      "Provide users with a dashboard displaying key metrics about their properties, such as rental income, loan status, and market trends.",
      "Allow users to generate reports (e.g., rental income report, payment status report) based on their property details.",
    ],
  },
  {
    title: "Mobile-Friendly Design",
    items: [
      "Ensure that the platform is fully responsive and accessible on mobile devices.",
      "Implement a mobile app or optimized web design for ease of access on smartphones and tablets.",
    ],
  },
  {
    title: "Admin Dashboard",
    items: [
      "Provide administrators with a dashboard to manage all properties, user accounts, and document uploads.",
      "Allow admins to approve, reject, or flag properties and documents for verification.",
      "Implement administrative tools for managing user access and permissions.",
    ],
  },
  {
    title: "Notification System",
    items: [
      "Notify users about important updates, such as document uploads, payment due dates, and property status changes.",
      "Enable push notifications for critical updates related to the properties they own or are interested in.",
    ],
  },
  {
    title: "User Support & Help Center",
    items: [
      "Provide a help center with FAQs, user guides, and troubleshooting tips.",
      "Add live chat support or a contact form for users to get assistance.",
      "Offer video tutorials for new users to understand how to use the platform.",
    ],
  },
  {
    title: "Integration with Third-Party Services",
    items: [
      "Integrate with payment gateways for processing rent payments and loan installments.",
      "Integrate with document verification or identity-checking services to authenticate uploaded documents.",
      "Add mapping services (e.g., Google Maps) to display property locations accurately.",
    ],
  },
  {
    title: "Security and Data Privacy",
    items: [
      "Implement SSL encryption across the website for secure data transmission.",
      "Regularly audit the platform for security vulnerabilities and apply necessary updates.",
      "Ensure compliance with data protection laws (e.g., GDPR, CCPA) for user data storage and handling.",
    ],
  },
];

const Services = () => {
  return (
    <div className="services-back-img">
      <div className=" services-main-background">
        <h2 className="text-center mb-4 text-primary services-main-title">
          Our Services
        </h2>

        <div className="row">
          <div className="col-md-12">
            {servicesData.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                items={service.items}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
