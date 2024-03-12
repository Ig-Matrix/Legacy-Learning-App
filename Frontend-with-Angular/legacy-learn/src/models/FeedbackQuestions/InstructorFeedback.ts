import { Question } from "../Interfaces/Feedback";

export const InstructorFeedback: Question[] = [
  {
    id: 21,
    text: 'Did the instructor demonstrate expertise in the subject matter?',
    name: 'InstructorExpertise(IE)',
    options: [
      { label: 'Strongly Agree', value: 'IE_stronglyAgree' },
      { label: 'Agree', value: 'IE_agree' },
      { label: 'Neutral', value: 'IE_neutral' },
      { label: 'Disagree', value: 'IE_disagree' },
      { label: 'Strongly Disagree', value: 'IE_stronglyDisagree' },
    ],
  },
  {
    id: 22,
    text: "How would you rate the instructor's availability for questions and support?",
    name: 'InstructorAvailability(IA)',
    options: [
      { label: 'Excellent', value: 'IA_excellent' },
      { label: 'Good', value: 'IA_good' },
      { label: 'Fair', value: 'IA_fair' },
      { label: 'Poor', value: 'IA_poor' },
    ],
  },
  {
    id: 23,
    text: 'Did the instructor provide clear explanations?',
    name: 'InstructorExplanationsClarity(IEC)',
    options: [
      { label: 'Strongly Agree', value: 'IEC_stronglyAgree' },
      { label: 'Agree', value: 'IEC_agree' },
      { label: 'Neutral', value: 'IEC_neutral' },
      { label: 'Disagree', value: 'IEC_disagree' },
      { label: 'Strongly Disagree', value: 'IEC_stronglyDisagree' },
    ],
  },
  {
    id: 24,
    text: 'Did the instructor engage students effectively during lectures?',
    name: 'InstructorEngagement(IEG)',
    options: [
      { label: 'Strongly Agree', value: 'IEG_stronglyAgree' },
      { label: 'Agree', value: 'IEG_agree' },
      { label: 'Neutral', value: 'IEG_neutral' },
      { label: 'Disagree', value: 'IEG_disagree' },
      { label: 'Strongly Disagree', value: 'IEG_stronglyDisagree' },
    ],
  },
  {
    id: 25,
    text: "How would you rate the instructor's responsiveness to feedback?",
    name: 'InstructorResponsiveness(IRSVN)',
    options: [
      { label: 'Excellent', value: 'IRSVN_excellent' },
      { label: 'Good', value: 'IRSVN_good' },
      { label: 'Fair', value: 'IRSVN_fair' },
      { label: 'Poor', value: 'IRSVN_poor' },
    ],
  },
  {
    id: 26,
    text: 'Did the instructor encourage active participation and discussion?',
    name: 'InstructorParticipationEncouragement(IPE)',
    options: [
      { label: 'Strongly Agree', value: 'IPE_stronglyAgree' },
      { label: 'Agree', value: 'IPE_agree' },
      { label: 'Neutral', value: 'IPE_neutral' },
      { label: 'Disagree', value: 'IPE_disagree' },
      { label: 'Strongly Disagree', value: 'IPE_stronglyDisagree' },
    ],
  },
  {
    id: 27,
    text: 'Did the instructor provide constructive feedback on assignments?',
    name: 'InstructorFeedbackQuality(IFQ)',
    options: [
      { label: 'Strongly Agree', value: 'IFQ_stronglyAgree' },
      { label: 'Agree', value: 'IFQ_agree' },
      { label: 'Neutral', value: 'IFQ_neutral' },
      { label: 'Disagree', value: 'IFQ_disagree' },
      { label: 'Strongly Disagree', value: 'IFQ_stronglyDisagree' },
    ],
  },
  {
    id: 28,
    text: "Were the instructor's expectations clear?",
    name: 'InstructorExpectationsClarity(IECTY)',
    options: [
      { label: 'Strongly Agree', value: 'IECTY_stronglyAgree' },
      { label: 'Agree', value: 'IECTY_agree' },
      { label: 'Neutral', value: 'IECTY_neutral' },
      { label: 'Disagree', value: 'IECTY_disagree' },
      { label: 'Strongly Disagree', value: 'IECTY_stronglyDisagree' },
    ],
  },
  {
    id: 29,
    text: 'Did the instructor foster a positive learning environment?',
    name: 'InstructorLearningEnvironment(ILE)',
    options: [
      { label: 'Strongly Agree', value: 'ILE_stronglyAgree' },
      { label: 'Agree', value: 'ILE_agree' },
      { label: 'Neutral', value: 'ILE_neutral' },
      { label: 'Disagree', value: 'ILE_disagree' },
      { label: 'Strongly Disagree', value: 'ILE_stronglyDisagree' },
    ],
  },
  {
    id: 30,
    text: "What suggestions do you have for improving the instructor's teaching style?",
    name: 'InstructorTeachingStyleImprovements',
    options: [{ label: '', value: 'openEnded' }], // Open ended text input
  },
];
