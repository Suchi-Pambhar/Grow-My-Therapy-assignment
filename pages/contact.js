import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    preferredTime: '',
    agree: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = 'Valid email is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    if (!formData.preferredTime.trim()) newErrors.preferredTime = 'Preferred time is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      alert('Form submitted successfully!');
      setFormData({
        name: '',
        phone: '',
        email: '',
        message: '',
        preferredTime: '',
        agree: false,
      });
    }
  };

  return (
    <div className="contact-wrapper">
      <form className="contact-form" onSubmit={handleSubmit}>
        <h2>Get In Touch</h2>
        <p className="form-intro">
          Please fill out the brief fields below. I’ll be in touch with you soon, usually within one business day.
        </p>

        <label>
          Name
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
          {errors.name && <span className="error">{errors.name}</span>}
        </label>

        <label>
          Phone
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
          {errors.phone && <span className="error">{errors.phone}</span>}
        </label>

        <label>
          Email
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
          {errors.email && <span className="error">{errors.email}</span>}
        </label>

        <label>
          What brings you here?
          <textarea name="message" rows="4" value={formData.message} onChange={handleChange} />
          {errors.message && <span className="error">{errors.message}</span>}
        </label>

        <label>
          Preferred time to reach you
          <input type="text" name="preferredTime" value={formData.preferredTime} onChange={handleChange} />
          {errors.preferredTime && <span className="error">{errors.preferredTime}</span>}
        </label>
        {errors.agree && <span className="error">{errors.agree}</span>}

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
}
