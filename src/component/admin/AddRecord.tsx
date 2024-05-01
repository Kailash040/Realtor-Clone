import * as React from "react";
import { firestore } from "../../firebase";
import { addDoc, collection, getDocs } from "@firebase/firestore";
const Home = () => {
  const massageRef = React.useRef<HTMLInputElement>(null);
  const ref = collection(firestore, "messages");
  // Create firebase Data
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    let data = {
      message: massageRef?.current,
    };
    try {
      addDoc(ref, data);
      console.log(data.message);
    } catch (e) {
      console.log(data);
    }
  };
  console.log(massageRef.current);
  // Read firebase Data
  React.useEffect(() => {
    const fetchPost = async () => {
      try {
        await getDocs(collection(firestore, "messages")).then(
          (querySnapShot) => {
            const newData = querySnapShot.docs.map((doc) => ({
              ...doc.data(),
              id: doc.id,
            }));
            console.log(newData)
          }
        );
      } catch (err) {
        console.log(err);
      }
    };
    fetchPost();
  }, []);
  // 
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="massgage">Enter Massage</label>
          <input type="text" ref={massageRef} />
          <button type="submit">submit</button>
        </form>
      </div>
    </>
  );
};

export default Home;
