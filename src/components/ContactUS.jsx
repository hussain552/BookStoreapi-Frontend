import React, { useState } from 'react';
import axios from 'axios';
import toast from "react-hot-toast";
const ContactUS = () => {
  const [statusMessage, setStatusMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your API call here to submit form data

    try {
      const response = await axios.post('https://bookstoreapi-backend-1.onrender.com/ContactUs', formData);
      setStatusMessage(response.data.msg);  // Success message from server
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
       
      });
      const {msg}=response.data
      if (response.data){
        toast.success(msg);
      }
    } 
    catch (error) {
      console.error('Error submitting the form:', error);
      setStatusMessage('Failed to send the message. Please try again.');
    }
    console.log('Submitted: ', formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-base-200">
      <div className="card w-full max-w-lg shadow-2xl bg-base-100">
        <div className="card-body">
          <h2 className="card-title text-center text-2xl font-bold">Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="input input-bordered"
                placeholder="Your Name"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="input input-bordered"
                placeholder="Your Email"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Subject</span>
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="input input-bordered"
                placeholder="Subject"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Message</span>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="textarea textarea-bordered"
                placeholder="Your message"
                rows="4"
                required
              />
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUS;
