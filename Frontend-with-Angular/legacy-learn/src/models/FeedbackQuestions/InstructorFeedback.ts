import { Question } from '../Interfaces/Feedback';
import { FormGroup, FormControl } from '@angular/forms';

export const InstructorFeedback: Question[] = [
  {
    id: 21,
    text: 'Did the instructor demonstrate expertise in the subject matter?',
    name: 'InstructorExpertise',
    options: [
      { label: 'Strongly Agree', value: 'Strongly Agree' },
      { label: 'Agree', value: 'Agree' },
      { label: 'Neutral', value: 'Neutral' },
      { label: 'Disagree', value: 'Disagree' },
      { label: 'Strongly Disagree', value: 'Strongly Disagree' },
    ],
  },
  {
    id: 22,
    text: "How would you rate the instructor's availability for questions and support?",
    name: 'InstructorAvailability',
    options: [
      { label: 'Excellent', value: 'Excellent' },
      { label: 'Good', value: 'Good' },
      { label: 'Fair', value: 'Fair' },
      { label: 'Poor', value: 'Poor' },
    ],
  },
  {
    id: 23,
    text: 'Did the instructor provide clear explanations?',
    name: 'InstructorExplanationsClarity',
    options: [
      { label: 'Strongly Agree', value: 'Strongly Agree' },
      { label: 'Agree', value: 'Agree' },
      { label: 'Neutral', value: 'Neutral' },
      { label: 'Disagree', value: 'Disagree' },
      { label: 'Strongly Disagree', value: 'Strongly Disagree' },
    ],
  },
  {
    id: 24,
    text: "How would you rate the instructor's responsiveness to feedback?",
    name: 'InstructorResponsiveness',
    options: [
      { label: 'Excellent', value: 'Excellent' },
      { label: 'Good', value: 'Good' },
      { label: 'Fair', value: 'Fair' },
      { label: 'Poor', value: 'Poor' },
    ],
  },
  {
    id: 25,
    text: 'Did the instructor engage students effectively during lectures?',
    name: 'InstructorEngagement',
    options: [
      { label: 'Strongly Agree', value: 'Strongly Agree' },
      { label: 'Agree', value: 'Agree' },
      { label: 'Neutral', value: 'Neutral' },
      { label: 'Disagree', value: 'Disagree' },
      { label: 'Strongly Disagree', value: 'Strongly Disagree' },
    ],
  },
  {
    id: 26,
    text: "How would you rate the instructor's encouragement of active participation and discussion?",
    name: 'InstructorParticipationEncouragement',
    options: [
      { label: 'Excellent', value: 'Excellent' },
      { label: 'Good', value: 'Good' },
      { label: 'Fair', value: 'Fair' },
      { label: 'Poor', value: 'Poor' },
    ],
  },
  {
    id: 27,
    text: 'Did the instructor provide constructive feedback on assignments?',
    name: 'InstructorFeedbackQuality',
    options: [
      { label: 'Strongly Agree', value: 'Strongly Agree' },
      { label: 'Agree', value: 'Agree' },
      { label: 'Neutral', value: 'Neutral' },
      { label: 'Disagree', value: 'Disagree' },
      { label: 'Strongly Disagree', value: 'Strongly Disagree' },
    ],
  },
  {
    id: 28,
    text: "Were the instructor's expectations clear?",
    name: 'InstructorExpectationsClarity',
    options: [
      { label: 'Strongly agree', value: 'Strongly Agree' },
      { label: 'agree', value: 'Agree' },
      { label: 'neutral', value: 'Neutral' },
      { label: 'disagree', value: 'Disagree' },
      { label: 'Strongly disagree', value: 'Strongly Disagree' },
    ],
  },
  {
    id: 29,
    text: 'Did the instructor foster a positive learning environment?',
    name: 'InstructorLearningEnvironment',
    options: [
      { label: 'Strongly Agree', value: 'Strongly Agree' },
      { label: 'Agree', value: 'Agree' },
      { label: 'Neutral', value: 'Neutral' },
      { label: 'Disagree', value: 'Disagree' },
      { label: 'Strongly Disagree', value: 'Strongly Disagree' },
    ],
  },
  {
    id: 30,
    text: "What suggestions do you have for improving the instructor's teaching style?",
    name: 'InstructorTeachingStyleImprovements',
    options: [{ label: '', value: 'openEnded' }], // Open ended text input
  },
];