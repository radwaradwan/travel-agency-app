import React from 'react'
import { toast } from 'react-toastify';
function DeleteAlert({modalId,deleteDes,destination}) {
    const notify = () => toast.success('Destination deleted successfully.');
    const handleDelete = async () => {
        try {
            await deleteDes(destination.id);
        } catch (error) {
            console.error('Error deleting Destination:', error);
        }
    };
    const handleDeleteAndNotify = () => {
        handleDelete();
        notify();
    };
    return (
        <div className="modal fade" id={modalId}>
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Delete Destination</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <p>Are you sure you want to delete destination with {destination.title}?</p>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary" onClick={handleDeleteAndNotify} data-bs-dismiss="modal">Delete</button>
                </div>
            </div>
            </div>
        </div>
    )
}

export default DeleteAlert
