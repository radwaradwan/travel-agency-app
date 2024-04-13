import React from 'react'
import styles from './PastOffers.module.css'
import num123 from '../../assets/img/123.svg'
import p1 from '../../assets/img/p1.svg'
import p2 from '../../assets/img/p2.svg'
import p3 from '../../assets/img/p3.svg'
import p4 from '../../assets/img/p4.svg'
import p5 from '../../assets/img/p5.svg'
import p6 from '../../assets/img/p6.svg'
import p7 from '../../assets/img/p7.svg'
import p8 from '../../assets/img/p8.svg'
import heart from '../../assets/img/Heart.svg'
import number from '../../assets/img/Number.svg'


function PastOffers() {
    const cards=[
        {
            image: p1,
            title:'Flight'
        },
        {
            image:p2,
            title:'Location'
        },
        {
            image:p3,
            title:'Hotel'
        },
        {
            image:p4,
            title:'Package'
        },
        {
            image:p5,
            title:'Seasonal'
        },
        {
            image:p6,
            title:'Camps'
        },
        {
            image:p7,
            title:'Backpacking'
        },
        {
            image:p8,
            title:'Hostels'
        },
    ]
    const numRows = Math.ceil(cards.length/4);
    const generateRow = (rowIndex) => {
        const startIdx = rowIndex*4;
        const endIdx = startIdx+4;
        const rowCards = cards.slice(startIdx,endIdx);

        return(
            <div key={rowIndex} className='row mb-3'>
                {rowCards.map((card,idx) => (
                    <div key={idx} className='col-md-3'>
                        <div className='card p-2'>
                            <div className='position-relative'>
                                <img src={card.image} className='card-image-top w-100' alt={card.title}/>
                                <div className="position-absolute top-0 start-0 mt-2 ms-2">
                                    <img src={heart} alt="fav icon"/>
                                </div>
                                <div className={`d-flex justify-content-between position-absolute bottom-0 p-2 ${styles.imgOverlay} w-100`}>
                                    <img src={num123} alt="123 icons"/>
                                    <img src={number} alt="rate"/>
                                </div>
                            </div>
                            <div className='card-body p-0'>
                                <h5 className="card-title fw-bolder pt-2">{card.title}</h5>
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
                <h2>Compare The Highest Reviewed Past Offers </h2>
                <p className="lh-1 mb-4 ">Browse By Type</p>
            </div>
        {Array.from({ length: numRows }, (_,index) => generateRow(index))}
        </div>
    );
}

export default PastOffers
