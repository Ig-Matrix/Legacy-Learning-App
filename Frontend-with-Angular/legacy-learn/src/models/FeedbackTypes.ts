import { AssessmentFeedback } from './FeedbackQuestions/AssessmentFeedback';
import { CourseFeedback } from './FeedbackQuestions/CourseFeedback';
import { InstructorFeedback } from './FeedbackQuestions/InstructorFeedback';

export const feedbackTypes: FeedbackType[] = [
  {
    label: 'Course Feedback',
    value: 'course',
    questions: CourseFeedback,
  },
  {
    label: 'Assessment Feedback',
    value: 'assessment',
    questions: AssessmentFeedback,
  },
  {
    label: 'Instructor Feedback',
    value: 'instructor',
    questions: InstructorFeedback,
  },
];
