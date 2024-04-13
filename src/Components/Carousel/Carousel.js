import React, { useEffect } from 'react';
import { Carousel } from 'bootstrap'; // Import Bootstrap's Carousel component
import styles from './Carousel.module.css'; // Import your custom CSS module

// Sample images
import person1 from '../../assets/img/person1.svg';
// import person2 from '../../assets/img/person2.svg';
// import person3 from '../../assets/img/person3.svg';

// Sample data for cards
const cards1 = [
    {title: 'Title 1', description: 'Description 1' },
    {title: 'Title 2', description: 'Description 2' },
    { title: 'Title 3', description: 'Description 3' }
];

const cards2 = [
    { title: 'Title 4', description: 'Description 4' },
    {title: 'Title 5', description: 'Description 5' },
    {title: 'Title 6', description: 'Description 6' }
];

function CarouselComponent() {
    useEffect(() => {
        const carouselElement = document.getElementById('myCarousel');
        if (carouselElement) {
            const carousel = new Carousel(carouselElement, {
                interval: false,
                keyboard: true,
                pause: 'hover'
            });

            const indicators = carouselElement.querySelectorAll(`.${styles.carouselIndicators} li`);
            indicators.forEach((indicator, index) => {
                indicator.addEventListener('click', () => {
                    console.log('Clicked on indicator:', index);
                    console.log('Carousel instance:', carousel);

                    const activeIndicator = carouselElement.querySelector(`.${styles.carouselIndicators} .${styles.active}`);
                    if (activeIndicator) {
                        activeIndicator.classList.remove(styles.active);
                        console.log("111111111");
                    }

                    indicator.classList.add(styles.active);
                    carousel.to(index);
                });
            });
        }
    }, []);

    return (
        <div className={`container-fluid ${styles.carouselBackground}`}>
            <div id="myCarousel" className="carousel slide" >
                {/* Wrapper for slides */}
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="row d-flex justify-content-center">
                            <div className='col-md-8'>
                                <div className='container'>
                                    <div className='row d-flex justify-content-around'>
                                        {cards1.map((card, index) => (
                                            <div className='col-md-4 px-4 position-relative'>
                                                <div className='d-flex justify-content-center'>
                                                    <img src={person1} className={`rounded-circle ${styles.personImg}`} alt={`Person ${index}`} />
                                                </div>
                                                <div key={index} className={`card pt-5 p-1 ${styles.cardColor}`}>
                                                    <div className="card-body text-white">
                                                        <h5 className="card-title">{card.title}</h5>
                                                        <p className="card-text">{card.description}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>  
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="row d-flex justify-content-center">
                            <div className='col-md-8'>
                                <div className='container'>
                                    <div className='row d-flex justify-content-around'>
                                        {cards2.map((card, index) => (
                                            <div className='col-md-4 px-4 position-relative'>
                                                <div className='d-flex justify-content-center'>
                                                    <img src={person1} className={`rounded-circle ${styles.personImg}`} alt={`Person ${index}`} />
                                                </div>
                                                <div key={index} className={`card pt-5 p-1 ${styles.cardColor}`}>
                                                    <div className="card-body text-white">
                                                        <h5 className="card-title">{card.title}</h5>
                                                        <p className="card-text">{card.description}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>  
                        </div>
                    </div>
                </div>

                {/* Carousel Indicators */}
                <div className={styles.carouselIndicatorContainer}>
                    <ol className={`${styles.carouselIndicators}`}>
                        <li data-bs-target="#myCarousel" data-bs-slide-to="0" className={styles.active}></li>
                        <li data-bs-target="#myCarousel" data-bs-slide-to="1"></li>
                    </ol>
                </div>
            </div>
        </div>
    );
}

export default CarouselComponent;
