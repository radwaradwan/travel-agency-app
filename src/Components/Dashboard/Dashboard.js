import React from 'react'
import Navbar from '../Navbar/Navbar'
import Copyright from '../Copyright/Copyright'
import DashboardTable from '../DashboardTable/DashboardTable'

function Dashboard() {
    return (
        <div class="d-flex flex-column min-vh-100">
            <Navbar/>
            <DashboardTable/>
            <div className='mt-auto'>
                <Copyright/>
            </div>
            
        </div>
    )
}

export default Dashboard
