import axios from "axios";
import { useEffect, useState } from "react";
import "./Api.css";

export default function Api() {
  const [result, setResult] = useState([]);

  useEffect(() => {
    axios.get("https://dog.ceo/api/breed/hound/images").then((response) => {
      console.log(response.data.message[0].split("/"));
      setResult(response.data.message);
    });
  }, []);
  return (
    <div className="api-container">
      {result.map((item) => (
        <div className="card">
          <div
            className="img-holder"
            style={{ background: `url(${item})` }}
          ></div>
          <span className="dog-name">{item.split("/")[4]}</span>
        </div>
      ))}
    </div>
  );
}
