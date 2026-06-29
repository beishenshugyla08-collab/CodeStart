import React, { useState } from 'react';
import { Menu, X, ChevronDown, Send, PlayCircle } from 'lucide-react';

export default function CodeStart() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  // Навигация
  const NavBar = () => (
    <nav className="bg-gradient-to-r from-blue-600 to-blue-800 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center font-bold text-blue-600">
              CS
            </div>
            <span className="text-xl font-bold">CodeStart</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <button onClick={() => setActiveSection('home')} className={`hover:text-blue-200 transition ${activeSection === 'home' ? 'border-b-2 pb-1' : ''}`}>
              Басты
            </button>
            <button onClick={() => setActiveSection('courses')} className={`hover:text-blue-200 transition ${activeSection === 'courses' ? 'border-b-2 pb-1' : ''}`}>
              Курстар
            </button>
            <button onClick={() => setActiveSection('about')} className={`hover:text-blue-200 transition ${activeSection === 'about' ? 'border-b-2 pb-1' : ''}`}>
              Туралы
            </button>
            <button onClick={() => setActiveSection('contact')} className={`hover:text-blue-200 transition ${activeSection === 'contact' ? 'border-b-2 pb-1' : ''}`}>
              Байланыс
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <button onClick={() => { setActiveSection('home'); setIsMenuOpen(false); }} className="block w-full text-left px-4 py-2 hover:bg-blue-700 rounded">
              Басты
            </button>
            <button onClick={() => { setActiveSection('courses'); setIsMenuOpen(false); }} className="block w-full text-left px-4 py-2 hover:bg-blue-700 rounded">
              Курстар
            </button>
            <button onClick={() => { setActiveSection('about'); setIsMenuOpen(false); }} className="block w-full text-left px-4 py-2 hover:bg-blue-700 rounded">
              Туралы
            </button>
            <button onClick={() => { setActiveSection('contact'); setIsMenuOpen(false); }} className="block w-full text-left px-4 py-2 hover:bg-blue-700 rounded">
              Байланыс
            </button>
          </div>
        )}
      </div>
    </nav>
  );

  // Басты беті
  const HomePage = () => (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <section className="pt-20 pb-32 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Өз ырсыңызда <span className="text-blue-600">дағдылық</span> өндіріңіз
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                CodeStart - бағдарламалау, дизайн, тіл үйрену, бизнес және басқа да бағыттар бойынша онлайн курстар платформасы.
              </p>
              <button onClick={() => setActiveSection('courses')} className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition transform hover:scale-105">
                Курстарды қарау →
              </button>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-full h-96 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <PlayCircle size={80} className="text-white opacity-80 hover:opacity-100 cursor-pointer transition" />
                </div>
                <img 
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%231e40af' width='400' height='300'/%3E%3Ctext x='200' y='150' font-size='24' fill='white' text-anchor='middle' dominant-baseline='middle'%3EОнлайн Оқу%3C/text%3E%3C/svg%3E"
                  alt="Platform Demo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Неліктен CodeStart?</h2>
          <p className="text-center text-gray-600 mb-12">Төрт негіздеме адалық орталықтарының өтінігін келмеңіз</p>
          
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {['#features-1', '#features-2', '#features-3', '#features-4'].map((link, i) => (
              <a 
                key={i}
                href={link}
                className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition text-center cursor-pointer transform hover:scale-105"
              >
                <div className="text-3xl font-bold text-blue-600 mb-2">{i + 1}</div>
                <div className="text-gray-700 font-semibold">
                  {['Хүннің курс', 'Толық байланыс', 'Сертификат', 'Ынамды'][i]}
                </div>
              </a>
            ))}
          </div>

          <div className="space-y-12">
            <div id="features-1" className="flex
