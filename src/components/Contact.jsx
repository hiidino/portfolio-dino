import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [formAlert, setFormAlert] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isFormComplete = () => {
    return Object.values(formData).every((value) => value.trim() !== '');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isFormComplete()) {
      setFormAlert('Please fill in all the fields.');
      return;
    } else {
      setFormAlert('');
    }

    setIsSubmitting(true);
    setAlertMessage('Submitting...');

    const controller = new AbortController(); // Controller for timeout
    const timeout = setTimeout(() => controller.abort(), 10000); // 10-second timeout

    try {
      const response = await fetch('https://dks-iuhe.onrender.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
        signal: controller.signal, // Attach signal to request
      });

      clearTimeout(timeout); // Clear timeout if response is received

      if (response.ok) {
        setAlertMessage('Message sent successfully!');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: '',
        });
      } else {
        const errorData = await response.json();
        setAlertMessage(`Failed to send message: ${errorData.message || 'Unknown error'}`);
      }
    } catch (error) {
      if (error.name === 'AbortError') {
        setAlertMessage('Request timed out. Please try again.');
      } else {
        console.error('Error:', error);
        setAlertMessage('Error sending message. Please try again.');
      }
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setAlertMessage(''), 5000);
    }
  };

  return (
    <section className="py-12 bg-gray-800 text-white" id="contact">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">Get in Touch</h2>

        {alertMessage && (
          <div className="bg-blue-500 text-white text-center py-2 mb-4 rounded-md">
            {alertMessage}
          </div>
        )}

        {formAlert && (
          <div className="bg-red-500 text-white text-center py-2 mb-4 rounded-md">
            {formAlert}
          </div>
        )}

        <form
          className="bg-gray-900 shadow-lg rounded-lg p-6 grid grid-cols-1 md:grid-cols-2 gap-6"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className="p-3 border border-gray-700 rounded-md bg-gray-800 text-white focus:outline-none focus:ring focus:ring-blue-500"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="p-3 border border-gray-700 rounded-md bg-gray-800 text-white focus:outline-none focus:ring focus:ring-blue-500"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="p-3 border border-gray-700 rounded-md bg-gray-800 text-white focus:outline-none focus:ring focus:ring-blue-500"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            className="p-3 border border-gray-700 rounded-md bg-gray-800 text-white focus:outline-none focus:ring focus:ring-blue-500"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            className="p-3 border border-gray-700 rounded-md bg-gray-800 text-white focus:outline-none focus:ring focus:ring-blue-500 md:col-span-2"
            rows="4"
            value={formData.message}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-md transition duration-200 md:col-span-2"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
