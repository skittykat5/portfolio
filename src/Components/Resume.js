//Page with my About Me, links to resume, Github, maybe other places eventually. 
import React from 'react';
import {
    Container,
    Stack,
    Button
} from 'react-bootstrap'
import pdf from '../Files/Katherine-Resume-2022-03-10.pdf'
 
function Resume () {
    return (
        <Container>
            <br/>
            <Stack gap={3}>
                <h1>My name is Kade...</h1>
                <h4>...and I am a recently-graduated Canadian CSCI and full-stack development student.
                    I have a number of skills in a a variety of areas in programming and technology, and I am excited
                    to show the world what I'm capable of.
                </h4>
                <h4>
                    I have a bachelor's degree in Computer Science from Dalhousie University, and I'm currently working on a certificate in 
                    full-stack development from Nova Scotia Community College to supplement me with additional practical experience.
                </h4>
                <h4>
                    I have put together this simple react app as a place to show off a few of the skills I have learned
                    in my time studying. Check out my resume, or view the code for the site and everything on it by checking
                    out my Github for the page. 
                </h4>
                <Button href={pdf} target="_blank"rel="noreferrer">View My Resume</Button>
                <Button href="https://github.com/skittykat5/portfolio" target="_blank">View Code on Github</Button>
            </Stack>
        </Container>
    )
}
export default Resume;