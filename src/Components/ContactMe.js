import React from 'react';
import {
    Container,
    Stack
} from 'react-bootstrap'

function ContactMe () {
    return (
        <Container>
            <br/>
            <Stack gap={3}>
                <h1>Contact Me:</h1>
                <h2>Feel free to contact me at any of the following: </h2>
                <h3>
                    Email: bermudakay@gmail.com
                </h3>
                <h3>
                    Phone: (902) 865-7301
                </h3>
            </Stack>
        </Container>
    )
}
export default ContactMe;