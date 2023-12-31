import React from 'react'
// import { Link } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import './kenna.css'

const scrollToTop = () => {
    scroll.scrollToTop({ smooth: true, duration: 500 });
};

const kenna = () => {
    return (
        <div>
            <h1 onClick={scrollToTop} id='kenna-header'>Kenna</h1>

            <div id='workterm-buttons'>
                <ScrollLink to="wt1" smooth={true} duration={500} id='scroll'><button>Summer - 2023</button></ScrollLink>
                <ScrollLink to="wt2" smooth={true} duration={500} id='scroll'><button>Fall - 2023</button></ScrollLink>
            </div>

            <img id='kenna-img' src={process.env.PUBLIC_URL +'/assets/kennagroup.jpg'} alt='group of people in halloween costumes' />
            
            <div id='pretext' class="text-sections">
                <h2 id='reflection-header'>Introduction</h2>
                <p>
                    While pursuing my degree in Computer Science I developed an interest in database development. I spent eight months as a Data Management Assistant at Kenna where I
                    got to
                    explore my interest in databases and expand my knowledge on quality assurance (QA) and software
                    testing.
                </p>

                <h2 id='reflection-header'>About Employer</h2>
                <p>Kenna is a marketing solutions provider specializing in customer experience management. For over three decades Kenna has provided their clients data driven solutions and software with an emphasis on customer first thinking.</p>
                <p>Today Kenna works with BASF to create software for clients. For the past two decades Kenna has helped BASF build loyal customer relationships which have increased market success. This is done by gaining the trust of growers through their experience with the brand.</p>
                <img src={process.env.PUBLIC_URL +'/assets/kenna_rainbow.png'} id='kenna-img' alt='infographic showing kennas values'></img>
            </div>



            <section id='wt1' class="text-sections">
                <h2 id='term-header'>Work Term One - Summer 2023</h2>
                <div id='workterm-buttons'>
                    <ScrollLink to="description" smooth={true} duration={500} id='scroll'><button>Job Description</button></ScrollLink>
                    <ScrollLink to="goals" smooth={true} duration={500} id='scroll'><button>Goals</button></ScrollLink>
                    <ScrollLink to="ca" smooth={true} duration={500} id='scroll'><button>Conclusion + Acknowledgments</button></ScrollLink>
                </div>
                <section id='description' class="text-sections">
                    <h2 id='reflection-header'>Job Description</h2>
                    <p>As a Data Management Assistant I worked for Data Solutions under the Data Management Team. These were a few of my main responsibilities:</p>
                    <p>I performed QA and software testing across 5 application to ensure 99% accuracy. I used SQL, Jira, Excel, and IBM Notes as QA tools. I learned about the software development life cycle and how an application goes from development to testing/staging to production.</p>
                    <p>I oversaw the process of setting up employee profiles and territory updates. I managed Jira tickets coordinating responsibilities between Developers and other Data Solutions team members. I performed the overall QA of the tickets.</p>
                    <p>I helped create a database dictionary for employee training. I wrote SQL queries to access data points specific applications. The database dictionary will be a helpful tool for future Kenna employees and I am glad that I got to make an impact to help the company.</p>
                </section>
                <section id='goals' class="text-sections">
                    <h2 id='reflection-header'>Goals</h2>
                    <h3 id='goal-header'>1. Improve my written communication skills so that I can converse effectively in a professional manner.</h3>
                    <p>My written communication skills drastically improved and so has my confidence in my ability to communicate proffesionally. I notice this confidence that I have learned continuing in my life outside of work.</p>
                    <h3 id='goal-header'>2. Improve my Excel skills.</h3>
                    <p>Excel was a tool I had to use daily for QA and because of that my Excel skills improved. The strengthening of these skills allowed me to complete work more efficiently and in a timelier manner. I clearly saw my skills improve in my ability to do data matches over large datasets. Now I can perform QA over large data sets with ease. </p>
                    <h3 id='goal-header'>3. Improve my quantitative literacy to improve my QA skills</h3>
                    <p>Each day I did a sweep of certain tools to determine if there were any bugs. This included comparing data points. I was able to spot bugs so fixes could be implemented to the software. My ability to spot these bugs assured me that I did indeed improve when it comes to quantitative literacy.</p>
                    <img id='kenna-img' src={process.env.PUBLIC_URL +'/assets/baseball.png'} alt='selfie of four people at baseball game'></img>
                </section>
            </section>

            <section id='wt2' class="text-sections">
                <h2 id='term-header'>Work Term Two - Fall 2023</h2>
                <div id='workterm-buttons'>
                    <ScrollLink to="description2" smooth={true} duration={500} id='scroll'><button>Job Description</button></ScrollLink>
                    <ScrollLink to="goals2" smooth={true} duration={500} id='scroll'><button>Goals</button></ScrollLink>
                    <ScrollLink to="ca" smooth={true} duration={500} id='scroll'><button>Conclusion + Acknowledgments</button></ScrollLink>
                </div>
                <section id='description2' class="text-sections">
                    <h2 id='reflection-header'> Job Description</h2>
                    <p>While I held the same title as I did in my Summer 2023 work term, my tasks differed. These were a few of my main tasks:<br/><br/>
                    I performed daily stewardship on an application. My goal was to test the tool each morning to ensure it functioned as intended. This included testing the tool’s functionality and comparing data values to backend SQL data.  I reported bugs then created Jira tickets to monitor the fixes of those bugs.<br/><br/>
                    I performed QA on online retail statements for over 100 retailers. This required 100% accuracy and diligent eye. I did QA in three different stages and tested the tool.
                    <br/><br/>I created a tool update proposal to make the companies main application more user friendly. <br/><br/> Lastly, I preformed a code review on a code base to reduce code redundancy and increase efficiency in updates to the code base.</p>
                </section>
                <section id='goals2' class="text-sections">
                    <h2 id='reflection-header'>Goals</h2>
                    <h3 id='goal-header'>1. Improve my attention to detail</h3>
                    <p>This work term I worked on an application that required high attention to detail. I dealt with data that if not handled carefully will negatively affect clients. I never rushed through my work and I always made sure to double, even triple check when doing QA. The QA I performed was accurate and clients were satisfied. I am able to spot bugs and irregularities. My increased attention to detail will continue to benefit me as I return to school and in my future as a developer.</p>
                    <h3 id='goal-header'>2. Try to solve problems myself first before reaching out</h3>
                    <p>I noticed that during my summer work term I would often ask questions and then a few minutes later realize I could figure out the answer on my own. This work term, instead of immediately asking a question, I took a few minutes to think about my question and see if I could solve the problem on my own. I tried to be more self-sufficient and think before reaching out for help. I noticed doing this helped strengthen my problem solving skills and also increased my confidence.</p>
                    <h3 id='goal-header'>3. Network with more people on different teams</h3>
                    <p>My position on the Data Management team allowed me to make great connections. This term I tried to branch out and make some more connections with developers. I successfully had four coffee chats with developers where I learned valuable lessons about their experience. I also networked with many people on other teams at our in person events such as the farm tour, the Halloween party, and the Christmas party. I feel so lucky that I was able to make all these connections during my work term and take in all the advice everyone I spoke with had to offer.</p>
                </section>
            </section>

            <section id='ca' class="text-sections">
                <h2 id='reflection-header'>Conclusion + Acknowledgments</h2>
                <p>I would like to thank my supervisors Daniel Kostevskii and Nicholas Pulsone for supporting me throughout my work terms, as well as everyone on the Data Management team for being so open and welcoming. All my team members were always there to provide me support and answer any questions. I would like to thank Kenna for fostering such a positive work environment which wouldn’t be the same without all the amazing people that work there. One of the best things about working at Kenna was the company culture and I would like to thank all the people that planned in-person social events despite the remote work environment.</p>
                <p>Working at Kenna was an amazing experience. I made so many amazing connections. I was able to learn a lot about the software development process and view software in a different light. I truly understand the importance of the user's experience thanks to all the QA and software testing I have done. </p>
                <img src={process.env.PUBLIC_URL +'/assets/nick_daniel.png'} alt='three people posed like super heros in halloween costumes' id='kenna-img' className='daniel'/>
            </section>



        </div>
    )
}

export default kenna