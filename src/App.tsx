import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router'
import { Home } from './pages/Home'
import { Voyages } from './pages/Voyages'
import { SocialMission } from './pages/SocialMission'
import { Club } from './pages/Club'
import { MailingList } from './pages/MailingList'
import { BookABerth } from './pages/BookABerth'
import { JoinTheCrew } from './pages/JoinTheCrew'
import { PartnerWithUs } from './pages/PartnerWithUs'
import { AboutUs } from './pages/AboutUs'
import { Ships } from './pages/Ships'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/homepage" element={<Home />} />
        <Route path="/voyages" element={<Voyages />} />
        <Route path="/ships" element={<Ships />} />
        <Route path="/social-mission" element={<SocialMission />} />
        <Route path="/club" element={<Club />} />
        <Route path="/mailing-list" element={<MailingList />} />
        <Route path="/book-a-berth" element={<BookABerth />} />
        <Route path="/join-the-crew" element={<JoinTheCrew />} />
        <Route path="/partner-with-us" element={<PartnerWithUs />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  )
}
