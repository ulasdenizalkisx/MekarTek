import { useTranslation } from 'react-i18next';
import { useTheme } from './context/ThemeContext';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import aboutLogo from './assets/siteicon.png';

function About() {
  const { t } = useTranslation();
  const { isDarkMode } = useTheme();

  return (
    <div className="about-page">
      <section className="hero">
        <div className="hero-content fade-in-up">
          <h1>{t('aboutTitle')}</h1>
          <p>{t('aboutDescription')}</p>
          <div className="hero-chips">
            <span className="hero-chip">{t('mission')}</span>
            <span className="hero-chip">{t('vision')}</span>
            <span className="hero-chip">{t('trust')}</span>
            <span className="hero-chip">{t('innovation')}</span>
          </div>
        </div>
      </section>

      <section className="about" style={{ padding: '3rem 0' }}>
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>{t('companyStory')}</h2>
              <p>
                {t('companyStoryDesc')}
              </p>
              <p>
                <strong>{t('companyName')}</strong>, {t('companyStoryDesc2')}
              </p>
            </div>
            <div className="about-image">
              <img src={aboutLogo} alt={t('companyName')} loading="lazy" decoding="async" />
            </div>
          </div>
        </div>
      </section>

      <section className="services" style={{ padding: '3rem 0' }}>
        <div className="container">
          <h2 className="section-title">{t('missionVision')}</h2>
            <div className="services-grid">
              <div className="service-card fade-in-up">
                <div className="service-icon"><i className="fa-solid fa-bullseye fa-lg"></i></div>
              <h3>{t('mission')}</h3>
              <p>
                {t('missionDesc')}
              </p>
            </div>

            <div className="service-card fade-in-up">
              <div className="service-icon"><i className="fa-regular fa-star fa-lg"></i></div>
              <h3>{t('vision')}</h3>
              <p>
                {t('visionDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about" style={{ padding: '3rem 0' }}>
        <div className="container">
          <h2 className="section-title">{t('values')}</h2>
          <div className="values-grid">
            <div className="value-item fade-in-up">
              <div className="value-icon">🤝</div>
              <h3>{t('trust')}</h3>
              <p>{t('trustDesc')}</p>
            </div>
            <div className="value-item fade-in-up">
              <div className="value-icon">⚡</div>
              <h3>{t('speed')}</h3>
              <p>{t('speedDesc')}</p>
            </div>
            <div className="value-item fade-in-up">
              <div className="value-icon">🎯</div>
              <h3>{t('quality')}</h3>
              <p>{t('qualityDesc')}</p>
            </div>
            <div className="value-item fade-in-up">
              <div className="value-icon">💡</div>
              <h3>{t('innovation')}</h3>
              <p>{t('innovationDesc')}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="services" style={{ padding: '3rem 0' }}>
        <div className="container">
          <h2 className="section-title">{t('serviceAreas')}</h2>
          <div className="services-grid">
            <div className="service-card fade-in-up">
              <div className="service-icon"><i className="fa-solid fa-plane-arrival fa-xl"></i></div>
              <h3>{t('importServices')}</h3>
              <p>
                {t('importConsultingDesc')}
              </p>
            </div>

            <div className="service-card fade-in-up">
              <div className="service-icon"><i className="fa-solid fa-plane-departure fa-xl"></i></div>
              <h3>{t('exportServices')}</h3>
              <p>
                {t('exportConsultingDesc')}
              </p>
            </div>

            <div className="service-card fade-in-up">
              <div className="service-icon"><i className="fa-solid fa-file-import fa-xl"></i></div>
              <h3>{t('customsServices')}</h3>
              <p>
                {t('customsProcessesDesc')}
              </p>
            </div>

            <div className="service-card fade-in-up">
              <div className="service-icon"><i className="fa-solid fa-truck-front fa-xl"></i></div>
              <h3>{t('logisticsServices')}</h3>
              <p>
                {t('logisticsServicesDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about" style={{ padding: '3rem 0' }}>
        <div className="container">
          <h2 className="section-title">{t('team')}</h2>
          <div className="services-grid">
            <div className="service-card fade-in-up">
              <div className="service-icon"><i className="fa-solid fa-people-group fa-xl"></i></div>
              <h3>{t('experiencedExperts')}</h3>
              <p>
                {t('experiencedExpertsDesc')}
              </p>
            </div>

            <div className="service-card fade-in-up">
              <div className="service-icon"><i className="fa-solid fa-earth-europe fa-xl"></i></div>
              <h3>{t('globalNetwork')}</h3>
              <p>
                {t('globalNetworkDesc')}
              </p>
            </div>

            <div className="service-card fade-in-up">
              <div className="service-icon"><i className="fa-solid fa-chart-column fa-xl"></i></div>
              <h3>{t('dataDriven')}</h3>
              <p>
                {t('dataDrivenDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact" style={{ padding: '3rem 0' }}>
        <div className="container">
          <div className="cta-content">
            <h2>{t('journeyCTA')}</h2>
            <p>{t('journeyCTADesc')}</p>
            <Link to="/contact" className="btn btn-primary">
              {t('contactUs')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;