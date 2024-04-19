import React, { useState } from 'react';

function Modal({ modalId, mode, currentObject, onAddSubmit }) {
    const [currentDestination, setCurrentDestination] = useState({
        image: '',
        title: '',
        rate: '',
        startDate: '',
        endDate: '',
        description: '',
    });

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

    return (
        <div>
            <div className='modal fade' id={modalId} tabIndex="-1" aria-labelledby="AddDestinationModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="AddDestinationModalLabel">Modal title</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group d-flex flex-column" >
                                    <img src="/" alt='no choosen img'/>
                                    <input type="file" className="form-control-file" id="imageInput" value={currentDestination.image} onChange={(e)=>setCurrentDestination({...currentDestination,image:e.target.files[0]})} />
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
                                    <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
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
