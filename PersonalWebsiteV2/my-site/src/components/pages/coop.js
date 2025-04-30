import React from 'react'
// import { Link } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import './coop.css'

const scrollToTop = () => {
    scroll.scrollToTop({ smooth: true, duration: 500 });
};

const coop = () => {
    return (
        <div>
            <h1 onClick={scrollToTop} id='coop-header'>The Co-operators</h1>

            <img id='coop-img' src={process.env.PUBLIC_URL +'/assets/coop-full-logo.jpg'} alt='The co-operators logo' />
            
            <div id='pretext' class="text-sections">
                <h2 id='reflection-header'>Introduction</h2>
                <p>
                    For my fourth and final work term I worked as Business Intelligence Intern for The Co-operators.
                </p>

                <h2 id='reflection-header'>About Employer</h2>
                <p>The Co-operators is a co-operative financial services company that offers insurance and investment products/services. Their goal is help Canadians build and grow their financial strengh and security.</p>
                <p>Even though the company was founded in 1945 the company remains strong in their core principles and co-operative values. The co-operative model makes the company unique and puts people first.</p>
                <img src={process.env.PUBLIC_URL +'/assets/coop-office.jpg'} id='coop-img' alt='the co-operators guelph office'></img>
            </div>



            <section id='wt1' class="text-sections">
                <h2 id='term-header'>Business Intelligence Intern</h2>
                <div id='workterm-buttons'>
                    <ScrollLink to="description" smooth={true} duration={500} id='scroll'><button>Job Description</button></ScrollLink>
                    <ScrollLink to="goals" smooth={true} duration={500} id='scroll'><button>Goals</button></ScrollLink>
                    <ScrollLink to="ca" smooth={true} duration={500} id='scroll'><button>Conclusion + Acknowledgments</button></ScrollLink>
                </div>
                <section id='description' class="text-sections">
                    <h2 id='reflection-header'>Job Description</h2>
                    <p>As a Business Intelligence Intern I worked for the Architecture and Operations Teams. My main responsibility was to work on a metadata historization project, which historized data related to asset management. My main responsibilities for this project included:</p>
                    <p>Leading the development of an ETL pipeline in Azure Data Factory. This pipeline extrats, transforms, and loads data from Sharepoint lists to a staging schema in Azure Synapse.</p>
                    <p>I designed the staging schema by creating a data model that followed a snowflake schema format. This schema used slowly changing dimensions to historize the data.</p>
                    <p>I developed stored procedures in Synapse to transform the staging data into facts that coul be used for Microstrategy reporting.</p>
                    <p>Additonally, I updated the company's internal applications using lowcode platforms like Power Apps and Power Automate.</p>
                </section>
                <section id='goals' class="text-sections">
                    <h2 id='reflection-header'>Goals</h2>
                    <h3 id='goal-header'>1. Explore further opportunities and innovations in tech. </h3>
                    <p>I got to work with so many modern technologies like current database architecture such as data lakes and ETL pipelines. I used a lot of software I have never used before such as Power Apps, Power Automate, and Azure Data Factory. I feel confident in my skills in these new applications and I learned about new innovations in the Business Intelligence field.</p>
                    <h3 id='goal-header'>2. Make connections with people throughout the company.</h3>
                    <p>Even though most of my team did not work in the same office as me, I went out of my way to schedule virtual chats with each of my team members to get to know them better. This has contributed to good working relationships and support. I attended events with other Co-ops and members of other teams and I am happy that I was able to put myself out there given I worked mostly independently. </p>
                    <h3 id='goal-header'>3. Learn more about industry best practices.</h3>
                    <p> Throughout my term I aimed to make sure that not only my work was done but it was done in the most efficient way possible. I always wanted my work to comply with the companies business standards and after receiving supervisor feedback I know I have done that. I am leaving behind cleanly documented work for the next Intern who is taking over my position. Additionally, I am providing knowledge transfers to ensure a smooth transition. I feel confident in entering the industry post grad.</p>
                </section>
            </section>

            <section id='ca' class="text-sections">
                <h2 id='reflection-header'>Conclusion + Acknowledgments</h2>
                <p>I would like to thank my Mentor and Team Lead for all the support throughout my work term. I would like to thank everyone on my team who met with me one on one and made and effort to get to know me better even though a lot of us worked in different locations across Canada. You can tell by working at The Co-operators that their company prioritizes wellness and a healthy work environment. I took part in their free workout classes and acitivities to make the most of my experience and make new connections. I'm thankful for everyone I met and all I have learned!</p>
                <p>Working at The Co-operators was a great experience. I can't wait to take the skills I learned in my final work term and apply them to my proffessional life going forward.</p>
            </section>

        </div>
    )
}

export default coop