import React, { FC } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';
// 
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';

interface Props {
    data: Array<Object>
}

const AnalyticsCard: FC<Props> = ({
    data,
    ...props
}) => {

    return (
        <Card className='app-rounded-10 mb-4'>
            <Row className="">
                <Col lg={9}  className=''>
                    <Card.Body className='h-100'>
                        <Stack direction="horizontal" className='align-items-center flex-wrap'>
                            <h5 className="text-nowrap mb-0">
                                Average response Time <span className="alert alert-success fs-6 py-0 px-2">+4.14%</span>
                            </h5>
                            <Stack direction="horizontal" gap={3} className="ms-md-auto flex-grow-1 flex-md-grow-0">
                                <h6 className="text-nowrap mb-0">
                                    <span className="rounded-1 bg-danger indicator me-1">
                                        <span className="visually-hidden">Priority</span>
                                    </span>
                                    High Priority
                                </h6>
                                <div className="vr" />
                                <Form.Control type="date" size='sm'/>
                            </Stack>
                        </Stack>
                        <div className='pt-3'>
                            <ResponsiveContainer width="100%" height={200} >
                                <LineChart width={500} height={200} data={data} margin={{ left: -20 }}>
                                    <Line type="linear" dataKey="count" stroke="#8884d8" />
                                    <Tooltip />
                                    <CartesianGrid stroke="#ccc" vertical={false}/>
                                    <XAxis dataKey="month" tickLine={false} axisLine={false} />
                                    <YAxis tickLine={false} axisLine={false}/>
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </Card.Body>
                </Col>
                <Col lg={3} className=''>
                    <hr className='d-lg-none d-block bg-secondary' />
                    <Card.Body className='h-100 border-start'>
                        <Stack gap={3} className="flex-lg-column flex-row">
                            <div className='border bg-light p-3 app-rounded-10 flex-fill'>
                                <p className='text-muted'>Average Response Time</p>
                                <h5 className="">30 Mins</h5>
                            </div>
                            <div className='border bg-light p-3 app-rounded-10 flex-fill'>
                                <p className='text-muted'>Response Time</p>
                                <h5 className="">1 Hour 30 Mins</h5>
                            </div>
                        </Stack>
                    </Card.Body>
                </Col>
            </Row>
        </Card>
    )
}

export default AnalyticsCard