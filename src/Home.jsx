import { useTranslation } from 'react-i18next';
import { useTheme } from './context/ThemeContext';
import { Link } from 'react-router-dom';

function Home() {
  const { t, i18n } = useTranslation();
  const { isDarkMode } = useTheme();

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content fade-in-up">
          <h1>{t('heroTitle')}</h1>
          <h2>{t('trustedPartner')}</h2>
          <p>{t('homeDescription')}</p>
                      <div className="hero-buttons">
              <Link to="/services" className="btn btn-primary">
                {t('discoverServices')}
              </Link>
              <Link to="/about" className="btn btn-secondary">
                {t('aboutUs')}
              </Link>
            </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="services">
        <div className="container">
          <h2 className="section-title">{t('featuredServices')}</h2>
          <div className="services-grid">
                         <div className="service-card fade-in-up">
               <div className="service-icon">📦</div>
               <h3>{t('importConsulting')}</h3>
              <p>
                {t('importConsultingDesc')}
              </p>
            </div>

                         <div className="service-card fade-in-up">
               <div className="service-icon">🚢</div>
               <h3>{t('exportConsulting')}</h3>
              <p>
                {t('exportConsultingDesc')}
              </p>
            </div>

                         <div className="service-card fade-in-up">
               <div className="service-icon">🏛️</div>
               <h3>{t('customsProcesses')}</h3>
              <p>
                {t('customsProcessesDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>{t('companyStory')}</h2>
              <p>
                {t('companyStoryDesc')}
              </p>
              <p>
                <strong>Mekar Teknoloji</strong>, {t('companyStoryDesc2')}
              </p>
              <Link to="/about" className="btn btn-primary">
                {t('moreInfo')}
              </Link>
            </div>
            <div className="about-image">
              <img src={new URL('./assets/siteicon.png', import.meta.url).href} alt="Mekar Tek" />
            </div>
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="contact">
        <div className="container">
          <div className="cta-content">
            <h2>{t('journeyCTA')}</h2>
            <p>{t('journeyCTADesc')}</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">
                {t('contactUs')}
              </Link>
              <Link to="/references" className="btn btn-secondary">
                {t('reviewReferences')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
