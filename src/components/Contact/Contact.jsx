
import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import './Contact.css';

const ContactItem = ({ title, content, className }) => (
  <div className={`contact-item ${className || ''}`}>
    <h3>{title}</h3>
    <p>{content}</p>
  </div>
);

ContactItem.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
  className: PropTypes.string,
};

const FormField = ({ label, type, name, register, error, required, marginBottom }) => (
  <div className={`form-field ${marginBottom ? 'margin-bottom' : ''}`}>
    <label>
      {label} {required && <span className="required">*</span>}
    </label>
    <input type={type} {...register(name)} className={error ? 'error' : ''} />
    {error && <FormError message={error} />}
  </div>
);

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  error: PropTypes.string,
  required: PropTypes.bool,
  marginBottom: PropTypes.bool,
};

const FormError = ({ message }) => <div className="form-error">{message}</div>;

FormError.propTypes = {
  message: PropTypes.string.isRequired,
};

const FormHeader = ({ title, className }) => <h3 className={`form-header ${className || ''}`}>{title}</h3>;

FormHeader.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
};

const SubmitButton = ({ text, className, disabled }) => (
  <button type="submit" className={`submit-button ${className || ''}`} disabled={disabled}>
    {text}
  </button>
);

SubmitButton.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

const ContactDetails = ({ className }) => (
  <div className={`contact-details ${className || ''}`}>
    <ContactItem title="Location" content="Adresssssss" />
    <ContactItem title="Email" content={<a href="mailto:info@nutritionclinic.com">MyEmail@gmail.com</a>} />
    <ContactItem title="Phone" content={<a href="tel:+1234567890">01200000000</a>} />
  </div>
);

ContactDetails.propTypes = {
  className: PropTypes.string,
};

const ContactForm = ({ className }) => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log('Form data submitted:', data);
    // send data to backend
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={`contact-form ${className || ''}`}>
      <FormHeader title="Send us a message" />
      <FormField
        label="Your Name"
        type="text"
        name="name"
        register={register}
        required
        error={errors?.name?.message}
        marginBottom
      />
      <FormField
        label="Your Email"
        type="email"
        name="email"
        register={register}
        required
        error={errors?.email?.message}
        marginBottom
      />
      <FormField
        label="Your Message"
        type="textarea"
        name="message"
        register={register}
        required
        error={errors?.message?.message}
        marginBottom
      />
      <SubmitButton text="Submit" />
    </form>
  );
};

ContactForm.propTypes = {
  className: PropTypes.string,
};

const Contact = ({ className }) => (
  <div className={`contact-us-container ${className || ''}`}>
    <h2>Contact Us</h2>
    <p className="quote">If you have any questions or need assistance, feel free to reach out:</p>
    <ContactDetails />
    <ContactForm />
  </div>
);


Contact.propTypes = {
  className: PropTypes.string,
};

export default Contact;
