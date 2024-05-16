// React component for registration form
import React, { useReducer } from 'react';
import './MyInfo.css'; // Importing CSS file

const initialState = {
  fullName: '',
  age: '',
  gender: '',
  email: '',
  phoneNumber: '',
  goals: '',
  medicalHistory: '',
  height: '',
  weight: '',
  bodyFatPercentage: '',
  dietaryRestrictions: '',
  errors: {}
};

function formReducer(state, action) {
  switch (action.type) {
    case 'SET_FIELD':
      return { ...state, [action.field]: action.value };
    case 'SET_ERROR':
      return { ...state, errors: { ...state.errors, [action.field]: action.error } };
    default:
      return state;
  }
}

const MyInfo = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const validateField = (name, value) => {
    let error = '';
    switch (name) {
      case 'email':
        if (!/\S+@\S+\.\S+/.test(value)) {
          error = 'Invalid email address';
        }
        break;
      case 'phoneNumber':
        if (!/^\d{10}$/.test(value)) {
          error = 'Phone number must be 10 digits';
        }
        break;
      // Add more validations as needed
      default:
        break;
    }
    dispatch({ type: 'SET_ERROR', field: name, error });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: 'SET_FIELD', field: name, value });
    validateField(name, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Check for errors before submitting
    if (Object.values(state.errors).some(error => error)) {
      console.error('Validation errors:', state.errors);
      return;
    }
    // Submit form data to the server or handle it as needed
    try {
      // Replace with your submit logic
      console.log('Form data:', state);
    } catch (error) {
      console.error('Submission failed:', error);
    }
  };

  return (
    <form className="registration-form" onSubmit={handleSubmit}>
      <h2>Sports Nutrition Clinic Registration</h2>
      
      {/* ...existing fields... */}

      <fieldset>
        <legend>Physical Measurements</legend>
        <label>
          Height (cm):
          <input
            type="number"
            name="height"
            value={state.height}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Weight (kg):
          <input
            type="number"
            name="weight"
            value={state.weight}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Body Fat Percentage (%):
          <input
            type="number"
            name="bodyFatPercentage"
            value={state.bodyFatPercentage}
            onChange={handleChange}
            step="0.1"
            required
          />
        </label>
      </fieldset>

      <fieldset>
        <legend>Dietary Information</legend>
        <label>
          Dietary Restrictions:
          <textarea
            name="dietaryRestrictions"
            value={state.dietaryRestrictions}
            onChange={handleChange}
            required
          />
        </label>
      </fieldset>

      <button type="submit">Register</button>
    </form>
  );
};

export default MyInfo;
