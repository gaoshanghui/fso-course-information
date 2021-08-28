import React from 'react';
import { CoursePart } from '../types';

const Part = ({ coursePart }: { coursePart: CoursePart }) => {
  const assertNever = (value: never): never => {
    throw new Error(
      `Unhandled discriminated union member: ${JSON.stringify(value)}`
    );
  };

  switch (coursePart.type) {
    case 'normal':
      return (
        <div>
          <h3>
            {coursePart.name} {coursePart.exerciseCount}
          </h3>
          <p>{coursePart.description}</p>
        </div>
      );
    case 'groupProject':
      return (
        <div>
          <h3>
            {coursePart.name} {coursePart.exerciseCount}
          </h3>
          <p>project exercises {coursePart.groupProjectCount}</p>
        </div>
      );
    case 'submission':
      return (
        <div>
          <h3>
            {coursePart.name} {coursePart.exerciseCount}
          </h3>
          <p>{coursePart.description}</p>
          <p>{coursePart.exerciseSubmissionLink}</p>
        </div>
      );
    case 'special':
      return (
        <div>
          <h3>
            {coursePart.name} {coursePart.exerciseCount}
          </h3>
          <p>
            {coursePart.description} {coursePart.requirements.join(', ')}
          </p>
        </div>
      );
    default:
      return assertNever(coursePart);
  }
};

export default Part;
