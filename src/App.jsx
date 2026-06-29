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
            <div id="features-1" className="flex md:flex-row flex-col gap-8 items-center">
              <img 
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='250'%3E%3Crect fill='%23e0e7ff' width='300' height='250'/%3E%3Ccircle cx='150' cy='125' r='60' fill='%230066ff'/%3E%3Ctext x='150' y='135' font-size='40' fill='white' text-anchor='middle' dominant-baseline='middle'%3E📚%3C/text%3E%3C/svg%3E"
                alt="Quality Courses"
                className="w-72 h-56 rounded-lg shadow-lg"
              />
              <div>
                <h3 className="text-2xl font-bold mb-4">1000+ Сапалы Курс</h3>
                <p className="text-gray-600 mb-4">Өндіктік маманы курстарын алыңыз. Бағдарламалау, веб-әзәбеліктік, мобильді әпті, деректер ылғалық, AI/ML және т.б.</p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Интерактивті бейнесабақтар</li>
                  <li>✓ Практикалық жоба</li>
                  <li>✓ Қайта қарау мүмкіндігі</li>
                </ul>
              </div>
            </div>

            <div id="features-2" className="flex md:flex-row-reverse flex-col gap-8 items-center">
              <img 
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='250'%3E%3Crect fill='%23fef3c7' width='300' height='250'/%3E%3Crect x='50' y='50' width='200' height='150' fill='%23f59e0b' rx='10'/%3E%3Ctext x='150' y='140' font-size='40' fill='white' text-anchor='middle' dominant-baseline='middle'%3E👨‍🏫%3C/text%3E%3C/svg%3E"
                alt="Expert Instructors"
                className="w-72 h-56 rounded-lg shadow-lg"
              />
              <div>
                <h3 className="text-2xl font-bold mb-4">Сервис Маманы Оқыт</h3>
                <p className="text-gray-600 mb-4">Сіздің мамандарыңыз өндіктік ынамды құндайды әрі практикалық біліктіліктерді беріңіз.</p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Түқпақты жалғыса ұстатылу</li>
                  <li>✓ Сұрақ-жауап сессиялары</li>
                  <li>✓ Ынамды болуы</li>
                </ul>
              </div>
            </div>

            <div id="features-3" className="flex md:flex-row flex-col gap-8 items-center">
              <img 
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='250'%3E%3Crect fill='%23dcfce7' width='300' height='250'/%3E%3Cpath d='M 80 150 L 120 110 L 160 150 L 200 110 L 240 150' stroke='%2322c55e' stroke-width='8' fill='none' stroke-linecap='round'/%3E%3Ctext x='150' y='200' font-size='30' fill='%2322c55e' text-anchor='middle' dominant-baseline='middle'%3E📈%3C/text%3E%3C/svg%3E"
                alt="Career Growth"
                className="w-72 h-56 rounded-lg shadow-lg"
              />
              <div>
                <h3 className="text-2xl font-bold mb-4">Карьера Өндіктігі</h3>
                <p className="text-gray-600 mb-4">Сертификаттарды алыңыз, портфолиоңызды құрыңыз және өндіктік сұрысында жұмыс табыңыз.</p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Индустрия-таныс сертификат</li>
                  <li>✓ Жұмыс орын салыстырудың</li>
                  <li>✓ Түнеген орынсатты</li>
                </ul>
              </div>
            </div>

            <div id="features-4" className="flex md:flex-row-reverse flex-col gap-8 items-center">
              <img 
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='250'%3E%3Crect fill='%23f3e8ff' width='300' height='250'/%3E%3Ccircle cx='150' cy='125' r='45' fill='%23a855f7'/%3E%3Ctext x='150' y='135' font-size='50' fill='white' text-anchor='middle' dominant-baseline='middle'%3E✓%3C/text%3E%3C/svg%3E"
                alt="Affordable"
                className="w-72 h-56 rounded-lg shadow-lg"
              />
              <div>
                <h3 className="text-2xl font-bold mb-4">Ынамды Баға</h3>
                <p className="text-gray-600 mb-4">Еңсер баға бағамына сапалы оқыту ұсынсы. Толық немесе сатындырсыңыз орындарында таңдау.</p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Еңсер тәуліктің баға</li>
                  <li>✓ Бақылау қайтару</li>
                  <li>✓ Дарымсызы жүзі</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Біздің История Тыңдаңыз</h2>
          <p className="mb-8 text-blue-100">CodeStart платформасының құрылған сюжеті және миссиясы</p>
          <audio 
            controls 
            className="mx-auto w-full md:w-1/2 bg-blue-700 p-4 rounded-lg"
          >
            <source src="data:audio/wav;base64,UklGRiYAAABXQVZFZm10IBAAAAABAAEAQB8AAAB9AAACABAAZGF0YQIAAAAAAA==" type="audio/wav" />
            Таңбалау өңімізді ұстап аның аудиоты қоршемін.
          </audio>
          <p className="mt-4 text-sm text-blue-200">
            Іс сараланған мұғалімнің платформасы салуын тыңдаңыз
          </p>
        </div>
      </section>
    </div>
  );

  // Курстар беті
  const CoursesPage = () => (
    <div className="min-h-screen bg-gray-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Барлық Курстар</h1>
        <p className="text-gray-600 mb-12 text-lg">Категориялар бойынша сайлау</p>

        <div className="flex flex-wrap gap-3 mb-12">
          {['Барлығы', 'Программалау', 'Дизайн', 'Тіл', 'Бизнес'].map((cat, i) => (
            <button
              key={i}
              className="px-6 py-3 bg-white rounded-lg shadow hover:shadow-lg hover:bg-blue-50 transition font-semibold text-gray-700"
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: 'Python Программалау', category: 'Программалау', image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="200"%3E%3Crect fill="%233178c6" width="300" height="200"/%3E%3Ctext x="150" y="100" font-size="60" fill="white" text-anchor="middle" dominant-baseline="middle"%3E🐍%3C/text%3E%3C/svg%3E', level: 'Бастама', students: '15,234', rating: 4.8 },
            { title: 'UI/UX Дизайн', category: 'Дизайн', image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="200"%3E%3Crect fill="%23f59e0b" width="300" height="200"/%3E%3Ctext x="150" y="100" font-size="60" fill="white" text-anchor="middle" dominant-baseline="middle"%3E🎨%3C/text%3E%3C/svg%3E', level: 'Міндетті', students: '8,956', rating: 4.9 },
            { title: 'English A1-B2', category: 'Тіл', image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="200"%3E%3Crect fill="%2310b981" width="300" height="200"/%3E%3Ctext x="150" y="100" font-size="60" fill="white" text-anchor="middle" dominant-baseline="middle"%3E🌍%3C/text%3E%3C/svg%3E', level: 'Ынамды', students: '23,123', rating: 4.7 },
            { title: 'React.js Мастерлас', category: 'Программалау', image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="200"%3E%3Crect fill="%2361dafb" width="300" height="200"/%3E%3Ctext x="150" y="100" font-size="60" fill="white" text-anchor="middle" dominant-baseline="middle"%3E⚛️%3C/text%3E%3C/svg%3E', level: 'Міндетті', students: '12,654', rating: 4.9 },
            { title: 'Стартап Негіздері', category: 'Бизнес', image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="200"%3E%3Crect fill="%23ec4899" width="300" height="200"/%3E%3Ctext x="150" y="100" font-size="60" fill="white" text-anchor="middle" dominant-baseline="middle"%3E🚀%3C/text%3E%3C/svg%3E', level: 'Ынамды', students: '9,876', rating: 4.8 },
            { title: 'Веб-дизайн Дәрістері', category: 'Дизайн', image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="200"%3E%3Crect fill="%238b5cf6" width="300" height="200"/%3E%3Ctext x="150" y="100" font-size="60" fill="white" text-anchor="middle" dominant-baseline="middle"%3E💻%3C/text%3E%3C/svg%3E', level: 'Бастама', students: '11,432', rating: 4.6 },
          ].map((course, i) => (
            <div key={i} className="bg-white rounded-lg overflow-hidden shadow hover:shadow-xl transition transform hover:scale-105">
              <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold mb-3">
                  {course.category}
                </span>
                <h3 className="text-xl font-bold mb-3">{course.title}</h3>
                <div className="flex justify-between text-gray-600 text-sm mb-4">
                  <span>📊 {course.level}</span>
                  <span>⭐ {course.rating}</span>
                </div>
                <div className="text-gray-500 text-sm mb-4">{course.students} студент</div>
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
                  Ақырындыңызға →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Туралы беті
  const AboutPage = () => (
    <div className="min-h-screen bg-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">CodeStart Туралы</h1>
        
        <div className="mb-12 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Біздің Миссия</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            CodeStart ұқсасын өндіктіктің білігі мәңгіліктігін ынамдағанмыз. Біз оны адамдарды сарбласындықсында нәтиже тараңдатуға ынамдаймыз.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Жалғысының рөлі, барлығы туындырсындығындағы қазақстандық оқушылары өндіктік беліктегі құндылықсындақты жоқтанғамын.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Платформаны Білу</h2>
          <div className="relative w-full bg-gray-800 rounded-lg overflow-hidden" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="CodeStart Platform Overview"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p className="text-gray-600 mt-4 text-center">
            CodeStart платформасының ішінде білудің видеосы
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {[
            { number: '50,000+', label: 'Активті студент' },
            { number: '1,200+', label: 'Профессионал курс' },
            { number: '95%', label: 'Сұрандықы нөл' },
            { number: '180+', label: 'Әйтеулі оқу' },
          ].map((stat, i) => (
            <div key={i} className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
              <div className="text-gray-700">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Сілтемені Құрақ</h2>
          <p className="text-gray-700 mb-4">
            CodeStart 2020 жылы технология барлығының білігінің құндылықсындағы өндіктіктігін өндіруге ынамдап құрылды. Бұл уақытта, мамандарының ынамдық кеңсесінің өндіктіктігін Қазақстандағы өндіктік оқушылар мәңгіліктігін жараларын ойланды.
          </p>
          <p className="text-gray-700">
            Бүгін, 50,000-дан артық студенті мәңгіліктігін нәтиже тарантыңдарымыз барлық бөлген өндіктіктігін жарағындыратын ынамдықты міндетті.
          </p>
        </div>
      </div>
    </div>
  );

  // Байланыс беті
  const ContactPage = () => (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-center">Бізге Байланыс</h1>
        <p className="text-gray-600 text-center mb-12 text-lg">
          Сұрақтарыңыз немесе ойнаулары үшін бізге хабарлаңыз
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Хабарлама Жіберіңіз</h2>
            
            {formSubmitted && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
                ✓ Хабарламаңыз сәтті жіберілді! Әтіндегі ынамдықты байланыстарымызды шеңберіңіз.
              </div>
            )}

            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Аты-сөзіңіз</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition"
                  placeholder="Адам атыңыз"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Электрондық пошта</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition"
                  placeholder="example@email.com"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Хабарлама</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleFormChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition resize-none"
                  placeholder="Өз ойыңызды жазыңыз..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition flex items-center justify-center gap-2"
              >
                <Send size={20} /> Жіберіңіз
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-3">📍 Орналасу</h3>
              <p className="text-gray-700">
                Алматы, Қазақстан<br />
                Төлебай Әбдіков 5, 5-кеңсе
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-3">📧 Электрондық пошта</h3>
              <p className="text-gray-700">
                <a href="mailto:info@codestart.kz" className="text-blue-600 hover:underline">
                  info@codestart.kz
                </a><br />
                <a href="mailto:support@codestart.kz" className="text-blue-600 hover:underline">
                  support@codestart.kz
                </a>
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-3">📞 Телефон</h3>
              <p className="text-gray-700">
                +7 (727) 123-45-67<br />
                +7 (700) 123-45-67
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-3">🕒 Жұмыс уақыты</h3>
              <p className="text-gray-700">
                Дөмбей - Жұма: 09:00 - 18:00<br />
                Сенбі - Жексенбі: Жабық
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Footer
  const Footer = () => (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">CodeStart</h3>
            <p className="text-gray-400">Өндіктік білігінің жол арқылы ынамдықты курс платформасы</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Қызмет</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition">Курстар</a></li>
              <li><a href="#" className="hover:text-white transition">Мамандар</a></li>
              <li><a href="#" className="hover:text-white transition">Сертификат</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Компания</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition">Туралы</a></li>
              <li><a href="#" className="hover:text-white transition">Сұрау</a></li>
              <li><a href="#" className="hover:text-white transition">Жергіліктер</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Ынамдық</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition">Құпиялық</a></li>
              <li><a href="#" className="hover:text-white transition">Құндылық</a></li>
              <li><a href="#" className="hover:text-white transition">Байланыс</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2024 CodeStart. Барлық құндылықтар сақталған.</p>
        </div>
      </div>
    </footer>
  );

  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      
      {activeSection === 'home' && <HomePage />}
      {activeSection === 'courses' && <CoursesPage />}
      {activeSection === 'about' && <AboutPage />}
      {activeSection === 'contact' && <ContactPage />}
      
      <Footer />
    </div>
  );
}
