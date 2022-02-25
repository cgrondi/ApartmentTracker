import React from "react";

var idNum = 0;
function createListElement(content) {
  idNum += 1;
  return <li key={idNum}>{content}</li>;
}

function apartment(props) {
  return (
    <div id="apartment">
      <h3>
        {" "}
        <a href={props.url} target="_blank" rel="noopener noreferrer">
          {props.name}
        </a>{" "}
      </h3>
      <p>{props.price}</p>
      <p>Move in Range</p>
      <p>{props.area}</p>
      <p>Time to Work1:{props.work1} </p>
      <p>Time to Work2:{props.work2} </p>
      <p>Time to Church:{props.church} </p>
      Pros:
      <ul className="pros">{props.pros.map(createListElement)}</ul>
      <hr />
      Cons:
      <ul className="cons">{props.cons.map(createListElement)}</ul>
    </div>
  );
}

export default apartment;
