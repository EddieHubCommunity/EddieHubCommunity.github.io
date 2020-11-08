import React from 'react';
import './App.css';
import Card from './components/Card';
import HorizontalCard from './components/HorizontalCard';
import Footer from './components/Footer';
import { footerData, moderators, projects } from './data/data';

const App: React.FC = (): JSX.Element => {
  return (
    <>
      <div className="min-w-screen min-h-screen bg-gray-900 flex flex-col items-center justify-center px-5 py-5">
        <img className="w-1/2" src="img/hero.svg" alt="colllaboration sketch" />
        <h3 className="text-3xl font-semibold text-indigo-100 leading-tight relative z-10">
          We believe Open Source is for everyone, yes you!
        </h3>
        <h2 className="text-xl font-semibold text-indigo-100 leading-tight relative z-10">
          OPEN SOURCE is NOT about code, it is about people and collaboration
        </h2>
        <div className="flex flex-col items-center bg-white lg:rounded m-12 py-8 px-4 lg:px-16 lg:max-w-4xl">
          <h2 className="text-4xl mb-8 font-semibold">
            Our
            <span className="text-teal-600 border-b-2 border-teal-600">
              Mission
            </span>
          </h2>
          <p className="text-center text-xl leading-tight">
            We are invested in getting you those green squares 🟩 on GitHub!
            Contributing to Open Source Software (OSS) is a great way for you to
            learn, work with different people and also network.
          </p>
        </div>
        <div id="projects">
          <h2 className="text-center text-3xl font-semibold text-indigo-100 mb-8">
            Our Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
            {projects.map((cardItem, idx) => (
              <Card
                key={idx}
                description={cardItem.description}
                name={cardItem.name}
                techList={
                  cardItem.techList !== undefined ? cardItem.techList : []
                }
                imageSrc={cardItem.imageSrc}
                link={cardItem.link}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center bg-white lg:rounded m-12 py-8 px-4 lg:px-16 lg:max-w-4xl">
          <h2 className="text-center text-4xl py-5 font-semibold">
            How to join our
            <span className="text-teal-600 border-b-2 border-teal-600">
              community
            </span>
            ?
          </h2>
          <p className="text-center text-xl leading-tight">
            Raise an issue on the support repo asking to join (
            <a
              className="text-blue-500 underline"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/EddieJaoudeCommunity/support/issues?q=is%3Aissue+is%3Aclosed+label%3A%22invite+me+to+the+organisation%22"
            >
              examples
            </a>
            ).
          </p>
          <a
            className="mt-5 text-blue-500 bg-transparent border border-solid border-blue-500 hover:bg-blue-500 hover:text-white active:bg-blue-600 font-bold uppercase px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1"
            style={{ transition: 'all 0.15s ease' }}
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/EddieJaoudeCommunity/support/issues"
          >
            Join us.
          </a>
        </div>
        <div className="container my-8 p-5 bg-white rounded-lg">
          <h2 className="text-center text-4xl mb-5 py-5 font-semibold">
            Our Moderators
          </h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2">
            {moderators.map((moderator, idx) => (
              <HorizontalCard
                key={idx}
                badges={moderator.badges}
                description={moderator.description}
                github={moderator.github}
                imageSrc={moderator.imageSrc}
                name={moderator.name}
                website={moderator.website}
              />
            ))}
          </div>
        </div>
        <div className="mt-6">
          {footerData.map((data, idx) => (
            <Footer key={idx} text={data.text} i={data.i} link={data.link} />
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
