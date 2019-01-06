module.exports.contactEmail = formData => {
  const text = `
        Hey Marshall,

        You have a new contact form submission:\n
        Name: ${formData.name}\n
        Email: ${formData.email}\n
        Message: ${formData.message}\n
    `;

  return {
    to: `${process.env.TO_EMAIL}`,
    from: {
      address: "contact.marshalltuinier@gmail.com",
      name: "FormBot",
    },
    subject: "New Contact Form Submission from marshalltuinier.com",
    text,
  };
};
