import React, { useState } from 'react';
import { Form, Input, Button, message, Image } from 'antd';
import { useNavigate } from 'react-router-dom';
import './RegisterPage.css';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [id, setId] = useState('');

  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    if (password === confirmPassword) {
      // Create user with email and password
      // Redirect to another page
message.success('User registered successfully!');
      history.push('/');
    } else {
      message.error('Passwords do not match!');
    }
  };

  return (
    <div className="register-container">
      <div className="image-container">
      </div>
        <div className="register-form">
          <h1>Register</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Item>
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Item>
            <Form.Item>
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Item>
            <Form.Item>
              <Input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Register
              </Button>
            </Form.Item>
          </Form>
          {id && (
            <ChangeEmailForm id={id} onSubmit={(id, email) => console.log(`Changing email for user ${id} to ${email}`)} />
          )}
        </div>
    </div>
  );
};

const ChangeEmailForm = ({ id, onSubmit }) => {
  const [newEmail, setNewEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    onSubmit(id, newEmail);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Item>
        <Input
          type="email"
          placeholder="New Email"
          value={newEmail}
          onChange={(e) => setNewEmail(e.target.value)}
        />
      </Form.Item>
      <Form.Item>
       <Button type="primary" htmlType="submit">
          Change Email
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RegisterPage;