import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisibility, setalertVisibility] = useState(false);

  return (
    <>
      <div>
        {alertVisibility && (
          <Alert onClose={() => setalertVisibility(false)}>My Alert</Alert>
        )}
      </div>

      <Button color="success" onClick={() => setalertVisibility(true)}>
        Sup world
      </Button>
    </>
  );
}

export default App;
