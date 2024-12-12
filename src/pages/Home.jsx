import React from "react";
import Section from "../components/Section";
import Header from "./Header";
import '../output.css';

const people = [
  {
    name: 'Leslie Alexander',
    email: 'leslie.alexander@example.com',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    lastSeen: '3h ago',
    lastSeenDateTime: '2023-01-23T13:23Z',
  },
  {
    name: 'Michael Foster',
    email: 'michael.foster@example.com',
    role: 'Co-Founder / CTO',
    imageUrl:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    lastSeen: '3h ago',
    lastSeenDateTime: '2023-01-23T13:23Z',
  },
  {
    name: 'Dries Vincent',
    email: 'dries.vincent@example.com',
    role: 'Business Relations',
    imageUrl:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    lastSeen: null,
  },
  {
    name: 'Lindsay Walton',
    email: 'lindsay.walton@example.com',
    role: 'Front-end Developer',
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    lastSeen: '3h ago',
    lastSeenDateTime: '2023-01-23T13:23Z',
  },
  {
    name: 'Courtney Henry',
    email: 'courtney.henry@example.com',
    role: 'Designer',
    imageUrl:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    lastSeen: '3h ago',
    lastSeenDateTime: '2023-01-23T13:23Z',
  },
  {
    name: 'Tom Cook',
    email: 'tom.cook@example.com',
    role: 'Director of Product',
    imageUrl:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    lastSeen: null,
  },
]

const Home = () => {
  return (
    <>
    <div>
      <h1 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
        {" "}
        Marc Angelo Dilinila{" "}
      </h1>
      <ul class="max-w-md space-y-1 text-gray-500 list-none list-inside dark:text-gray-400">
      <li>
        Nice to meet you! I'm a software developer that's passionate about
        designing and developing usable working solutions for use by clients. I
        have experience working on Microservices that are both scalable and
        quickly deployable. I have worked in the cloud for some time and have
        worked on utilizing AWS services such as S3, ECS, EC2 and Fargate. I
        have also worked on the front end using React and Vue to create a
        seamless user experience. Currently I'm working at Capital One as a
        Senior Software Engineer fulfilling their mission of changing banking
        for good. My main languages are Java and Python
      </li>

      <li>Senior Software Engineer</li>
      <li>Capital One</li>
      <li>
        Led the end-to-end development of cloud-native applications, delivering
        scalable and resilient solutions leveraging AWS ECS and Docker.
        Specialized in building and maintaining RESTful APIs using Java Spring
        Boot, seamlessly integrating microservices across distributed systems
        while utilizing Jenkins to ensure streamlined CI/CD workflows. Crafted
        responsive user interfaces via React and Vue while also using
        PostgresSQL databases via AWS RDS for high availability.
      </li>

      <li>Full-Stack Software Engineer</li>
      <li>Revature</li>
      <li>
        Contributed to the migration of on-premise applications to Azure Cloud,
        enhancing scalability and performance for government platforms. Designed
        and implemented RESTful APIs using Spring and .NET, while modernizing
        legacy components with updated Java tech stacks to improve security and
        efficiency. Developed deployment assets for release management teams and
        provided guidance for application builds in both test and production
        environments. Leveraged Hibernate in Spring to streamline database
        interactions and created database assets such as stored procedures,
        views, and native queries within SQL Server Management Studio. Built
        responsive single-page applications using AngularJS and Angular,
        improving internal web functionalities for federal clients.
        Additionally, supported the transition from Waterfall to Agile
        methodologies, optimizing project delivery and client satisfaction.
      </li>
      </ul>
      <ul role="list" className="divide-y divide-gray-800">
      {people.map((person) => (
        <li key={person.email} className="flex justify-between gap-x-6 py-5">
          <div className="flex min-w-0 gap-x-4">
            <img alt="" src={person.imageUrl} className="size-12 flex-none rounded-full bg-gray-800" />
            <div className="min-w-0 flex-auto">
              <p className="text-sm/6 font-semibold text-white">{person.name}</p>
              <p className="mt-1 truncate text-xs/5 text-gray-400">{person.email}</p>
            </div>
          </div>
          <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
            <p className="text-sm/6 text-white">{person.role}</p>
            {person.lastSeen ? (
              <p className="mt-1 text-xs/5 text-gray-400">
                Last seen <time dateTime={person.lastSeenDateTime}>{person.lastSeen}</time>
              </p>
            ) : (
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="size-1.5 rounded-full bg-emerald-500" />
                </div>
                <p className="text-xs/5 text-gray-400">Online</p>
              </div>
            )}
          </div>
        </li>
      ))}
    </ul>
    </div>
    </>
  );
};

export default Home;
