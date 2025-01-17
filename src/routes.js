import { lazy } from 'react'; // For code-splitting with lazy loading


const Home = lazy(() => import('./pages/Home'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const Course = lazy(() => import('./pages/CourseList'));
const CourseDetail = lazy(() => import('./pages/CourseDetail'));
const Contact = lazy(() => import('./pages/Contact'));
const PageNotFound = lazy(() => import('./pages/PageNotFound'));

const Faq = lazy(() => import('./pages/support/Faq'));
const TAndCond = lazy(() => import('./pages/support/TAndCond'))
const PrivacyPolicy = lazy(() => import('./pages/support/PrivacyPolicy'))

const MyAccount = lazy(() => import('./pages/MyAccount'))

const routes = [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: '/about',
        exact: true,
        component: AboutUs
    },
    {
        path: '/courses',
        exact: true,
        component: Course
    },
    {
        path: '/course/:course_name',
        exact: true,
        component: CourseDetail
    },
    {
        path: '/contact',
        exact: true,
        component: Contact,
        protected: true,
    },
    {
        path: '/TermsAndConditions',
        exact: true,
        component: TAndCond,
        protected: true,
    },
    {
        path: '/PrivacyPolicy',
        exact: true,
        component: PrivacyPolicy,
        protected: true,
    },
    {
        path: '/FAQ',
        exact: true,
        component: Faq,
        protected: true,
    },
    {
        path: '/my-account',
        exact: true,
        component: MyAccount,
        protected: true,
    },
    {
        path: '*',
        exact: true,
        component: PageNotFound,
        protected: true,
    },
];

export default routes;
