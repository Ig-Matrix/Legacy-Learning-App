import { Question } from "../Interfaces/Feedback";

export const InstructorFeedback: Question[] = [
  {
    id: 21,
    text: 'Did the instructor demonstrate expertise in the subject matter?',
    name: 'InstructorExpertise',
    options: [
      { label: 'Strongly Agree', value: 'stronglyAgree' },
      { label: 'Agree', value: 'agree' },
      { label: 'Neutral', value: 'neutral' },
      { label: 'Disagree', value: 'disagree' },
      { label: 'Strongly Disagree', value: 'stronglyDisagree' },
    ],
  },
  {
    id: 22,
    text: "How would you rate the instructor's availability for questions and support?",
    name: 'InstructorAvailability',
    options: [
      { label: 'Excellent', value: 'excellent' },
      { label: 'Good', value: 'good' },
      { label: 'Fair', value: 'fair' },
      { label: 'Poor', value: 'poor' },
    ],
  },
  {
    id: 23,
    text: 'Did the instructor provide clear explanations?',
    name: 'InstructorExplanationsClarity',
    options: [
      { label: 'Strongly Agree', value: 'stronglyAgree' },
      { label: 'Agree', value: 'agree' },
      { label: 'Neutral', value: 'neutral' },
      { label: 'Disagree', value: 'disagree' },
      { label: 'Strongly Disagree', value: 'stronglyDisagree' },
    ],
  },
  {
    id: 24,
    text: 'Did the instructor engage students effectively during lectures?',
    name: 'InstructorEngagement',
    options: [
      { label: 'Strongly Agree', value: 'stronglyAgree' },
      { label: 'Agree', value: 'agree' },
      { label: 'Neutral', value: 'neutral' },
      { label: 'Disagree', value: 'disagree' },
      { label: 'Strongly Disagree', value: 'stronglyDisagree' },
    ],
  },
  {
    id: 25,
    text: "How would you rate the instructor's responsiveness to feedback?",
    name: 'InstructorResponsiveness',
    options: [
      { label: 'Excellent', value: 'excellent' },
      { label: 'Good', value: 'good' },
      { label: 'Fair', value: 'fair' },
      { label: 'Poor', value: 'poor' },
    ],
  },
  {
    id: 26,
    text: 'Did the instructor encourage active participation and discussion?',
    name: 'InstructorParticipationEncouragement',
    options: [
      { label: 'Strongly Agree', value: 'stronglyAgree' },
      { label: 'Agree', value: 'agree' },
      { label: 'Neutral', value: 'neutral' },
      { label: 'Disagree', value: 'disagree' },
      { label: 'Strongly Disagree', value: 'stronglyDisagree' },
    ],
  },
  {
    id: 27,
    text: 'Did the instructor provide constructive feedback on assignments?',
    name: 'InstructorFeedbackQuality',
    options: [
      { label: 'Strongly Agree', value: 'stronglyAgree' },
      { label: 'Agree', value: 'agree' },
      { label: 'Neutral', value: 'neutral' },
      { label: 'Disagree', value: 'disagree' },
      { label: 'Strongly Disagree', value: 'stronglyDisagree' },
    ],
  },
  {
    id: 28,
    text: "Were the instructor's expectations clear?",
    name: 'InstructorExpectationsClarity',
    options: [
      { label: 'Strongly Agree', value: 'stronglyAgree' },
      { label: 'Agree', value: 'agree' },
      { label: 'Neutral', value: 'neutral' },
      { label: 'Disagree', value: 'disagree' },
      { label: 'Strongly Disagree', value: 'stronglyDisagree' },
    ],
  },
  {
    id: 29,
    text: 'Did the instructor foster a positive learning environment?',
    name: 'InstructorLearningEnvironment',
    options: [
      { label: 'Strongly Agree', value: 'stronglyAgree' },
      { label: 'Agree', value: 'agree' },
      { label: 'Neutral', value: 'neutral' },
      { label: 'Disagree', value: 'disagree' },
      { label: 'Strongly Disagree', value: 'stronglyDisagree' },
    ],
  },
  {
    id: 30,
    text: "What suggestions do you have for improving the instructor's teaching style?",
    name: 'InstructorTeachingStyleImprovements',
    options: [{ label: '', value: 'openEnded' }], // Open ended text input
  },
];
