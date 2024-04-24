import React,{useState,useEffect} from 'react'
import styles from './DashboardTable.module.css'
import Modal from '../Modal/Modal';
import axios from 'axios';
import DeleteAlert from '../Modal/DeleteAlert';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import editIcon from '../../assets/img/edit.png'
import deleteIcon from '../../assets/img/delete.png'
import { toast } from 'react-toastify';

function DashboardTable() {
    const [modalMode, setModalMode] = useState("add");
    // const [currentObject, setCurrentObject] = useState(null);
    const [destinations,setDestinations]= useState([]);
    const [editDestination, setEditDestination] = useState(null);

    // const handleAdd = () => {
    //     setModalMode("add");
    //     setIsModalOpen(true);
    //     document.body.classList.add('modal-open'); // Add 'modal-open' class to body when modal is open
    // };

    // const handleEdit = (object) => {
    //     setModalMode("edit");
    //     setCurrentObject(object);
    //     setIsModalOpen(true);
    // };

    // const handleCloseModal = () => {
    //     // setIsModalOpen(false);
    //     // setCurrentObject(null);
    //     document.body.classList.remove('modal-open'); // Add 'modal-open' class to body when modal is open
    // };

    const addDestination = async (destination) => {
        try {
            // Post data to API
            const response = await axios.put(`https://travel-agency-app-2ea08-default-rtdb.firebaseio.com/cards/${destination.id}.json`, destination);
            console.log(response);
            // setDestinations((prevDestination)=>[...prevDestination,response.data]);
            setDestinations(prevDestinations => {
                return {
                    ...prevDestinations,
                    [Object.keys(destinations)]: response.data
                };
            });
            toast.success('Destination Added successfully.');
            console.log("bbbbbbbbbb",{[Object.keys(destinations)]: response.data});
            console.log("nnnnnnnnnnnnnnnn",destinations);
        } catch (error) {
            console.error('Error adding Destination:', error);
        }
    };

    // useEffect(() => {fetchData()},[]);

    // const fetchData = async () => {
    //     try {
    //     // get data from the Api
    //     // const response = await axios.get("https://661d850798427bbbef020a05.mockapi.io/Destination");
    //     const response = await axios.get("https://travel-agency-app-2ea08-default-rtdb.firebaseio.com/cards/.json");
    //     // append all users to the setUsers as an array
    //     setDestinations(response.data);
    //     console.log("from get",response.data);
    //     // console.log("nnnn",destinations);
    //     } catch (error) {
    //     console.error("Error fetching data:", error);
    //     }
    // };
    // useEffect(() => {
    //     console.log("nnnn", destinations);
    //     console.log("dddd", destinations.title);
    //     console.log("dddddddddddddddddddddddddd", destinations?.card1?.title);
    //     console.log("bbbbbbbbbbbb",Object.keys(destinations));
    // }, [destinations]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://travel-agency-app-2ea08-default-rtdb.firebaseio.com/cards/.json");
                setDestinations(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
            };
        
            fetchData();
        
            const intervalId = setInterval(fetchData, 500); // Fetch data every 5 seconds
        
            return () => clearInterval(intervalId);
        }, []);


    const deleteDestination= async (destinationId) => {
        try {
            console.log("id",destinationId);
            await axios.delete(`https://travel-agency-app-2ea08-default-rtdb.firebaseio.com/cards/${destinationId}.json`);
            const response = await axios.get("https://travel-agency-app-2ea08-default-rtdb.firebaseio.com/cards/.json");
            setDestinations(response.data);
        } catch (error) {
            console.error('Error deleting Destination:', error);
        }
    };
    
    // const updateDestination = async (updatedDestinationData) => {
    //     try {
    //         await axios.put(`https://travel-agency-app-2ea08-default-rtdb.firebaseio.com/cards/${updatedDestinationData.id}.json`, updatedDestinationData);
    //         const updatedDes = Object.keys(destinations).map(key => {
    //             if (destinations[key] === updatedDestinationData[key]) {
    //                 return { ...destinations, ...response.data };
    //             }
    //             return destinations;
    //             });
    //         // const getData = await axios.get("https://travel-agency-app-2ea08-default-rtdb.firebaseio.com/cards/.json");
    //         //     setDestinations(getData.data);
            
    //         setDestinations(updatedDes);
    //     } catch (error) {
    //         console.error('Error updating destination:', error);
    //     }
    //     };

    const updateDestination = async (updatedDestinationData) => {
        try {
            await axios.put(`https://travel-agency-app-2ea08-default-rtdb.firebaseio.com/cards/${updatedDestinationData.id}.json`, updatedDestinationData);
            
            // const updatedDes = Object.keys(destinations).reduce((acc, key) => {
            //     if (key === updatedDestinationData.id) {
            //         acc[key] = { ...response.data }; // Use response.data directly since it contains the updated destination data
            //     } else {
            //         acc[key] = destinations[key];
            //     }
            //     return acc;
            // }, {});
    
            // setDestinations(updatedDes);
            const response = await axios.get("https://travel-agency-app-2ea08-default-rtdb.firebaseio.com/cards/.json");
                setDestinations(response.data);
                toast.success('Destination Updated successfully.');
                console.log("hello updated");

        } catch (error) {
            console.error('Error updating destination:', error);
        }
    };
    

    const handleEdit = (destination) => {
        setModalMode("edit");
        setEditDestination(destination);
    };

    const handleAdd = () => {
        setModalMode("add");
    };

    return (
        <div className ={`container-fluid p-5`}>
            <div className='d-flex align-items-center mb-2'> 
                <h1 className={`col-md-10 me-5 ${styles.destination}`}>Destinations</h1>
                <div className='justify-content-end ms-5'>
                    <button className={` btn btn-primary ${styles.add}`} data-bs-toggle="modal" data-bs-target="#AddDestinationModal" onClick={handleAdd} >Add Destination</button>
                </div>
                <Modal 
                modalId="AddDestinationModal"
                mode={modalMode}
                currentObject={editDestination}
                onAddSubmit={modalMode==="add"?addDestination:updateDestination}/>
                {/* modal for add button */}   
            </div>
            {/* table content */}
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Rate</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* key is a title rate description etc */}
                    {Object.keys(destinations).length > 0 ? (
                        Object.keys(destinations).map((key) => {
                            const destination = destinations[key];
                            return (
                                <tr key={key}>
                                    <td>{destination.id}</td>
                                    <td><img src={destination.image} alt='destination'/></td>
                                    <td>{destination.title}</td>
                                    <td>{destination.rate}</td>
                                    <td>{destination.startDate}</td>
                                    <td>{destination.endDate}</td>
                                    <td>{destination.description}</td>
                                    <td className='d-flex justify-content-center'>
                                        <div className='me-4' data-bs-toggle="modal" data-bs-target="#AddDestinationModal" onClick={() => handleEdit(destination)}><img className={styles.editButton} src={editIcon} alt='Edit'/></div>
                                        <div data-bs-toggle="modal" data-bs-target={`#deleteAlertModal-${destination.id}`}><img className={styles.editButton} src={deleteIcon} alt='delete'/></div>
                                        <DeleteAlert
                                            modalId={`deleteAlertModal-${destination.id}`}
                                            deleteDes={deleteDestination}
                                            destination={destination}
                                        />          
                                    </td>
                                </tr>
                            );
                        })
                    ) : (
                        <tr>
                            <td colSpan="8" className="text-center">
                                <div className="spinner-border text-primary" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </td>
                        </tr>
                        
                        
                    )}
                </tbody>


            </table>
            <ToastContainer/>
        </div>
    )
}

export default DashboardTable
