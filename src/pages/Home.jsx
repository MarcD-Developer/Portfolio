import React from 'react';
import Section from '../components/Section';

const Home = () => {
    return (
        <Section title="Marc Angelo Dilinila">
            <p>Nice to meet you! I'm a software developer that's passionate about designing and developing usable working solutions
                for use by clients.  I have experience working on Microservices that are both scalable and quickly deployable. I have worked in the cloud for some time
                and have worked on utilizing AWS services such as S3, ECS, EC2 and Fargate. I have also worked on the front end using React and Vue to create a seamless user experience.
                Currently I'm working at Capital One as a Senior Software Engineer fulfilling their mission of changing banking for good. My main languages are Java and Python
            </p>

            <p>Senior Software Engineer</p>
            <p>Capital One</p>
            <p>Led the end-to-end development of cloud-native applications, delivering scalable and resilient solutions leveraging AWS ECS and Docker. 
                Specialized in building and maintaining RESTful APIs using Java Spring Boot, seamlessly integrating microservices across distributed systems while utilizing 
                Jenkins to ensure streamlined CI/CD workflows. Crafted responsive user interfaces via React and Vue while also using PostgresSQL databases via AWS RDS for high availability.</p>
            
            <p>Full-Stack Software Engineer</p>
            <p>Revature</p>
            <p>Contributed to the migration of on-premise applications to Azure Cloud, enhancing scalability and performance for government platforms. Designed and implemented RESTful APIs using Spring and .NET, while modernizing legacy components with updated Java tech stacks to improve security and efficiency.
                Developed deployment assets for release management teams and provided guidance for application builds in both test and production environments. 
                Leveraged Hibernate in Spring to streamline database interactions and created database assets such as stored procedures, views, and native queries within SQL Server Management Studio.
                Built responsive single-page applications using AngularJS and Angular, improving internal web functionalities for federal clients. Additionally, supported the transition from Waterfall to Agile methodologies, optimizing project delivery and client satisfaction.</p>
        </Section>
    );
};

export default Home;