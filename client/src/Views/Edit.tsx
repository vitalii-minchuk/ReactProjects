import React from "react";

type Props = {};

const Edit = (props: Props) => {
  const product = window.history.state;
  return (
    <div>
      <p>{product.title}</p>
      <p>{product.description}</p>
      <p>{product.price}</p>
    </div>
  );
};

export default Edit;
