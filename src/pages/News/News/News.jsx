import React from "react";
import { useParams } from "react-router-dom";

const News = () => {
  const { id } = useParams();
  return <div>News coming soon.. {id}</div>;
};

export default News;
