import React from 'react';
import Part from './Part';
import { CoursePart } from '../types';
// interface CoursePart {
//   name: string;
//   exerciseCount: number;
// }

// interface ContentProps {
//   courseParts: CoursePart[];
// }

const Content = ({ courseParts }: { courseParts: CoursePart[] }) => {
  return (
    <div>
      {courseParts.map((coursePart: CoursePart) => {
        return (
          // <p key={coursePart.name}>
          //   {coursePart.name} {coursePart.exerciseCount}
          // </p>
          <Part key={coursePart.name} coursePart={coursePart} />
        );
      })}
    </div>
  );
};

export default Content;
