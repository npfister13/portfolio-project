import React, { useState } from 'react';
import NavTab from './NavTab';
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
    console.log(skills)
    return (
        <div className="row">
            {
                skills.map((skill) => {
                    if (skill.big){
                        return(
                            <div className="bigSkillWrapper">
                                <Card className="bigSkill flex-row flex-wrap"  key={skill.id}>
                                    <Card.Img variant="top" src={skill.image} />
                                    <Card.Body className="bigSkillExtra">
                                        <Card.Title>{skill.skillName}</Card.Title>
                                        <Card.Text>{skill.description}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        )
                    }
                    else {
                        return null
                    }
                })
            }
        </div>
    )
}

function RenderSmallSkill({skills}) {
    console.log(skills)
    return (
        <div className="row justify-content-center">
            {
                skills.map((skill, index) => {
                    if (!skill.big){
                        return(
                            <div className='smallSkillWrapper'>
                                <Card className="smallSkill" key={skill.id}>
                                    <Card.Header>
                                        <Card.Img variant="top" src={skill.image}/>
                                        <Card.Body className="smallSkillExtra">
                                            <Card.Title>{skill.skillName}</Card.Title>
                                            <Card.Text>{skill.description}</Card.Text>
                                        </Card.Body>
                                    </Card.Header>
                                </Card>
                            </div>
                        )
                    }
                    else {
                        return null
                        
                    }
                })
            }
        </div>
    )
}




export default function Resume() {

    const [skills] = useState(SKILLS)

    return ( 
        <React.Fragment>
            <NavTab />
            <h1>Resume.</h1>
            <div id="resumeWrapper">
                <section id="resume">
                    <div className="container">
                        <DividerWithText>Education</DividerWithText>
                        <div className="row">
                            <div className="col-12">
                                <div className="row">
                                    <div className="col col-10 span-10 positionTitle">
                                        <p>
                                            <strong>NuCamp</strong><br/>
                                            Full Stack Development Bootcamp
                                            <br/>
                                        </p>
                                        <p>
                                            <strong>University of Kentucky</strong><br/>
                                            Master of Business Administration
                                            <br/>
                                        </p>
                                        <p>
                                            <strong>University of Kentucky</strong><br/>
                                            B.S. in Information Communication Technology
                                            <br/>
                                        </p>
                                    </div>
                                    <div className="col col-2 span-2 positionYear">
                                        <p id='nucampYear'>2022</p>
                                        <p id='mbaYear'>2019</p>
                                        <p id='ictYear'>2018</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <DividerWithText>Work</DividerWithText>
                        <div className="row">
                            <div className="col-12">
                                <div className="row">
                                    <div className="col col-10 span-10 positionTitle">
                                        <p>
                                            <strong>Freelance Designer</strong><br/>
                                            Created artwork and animations for video games<br/>
                                            and promotional purposes.
                                        </p>
                                        <p>
                                            <strong>Ozmo Inc.</strong> <br/>
                                            Content Developer Squad Lead
                                            <br/>
                                            Create an emulated experience for smart phones and devices<br/>using Photoshop and
                                            in-house XML.<br/>Managed projects to reach deadlines efficiently.
                                        </p>
                                        <p>
                                            <strong>Schneider Electric</strong><br/>
                                            Project Connect Intern<br/>
                                            Analyzed supply chain methods and researched<br/>manufacturing methods to reduce product deficiencies.
                                        </p>
                                        <p>
                                            <strong>Lexmark</strong><br/>
                                            Project Connect Intern<br/>
                                            Assisted in analying the buyer's journey to develop solutions<br/>
                                            in order to incrase sales and imrpove customer relationships.
                                        </p>
                                        
                                    </div>
                                    <div className="col col-2 span-2 positionYear">
                                        <p id='fdYear'>Present</p>
                                        <p id='ozYear'>Aug 19 - Jul 21</p>
                                        <p id='schYear'>Jan 19 - May 19</p>
                                        <p id='lexYear'>Aug 18 - Dec 18</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <DividerWithText>Skills</DividerWithText>
                        
                    </div>
                    
                </section>
                
            </div>
            <div className="container skillContainer">
                <div className="col-12">
                    <RenderBigSkill skills={skills} />
                </div>
                <div className='col-12'>
                    <RenderSmallSkill skills={skills} />
                </div>
            </div>
        </React.Fragment>
    )
}