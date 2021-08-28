import React from 'react';
interface CoursePart {
  name: string;
  exerciseCount: number;
}

interface TotalProps {
  courseParts: CoursePart[];
}

const Total = (props: TotalProps) => {
  return (
    <div>
      <h3>
        <span>Number of exercises </span>
        {props.courseParts.reduce(
          (carry, part) => carry + part.exerciseCount,
          0
        )}
      </h3>
    </div>
  );
};

export default Total;
