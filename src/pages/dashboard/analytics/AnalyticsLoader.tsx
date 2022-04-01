import React, { Fragment } from 'react';
// 
import Placeholder from 'react-bootstrap/Placeholder';

const AnalyticsLoader = () => {
  return (
    <Fragment>
        <div className="d-block d-sm-flex align-items-center py-4 border-bottom">
            <Placeholder as="p" className="mb-0 bg-light me-3" animation="wave">
                <Placeholder xs={12} className="mb-2 bg-light" style={{ "height": "9rem", "width": "9rem" }}/>
            </Placeholder>
            <div className="text-center text-sm-start">
                <Placeholder as="p" className="mb-1" animation="wave" style={{ "width": "320px" }}>
                    <Placeholder xs={3} className="bg-faded-dark" /> <Placeholder xs={2} className="bg-faded-dark" /> 
                    <Placeholder xs={3} className="bg-faded-dark" /><Placeholder xs={4} className="bg-faded-dark" /> 
                </Placeholder>
                <div className="text-muted fs-ms">
                    <Placeholder as="p" className="mb-1" animation="glow">
                        <Placeholder xs={2} className="bg-faded-dark" />
                        <Placeholder xs={2} className="ms-2 bg-faded-dark" />
                        <Placeholder xs={2} className="ms-2 bg-faded-dark" />
                        <Placeholder xs={2} className="ms-2 bg-faded-dark" />
                    </Placeholder>
                </div>
                <div className="d-flex justify-content-center justify-content-sm-start pt-3">
                    <Placeholder.Button xs={2} className='bg-faded-info p-4 me-2 border-0' aria-hidden="true" animation="wave"/>
                    <Placeholder.Button xs={2} className='bg-faded-danger p-4 me-2 border-0' aria-hidden="true" animation="wave"/>
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default AnalyticsLoader