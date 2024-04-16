import React from 'react'
import styles from './DashboardTable.module.css'
function DashboardTable() {
    return (
        <div className ={`container-fluid p-5`}>
            <div className='d-flex justify-content-between align-items-center mb-2'> 
                <h1 className={`${styles.destination}`}>Destinations</h1>
                <button className={`btn btn-primary ${styles.add}`} data-bs-toggle="modal" data-bs-target="AddDestinationModal">Add Destination</button>
                {/* modal for add button */}
                <div className="modal" id="AddDestinationModal">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="form-group d-flex flex-column">
                                        <img src="/" alt='no choosen img'/>
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
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
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
                        <td>hello</td>
                        <td>hello</td>
                        <td>hello</td>
                        <td>hello</td>
                        <td>hello</td>
                        <td>hello</td>
                        <td>hello</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default DashboardTable
