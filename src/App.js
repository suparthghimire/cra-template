import { Container, Card, Form, Button } from "react-bootstrap";
import { useState } from "react";
import ErrorComponent from "./components/Error";

import useHandleSubmit from "./hooks/formSubmit.hook";
function App() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    gender: "",
    class: "",
    image: {
      name: "",
      size: 0,
      type: "",
    },
    termPrivacy: false,
  });
  const [handleSubmit, errors, setErrors] = useHandleSubmit(values);

  function submitForm() {
    const status = handleSubmit(values, setErrors);
    if (status) alert("Error");
    else alert("Success");
  }

  return (
    <Container>
      <Card className="scrollable">
        <Card.Header>
          <h2>Student Registration</h2>
        </Card.Header>
        <Card.Body>
          <Form
            method="POST"
            encType="multipart/form-data"
            onSubmit={(e) => {
              e.preventDefault();
              submitForm();
            }}
          >
            <Form.Group className="mt-1" controlId="name">
              <Form.Label>Name: {values.name}</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={values.name}
                placeholder="Enter Name"
                onChange={(e) => setValues({ ...values, name: e.target.value })}
              />
              {errors.name.length > 0 && (
                <ErrorComponent errors={errors.name}></ErrorComponent>
              )}
            </Form.Group>
            <Form.Group className="mt-1" controlId="email">
              <Form.Label>Email address: {values.email}</Form.Label>
              <Form.Control
                type="text"
                name="email"
                value={values.email}
                placeholder="Enter Email"
                onChange={(e) =>
                  setValues({ ...values, email: e.target.value })
                }
              />
              {errors.email.length > 0 && (
                <ErrorComponent errors={errors.email}></ErrorComponent>
              )}
            </Form.Group>
            <Form.Group className="mt-1" controlId="phone">
              <Form.Label>Phone Number: {values.phone}</Form.Label>
              <Form.Control
                type="text"
                value={values.phone}
                name="phone"
                placeholder="Phone Number"
                onChange={(e) =>
                  setValues({ ...values, phone: e.target.value })
                }
              />
              {errors.phone.length > 0 && (
                <ErrorComponent errors={errors.phone}></ErrorComponent>
              )}
            </Form.Group>
            <Form.Group className="mt-1" controlId="password">
              <Form.Label>Password: {values.password}</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={values.password}
                placeholder="Enter Password"
                onChange={(e) =>
                  setValues({ ...values, password: e.target.value })
                }
              />
              {errors.password.length > 0 && (
                <ErrorComponent errors={errors.password}></ErrorComponent>
              )}
            </Form.Group>
            <Form.Group className="mt-1" controlId="confirmPassword">
              <Form.Label>
                Confirm Password: {values.confirmPassword}
              </Form.Label>
              <Form.Control
                type="password"
                name="confirmPassword"
                value={values.confirmPassword}
                placeholder="Re Enter Password"
                onChange={(e) =>
                  setValues({ ...values, confirmPassword: e.target.value })
                }
              />
              {errors.confirmPassword.length > 0 && (
                <ErrorComponent
                  errors={errors.confirmPassword}
                ></ErrorComponent>
              )}
            </Form.Group>
            <Form.Group className="mt-1">
              <Form.Label>Gender: {values.gender}</Form.Label>
              <div className="d-flex gap-2">
                <Form.Group className="d-flex gap-2" controlId="male">
                  <Form.Check
                    type="radio"
                    name="gender"
                    value="m"
                    onChange={(e) =>
                      setValues({ ...values, gender: e.target.value })
                    }
                  />
                  <Form.Label>Male</Form.Label>
                </Form.Group>
                <Form.Group className="d-flex gap-2" controlId="female">
                  <Form.Check
                    type="radio"
                    value="f"
                    name="gender"
                    onChange={(e) =>
                      setValues({ ...values, gender: e.target.value })
                    }
                  />
                  <Form.Label>Female</Form.Label>
                </Form.Group>
                <Form.Group className="d-flex gap-2" controlId="other">
                  <Form.Check
                    type="radio"
                    value="o"
                    name="gender"
                    onChange={(e) =>
                      setValues({ ...values, gender: e.target.value })
                    }
                  />
                  <Form.Label>Other</Form.Label>
                </Form.Group>
              </div>
              {errors.gender.length > 0 && (
                <ErrorComponent errors={errors.gender}></ErrorComponent>
              )}
            </Form.Group>
            <Form.Group className="mt-1" controlId="class">
              <Form.Label>Select Class: {values.class}</Form.Label>
              <Form.Select
                name="class"
                value={values.class}
                onChange={(e) =>
                  setValues({ ...values, class: e.target.value })
                }
              >
                {Array.apply(null, Array(10)).map((_, i) => {
                  return (
                    <option
                      key={`class-option-${i}`}
                      defaultValue={i === 0}
                      value={i + 1}
                    >
                      {i + 1}
                    </option>
                  );
                })}
              </Form.Select>
              {errors.class.length > 0 && (
                <ErrorComponent errors={errors.class}></ErrorComponent>
              )}
            </Form.Group>
            <Form.Group className="mt-1" controlId="image">
              <Form.Label>Upload Image</Form.Label>
              <Form.Control
                type="file"
                name="image"
                onChange={(_) => {
                  const file = document.querySelector("#image").files[0];
                  setValues({
                    ...values,
                    image: {
                      name: file.name,
                      size: file.size,
                      type: file.type,
                    },
                  });
                }}
              />
              {errors.image.length > 0 && (
                <ErrorComponent errors={errors.image}></ErrorComponent>
              )}
            </Form.Group>
            <hr />
            <Form.Group className="mt-1" controlId="termPrivacy">
              Checked: {values.termPrivacy.toString()}
              <div className="d-flex gap-2">
                <Form.Check
                  name="termPrivacy"
                  onChange={(e) => {
                    setValues({ ...values, termPrivacy: e.target.checked });
                  }}
                />
                <Form.Label>
                  I Agree to the <a href="#">Terms and Conditions</a> and{" "}
                  <a href="#">Privacy Policy</a>
                </Form.Label>
              </div>
              {errors.termPrivacy.length > 0 && (
                <ErrorComponent errors={errors.termPrivacy}></ErrorComponent>
              )}
            </Form.Group>
            <Form.Group className="mt-3">
              <Button type="submit" variant="success">
                Register Student
              </Button>
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default App;
