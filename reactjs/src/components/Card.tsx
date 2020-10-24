import React from 'react';

interface Tech {
    imgSrc:string,
    imgAlt:string,
    name:string,
}

interface Props {
    name:string,
    description:string
    link:string,
    imageSrc:string,
    techList:Tech[]
}

const Card: React.FC<Props> = ({name, description, techList, link, imageSrc}):JSX.Element => {
    return (
        <a
        className="bg-blue-700 rounded max-w-sm overflow-hidden shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
        href={`${link}`}
        target="_blank"
      >
        <img
          src={`${imageSrc}`}
          alt="Sample Project"
          className="w-full h-64 object-cover"
        />
        <h3 className="mt-3 ml-3 font-bold text-indigo-100 text-xl mb-2">
          {name}
        </h3>
        <p className="mx-3 text-indigo-100 text-base pb-3">
          {description}
        </p>
      
        <div className="mx-3 p-2 flex justify-center items-center">
            {techList.map(techItem => 
            <div className="flex flex-col items-center">
            <img className="w-16 h-16" src={techItem.imgSrc} alt={techItem.imgAlt} />
            <span className="mt-2 mx-3 text-indigo-100 text-sm">
              {techItem.name}
            </span>
          </div>
                )}
        </div>
      </a>
      
    )
}

export default Card;