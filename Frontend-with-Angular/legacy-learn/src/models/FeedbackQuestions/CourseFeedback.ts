import { Question } from "../Interfaces/Feedback";

export const CourseFeedback: Question[] = [
  {
    id: 1,
    text: 'How would you rate the clarity of the course objectives?',
    name:'CourseClarity(CC)',
    options: [
      { label: 'Very Clear', value: 'veryClear' },
      { label: 'Somewhat Clear', value: 'somewhatClear' },
      { label: 'Not Clear', value: 'notClear' },
    ],
  },
  {
    id: 2,
    text: 'Did the course materials effectively support your learning?',
    name:'CourseMaterialsSupport(CMS)',
    options: [
      { label: 'Strongly Agree', value: 'CMS_stronglyAgree' },
      { label: 'Agree', value: 'CMS_agree' },
      { label: 'Neutral', value: 'CMS_neutral' },
      { label: 'Disagree', value: 'CMS_disagree' },
      { label: 'Strongly Disagree', value: 'CMS_stronglyDisagree' },
    ],
  },
  {
    id: 3,
    text: 'Were the assignments/projects relevant to the course content?',
    name:'AssignmentsRelevance(AR)',
    options: [
      { label: 'Strongly Agree', value: 'AR_stronglyAgree' },
      { label: 'Agree', value: 'AR_agree' },
      { label: 'Neutral', value: 'AR_neutral' },
      { label: 'Disagree', value: 'AR_disagree' },
      { label: 'Strongly Disagree', value: 'AR_stronglyDisagree' },
    ],
  },
  {
    id: 4,
    text: 'How would you rate the organization of the course materials?',
    name:'CourseMaterialsOrganization(CMO)',
    options: [
      { label: 'Excellent', value: 'CMO_excellent' },
      { label: 'Good', value: 'CMO_good' },
      { label: 'Fair', value: 'CMO_fair' },
      { label: 'Poor', value: 'CMO_poor' },
    ],
  },
  {
    id: 5,
    text: 'Did the course meet your expectations? Why or why not?',
    name:'CourseExpectations',
    options: [{ label: '', value: 'openEnded' }], // Open ended text input
  },
  {
    id: 6,
    text: 'How would you rate the pace of the course?',
    name:'CoursePace(CP)',
    options: [
      { label: 'Too Fast', value: 'CP_tooFast' },
      { label: 'Just Right', value: 'CP_justRight' },
      { label: 'Too Slow', value: 'CP_tooSlow' },
    ],
  },
  {
    id: 7,
    text: 'Did the course help you achieve your learning goals?',
    name:'CourseLearningGoalsAchievement(CLGA)',
    options: [
      { label: 'Yes', value: 'CLGA_yes' },
      { label: 'No', value: 'CLGA_no' },
    ],
  },
  {
    id: 8,
    text: 'Were the assessments fair and accurately assess your understanding?',
    name:'AssessmentsFairness(ASSF)',
    options: [
      { label: 'Strongly Agree', value: 'ASSF_stronglyAgree' },
      { label: 'Agree', value: 'ASSF_agree' },
      { label: 'Neutral', value: 'ASSF_neutral' },
      { label: 'Disagree', value: 'ASSF_disagree' },
      { label: 'Strongly Disagree', value: 'ASSF_stronglyDisagree' },
    ],
  },
  {
    id: 9,
    text: "How would you rate the instructor's communication of course expectations?",
    name:'InstructorCommunication(IC)',
    options: [
      { label: 'Excellent', value: 'IC_excellent' },
      { label: 'Good', value: 'IC_good' },
      { label: 'Fair', value: 'IC_fair' },
      { label: 'Poor', value: 'IC_poor' },
    ],
  },
  {
    id: 10,
    text: 'What suggestions do you have for improving the course?',
    name:'CourseImprovements',
    options: [{ label: '', value: 'openEnded' }], // Open ended text input
  },
];
