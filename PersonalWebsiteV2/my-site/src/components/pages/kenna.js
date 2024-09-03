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
                <ScrollLink to="wt1" smooth={true} duration={500} id='scroll'><button>Data Management</button></ScrollLink>
                <ScrollLink to="wt2" smooth={true} duration={500} id='scroll'><button>Application Development</button></ScrollLink>
            </div>

            <img id='kenna-img' src={process.env.PUBLIC_URL +'/assets/kennagroup.jpg'} alt='group of people in halloween costumes' />
            
            <div id='pretext' class="text-sections">
                <h2 id='reflection-header'>Introduction</h2>
                <p>
                    While pursuing my degree in Computer Science I have completed three work terms at Kenna. Two in the Data Management Department and another as an Application Developer.
                </p>

                <h2 id='reflection-header'>About Employer</h2>
                <p>Kenna is a marketing solutions provider specializing in customer experience management. For over three decades Kenna has provided their clients data driven solutions and software with an emphasis on customer first thinking.</p>
                <p>Today Kenna works with BASF to create software for clients. For the past two decades Kenna has helped BASF build loyal customer relationships which have increased market success. This is done by gaining the trust of growers through their experience with the brand.</p>
                <img src={process.env.PUBLIC_URL +'/assets/kenna_rainbow.png'} id='kenna-img' alt='infographic showing kennas values'></img>
            </div>



            <section id='wt1' class="text-sections">
                <h2 id='term-header'>Work Term One and Two - Data Management</h2>
                <div id='workterm-buttons'>
                    <ScrollLink to="description" smooth={true} duration={500} id='scroll'><button>Job Description</button></ScrollLink>
                    <ScrollLink to="goals" smooth={true} duration={500} id='scroll'><button>Goals</button></ScrollLink>
                    <ScrollLink to="ca" smooth={true} duration={500} id='scroll'><button>Conclusion + Acknowledgments</button></ScrollLink>
                </div>
                <section id='description' class="text-sections">
                    <h2 id='reflection-header'>Job Description</h2>
                    <p>As a Data Management Assistant I worked for Data Solutions under the Data Management Team. These were my main responsibilities:</p>
                    <p>I performed QA and software testing across 5 application to ensure 99% accuracy. I used SQL, Jira, Excel, and IBM Notes as QA tools. I learned about the software development life cycle and how an application goes from development to testing/staging to production.</p>
                    <p>I oversaw the process of setting up employee profiles and territory updates. I managed Jira tickets coordinating responsibilities between Developers and other Data Solutions team members. I performed the overall QA of the tickets.</p>
                    <p>I helped create a database dictionary for employee training. I wrote SQL queries to access data points specific applications. The database dictionary will be a helpful tool for future Kenna employees and I am glad that I got to make an impact to help the company.</p>
                    <p>I created a tool update proposal to make the companies main application more user friendly. <br/><br/> Lastly, I preformed a code review on a code base to reduce code redundancy and increase efficiency in updates to the code base.</p>
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
                <h2 id='term-header'>Work Term Three - Application Development</h2>
                <div id='workterm-buttons'>
                    <ScrollLink to="description2" smooth={true} duration={500} id='scroll'><button>Job Description</button></ScrollLink>
                    <ScrollLink to="goals2" smooth={true} duration={500} id='scroll'><button>Goals</button></ScrollLink>
                    <ScrollLink to="ca" smooth={true} duration={500} id='scroll'><button>Conclusion + Acknowledgments</button></ScrollLink>
                </div>
                <section id='description2' class="text-sections">
                    <h2 id='reflection-header'> Job Description</h2>
                    <p>As an Application Developer I created full stack web applications using ReactJS, NodeJS, SQL, HTML/CSS and Lotus Script. 
                        We operated in an agile development environment where I used Jira to track tickets, BitBucket for version control, and Jenkins for deployment.
                    </p>
                    <br></br>
                    <p>Some of my main responsibilites included:</p>
                    <br></br>
                    <p>Leading a web application migration from legacy Lotus Script to modern ReactJS and NodeJS.
                    </p>
                    <br></br>
                    <p>Developing a new web application to enable seamless DocuSign integration for e-documents</p>
                    <br></br>
                    <p>Implementing SQL backend stored procedures for annual program rewards calculators to visualize the data.</p>
                    <br></br>
                    <p>Transitioning front-end Lotus Script code into a SQL stored procedures to simplify development for future developers.</p>
                </section>
                <section id='goals2' class="text-sections">
                    <h2 id='reflection-header'>Goals</h2>
                    <h3 id='goal-header'>1. Improve my programming speed</h3>
                    <p>I used to be an overly cautious programmer and would second guess my work. This work term increased my confidence resulting in an increase in my programming speed. I was able to meet deadlines and complete work in a timely manner. My supervisor praised me for my ability to meet deadlines.</p>
                    <h3 id='goal-header'>2. Solve problems independently using critical thinking</h3>
                    <p>My problem solving skills have increased a lot since beginning this role. The more time I spent working the more comfortable I felt solving problems on my own. I was able to work independently on a lot of tasks and take on large independent development roles.</p>
                    <h3 id='goal-header'>3. Learn as much as possible</h3>
                    <p>I learned so much during my time in this position. Having my first Developer role allowed me to learn a lot about modern and legacy programming technologies. I am more familiar with the software development life cycle. I am much more confident working with SQL and Javascript than I was before. This was also my first work term that wasn't remote so I learned how conduct myself in an in person office environment.</p>
                </section>
            </section>

            <section id='ca' class="text-sections">
                <h2 id='reflection-header'>Conclusion + Acknowledgments</h2>
                <p>I would like to thank my supervisors for all the support throughout my time at Kenna. I would like to thank Kenna for fostering such a positive work environment which wouldn’t be the same without all the amazing people that work there. One of the best things about working at Kenna was the company culture and I would like to thank all the people that planned social events that made work so fun.</p>
                <p>Working at Kenna was an amazing experience and I have learned so much in my three work terms there. </p>
                <img src={process.env.PUBLIC_URL +'/assets/nick_daniel.png'} alt='three people posed like super heros in halloween costumes' id='kenna-img' className='daniel'/>
            </section>

        </div>
    )
}

export default kenna