import React from 'react';
import Badge from './Badge';
import { badges as allBadges, Moderator } from '../data/data';

const HorizontalCard: React.FC<Moderator> = ({
  imageSrc,
  badges,
  description,
  github,
  website,
  name,
}): JSX.Element => {
  return (
    <div className="bg-gray-0 h-32 md:h-48 lg:h-48">
      <div className="flex flex-inline">
        {imageSrc ? (
          <div className="h-32 w-32 lg:h-48 lg:w-48 md:h-48 md:w-48">
            <img className="rounded-full" src={imageSrc} alt={name} />
          </div>
        ) : null}
        <div className="lg:w-2/3 md:w-2/3 sm:w-2/3 px-5 pt-5 sm:pt-2 lg:pt-5 rounded-r-lg">
          {badges.map((badge, idx) =>
            badge.toLocaleLowerCase() ===
            allBadges.community.title
              .trim()
              .split(' ')
              .join('')
              .toLocaleLowerCase() ? (
              <Badge
                key={idx}
                classes={allBadges.community.classes}
                title={badge}
              />
            ) : badge.toLocaleLowerCase() ===
              allBadges.opensource.title
                .trim()
                .split(' ')
                .join('')
                .toLocaleLowerCase() ? (
              <Badge
                key={idx}
                classes={allBadges.opensource.classes}
                title={badge}
              />
            ) : badge.toLocaleLowerCase() ===
              allBadges.python.title
                .trim()
                .split(' ')
                .join('')
                .toLocaleLowerCase() ? (
              <Badge
                key={idx}
                classes={allBadges.python.classes}
                title={badge}
              />
            ) : badge.toLocaleLowerCase() ===
              allBadges.serverBooster.title
                .trim()
                .split(' ')
                .join('')
                .toLocaleLowerCase() ? (
              <Badge
                key={idx}
                classes={allBadges.serverBooster.classes}
                title={badge}
              />
            ) : null
          )}
          <h1 className="font-medium text-lg sm:text-xl md:text-xl lg:text-xl xl:text-xl font-medium pt-2 sm:pt-1 md:pt-1 lg:pt-1">
            {name}
          </h1>
          <p className="font-light text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm py-1 font-normal hidden md:block lg:block break-words">
            {description}
          </p>
          <div className="hidden lg:inline-flex md:inline-flex flex flex-inline">
            {github ? (
              <div className="flex flex-inline">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://github.com/${github}`}
                >
                  <i className="fa fa-github-alt pr-1 pt-6 text-purple-500 text-lg" />
                  <p className="inline pr-5 pt-5 text-purple-500 text-lg font-medium">
                    GitHub
                  </p>
                </a>
              </div>
            ) : null}
            {website ? (
              <div className="flex flex-inline">
                <a target="_blank" rel="noopener noreferrer" href={website}>
                  <i className="fa fa-link pr-1 pt-6 text-purple-500 text-lg" />
                  <p className="inline pr-5 pt-5 text-purple-500 text-lg font-medium">
                    Website
                  </p>
                </a>
              </div>
            ) : null}
          </div>
          {/* for small screens */}
          <div className="flex-inline lg:hidden sm:flex-inline md:hidden flex flex-inline">
            {github ? (
              <div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/{github}"
                >
                  <i className="fa fa-github-alt pt-5 pr-5 text-purple-500 text-xl"></i>
                </a>
              </div>
            ) : null}
            {website ? (
              <div>
                <a target="_blank" rel="noopener noreferrer" href={website}>
                  <i className="fa fa-link pt-5 pr-5 text-purple-500 text-xl"></i>
                </a>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalCard;
