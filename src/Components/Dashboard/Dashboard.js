import React from 'react'
import Navbar from '../Navbar/Navbar'
import Copyright from '../Copyright/Copyright'
import DashboardTable from '../DashboardTable/DashboardTable'

function Dashboard() {
    return (
        <div className="d-flex flex-column min-vh-100">
            <Navbar/>
            <DashboardTable/>
            {/* to make copyright fixed at the bottom --> must made class="d-flex flex-column min-vh-100"  at the body 
                and at the copyright class --> className='mt-auto' */}
            <div className='mt-auto'>
                <Copyright/>
            </div>
            
        </div>
    )
}

export default Dashboard
