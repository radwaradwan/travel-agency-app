import React,{useState,useEffect} from 'react'
import styles from './DashboardTable.module.css'
import Modal from '../Modal/Modal';
import axios from 'axios';
import DeleteAlert from '../Modal/DeleteAlert';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import editIcon from '../../assets/img/edit.png'
import deleteIcon from '../../assets/img/delete.png'

function DashboardTable() {
    // const [isModalOpen, setIsModalOpen] = useState(false);
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
            const response = await axios.post("https://travel-agency-app-2ea08-default-rtdb.firebaseio.com/.json", destination);
            console.log(response);
            setDestinations((prevDestination)=>[...prevDestination,response.data])
            console.log("nnnnnnnnnnnnnnnn",destinations);
        } catch (error) {
            console.error('Error adding Destination:', error);
        }
    };

    useEffect(() => {fetchData()},[]);

    const fetchData = async () => {
        try {
        // get data from the Api
        // const response = await axios.get("https://661d850798427bbbef020a05.mockapi.io/Destination");
        const response = await axios.get("https://travel-agency-app-2ea08-default-rtdb.firebaseio.com/.json");
        // append all users to the setUsers as an array
        setDestinations(response.data);
        console.log("from get",response.data);
        console.log("nnnn",destinations);
        } catch (error) {
        console.error("Error fetching data:", error);
        }
    };


    const deleteDestination= async (destinationId) => {
        try {
            await axios.delete(`https://661d850798427bbbef020a05.mockapi.io/Destination/${destinationId}`);
            setDestinations(destinations.filter(destination => destination.id !== destinationId));
        } catch (error) {
            console.error('Error deleting Destination:', error);
        }
    };
    
    const updateDestination = async (updatedDestinationData) => {
        try {
            const response = await axios.put(`https://661d850798427bbbef020a05.mockapi.io/Destination/${updatedDestinationData.id}`, updatedDestinationData);
            const updatedDes = destinations.map(destination => {
                if (destination.id === updatedDestinationData.id) {
                    return { ...destination, ...response.data };
                }
                return destination;
                });
            setDestinations(updatedDes);
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
                    <tr>
                    <td>{destinations.title}</td>
                    <td>{destinations.rate}</td>
                    <td className='d-flex justify-content-center'>
                        <div className='me-4' data-bs-toggle="modal" data-bs-target="#AddDestinationModal" onClick={() => handleEdit(destinations)}><img className={styles.editButton} src={editIcon} alt='Edit'/></div>
                        <div data-bs-toggle="modal" data-bs-target="#deleteAlertModal"><img className={styles.editButton} src={deleteIcon} alt='delete'/></div>
                        <DeleteAlert
                            modalId="deleteAlertModal"
                            deleteDes={deleteDestination}
                            destination={destinations}
                        />          
                    </td>
                    </tr>
                    {destinations.length > 0 ? (
                        destinations.map((destination) => (
                            <tr key={destination.id}>
                                <td><img src={destination.image} alt='detination'/></td>
                                <td>{destination.title}</td>
                                <td>{destination.rate}</td>
                                <td>{destination.startDate}</td>
                                <td>{destination.endDate}</td>
                                <td>{destination.description}</td>
                                <td className='d-flex justify-content-center'>
                                    <div className='me-4' data-bs-toggle="modal" data-bs-target="#AddDestinationModal" onClick={() => handleEdit(destinations)}><img className={styles.editButton} src={editIcon} alt='Edit'/></div>
                                    <div data-bs-toggle="modal" data-bs-target="#deleteAlertModal"><img className={styles.editButton} src={deleteIcon} alt='delete'/></div>
                                    <DeleteAlert
                                        modalId="deleteAlertModal"
                                        deleteDes={deleteDestination}
                                        destination={destinations}
                                    />          
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="7">No destinations available</td>
                        </tr>
                    )}
                </tbody>

            </table>
            <ToastContainer/>
        </div>
    )
}

export default DashboardTable
