export const CourseFeedback: Question[] = [
  {
    id: 1,
    text: 'How would you rate the clarity of the course objectives?',
    options: [
      { label: 'Very Clear', value: 'veryClear' },
      { label: 'Somewhat Clear', value: 'somewhatClear' },
      { label: 'Not Clear', value: 'notClear' },
    ],
  },
  {
    id: 2,
    text: 'Did the course materials effectively support your learning?',
    options: [
      { label: 'Strongly Agree', value: 'stronglyAgree' },
      { label: 'Agree', value: 'agree' },
      { label: 'Neutral', value: 'neutral' },
      { label: 'Disagree', value: 'disagree' },
      { label: 'Strongly Disagree', value: 'stronglyDisagree' },
    ],
  },
  {
    id: 3,
    text: 'Were the assignments/projects relevant to the course content?',
    options: [
      { label: 'Strongly Agree', value: 'stronglyAgree' },
      { label: 'Agree', value: 'agree' },
      { label: 'Neutral', value: 'neutral' },
      { label: 'Disagree', value: 'disagree' },
      { label: 'Strongly Disagree', value: 'stronglyDisagree' },
    ],
  },
  {
    id: 4,
    text: 'How would you rate the organization of the course materials?',
    options: [
      { label: 'Excellent', value: 'excellent' },
      { label: 'Good', value: 'good' },
      { label: 'Fair', value: 'fair' },
      { label: 'Poor', value: 'poor' },
    ],
  },
  {
    id: 5,
    text: 'Did the course meet your expectations? Why or why not?',
    options: [{ label: '', value: 'openEnded' }], // Open ended text input
  },
  {
    id: 6,
    text: 'How would you rate the pace of the course?',
    options: [
      { label: 'Too Fast', value: 'tooFast' },
      { label: 'Just Right', value: 'justRight' },
      { label: 'Too Slow', value: 'tooSlow' },
    ],
  },
  {
    id: 7,
    text: 'Did the course help you achieve your learning goals?',
    options: [
      { label: 'Yes', value: 'yes' },
      { label: 'No', value: 'no' },
    ],
  },
  {
    id: 8,
    text: 'Were the assessments fair and accurately assess your understanding?',
    options: [
      { label: 'Strongly Agree', value: 'stronglyAgree' },
      { label: 'Agree', value: 'agree' },
      { label: 'Neutral', value: 'neutral' },
      { label: 'Disagree', value: 'disagree' },
      { label: 'Strongly Disagree', value: 'stronglyDisagree' },
    ],
  },
  {
    id: 9,
    text: "How would you rate the instructor's communication of course expectations?",
    options: [
      { label: 'Excellent', value: 'excellent' },
      { label: 'Good', value: 'good' },
      { label: 'Fair', value: 'fair' },
      { label: 'Poor', value: 'poor' },
    ],
  },
  {
    id: 10,
    text: 'What suggestions do you have for improving the course?',
    options: [{ label: '', value: 'openEnded' }], // Open ended text input
  },
];
