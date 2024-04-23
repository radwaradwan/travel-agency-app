import React,{useState,useEffect} from "react";
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
import axios from "axios";



function Destination() {
    const cards = [
        {
            image: pic1,
            title:'Berlin',
            side: 'SIDE',
            startDate:'Wed 25 Jan',endDate: ' Fri 27 Jan',
            description: 'A tour of the city and its surroundings led by a professional guide ...' 
        },
        {
            image: pic2,
            title:'Paris',
            side: 'SIDE',
            startDate:'Wed 25 Jan',endDate: ' Fri 27 Jan',
            description: 'A tour of the city and its surroundings led by a professional guide ...' 
        },
        {
            image: pic3,
            title:'Madrid',
            side: 'SIDE',
            startDate:'Wed 25 Jan',endDate: ' Fri 27 Jan',
            description: 'A tour of the city and its surroundings led by a professional guide ...' 
        },
        {
            image: pic4,
            title:'Barcelona',
            side: 'SIDE',
            startDate:'Wed 25 Jan',endDate: ' Fri 27 Jan',
            description: 'A tour of the city and its surroundings led by a professional guide ...' 
        },
        {
            image: pic5,
            title:'Rom',
            side: 'SIDE',
            startDate:'Wed 25 Jan',endDate: ' Fri 27 Jan',
            description: 'A tour of the city and its surroundings led by a professional guide ...' 
        },
        {
            image: pic6,
            title:'Milan',
            side: 'SIDE',
            startDate:'Wed 25 Jan',endDate: ' Fri 27 Jan',
            description: 'A tour of the city and its surroundings led by a professional guide ...' 
        },
        {
            image: pic7,
            title:'Istanbul',
            side: 'SIDE',
            startDate:'Wed 25 Jan',endDate: ' Fri 27 Jan',
            description: 'A tour of the city and its surroundings led by a professional guide ...' 
        },
        {
            image: pic8,
            title:'Dubai',
            side: 'SIDE',
            startDate:'Wed 25 Jan',endDate: ' Fri 27 Jan',
            description: 'A tour of the city and its surroundings led by a professional guide ...' 
        },
        {
            image: pic9,
            title:'Amesterdam',
            side: 'SIDE',
            startDate:'Wed 25 Jan',endDate: ' Fri 27 Jan',
            description: 'A tour of the city and its surroundings led by a professional guide ...' 
        },
        {
            image: pic10,
            title:'New York',
            side: 'SIDE',
            startDate:'Wed 25 Jan',endDate: ' Fri 27 Jan',
            description: 'A tour of the city and its surroundings led by a professional guide ...' 
        },
        {
            image: pic11,
            title:'Marollca',
            side: 'SIDE',
            startDate:'Wed 25 Jan',
            endDate: ' Fri 27 Jan',
            description: 'A tour of the city and its surroundings led by a professional guide ...' 
        },
        {
            image: pic12,
            title:'Teneriffa',
            side: 'SIDE',
            startDate:'Wed 25 Jan',
            endDate: ' Fri 27 Jan',
            description: 'A tour of the city and its surroundings led by a professional guide ...' 
        },


    ];
    const [cardsState,setCardsState]=useState([]);
    // useEffect(() => {fetchData()},[]);

    // const fetchData = async () => {
    //     try {
    //     // get data from the Api
    //     const response = await axios.get("https://travel-agency-app-2ea08-default-rtdb.firebaseio.com/cards/.json");
    //     setCardsState(prevCards => [...prevCards, response.data]);
    //     console.log(response.data);
    //     console.log("bbbbbbbb",[cardsState]);
    //     console.log("llllllllll",cardsState.length);
    //     console.log("rrr",[response.data].length);
    //     } catch (error) {
    //     console.error("Error fetching data:", error);
    //     }
    // };
    // useEffect(() => {},[cardsState]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://travel-agency-app-2ea08-default-rtdb.firebaseio.com/cards/.json");
                const cardsArray = Object.values(response.data);
                setCardsState(cardsArray);
                // setCardsState(response.data);
                console.log(cardsArray);
                
            } catch (error) {
                console.error("Error fetching data:", error);
            }

        };

        fetchData();
        
        console.log("mmm",cardsState);
    
    },[]);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await axios.get("https://travel-agency-app-2ea08-default-rtdb.firebaseio.com/cards/.json");
    //             setCardsState(response.data);
    //             console.log(response.data);
                
    //         } catch (error) {
    //             console.error("Error fetching data:", error);
    //         }
    //         };
        
    //         fetchData();
    //         console.log("llllll",cardsState);
    //         const intervalId = setInterval(fetchData, 500); // Fetch data every 5 seconds
        
    //         return () => clearInterval(intervalId);
    //     }, []);

    // if(cardsState.length>0){
    //     const numRows= Math.ceil([cardsState[0][0]].length / 4);
    //     console.log("mmmmmmm",numRows);
    // }
    const numRows= Math.ceil(cardsState.length / 4);
    const generateRow = (rowIndex) => {
        const startIdx = rowIndex * 4;
        const endIdx = startIdx + 4;
        const rowCards = cardsState.slice(startIdx, endIdx);
        console.log("cards",rowCards);
        console.log("nn",numRows);
        console.log("state",cardsState[0].id);
        console.log("length",[cardsState].length);
        console.log("Row Cards:", rowCards); // Log the rowCards array
        return (
            <div key={rowIndex} className="row mb-lg-3 d-flex">
                {rowCards.map((card) => (
                    
                        
                    <div key={card.id} className="col-md-3">
                    {generateCard(card)}
                </div>
                    
                    
            ))}
            </div>
        );
    };
    
    const generateCard = (card) =>{
        return(
            <div className="card p-2 mb-md-0 mb-3">
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
                                    <h5 className="card-title fw-bolder pt-2">{card.title}</h5>
                                    <p className={`card-text lh-1 ${styles.side}`}>{card.rate}</p>
                                    <div className="d-flex">
                                        <p className="card-text">{card.startDate} &nbsp; </p>
                                        <p className="card-text lh-0">{card.endDate}</p>
                                    </div> 
                                    <p className="card-text fw-lighter lh-1 pb-2">{card.description}</p>
                                </div>
                            </div>

        );
        
    }

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
