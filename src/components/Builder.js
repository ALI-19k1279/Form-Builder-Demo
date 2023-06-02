import { Form, FormBuilder } from "@formio/react";
import { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import ReactJson from "react-json-view";
import "../styles/Builder.css";
import { useDispatch, useSelector } from "react-redux";

import { createFormBuilderSchema } from "../redux/slice/formBuilderSlice";
const Builder = () => {
  const [jsonSchema, setSchema] = useState({ components: [] });
  const formComponents = useSelector((state) => state.formBuilder);
  const dispatch = useDispatch();
  const onFormChange = (form) => {
    setSchema({ ...form, components: [...form.components] });
    console.log("change", form);
    dispatch(createFormBuilderSchema(form));
  };
  useEffect(() => {
    console.log("formComponents", formComponents);
  }, [formComponents]);

  return (
    <>
      <FormBuilder form={jsonSchema} onChange={onFormChange} />
      <Card title="Form JSON Schema" className="my-4">
        <Card.Body>
          <Card.Title className="text-center">As JSON Schema</Card.Title>
          <ReactJson src={jsonSchema} name={null} collapsed={true}></ReactJson>
        </Card.Body>
      </Card>
      <Card className="my-4">
        <Card.Body>
          <Card.Title className="text-center">As Rendered Form</Card.Title>
          <Form form={formComponents} />
        </Card.Body>
      </Card>
    </>
  );
};
export default Builder;
