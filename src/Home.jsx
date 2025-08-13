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
              <div className="service-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 7L10 17L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>{t('importConsulting')}</h3>
              <p>
                {t('importConsultingDesc')}
              </p>
            </div>

            <div className="service-card fade-in-up">
              <div className="service-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 21L21 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M5 21V7L13 3V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M19 21V11L13 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 9V9.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 13V13.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 17V17.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>{t('exportConsulting')}</h3>
              <p>
                {t('exportConsultingDesc')}
              </p>
            </div>

            <div className="service-card fade-in-up">
              <div className="service-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
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
                {t('companyStoryDesc2')}
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
