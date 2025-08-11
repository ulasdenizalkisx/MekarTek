import { useTranslation } from 'react-i18next';
import { useTheme } from './context/ThemeContext';
import { useEffect } from 'react';
import fanucLogo from './assets/fanuc-logo.png';
import n11Logo from './assets/n11-logo.png';
import pazaramaLogo from './assets/pazarama-logo.png';
import hepsiburadaLogo from './assets/hepsiburada-logo.png';
import direncLogo from './assets/direnc-logo.png';
import robotsepetiLogo from './assets/robotsepeti-logo.png';

function References() {
  const { t } = useTranslation();
  const { isDarkMode } = useTheme();

  // Gerçek iş ortaklarımız verileri - mekarteknoloji.com.tr'den alınmıştır
  const businessPartners = [
    {
      name: "FANUC",
      logo: fanucLogo,
      website: "https://www.fanuc.eu/tr/tr",
      category: t('industrialRobotics'),
      description: t('industrialRoboticsDesc')
    },
    {
      name: "Pazarama",
      logo: pazaramaLogo,
      website: "https://www.pazarama.com/",
      category: t('ecommercePlatform'),
      description: t('ecommercePlatformDesc')
    },
    {
      name: "n11",
      logo: n11Logo,
      website: "https://www.n11.com/",
      category: t('ecommercePlatform'),
      description: t('leadingEcommerce')
    },
    {
      name: "Hepsiburada",
      logo: hepsiburadaLogo,
      website: "https://www.hepsiburada.com/mekar-sut-sogutma-tanki-kontrol-cihazi-oem-milkar-pm-HBC00005E2JMB",
      category: t('ecommercePlatform'),
      description: t('mekarProductsPlatform')
    },
    {
      name: "Direnc.net",
      logo: direncLogo,
      website: "https://www.direnc.net/",
      category: t('electronicMarket'),
      description: t('electronicMarketDesc')
    },
    {
      name: "Robotsepeti",
      logo: robotsepetiLogo,
      website: "https://www.robotsepeti.com/",
      category: t('roboticSystems'),
      description: t('roboticSystemsDesc')
    }
  ];

  return (
    <div className="references-page">
      <section className="hero">
        <div className="hero-content fade-in-up">
          <h1>{t('businessPartners')}</h1>
          <p>{t('businessPartnersDescription')}</p>
          <div className="hero-chips">
            <span className="hero-chip">{t('businessPartners')}</span>
            <span className="hero-chip">{t('customerSatisfaction')}</span>
            <span className="hero-chip">{t('countries')}</span>
          </div>
        </div>
      </section>

      <section className="services" style={{ padding: '3rem 0' }}>
        <div className="container">
          <h2 className="section-title">{t('businessPartners')}</h2>
          <p className="section-description">
            {t('businessPartnersDescription')}
          </p>
          
          <div className="partners-grid">
            {businessPartners.map((partner, index) => (
              <div key={index} className="partner-card fade-in-up">
                <div className="partner-link">
                  <div className="partner-header">
                    <div className="partner-logo-container">
                      <img 
                        src={partner.logo} 
                        alt={`${partner.name} Logo`}
                        className="partner-logo"
                        loading="lazy"
                        decoding="async"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="partner-logo-fallback">
                        <span className="fallback-text">{partner.name}</span>
                      </div>
                    </div>
                    <div className="partner-badge">
                      <span className="partner-category">{partner.category}</span>
                    </div>
                  </div>
                  <div className="partner-content">
                    <h3 className="partner-name">{partner.name}</h3>
                    <p className="partner-description">{partner.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
}

export default References;
