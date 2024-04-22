import React, { useState,useEffect } from 'react';
import { toast } from 'react-toastify';
function Modal({ modalId, mode, currentObject, onAddSubmit }) {
    const handleAddUpdateAndNotify = () => {
        if(mode==="add"){
            toast.success('Destination Added successfully.');
        }
        else if (mode==="edit"){
            toast.success('Destination Updated successfully.');
        }

    };
    
    const [currentDestination, setCurrentDestination] = useState({
        image: '',
        title: '',
        rate: '',
        startDate: '',
        endDate: '',
        description: '',
    });
    
    // Update currentDestination when the currentObject changes
    useEffect(() => {
        if (mode === "edit") {
            setCurrentDestination(currentObject);
        }
    }, [mode, currentObject]);

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent default form submission
    
        // Call the onAddSubmit prop with the currentDestination
        onAddSubmit(currentDestination);

        
        console.log(currentDestination);
        // Clear the form fields
        setCurrentDestination({
            image: '',
            title: '',
            rate: '',
            startDate: '',
            endDate: '',
            description: '',
        });
        
    };


    // const handleImageChange = (e) => {
    //     const file = e.target.files[0];
    //     if (file) {
    //         const reader = new FileReader();
    //         reader.onload = () => {
    //             setCurrentDestination({...currentDestination, image: reader.result});
    //         };
    //         console.log(file);
    //         reader.readAsDataURL(file);
    //         console.log("image path",currentDestination.image);
    //     }
    // };
    // const [filePath, setFilePath] = useState('');
    const handleFileChange = (event) => {
        const file = event.target.files[0]; // Get the selected file
        if (file) {
          // Extract the path from the file object
            const path = URL.createObjectURL(file);
            setCurrentDestination({...currentDestination, image: path});
            console.log(path);
            }
            
        };
    

    return (
        <div>
            <div className='modal fade' id={modalId} tabIndex="-1" aria-labelledby="AddDestinationModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{mode === "add" ? "Add Destination" : "Edit Destination"}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group d-flex flex-column" >
                                    <img src={currentDestination.image} alt='no choosen img'/>
                                    <input type="file" className="form-control-file" id="imageInput" value={currentDestination.image.name} onChange={handleFileChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="titleInput">Title</label>
                                    <input type="text" className="form-control" id="titleInput" value={currentDestination.title} onChange={(e) => setCurrentDestination({ ...currentDestination, title: e.target.value })} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="rateInput">Rate</label>
                                    <input type="number" className="form-control" id="rateInput" value={currentDestination.rate} onChange={(e) => setCurrentDestination({ ...currentDestination, rate: e.target.value })} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="startDateInput">Start Date</label>
                                    <input type="date" className="form-control" id="startDateInput" value={currentDestination.startDate} onChange={(e) => setCurrentDestination({ ...currentDestination, startDate: e.target.value })} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="endDateInput">End Date</label>
                                    <input type="date" className="form-control" id="endDateInput" value={currentDestination.endDate} onChange={(e) => setCurrentDestination({ ...currentDestination, endDate: e.target.value })} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="descriptionInput">Description</label>
                                    <textarea className="form-control" id="descriptionInput" rows="3" value={currentDestination.description} onChange={(e) => setCurrentDestination({ ...currentDestination, description: e.target.value })}></textarea>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="submit" className="btn btn-primary" data-bs-dismiss="modal" onClick={handleAddUpdateAndNotify}>{mode==="add"? "Add Destination": "Save changes"}</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;
