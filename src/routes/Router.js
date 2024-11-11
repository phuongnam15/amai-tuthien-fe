import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import Loadable from '../layouts/shared/loadable/Loadable';

/* ***Layouts**** */
const FullLayout = Loadable(lazy(() => import('../layouts/full/FullLayout')));
const BlankLayout = Loadable(lazy(() => import('../layouts/blank/BlankLayout')));
const ManageLayout = Loadable(lazy(() => import('../layouts/manage/ManageLayout')));

/** User */
const HomePage = Loadable(lazy(() => import("../views/home/HomePage")));
const AboutPage = Loadable(lazy(() => import("../views/about/AboutPage")));
const ParticipateVolunteerPage = Loadable(lazy(() => import("../views/participate-volunteer/ParticipateVolunteerPage")));
const RegisterVolunteerPage = Loadable(lazy(() => import("../views/register-volunteer/RegisterVolunteerPage")));
const CharityEventPage = Loadable(lazy(() => import("../views/charity-event/CharityEventPage")));
const PostPage = Loadable(lazy(() => import("../views/post/PostPage")));
const ContactPage = Loadable(lazy(() => import("../views/contact/ContactPage")));
const CharityFundDetail = Loadable(lazy(() => import("../views/charity-fund-detail/CharityFundDetail")));
const PostDetail = Loadable(lazy(() => import("../views/post-detail/PostDetail")));
const PagodaPage = Loadable(lazy(() => import("../views/pagoda/PagodaPage")));
const AudioPage = Loadable(lazy(() => import("../views/audio/AudioPage")));
const AudioPageDetail = Loadable(lazy(() => import("../views/audio-detail/AudioDetailPage")));

/** Admin */
const Login = Loadable(lazy(() => import("../views/admin/login/Login")));
const CharityFund = Loadable(lazy(() => import("../views/admin/charity-fund/CharityFund")));

const Router = [
  {
    path: '/',
    element: <FullLayout />,
    children: [
      { path: '/', element: <Navigate to="/trang-chu" /> },
      { path: "/trang-chu", element: <HomePage /> },
      { path: "/gioi-thieu", element: <AboutPage /> },
      { path: "/tam-bo-de", element: <CharityEventPage /> },
      { path: "/trung-thu-cho-em", element: <CharityEventPage /> },
      { path: "/mam-non-tu-bi", element: <CharityEventPage /> },
      { path: "/tham-gia-tu-thien", element: <ParticipateVolunteerPage /> },
      { path: "/dang-ki-tinh-nguyen", element: <RegisterVolunteerPage /> },
      { path: "/chi-tiet-quy-tu-thien/:id", element: <CharityFundDetail />},
      { path: "/tin-tuc", element: <PostPage /> },
      { path: "/chi-tiet-bai-viet/:id", element: <PostDetail /> },
      { path: "/lien-he", element: <ContactPage /> },
      { path: "/chua", element: <PagodaPage />},
      { path: "/phong-cau-sieu", element: <PagodaPage />},
      { path: "/phong-ho-menh-cau-an", element: <PagodaPage />}, 
      { path: "/phong-le-gio-ong-ba", element: <PagodaPage />},
      { path: "/thap-huong", element: <PagodaPage />},
      { path: "/audio", element: <AudioPage />}, 
      { path: "/audio/:id", element: <AudioPageDetail />},
    ],
  },
  {
    path: '/',
    element: <BlankLayout />,
    children: [
      { path: '/dang-nhap', element: <Login /> },
    ],
  },
  {
    path: '/admin',
    element: <ManageLayout />,
    children: [
      { path: 'quy-tu-thien', element: <CharityFund /> },
    ],
  },
];

export default Router;
