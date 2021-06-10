import React, { useEffect, useState } from "react";
import { CardDeck, Spinner } from "react-bootstrap";
import toast from "react-hot-toast";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
import Testimonial from "../Testimonial/Testimonial";
import "./Testimonials.css";

const Testimonials = () => {
  SwiperCore.use([Pagination, Autoplay]);
  const [loading, setLoading] = useState(true);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://shielded-peak-06501.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        setLoading(false);
      })
      .catch((error) => toast.error(error.message));
  }, []);

  return (
    <section id="reviews" className="testimonials p-md-3">
      <div className="my-5 py-4">
        <div className="review-title text-center">
          <span>What Our Clients Says</span>
          <h2>Testimonials</h2>
        </div>
        {loading ? (
          <div className="text-center">
            <Spinner animation="border" variant="danger" />
          </div>
        ) : (
          <CardDeck className="mt-5">
            <Swiper
              loop={true}
              pagination={{ clickable: true }}
              slidesPerView={1}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 2,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              spaceBetween={10}
            >
              {reviews.map((testimonial) => {
                return (
                  <SwiperSlide key={testimonial._id}>
                    <Testimonial testimonial={testimonial} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </CardDeck>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
