import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./LeftNav.css";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/categories");
        const { data } = response;
        console.log(data);
        setCategories(data);
      } catch (error) {
        console.log(error);
      }
    };
    loadData();
  }, []);
  return (
    <div className="my-4">
      <h4 className="font-weight-bold mb-4">All Category</h4>
      <div className="category-item">
        {categories.map((singleCat) => (
          <p className="p-2">
            <Link
              className="text-secondary text-decoration-none ms-4"
              key={singleCat.id}
            >
              {singleCat.name}
            </Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default LeftNav;
