import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
    <div>
      <h4>All Category</h4>
      <div>
        {categories.map((singleCat) => (
          <p>
            <Link
              className="text-secondary text-decoration-none"
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
