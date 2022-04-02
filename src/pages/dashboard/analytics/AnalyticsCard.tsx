import React, { FC } from 'react';
import Select, { components }  from 'react-select';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';
// 
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
//
import { ReactComponent as CalenderIcon } from "../../../assets/images/icons/calender.svg";

// 
const DropdownIndicator = (props: any) => {
    return (
      <components.DropdownIndicator {...props}>
        <CalenderIcon />
      </components.DropdownIndicator>
    );
  };

interface Props {
    data: Array<object>,
    title: string,
    color: string,
}

const AnalyticsCard: FC<Props> = ({
    data,
    title,
    color,
    ...props
}) => {

    // const randomColor = RandomDarkHexColor();
    // 

    const options: Array<object> = [
        { value: "day", label: "Today" },
        { value: "week", label: "This Week" },
        { value: "month", label: "This Month" },
        { value: "quarterly", label: "3 Months" },
        { value: "all", label: "All" }
    ];

    // tickCount should be set relative to the range or median of the x-axis data

    return (
        <Card className='app-rounded-10 mb-4'>
            <Row className="">
                <Col lg={9}  className=''>
                    <Card.Body className='h-100'>
                        <Stack direction="horizontal" className='align-items-center flex-wrap'>
                            <h5 className="text-nowrap mb-3 mb-md-0">
                                {title} <span className="alert alert-success fs-6 py-0 px-2">+4.14%</span>
                            </h5>
                            <Stack direction="horizontal" gap={3} className="ms-md-auto flex-grow-1 flex-md-grow-0">
                                <h6 className="text-nowrap mb-0">
                                    <span className="rounded-1 indicator me-1" style={{ "backgroundColor": color }}>
                                        <span className="visually-hidden">Priority</span>
                                    </span>
                                    High Priority
                                </h6>
                                <div className="vr" />
                                <Select
                                    className="app-select-container flex-grow-1 flex-sm-grow-0"
                                    classNamePrefix="app-select"
                                    components={{ DropdownIndicator }}
                                    options={options}
                                    isClearable={true}
                                    isSearchable={false}
                                    placeholder={"Filter options"}
                                    name="filter"
                                />
                            </Stack>
                        </Stack>
                        <div className='pt-3'>
                            <ResponsiveContainer width="100%" height={200} >
                                <LineChart width={500} height={200} data={data} margin={{ left: -20 }}>
                                    <Line type="linear" dataKey="replies" stroke={color} dot={{ stroke: color, strokeWidth: 1, r: 4, strokeDasharray:''}}  activeDot={{ r: 6 }} />
                                    <Tooltip />
                                    <CartesianGrid stroke="#ccc" vertical={false}/>
                                    <XAxis dataKey="month" tickLine={false} axisLine={false} />
                                    <YAxis tickLine={false} axisLine={false}/>
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </Card.Body>
                </Col>
                <Col lg={3} className='d-flex flex-column flex-lg-row'>
                    <hr className='d-lg-none d-block bg-secondary' />
                    <div className="vr d-lg-block d-none bg-secondary m-0"/>
                    <Card.Body className='h-100'>
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