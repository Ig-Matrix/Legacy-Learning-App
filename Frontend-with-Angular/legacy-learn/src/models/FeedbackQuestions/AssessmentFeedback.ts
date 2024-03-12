import { Question } from '../Interfaces/Feedback';
export const AssessmentFeedback: Question[] = [
  {
    id: 11,
    text: 'Were the assessment instructions clear?',
    name: 'AssessmentInstructionsClarity',
    options: [
      { label: 'Yes', value: 'yes' },
      { label: 'No', value: 'no' },
    ],
  },
  {
    id: 12,
    text: 'Did the assessment align with the learning objectives?',
    name: 'AssessmentAlignmentWithObjectives',
    options: [
      { label: 'Strongly Agree', value: 'Strongly agree' },
      { label: 'Agree', value: 'Agree ✅' },
      { label: 'Neutral', value: 'Neutral😐' },
      { label: 'Disagree', value: 'Disagree👎' },
      { label: 'Strongly Disagree', value: 'StronglyDisagree ☹️' },
    ],
  },
  {
    id: 13,
    text: 'Did the assessment accurately measure your understanding of the material?',
    name: 'AssessmentAccuracy',
    options: [
      { label: 'Strongly Agree', value: 'stronglyAgree' },
      { label: 'Agree', value: 'agree' },
      { label: 'Neutral', value: 'neutral' },
      { label: 'Disagree', value: 'disagree' },
      { label: 'Strongly Disagree', value: 'stronglyDisagree' },
    ],
  },
  {
    id: 14,
    text: 'Were you provided with enough time to complete the assessment?',
    name: 'AssessmentTimeProvided',
    options: [
      { label: 'Yes', value: 'yes' },
      { label: 'No', value: 'no' },
    ],
  },
  {
    id: 15,
    text: 'Did the assessment format (e.g., multiple choice, essay) suit the material?',
    name: 'AssessmentFormatSuitability',
    options: [
      { label: 'Excellent', value: 'excellent' },
      { label: 'Good', value: 'good' },
      { label: 'Fair', value: 'fair' },
      { label: 'Poor', value: 'poor' },
    ],
  },
  {
    id: 16,
    text: 'How would you rate the difficulty level of the assessment?',
    name: 'AssessmentDifficultyLevel',
    options: [
      { label: 'Too Difficult', value: 'tooDifficult' },
      { label: 'Just Right', value: 'justRight' },
      { label: 'Too Easy', value: 'tooEasy' },
    ],
  },
  {
    id: 17,
    text: 'Did the assessment provide helpful feedback on your performance?',
    name: 'AssessmentFeedbackOnPerformance',
    options: [
      { label: 'Strongly Agree', value: 'strongly Agree' },
      { label: 'Agree', value: ' agree' },
      { label: 'Neutral', value: ' neutral' },
      { label: 'Disagree', value: ' disagree' },
      { label: 'Strongly Disagree', value: 'strongly Disagree' },
    ],
  },
  {
    id: 18,
    text: 'Were there any technical issues during the assessment?',
    name: 'AssessmentTechnicalIssues',
    options: [
      { label: 'Yes', value: 'yes' },
      { label: 'No', value: 'no' },
    ],
  },
  {
    id: 19,
    text: 'Did the assessment promote critical thinking and problem-solving skills?',
    name: 'AssessmentPromotionOfSkills',
    options: [
      { label: 'Strongly Agree', value: 'Strongly Agree' },
      { label: 'Agree', value: '_agree' },
      { label: 'Neutral', value: '_neutral' },
      { label: 'Disagree', value: '_disagree' },
      { label: 'Strongly Disagree', value: 'Strongly Disagree' },
    ],
  },
  {
    id: 20,
    text: 'What suggestions do you have for improving future assessments?',
    name: 'AssessmentImprovementSuggestions',
    options: [{ label: '', value: 'openEnded' }], // Open ended text input
  },
];
