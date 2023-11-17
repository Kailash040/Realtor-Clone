import * as React from "react";
import { firestore } from "../firebase";
import { addDoc, collection } from "@firebase/firestore";
const Home = () => {
  const massageRef = React.useRef<HTMLInputElement>(null);
  const ref = collection(firestore, "messages");
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // console.log(massageRef.current.value);
    let data = {
      message: massageRef.current.value,
    };
    try {
      addDoc(ref, data);
    } catch (e) {
      console.log(data);
    }
  };
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="massgage">Enter Massage</label>
          <input type="text" ref={massageRef} />
          <button type="submit">submit</button>
        </form>
      </div>
    </div>
  );
};

export default Home;
