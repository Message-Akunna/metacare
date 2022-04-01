import React, { Fragment } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
// react-bootstrap components
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card';
import NavDropdown from 'react-bootstrap/NavDropdown';
// 
import { ReactComponent as AdminIcon } from "../../../assets/images/icons/admin.svg";
import { ReactComponent as KnowledgeBaseIcon } from "../../../assets/images/icons/knowledge-base.svg";
import { ReactComponent as InboxIcon } from "../../../assets/images/icons/agent-inbox.svg";
import { ReactComponent as HelpCenterIcon } from "../../../assets/images/icons/help-center.svg";
import { ReactComponent as AnalyticsIcon } from "../../../assets/images/icons/analytics.svg";

const Sidebar = () => {

    const location = useLocation();

    return (
        <Fragment>
            <Card className="border-0">
                <Card.Body className="border">
                    <Card.Title className="mb-0 fs-6">Metacare</Card.Title>
                    <span className='small text-muted mb-0 d-block'>adeyinka@metacare.app</span>
                </Card.Body>
            </Card>
            <Nav as="nav" defaultActiveKey="/" className="flex-column">
                <NavDropdown autoClose={false} title={<>
                        <span className="d-flex align-items-center">
                            <AdminIcon className='nav-link--img'/>
                            <span className="nav-link--text">Admin</span>
                        </span>
                        <span className='nav-link--chevron'>
                            <i className='bi-chevron-right'></i>
                        </span>
                    </>} className="" align="start">
                    <NavDropdown.Item as={NavLink} to="/admin">
                        <span className="dropdown-text">Admin</span>
                    </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown autoClose={false} title={<>
                        <span className="d-flex align-items-center">
                            <KnowledgeBaseIcon className='nav-link--img'/>
                            <span className="nav-link--text">Knowledge Base</span>
                        </span>
                        <span className='nav-link--chevron'>
                            <i className='bi-chevron-right'></i>
                        </span>
                    </>} className="" align="start">
                    <NavDropdown.Item  as={NavLink} to="/knowledge-base">
                        <span className="dropdown-text">How to</span>
                    </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown autoClose={false} title={<>
                        <span className="d-flex align-items-center">
                            <KnowledgeBaseIcon className='nav-link--img'/>
                            <span className="nav-link--text">Train Sam</span>
                        </span>
                        <span className='nav-link--chevron'>
                            <i className='bi-chevron-right'></i>
                        </span>
                    </>} className="" align="start">
                    <NavDropdown.Item  as={NavLink} to="/knowledge-base">
                        <span className="dropdown-text">Train</span>
                    </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown autoClose={false} title={<>
                        <span className="d-flex align-items-center">
                            <InboxIcon className='nav-link--img'/>
                            <span className="nav-link--text">Agent Inbox</span>
                        </span>
                        <span className='nav-link--chevron'>
                            <i className='bi-chevron-right'></i>
                        </span>
                    </>} className="" align="start">
                    <NavDropdown.Item  as={NavLink} to="/inbox/agent">
                        <span className="dropdown-text">Inbox</span>
                    </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown autoClose={false} title={<>
                        <span className="d-flex align-items-center">
                            <HelpCenterIcon className='nav-link--img'/>
                            <span className="nav-link--text">Help Center</span>
                        </span>
                        <span className='nav-link--chevron'>
                            <i className='bi-chevron-right'></i>
                        </span>
                    </>} className="" align="start">
                    <NavDropdown.Item  as={NavLink} to="/help">
                        <span className="dropdown-text">Help</span>
                    </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown autoClose={false} title={<>
                        <span className="d-flex align-items-center">
                            <AnalyticsIcon className='nav-link--img'/>
                            <span className="nav-link--text">Analytics</span>
                        </span>
                        <span className='nav-link--chevron'>
                            <i className='bi-chevron-right'></i>
                        </span>
                    </>} className={location.pathname === "/" ? "show" : ""} align="start">
                    <NavDropdown.Item  as={NavLink} to="/">
                        <span className="dropdown-text">Teams</span>
                    </NavDropdown.Item>
                    <NavDropdown.Item  as={NavLink} to="/analytics/knowledge-base">
                        <span className="dropdown-text">Knowledge Base</span>
                    </NavDropdown.Item>
                    <NavDropdown.Item  as={NavLink} to="/analytics/training-sam">
                        <span className="dropdown-text">Training Sam</span>
                    </NavDropdown.Item>
                    <NavDropdown.Item  as={NavLink} to="/analytics/help-center">
                        <span className="dropdown-text">Help Center</span>
                    </NavDropdown.Item>
                </NavDropdown>
            </Nav>
        </Fragment>
    )
}

export default Sidebar