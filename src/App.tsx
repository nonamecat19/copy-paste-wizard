import {Button} from "@/components/ui/button.tsx";
import {useState} from "react";

export default function App() {
  const [state, setState] = useState(0)

  return (
    <div className="container">

      {state}
      <Button onClick={() => setState(state + 1)}>asfasdf</Button>
    </div>
  );
}