import { useContext } from "react";
import { Form } from "react-bootstrap";
import { FetchContext } from "../context/FetchDataContext";
import { data } from "../context/FetchDataContext";

const RadioBtns = () => {
  const {
    onRadioBtnChange,
    onCheckedBox,
    inputLocation,
    onhandleSearch,
    onhandleSubmit,
  } = useContext(FetchContext);

  return (
    <div>
      <Form.Check onChange={onCheckedBox} type="checkbox" label="Full time" />
      <Form onSubmit={onhandleSubmit}>
        <Form.Group className="my-4">
          <Form.Label className="title text-muted"> Location </Form.Label>
          <Form.Control
            className="outline-none"
            placeholder="country"
            value={inputLocation}
            onChange={onhandleSearch}
          />
        </Form.Group>
      </Form>

      <section className="radioBtns my-4">
        {data.map((rbtn, id) => (
          <Form.Check
            key={id}
            type="radio"
            name="city"
            value={rbtn}
            label={rbtn}
            onChange={onRadioBtnChange}
            className="mb-2"
          />
        ))}
      </section>
    </div>
  );
};

export default RadioBtns;
