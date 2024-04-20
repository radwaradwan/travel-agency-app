import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from '../Components/Carousel/Carousel.module.css';
import person1 from '../assets/img/person1.svg';
import person2 from '../assets/img/person2.svg';
import person3 from '../assets/img/person3.svg';

const cards = [
    { img: person1, title: 'Teacher Terece', description: 'Returning to this hotel is always a delight – their loyalty program showers us with exclusive discounts and amazing perks!' },
    { img: person2, title: 'BEYU68£', description: 'Accessing Mina Voyages extraordinary special offers makes always our journey even more unforgettable.' },
    { img: person3, title: 'Elina13ay', description: 'Weekends here are pure bliss with their carefully crafted packages, and the extended stay discounts make relaxation even more enticing.' },
    { img: person1, title: 'Title 4', description: 'Description 4' },
    { img: person2, title: 'Title 5', description: 'Description 5' },
    { img: person3, title: 'Title 6', description: 'Description 6' }
];

function SliderReview() {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <div className={`container-fluid ${styles.carouselBackground}`}>
            <Slider {...settings}>
                {Array.from({ length: Math.ceil(cards.length / 3) }).map((_, slideIndex) => (
                    <div key={slideIndex} className="row d-flex justify-content-center">
                        <div className='col-md-8'>
                            <div className='container'>
                                <div className='row d-flex justify-content-around'>
                                    {cards.slice(slideIndex * 3, slideIndex * 3 + 3).map((card, cardIndex) => (
                                        <div key={cardIndex} className='col-md-4 px-4 position-relative'>
                                            <div className='d-flex justify-content-center'>
                                                <img src={card.img} className={`rounded-circle ${styles.personImg}`} alt={`Person ${cardIndex}`} />
                                            </div>
                                            <div className={`card pt-5 p-1 ${styles.cardColor}`}>
                                                <div className="card-body text-white">
                                                    <h5 className="card-title">{card.title}</h5>
                                                    <div className="card-text">{card.description}</div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default SliderReview;
