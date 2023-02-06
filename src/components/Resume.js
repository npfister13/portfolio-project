import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core';
import { SKILLS } from '../shared/skills'

const useStyles = makeStyles(theme => ({
    container: {
        display: "flex",
        alignItems: "center",
    },
    border: {
        borderBottom: "2px solid lightgray",
        width: "100%"
    },
    content: {
        paddingTop: theme.spacing(0.5),
        paddingBottom: theme.spacing(0.5),
        paddingRight: theme.spacing(2),
        paddingLeft: theme.spacing(2),
        fontWeight: 500,
        fontSize: 22,
        color: "lightgray"
    }
}));

const DividerWithText = ({children}) => {
    const classes = useStyles();
    return (
        <div className={classes.container}> 
            <div className={classes.border} />
            <span className={classes.content}>{children}</span>
            <div className={classes.border}/>
        </div>
    )
}

function RenderBigSkill({skills}) {
    return (
        <div className="row">
            {
                skills.map((skill) => {
                    return(
                        <div className='bigSkillWrapper'>
                            <Card className="bigSkill" key={skill.id} tabindex={0}>
                                <Card.Header>
                                    <Card.Img variant="top" src={skill.image}/>
                                    <Card.Body className="bigSkillExtra">
                                        <Card.Title>{skill.skillName}</Card.Title>
                                        {/* <Card.Text><strong>{skill.description}</strong></Card.Text> */}
                                        <Card.Text>{skill.years}</Card.Text>
                                    </Card.Body>
                                </Card.Header>
                            </Card>
                        </div>
                    )
                })
            }
        </div>
    )
}


export default function Resume() {

    const [skills] = useState(SKILLS)

    return ( 
        <React.Fragment>
            <div id="resumeWrapper">
                <div className="container">
                    <a className="btn" href="./assets/npfister 2022 resume.pdf" target="_blank" >Download Resume <i className="fa fa-external-link" aria-hidden="true" /></a>
                    <DividerWithText>Education</DividerWithText>
                    <div className="row">
                        <div className="col-12">
                            {/* <div className="row align-items-center">
                                <div className="col-8 col-sm-10 positionTitle">
                                    <p>
                                        <strong>NuCamp</strong><br/>
                                        Full Stack Development Bootcamp
                                        <br/>
                                    </p>
                                </div>
                                <div className="col col-md-2 positionYear">
                                    <p id='nucampYear'>2022</p>
                                </div>
                            </div> */}
                            <div className="row align-items-center">
                                <div className="col-8 col-sm-10 positionTitle">
                                    <p>
                                        <strong>University of Kentucky</strong><br/>
                                        Master of Business Administration
                                        <br/>
                                    </p>
                                </div>
                                <div className="col col-md-2 positionYear">
                                    <p id='nucampYear'>2019</p>
                                </div>
                            </div>
                            <div className="row align-items-center">
                                <div className="col-8 col-sm-10 positionTitle">
                                    <p>
                                        <strong>University of Kentucky</strong><br/>
                                        B.S. in Information Communication Technology
                                        <br/>
                                    </p>
                                </div>
                                <div className="col col-md-2 positionYear">
                                    <p id='ictYear'>2018</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <DividerWithText>Experience</DividerWithText>
                    <div className="row">
                        <div className="col-12">
                            <div className="row align-items-center">
                                <div className='col-8 col-sm-10 positionTitle'>
                                    <p>
                                        <strong>Full Stack Development Bootcamp, Nucamp</strong><br/>
                                        Used HTML, CSS, JavaScript, Bootstrap, and React to design<br/>and create functional websites.<br/>
                                        Created mobile android applications using React Native.<br/>
                                        Exposed to back-end development languages such as Node.js, <br/>Express, and MongoDB
                                    </p>
                                </div>
                                <div className="col col-md-2 positionYear">
                                    <p id='nuYear'>Oct 21 - Mar 22</p>
                                </div>
                            </div>
                            <div className="row align-items-center">
                                <div className='col-8 col-sm-10 positionTitle'>
                                    <p>
                                        <strong>Freelance Designer</strong><br/>
                                        Created artwork and animations for video games<br/>
                                        and promotional purposes.
                                    </p>
                                </div>
                                <div className="col col-md-2 positionYear">
                                    <p id='fdYear'>Present</p>
                                </div>
                            </div>
                            <div className='row align-items-center'>
                                <div className='col-8 col-sm-10 positionTitle'>
                                    <p>
                                        <strong>Ozmo Inc.</strong> <br/>
                                        Content Developer Squad Lead
                                        <br/>
                                        Create an emulated experience for smart phones and devices<br/>using Photoshop and
                                        in-house XML.<br/>Managed projects to reach deadlines efficiently.
                                    </p>
                                </div>
                                <div className="col col-md-2 positionYear">
                                    <p id='ozYear'>Aug 19 - Jul 21</p>
                                </div>
                            </div>
                            <div className='row align-items-center'>
                                <div className='col-8 col-sm-10 positionTitle'>
                                    <p>
                                        <strong>Schneider Electric</strong><br/>
                                        Project Connect Intern<br/>
                                        Analyzed supply chain methods and researched<br/>manufacturing methods to reduce product deficiencies.
                                    </p>
                                </div>
                                <div className="col col-md-2 positionYear">
                                <p id='schYear'>Jan 19 - May 19</p>
                                </div>
                            </div>
                            <div className='row align-items-center'>
                                <div className='col-8 col-sm-10 positionTitle'>
                                    <p>
                                        <strong>Lexmark</strong><br/>
                                        Project Connect Intern<br/>
                                        Assisted in analying the buyer's journey to develop solutions<br/>
                                        in order to incrase sales and imrpove customer relationships.
                                    </p>
                                </div>
                                <div className="col col-md-2 positionYear">
                                    <p id='lexYear'>Aug 18 - Dec 18</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <DividerWithText>Skills</DividerWithText>
                    
                </div>
            </div>
            <div className="container skillContainer">
                <div className="col-12">
                    <RenderBigSkill skills={skills} />
                </div>
            </div>
        </React.Fragment>
    )
}