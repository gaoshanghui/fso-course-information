interface CoursePartBase {
  name: string;
  exerciseCount: number;
  type: string;
}

interface CoursePartAdvance extends CoursePartBase {
  description: string;
}

interface CoursePartSpecial extends CoursePartAdvance {
  requirements: string[];
  type: 'special';
}

interface CourseNormalPart extends CoursePartAdvance {
  type: 'normal';
}

interface CourseProjectPart extends CoursePartBase {
  type: 'groupProject';
  groupProjectCount: number;
}

interface CourseSubmissionPart extends CoursePartAdvance {
  type: 'submission';
  exerciseSubmissionLink: string;
}

export type CoursePart =
  | CourseNormalPart
  | CoursePartSpecial
  | CourseProjectPart
  | CourseSubmissionPart;
