import { Container } from "react-bootstrap";
import { Form } from "@formio/react";
import { useSelector } from "react-redux";
import { Card } from "react-bootstrap";
const Renderer = () => {
  const formComponents = useSelector((state) => state.formBuilder);
  return (
    <Container>
      <Card className="my-4">
        <Card.Body>
          <Card.Title className="text-center">
            json schema Rendered Form
          </Card.Title>
          <Form form={formComponents} />
        </Card.Body>
      </Card>
    </Container>
  );
};
export default Renderer;
