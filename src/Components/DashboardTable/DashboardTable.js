import React from 'react'
import styles from './DashboardTable.module.css'
function DashboardTable() {
    return (
        <div className ={`container-fluid p-5`}>
            <div className='d-flex justify-content-between align-items-center mb-2'> 
                <h1 className={`${styles.destination}`}>Destinations</h1>
                <button className={`btn btn-primary ${styles.add}`}>Add Destination</button>
            </div>
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
