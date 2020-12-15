import React, { useState } from "react";

function newProfile(users) {
  return (
    <>
      <Col>
        <div className="d-flex flex-wrap">
          {users.map((item) => {
            return <CardNewUser key={item.dni} user={item} />;
          })}
        </div>
      </Col>
    </>
  );
}

export default newProfile;
