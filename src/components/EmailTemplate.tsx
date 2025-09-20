import React from "react";

interface EmailTemplateProps {
  firstName: string;
  lastName?: string;
  contact?: string;
  email?: string;
  message?: string;
}

const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  lastName,
  contact,
  email,
  message,
}) => (
  <div>
    <p>
      New message from {firstName} {lastName}
    </p>
    <div className="grid grid-cols-2 gap-4">
      <p>Email: {email}</p>
      <p>Contact: {contact}</p>
      <div className="col-span-2">Message: {message}</div>
    </div>
  </div>
);

export default EmailTemplate;
