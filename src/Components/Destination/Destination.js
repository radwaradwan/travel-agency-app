import React from "react";
import styles from './Destination.module.css'
import pic1 from '../../assets/img/pic1.svg'
import pic2 from '../../assets/img/pic2.svg'
import pic3 from '../../assets/img/pic3.svg'
import pic4 from '../../assets/img/pic4.svg'
import pic5 from '../../assets/img/pic5.svg'
import pic6 from '../../assets/img/pic6.svg'
import pic7 from '../../assets/img/pic7.svg'
import pic8 from '../../assets/img/pic8.svg'
import pic9 from '../../assets/img/pic9.svg'
import pic10 from '../../assets/img/pic10.svg'
import pic11 from '../../assets/img/pic11.svg'
import pic12 from '../../assets/img/pic12.svg'
import heart from '../../assets/img/Heart.svg'
import number from '../../assets/img/Number.svg'
import group from '../../assets/img/Group.svg'



function Destination() {

    const cards = [
        {
            image: pic1,
            place:'Berlin',
            side: 'SIDE',
            date:'Wed 25 Jan-Fri 27 Jan',
            description: 'A tour of the city and its surroundings led by a professional guide ...' 
        },
        {
            image: pic2,
            place:'Paris',
            side: 'SIDE',
            date:'Wed 25 Jan-Fri 27 Jan',
            description: 'A tour of the city and its surroundings led by a professional guide ...' 
        },
        {
            image: pic3,
            place:'Madrid',
            side: 'SIDE',
            date:'Wed 25 Jan-Fri 27 Jan',
            description: 'A tour of the city and its surroundings led by a professional guide ...' 
        },
        {
            image: pic4,
            place:'Barcelona',
            side: 'SIDE',
            date:'Wed 25 Jan-Fri 27 Jan',
            description: 'A tour of the city and its surroundings led by a professional guide ...' 
        },
        {
            image: pic5,
            place:'Rom',
            side: 'SIDE',
            date:'Wed 25 Jan-Fri 27 Jan',
            description: 'A tour of the city and its surroundings led by a professional guide ...' 
        },
        {
            image: pic6,
            place:'Milan',
            side: 'SIDE',
            date:'Wed 25 Jan-Fri 27 Jan',
            description: 'A tour of the city and its surroundings led by a professional guide ...' 
        },
        {
            image: pic7,
            place:'Istanbul',
            side: 'SIDE',
            date:'Wed 25 Jan-Fri 27 Jan',
            description: 'A tour of the city and its surroundings led by a professional guide ...' 
        },
        {
            image: pic8,
            place:'Dubai',
            side: 'SIDE',
            date:'Wed 25 Jan-Fri 27 Jan',
            description: 'A tour of the city and its surroundings led by a professional guide ...' 
        },
        {
            image: pic9,
            place:'Amesterdam',
            side: 'SIDE',
            date:'Wed 25 Jan-Fri 27 Jan',
            description: 'A tour of the city and its surroundings led by a professional guide ...' 
        },
        {
            image: pic10,
            place:'New York',
            side: 'SIDE',
            date:'Wed 25 Jan-Fri 27 Jan',
            description: 'A tour of the city and its surroundings led by a professional guide ...' 
        },
        {
            image: pic11,
            place:'Marollca',
            side: 'SIDE',
            date:'Wed 25 Jan-Fri 27 Jan',
            description: 'A tour of the city and its surroundings led by a professional guide ...' 
        },
        {
            image: pic12,
            place:'Teneriffa',
            side: 'SIDE',
            date:'Wed 25 Jan-Fri 27 Jan',
            description: 'A tour of the city and its surroundings led by a professional guide ...' 
        },


    ];
    const numRows = Math.ceil(cards.length / 4);
    const generateRow = (rowIndex) => {
        const startIdx = rowIndex * 4;
        const endIdx = startIdx + 4;
        const rowCards = cards.slice(startIdx, endIdx);

        return (
            <div key={rowIndex} className="row mb-3">
                {rowCards.map((card,idx) => (
                    <div key={idx} className="col-md-3">
                        <div className="card p-2">
                            <div className="position-relative">
                                <img src={card.image} className="card-img-top" alt={card.title} />
                                <div className="position-absolute top-0 start-0 mt-2 ms-2">
                                    <img src={heart} alt="fav icon"/>
                                </div>
                                <div className={`d-flex justify-content-between position-absolute bottom-0 p-2 ${styles.imgOverlay} w-100`}>
                                    <img src={group} alt="group icons"/>
                                    <img src={number} alt="rate"/>
                                </div>
                            </div>
                            
                            <div className="card-body p-0">
                                <h5 className="card-title fw-bolder pt-2">{card.place}</h5>
                                <p className={`card-text lh-1 ${styles.side}`}>{card.side}</p>
                                <p className="card-text">{card.date}</p>
                                <p className="card-text fw-lighter lh-1 pb-2">{card.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div className="container mt-5">
            <div>
                <h2>Explore Stays In Trending Destinations</h2>
                <p className="lh-1 mb-4 fw-bold">Find Hot Stays!</p>
            </div>
            {Array.from({ length: numRows }, (_,index) => generateRow(index))}
        </div>
    );
}

export default Destination
