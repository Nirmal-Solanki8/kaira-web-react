// import { useState } from "react";
// import data from "./data";

const Search = (props) => {
  // const [value, setValue] = useState(data);

  // const [inputval, setInputval] = useState("");

  // const filterItem = (e) => {
  //   const searchValue = e.target.value.toLowerCase();
  //   setInputval(searchValue);

  //   const filteredData = data.filter((item) =>
  //     item.name.toLowerCase().includes(searchValue)
  //   );

  //   console.log(filteredData);
  //   setValue(filteredData);
  // };
  return (
    <>
      <input
        type="text"
        id="inputbox"
        value={props.inputval}
        onChange={props.onchangedata}
        placeholder="Search the item"
      />
      {/* <div className="card">
        {value.map((item) => (
          <div className="hero-card" key={item.id}>
            <img src={item.image} alt={item.name} />
            <h2>{item.h2}</h2>
            <p>{item.description}</p>
            <a href="#">DISCOVER NOW</a>
          </div>
        ))}
      </div> */}
    </>
  );
};

export default Search;
