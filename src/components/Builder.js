import { Form, FormBuilder } from "@formio/react";
import { useState } from "react";
import { Card } from "react-bootstrap";
import ReactJson from "react-json-view";
import "../styles/Builder.css";
import { useDispatch, useSelector } from "react-redux";
import { createFormBuilderSchema } from "../redux/slice/formBuilderSlice";
const Builder = () => {
  const [jsonSchema, setSchema] = useState({ components: [] });
  const dispatch = useDispatch();
  const jsonSchemaRedux = useSelector((state) => {
    return { ...state.formBuilder };
  });
  console.log("------->", jsonSchemaRedux);

  const onFormChange = (schema) => {
    setSchema({ ...schema, components: [...schema.components] });
    dispatch(createFormBuilderSchema(jsonSchema));
    console.log("redux", jsonSchemaRedux);
  };

  return (
    <>
      <FormBuilder form={jsonSchema} onChange={onFormChange} />
      <Card title="Form JSON Schema" className="my-4">
        <Card.Body>
          <Card.Title className="text-center">As JSON Schema</Card.Title>
          <ReactJson
            src={jsonSchemaRedux}
            name={null}
            collapsed={true}
          ></ReactJson>
        </Card.Body>
      </Card>
      <Card className="my-4">
        <Card.Body>
          <Card.Title className="text-center">As Rendered Form</Card.Title>
          <Form form={jsonSchema} />
        </Card.Body>
      </Card>
    </>
  );
};
export default Builder;
