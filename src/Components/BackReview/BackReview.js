import React, { useState } from 'react';

function Dashboard() {
    const [showModal, setShowModal] = useState(false);

    const handleAddButtonClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div>
        <button className="btn btn-primary" onClick={handleAddButtonClick}>
            Add
        </button>

        {showModal && (
            <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Add Item</h5>
                    <button type="button" className="close" onClick={handleCloseModal} aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <form>
                    <div className="form-group">
                        <label htmlFor="imageInput">Image</label>
                        <input type="file" className="form-control-file" id="imageInput" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="titleInput">Title</label>
                        <input type="text" className="form-control" id="titleInput" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="rateInput">Rate</label>
                        <input type="number" className="form-control" id="rateInput" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="startDateInput">Start Date</label>
                        <input type="date" className="form-control" id="startDateInput" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="endDateInput">End Date</label>
                        <input type="date" className="form-control" id="endDateInput" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="descriptionInput">Description</label>
                        <textarea className="form-control" id="descriptionInput" rows="3"></textarea>
                    </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Close</button>
                    <button type="button" className="btn btn-primary">Add</button>
                </div>
                </div>
            </div>
            </div>
        )}
        </div>
    );
}

export default Dashboard;
