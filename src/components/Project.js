import React from 'react'

function Project() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center mt-5">
      <div className="text-center mb-5">
        <h3 className='fw-bold ' style={{ color: '#EDF4F2',fontSize:'50px' }}>MY Projects</h3>
      </div>
      <div className="w-75 mb-5" style={{ backgroundColor: '#EDF4F2', padding: '50px', borderRadius: '30px' }}>
        {/* Content for the first project can go here */}
      </div>
      <div className="w-75" style={{ backgroundColor: '#EDF4F2', padding: '50px', borderRadius: '30px' }}>
        {/* Content for the second project can go here */}
      </div>
    </div>
  )
}

export default Project