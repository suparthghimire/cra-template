import { Container, Row, Card, Form, Button } from "react-bootstrap";
function App() {
  return (
    <Container>
      <Card className="scrollable">
        <Card.Header>
          <h2>Student Registration</h2>
        </Card.Header>
        <Card.Body>
          <Form>
            <Form.Group className="mt-1" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" placeholder="Enter Name" />
            </Form.Group>
            <Form.Group className="mt-1" controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter Email"
              />
            </Form.Group>
            <Form.Group className="mt-1" controlId="phone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="number"
                name="phone"
                placeholder="Phone Number"
              />
            </Form.Group>
            <Form.Group className="mt-1" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Enter Password"
              />
            </Form.Group>
            <Form.Group className="mt-1" controlId="re_password">
              <Form.Label>Re Enter Password</Form.Label>
              <Form.Control
                type="password"
                name="re_password"
                placeholder="Re Enter Password"
              />
            </Form.Group>
            <Form.Group className="mt-1">
              <Form.Label>Gender</Form.Label>
              <div className="d-flex gap-2">
                <Form.Group className="d-flex gap-2" controlId="male">
                  <Form.Check type="radio" name="gender" value="m" />
                  <Form.Label>Male</Form.Label>
                </Form.Group>
                <Form.Group className="d-flex gap-2" controlId="female">
                  <Form.Check type="radio" value="f" name="gender" />
                  <Form.Label>Female</Form.Label>
                </Form.Group>
                <Form.Group className="d-flex gap-2" controlId="other">
                  <Form.Check type="radio" value="o" name="gender" />
                  <Form.Label>Other</Form.Label>
                </Form.Group>
              </div>
            </Form.Group>
            <Form.Group className="mt-1" controlId="class">
              <Form.Label>Select Class</Form.Label>
              <Form.Select name="class">
                {Array.apply(null, Array(10)).map((_, i) => {
                  return (
                    <option key={`class-option-${i}`} value={i + 1}>
                      {i + 1}
                    </option>
                  );
                })}
              </Form.Select>
            </Form.Group>
            <Form.Group className="mt-1" controlId="image">
              <Form.Label>Upload Image</Form.Label>
              <Form.Control type="file" accept="image/png, image/jpeg" />
            </Form.Group>
            <hr />
            <Form.Group className="mt-1" controlId="terms_privacy">
              <div className="d-flex gap-2">
                <Form.Check name="terms_privacy" />
                <Form.Label>
                  I Agree to the <a href="#">Terms and Conditions</a> and{" "}
                  <a href="#">Privacy Policy</a>
                </Form.Label>
              </div>
            </Form.Group>
            <Form.Group className="mt-3">
              <Button variant="success">Register Student</Button>
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default App;
