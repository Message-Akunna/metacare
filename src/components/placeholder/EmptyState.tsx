import React, { FC, Fragment } from 'react'
// 
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
// 
import EmptyStateImage from "../../assets/images/states/no_data.svg"

// 
interface Props {
    message?: string;
}
// empty state place holder
const EmptyState: FC<Props>  = ({
    message,
    ...props
}) => {
    return (
        <Fragment>
            <section className=''>
                <Container>
                    <div className='text-center py-5'>
                        <Image src={EmptyStateImage} width="320" height="auto"/>
                        <h3 className='my-4'>Search other names...</h3>
                        <p className='text-muted'>
                            {
                                message ? message : "User data not found"
                            }
                        </p>
                    </div>
                </Container>
            </section>
        </Fragment>
    )
}

export default EmptyState;