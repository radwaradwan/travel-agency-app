import React,{useState} from 'react'
import backReview from '../../assets/img/BackReview.svg'
import person1 from '../../assets/img/person1.svg'
import person2 from '../../assets/img/person2.svg'
import person3 from '../../assets/img/person3.svg'


function BackReview() {
        function CircleCard({ imageSrc, title, description }) {
            return (
            <div className="card">
                <img src={imageSrc} className="card-img-top rounded-circle" alt="Circle" />
                <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                </div>
            </div>
            );
        }
        
        function Carousel({ cards }) {
            return (
                <div className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {cards.map((card, index) => (
                    <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                        <div className="d-flex justify-content-around">
                        {card.map((item, i) => (
                            <div className="col-md-4" key={i}>
                            <CircleCard {...item} />
                            </div>
                        ))}
                        </div>
                    </div>
                    ))}
                </div>
                </div>
            );
        }

        const [showSecondCarousel, setShowSecondCarousel] = useState(false);

        const cards1 = [
            { imageSrc: person1, title: 'Title 1', description: 'Description 1' },
            { imageSrc: person2, title: 'Title 2', description: 'Description 2' },
            { imageSrc: person3, title: 'Title 3', description: 'Description 3' }
        ];
        
        const cards2 = [
            { imageSrc: person1, title: 'Title 4', description: 'Description 4' },
            { imageSrc: person2, title: 'Title 5', description: 'Description 5' },
            { imageSrc: person3, title: 'Title 6', description: 'Description 6' }
        ];
    return (
        <section>
            <div className='mb-5'>
                <img src={backReview} alt='backReview' className='w-100'/>
                <div className="container">
                    <div className="row">
                        <div className="col">
                        <Carousel cards={[cards1]} />
                        {showSecondCarousel && <Carousel cards={[cards2]} />}
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col">
                        <div className="btn-group" role="group" aria-label="Carousel Navigation">
                            <button
                            type="button"
                            className={`btn btn-secondary ${!showSecondCarousel ? 'active' : ''}`}
                            onClick={() => setShowSecondCarousel(false)}
                            >
                            1
                            </button>
                            <button
                            type="button"
                            className={`btn btn-secondary ${showSecondCarousel ? 'active' : ''}`}
                            onClick={() => setShowSecondCarousel(true)}
                            >
                            2
                            </button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BackReview
