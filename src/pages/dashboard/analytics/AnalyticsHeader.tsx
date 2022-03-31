import React from 'react';
// 
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// 

const AnalyticsHeader = () => {
  return (
    <section className=''>
        <Container fluid className="app-container">
            <Stack direction="horizontal" className='align-items-center py-4 flex-wrap'>
                <h4 className="text-nowrap">Efficiency Analytics</h4>
                <Stack direction="horizontal" gap={3} className="ms-lg-auto flex-grow-1 flex-lg-grow-0">
                    <Form.Control className="me-auto search-input-left w-75 flex-grow-1" placeholder="Search" type="search" />
                    <Form.Select aria-label="filter option">
                        <option>Filter Options</option>
                    </Form.Select>
                    <div className="vr" />
                    <Button variant="success">Export</Button>
                </Stack>
            </Stack>
        </Container>
    </section>
  )
}

export default AnalyticsHeader