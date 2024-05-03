import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ClientHomePage.css'

const ClientHomePage = () => {
    return (
      <Container>
        <Row>
          <Col>
            <div className="card-container">
              <Card className="card">
                <Card.Body>
                  <Card.Title className="card-title">My Profile</Card.Title>
                  <Card.Text className="card-text">
                    View and edit your personal information, dietary preferences, and fitness goals.
                  </Card.Text>
                  <Link to="/profile" className="card-button">
                    Update my Information
                  </Link>
                </Card.Body>
              </Card>
              <Card className="card">
                <Card.Body>
                  <Card.Title className="card-title">Direct Message</Card.Title>
                  <Card.Text className="card-text">
                    Send direct message or question to the clinic.
                  </Card.Text>
                  <Link to="/direct-message" className="card-button">
                    Send Message
                  </Link>
                </Card.Body>
              </Card>
              <Card className="card">
                <Card.Body>
                  <Card.Title className="card-title">Meal Plans</Card.Title>
                  <Card.Text className="card-text">
                    Update your weekly meals to enhance the follow up.
                  </Card.Text>
                  <Link to="/meal-plans" className="card-button">
                    Weekly Meals
                  </Link>
                </Card.Body>
              </Card>
              <Card className="card">
                <Card.Body>
                  <Card.Title className="card-title">Workout Plans</Card.Title>
                  <Card.Text className="card-text">
                    View and update your workout plans.
                  </Card.Text>
                  <Link to="/workout-plans" className="card-button">
                    View Workout Plans
                  </Link>
                </Card.Body>
              </Card>
              <Card className="card">
                <Card.Body>
                  <Card.Title className="card-title">Appointments</Card.Title>
                  <Card.Text className="card-text">
                    Schedule and manage your appointments.
                  </Card.Text>
                  <Link to="/appointments" className="card-button">
                    Manage Appointments
                  </Link>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    );
};

export default ClientHomePage;
