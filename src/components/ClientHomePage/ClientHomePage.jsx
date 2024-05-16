import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ClientHomePage.css';


const cards = [
  {
    title: 'My Profile',
    text: 'View and edit your personal information, dietary preferences, and fitness goals.',
    link: '/profile',
    buttonText: 'Update my Information',
  },
  {
    title: 'Direct Message',
    text: 'Send direct message or question to the clinic.',
    link: '/direct-message',
    buttonText: 'Send Message',
  },
  {
    title: 'Meal Plans',
    text: 'Update your weekly meals to enhance the follow up.',
    link: '/meal-plans',
    buttonText: 'Weekly Meals',
  },
  {
    title: 'Workout Plans',
    text: 'View and update your workout plans.',
    link: '/workout-plans',
    buttonText: 'View Workout Plans',
  },
  {
    title: 'Appointments',
    text: 'Schedule and manage your appointments.',
    link: '/appointments',
    buttonText: 'Manage Appointments',
  },
];

const ClientHomePage = () => {
  return (
    <Container className="client-home-page">
      <Row>
        <Col xs={12} md={6} lg={4} className="card-column">
          {cards.map(({ title, text, link, buttonText }, index) => (
            <Card key={index} className="card">
              <Card.Body>
                <Card.Title className="card-title">{title}</Card.Title>
                <Card.Text className="card-text">{text}</Card.Text>
                <Link to={link} className="card-button">
                  {buttonText}
                </Link>
              </Card.Body>
            </Card>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default ClientHomePage;