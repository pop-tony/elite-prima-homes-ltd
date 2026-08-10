
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import WhatsAppCTA from './components/layout/WhatsAppCTA'
import HomePage from './pages/HomePage'
import PropertiesPage from './pages/PropertiesPage'
import PropertyDetail from './pages/PropertyDetail'
import DevelopmentsPage from './pages/DevelopmentsPage'
import SellPage from './pages/SellPage'
import ManagementPage from './pages/ManagementPage'
import AgentsPage from './pages/AgentsPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import CareersPage from './pages/CareersPage'
import BlogPage from './pages/BlogPage'
import PrivacyPage from './pages/PrivacyPage'
import TermsPage from './pages/TermsPage'
import Admin from './pages/Admin'
import { ThemeProvider } from './context/ThemeContext'

export default function App(){
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="flex min-h-screen flex-col bg-brick-offwhite text-brick-charcoal">
          <Navbar/>
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage/>}/>
              <Route path="/properties" element={<PropertiesPage/>}/>
              <Route path="/properties/:id" element={<PropertyDetail/>}/>
              <Route path="/developments" element={<DevelopmentsPage/>}/>
              <Route path="/sell" element={<SellPage/>}/>
              <Route path="/manage" element={<ManagementPage/>}/>
              <Route path="/agents" element={<AgentsPage/>}/>
              <Route path="/about" element={<AboutPage/>}/>
              <Route path="/contact" element={<ContactPage/>}/>
              <Route path="/careers" element={<CareersPage/>}/>
              <Route path="/blog" element={<BlogPage/>}/>
              <Route path="/privacy" element={<PrivacyPage/>}/>
              <Route path="/terms" element={<TermsPage/>}/>
              <Route path="/admin" element={<Admin/>}/>
            </Routes>
          </main>
          <Footer/>
          <WhatsAppCTA/>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  )
}
