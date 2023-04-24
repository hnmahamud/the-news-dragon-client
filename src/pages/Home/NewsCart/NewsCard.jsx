import moment from "moment";
import React from "react";
import { Card, Image } from "react-bootstrap";
import {
  FaEye,
  FaRegBookmark,
  FaRegStar,
  FaShareAlt,
  FaStar,
} from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const NewsCard = ({ singleNews }) => {
  const { _id, title, details, image_url, author, rating, total_view } =
    singleNews;
  return (
    <Card className="mb-4">
      <Card.Header className="d-flex align-items-center">
        <Image style={{ height: "40px" }} src={author?.img} roundedCircle />
        <div className="ps-2 mt-3 flex-grow-1">
          <p className="mb-0">
            <strong>{author?.name}</strong>
          </p>
          <p>
            <small className="text-secondary">
              {moment(author?.published_date).format("YYYY-MM-DD")}
            </small>
          </p>
        </div>
        <div className="text-secondary">
          <FaRegBookmark className="me-2"></FaRegBookmark>
          <FaShareAlt></FaShareAlt>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
          {details.length < 250 ? (
            details
          ) : (
            <>
              {details.slice(0, 250)}...{" "}
              <Link
                className="text-decoration-none"
                style={{ color: "orange" }}
                to={`/news/${_id}`}
              >
                <strong>Read More</strong>
              </Link>
            </>
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted d-flex">
        <div className="d-flex align-items-center flex-grow-1">
          <Rating
            style={{ color: "orange" }}
            readonly
            placeholderRating={rating?.number}
            emptySymbol={<FaRegStar></FaRegStar>}
            placeholderSymbol={<FaStar></FaStar>}
            fullSymbol={<FaStar></FaStar>}
          />
          <span className="ms-2 mt-1">
            <strong>{rating?.number}</strong>{" "}
          </span>
        </div>
        <div className="d-flex align-items-center">
          <FaEye></FaEye>
          <span className="ms-2">
            <strong>{total_view}</strong>
          </span>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsCard;
