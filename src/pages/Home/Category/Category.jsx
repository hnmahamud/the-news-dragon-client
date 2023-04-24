import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsCard from "../NewsCart/NewsCard";

const Category = () => {
  const { data: categoryNews } = useLoaderData();
  console.log(categoryNews);
  return (
    <div>
      {categoryNews.map((singleNews) => (
        <NewsCard key={singleNews._id} singleNews={singleNews}></NewsCard>
      ))}
    </div>
  );
};

export default Category;
