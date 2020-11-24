import React, { useState } from 'react';
import pic1 from '../../../resource/project/creative-agency.PNG';
import pic2 from '../../../resource/project/VolunteerNetwork.PNG';
import pic3 from '../../../resource/project/apartment-hunt.PNG';
import pic4 from '../../../resource/project/red-onion.PNG';
import pic5 from '../../../resource/project/antena-design.PNG';
import pic6 from '../../../resource/project/school.PNG';
import ProjectCard from '../ProjectCard/ProjectCard';
// import ProjectCard from '../../ProjectCard/ProjectCard';

const Project = () => {
    const [projectInfo] = useState([
        {
            image: pic1,
            projectName: 'Creative Agency',
            projectDetails: 'A Complete MERN project where a user can select and order any agency service.Users can give a review of those services. Admin can add new service and see full user ordered services list.Admin can see full user ordered services list. Admin can make another admin as well.',
            githubLink: 'https://github.com/rezafset/creative-agency-client',
            websiteLink: 'https://reza-creative-agency.web.app/',
        },
        {
            image: pic2,
            projectName: 'Volunteer Network',
            projectDetails: 'A Complete MERN project where a user can choose any event and register as a volunteer.User can see all events that he/she selected. Admin can add a new event as required. Newly added events are shown on the website. Admin can see a full volunteer register list.',
            githubLink: 'https://github.com/rezafset/volunteer-network',
            websiteLink: 'https://reza-volunteer-network.web.app/',
        },
        {
            image: pic3,
            projectName: 'Apartment Hunt',
            projectDetails: 'A complete MERN responsive project using react bootstrap. Display different apartments for rent on the home page. Here users are allow to choose anyone of them. Users are authenticated for a better experience. Users can book one or more apartments.',
            githubLink: 'https://github.com/rezafset/apartment-hunt-client',
            websiteLink: 'https://apartment-hunt-ee46c.web.app/',
        },
        {
            image: pic4,
            projectName: 'Hot Onion Website',
            projectDetails: 'A responsive restaurant website using react with firebase authentication where a user can order their favorite food as required.Users have options for different categories of food like breakfast, lunch, and dinner.Before order, the user need to sign up on the website.',
            githubLink: 'https://github.com/rezafset/hot-onion-project',
            websiteLink: 'https://reza-hot-onion-food.web.app/',
        },

        {
            image: pic5,
            projectName: 'Athena Design',
            projectDetails: "A Complete mobile responsive single page application using React Bootstrap called 'Athena Design'. Here a user can see different services, running project of a team, company's achievement and some pakages.",
            githubLink: 'https://github.com/rezafset/athena-design',
            websiteLink: 'https://spa-athena-design.netlify.app/',
        },

        {
            image: pic6,
            projectName: 'E School Website',
            projectDetails: 'A responsive E School Website using Bootstrap where user can see different school activities. User also get information of different online courses.',
            githubLink: 'https://github.com/rezafset/e-school-website',
            websiteLink: 'https://rezafset.github.io/e-school-website/',
        },
    ])
    return (

        <div style={{ backgroundColor: '#F4F7FC' }}>
            <div id="project" className="container pt-5" style={{ overflowX: 'hidden' }}>
                <h1 className="text-center text-uppercase" >Latest Project</h1>
                <div className="row mt-5">
                    {
                        projectInfo.map(projectInfo => <ProjectCard key={projectInfo.image} projectInfo={projectInfo}></ProjectCard>)
                    }
                </div>
            </div>
        </div >
    );
};

export default Project;