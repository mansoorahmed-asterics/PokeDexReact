import React from "react";

const PokeDetails = props => {
  return <pre>{JSON.stringify(props, null, 2)}</pre>;
};

export default PokeDetails;
