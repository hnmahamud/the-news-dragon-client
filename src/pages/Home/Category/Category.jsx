import React from "react";
import { useParams } from "react-router-dom";

const Category = () => {
  const { id } = useParams();
  return (
    <div>
      <div>This is category {id}</div>
    </div>
  );
};

export default Category;
