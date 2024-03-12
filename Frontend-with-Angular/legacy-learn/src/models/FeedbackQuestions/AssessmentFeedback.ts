import { Question } from '../Interfaces/Feedback';
export const AssessmentFeedback: Question[] = [
  {
    id: 11,
    text: 'Were the assessment instructions clear?',
    name: 'AssessmentInstructionsClarity(AIC)',
    options: [
      { label: 'Yes', value: 'AIC_yes' },
      { label: 'No', value: 'AIC_no' },
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
    name: 'AssessmentAccuracy(AA)',
    options: [
      { label: 'Strongly Agree', value: 'AA_stronglyAgree' },
      { label: 'Agree', value: 'AA_agree' },
      { label: 'Neutral', value: 'AA_neutral' },
      { label: 'Disagree', value: 'AA_disagree' },
      { label: 'Strongly Disagree', value: 'AA_stronglyDisagree' },
    ],
  },
  {
    id: 14,
    text: 'Were you provided with enough time to complete the assessment?',
    name: 'AssessmentTimeProvided(ATP)',
    options: [
      { label: 'Yes', value: 'ATP_yes' },
      { label: 'No', value: 'ATP_no' },
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
    name: 'AssessmentFeedbackOnPerformance(AFOP)',
    options: [
      { label: 'Strongly Agree', value: 'AFOP_strongly Agree' },
      { label: 'Agree', value: 'AFOP_agree' },
      { label: 'Neutral', value: 'AFOP_neutral' },
      { label: 'Disagree', value: 'AFOP_disagree' },
      { label: 'Strongly Disagree', value: 'AFOP_strongly Disagree' },
    ],
  },
  {
    id: 18,
    text: 'Were there any technical issues during the assessment?',
    name: 'AssessmentTechnicalIssues(ATI)',
    options: [
      { label: 'Yes', value: 'ATI_yes' },
      { label: 'No', value: 'ATI_no' },
    ],
  },
  {
    id: 19,
    text: 'Did the assessment promote critical thinking and problem-solving skills?',
    name: 'AssessmentPromotionOfSkills(APOS)',
    options: [
      { label: 'Strongly Agree', value: 'APOS_Strongly Agree' },
      { label: 'Agree', value: 'APOS_agree' },
      { label: 'Neutral', value: 'APOS_neutral' },
      { label: 'Disagree', value: 'APOS_disagree' },
      { label: 'Strongly Disagree', value: 'APOS_Strongly Disagree' },
    ],
  },
  {
    id: 20,
    text: 'What suggestions do you have for improving future assessments?',
    name: 'AssessmentImprovementSuggestions',
    options: [{ label: '', value: 'openEnded' }], // Open ended text input
  },
];
