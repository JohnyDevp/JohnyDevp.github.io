import ListGroup from "./components/ListGroup";
import { Fragment } from "react";

function App() {
  const items = ["Prague", "Ostrava", "Brno"];
  return (
    <Fragment>
      <h1>Heading</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </Fragment>
  );
}

export default App;
