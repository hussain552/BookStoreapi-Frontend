import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";
import Cards from "./Cards";

function Freebook() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        // Fetch data from the backend API
        const res = await axios.get("http://localhost:4001/bookapi");
        console.log(res.data);  // Inspect the response data

        // Filter books by price < 50
        const filteredBooks = res.data.filter((book) => {
          const priceNumber = parseFloat(book.price.replace(/[^0-9.-]+/g, ""));
          return priceNumber < 50;
        });

        console.log(filteredBooks);
        setBooks(filteredBooks);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    getBook();
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div>
        <h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1>
        <p>
          Discover amazing free book offers. Learn new skills with these great resources for free or under $7.
        </p>
      </div>

      <div>
        {books.length > 0 ? (
          <Slider {...settings}>
            {books.map((item) => (
              <Cards item={item} key={item.isbn13} />
            ))}
          </Slider>
        ) : (
          <p>No free books available under $7 at the moment.</p>
        )}
      </div>
    </div>
  );
}

export default Freebook;
