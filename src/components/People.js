import React, { useState } from "react";

function People() {
  const [peoples, setPeoples] = useState([]);
  async function handlePeopleLoad() {
    const source = {
      query: "{ peoples(load:true) { name, phones {ddd, number} } }"
    };
    const service = await fetch("http://localhost:62783/graphql/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(source)
    });
    const data = await service.json();
    if (data.peoples) {
      setPeoples(data.peoples || []);
    }
  }
  return (
    <>
      <div>
        {peoples && peoples.length > 0 && (
          <>
            <ul className="collection with-header">
              {peoples.map((people, key0) => (
                <React.Fragment key={key0}>
                  <li className="collection-header">
                    <h4>{people.name}</h4>
                  </li>
                  {people.phones.map((phone, key1) => (
                    <li className="collection-item" key={key1}>
                      ({phone.ddd}){phone.number}
                    </li>
                  ))}
                </React.Fragment>
              ))}
            </ul>
          </>
        )}
        <button
          className="btn-floating btn-large waves-effect waves-light blue"
          onClick={handlePeopleLoad}
        >
          Load
        </button>
      </div>
    </>
  );
}

export default People;
