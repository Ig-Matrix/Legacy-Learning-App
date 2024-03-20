import { Question } from '../Interfaces/Feedback';
import { FormGroup, FormControl } from '@angular/forms';

export const CourseFeedback: Question[] = [
  {
    id: 1,
    text: 'How would you rate the clarity of the course objectives?',
    name: 'CourseClarity',
    options: [
      { label: 'Very Clear', value: 'Very Clear' },
      { label: 'Somewhat Clear', value: 'Somewhat Clear' },
      { label: 'Not Clear', value: 'Not Clear' },
    ],
  },
  {
    id: 2,
    text: 'Did the course materials effectively support your learning?',
    name: 'CourseMaterialsSupport',
    options: [
      { label: 'Strongly Agree', value: 'Strongly Agree' },
      { label: 'Agree', value: 'Agree' },
      { label: 'Neutral', value: 'Neutral' },
      { label: 'Disagree', value: 'Disagree' },
      { label: 'Strongly Disagree', value: 'Strongly Disagree' },
    ],
  },

  {
    id: 3,
    text: 'How would you rate the organization of the course materials?',
    name: 'CourseMaterialsOrganization',
    options: [
      { label: 'Excellent', value: 'Excellent' },
      { label: 'Good', value: 'Good' },
      { label: 'Fair', value: 'Fair' },
      { label: 'Poor', value: 'Poor' },
    ],
  },
  {
    id: 4,
    text: 'Were the assignments/projects relevant to the course content?',
    name: 'AssignmentsRelevance',
    options: [
      { label: 'Strongly Agree', value: 'Strongly Agree' },
      { label: 'Agree', value: 'Agree' },
      { label: 'Neutral', value: 'Neutral' },
      { label: 'Disagree', value: 'Disagree' },
      { label: 'Strongly Disagree', value: 'Strongly Disagree' },
    ],
  },
  {
    id: 5,
    text: 'Did the course meet your expectations? Why or why not?',
    name: 'CourseExpectations',
    options: [{ label: '', value: 'openEnded' }], // Open ended text input
  },
  {
    id: 6,
    text: 'How would you rate the pace of the course?',
    name: 'CoursePace',
    options: [
      { label: 'Too Fast', value: 'Too Fast' },
      { label: 'Just Right', value: 'Just Right' },
      { label: 'Too Slow', value: 'Too Slow' },
    ],
  },
  {
    id: 7,
    text: 'Did the course help you achieve your learning goals?',
    name: 'CourseLearningGoalsAchievement',
    options: [
      { label: 'Yes', value: 'Yes' },
      { label: 'No', value: 'No' },
    ],
  },
  {
    id: 8,
    text: 'Were the assessments fair and accurately assess your understanding?',
    name: 'AssessmentsFairness',
    options: [
      { label: 'Strongly Agree', value: 'Strongly Agree' },
      { label: 'Agree', value: 'Agree' },
      { label: 'Neutral', value: 'Neutral' },
      { label: 'Disagree', value: 'Disagree' },
      { label: 'Strongly Disagree', value: 'Strongly Disagree' },
    ],
  },
  {
    id: 9,
    text: "How would you rate the instructor's communication of course expectations?",
    name: 'InstructorCommunication',
    options: [
      { label: 'Excellent', value: 'Excellent' },
      { label: 'Good', value: 'Good' },
      { label: 'Fair', value: 'Fair' },
      { label: 'Poor', value: 'Poor' },
    ],
  },
  {
    id: 10,
    text: 'What suggestions do you have for improving the course?',
    name: 'CourseImprovements',
    options: [{ label: '', value: 'openEnded' }], // Open ended text input
  },
];
