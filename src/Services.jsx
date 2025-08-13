import { useTranslation } from 'react-i18next';
import { useTheme } from './context/ThemeContext';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function Services() {
  const { t } = useTranslation();
  const { isDarkMode } = useTheme();

  // Eski uluslararası ticaret hizmetleri (üstte)
  const tradeServices = [
    {
      name: t('importConsultingName'),
      icon: <i className="fa-solid fa-boxes-stacked fa-xl"></i>,
      description: t('importConsultingDesc'),
      features: [
        t('importConsultingFeature1'),
        t('importConsultingFeature2'),
        t('importConsultingFeature3'),
        t('importConsultingFeature4')
      ]
    },
    {
      name: t('exportConsultingName'),
      icon: <i className="fa-solid fa-ship fa-xl"></i>,
      description: t('exportConsultingDesc'),
      features: [
        t('exportConsultingFeature1'),
        t('exportConsultingFeature2'),
        t('exportConsultingFeature3'),
        t('exportConsultingFeature4')
      ]
    },
    {
      name: t('customsProcessesName'),
      icon: <i className="fa-solid fa-building-columns fa-xl"></i>,
      description: t('customsProcessesDesc'),
      features: [
        t('customsProcessesFeature1'),
        t('customsProcessesFeature2'),
        t('customsProcessesFeature3'),
        t('customsProcessesFeature4')
      ]
    },
    {
      name: t('logisticsServicesName'),
      icon: <i className="fa-solid fa-truck-fast fa-xl"></i>,
      description: t('logisticsServicesDesc'),
      features: [
        t('logisticsServicesFeature1'),
        t('logisticsServicesFeature2'),
        t('logisticsServicesFeature3'),
        t('logisticsServicesFeature4')
      ]
    },
    {
      name: t('documentManagementName'),
      icon: <i className="fa-solid fa-file fa-xl"></i>,
      description: t('documentManagementDesc'),
      features: [
        t('documentManagementFeature1'),
        t('documentManagementFeature2'),
        t('documentManagementFeature3'),
        t('documentManagementFeature4')
      ]
    },
    {
      name: t('marketResearchName'),
      icon: <i className="fa-solid fa-chart-simple fa-xl"></i>,
      description: t('marketResearchDesc'),
      features: [
        t('marketResearchFeature1'),
        t('marketResearchFeature2'),
        t('marketResearchFeature3'),
        t('marketResearchFeature4')
      ]
    }
  ];

  // Mekar Teknoloji'nin teknoloji hizmetleri
  const techServices = [
    {
      name: t('erpSystemsName'),
      icon: <i className="fa-solid fa-laptop fa-xl"></i>,
      description: t('erpSystemsDesc'),
      features: [
        t('erpSystemsFeature1'),
        t('erpSystemsFeature2'),
        t('erpSystemsFeature3'),
        t('erpSystemsFeature4')
      ]
    },
    {
      name: t('customAutomationName'),
      icon: <i className="fa-solid fa-gears fa-xl"></i>,
      description: t('customAutomationDesc'),
      features: [
        t('customAutomationFeature1'),
        t('customAutomationFeature2'),
        t('customAutomationFeature3'),
        t('customAutomationFeature4')
      ]
    },
    {
      name: t('machineDesignName'),
      icon: <i className="fa-solid fa-industry fa-xl"></i>,
      description: t('machineDesignDesc'),
      features: [
        t('machineDesignFeature1'),
        t('machineDesignFeature2'),
        t('machineDesignFeature3'),
        t('machineDesignFeature4')
      ]
    },
    {
      name: t('engineeringConsultingName'),
      icon: <i className="fa-solid fa-users fa-xl"></i>,
      description: t('engineeringConsultingDesc'),
      features: [
        t('engineeringConsultingFeature1'),
        t('engineeringConsultingFeature2'),
        t('engineeringConsultingFeature3'),
        t('engineeringConsultingFeature4')
      ]
    },
    {
      name: t('operatorPanelName'),
      icon: <i className="fa-solid fa-desktop fa-xl"></i>,
      description: t('operatorPanelDesc'),
      features: [
        t('operatorPanelFeature1'),
        t('operatorPanelFeature2'),
        t('operatorPanelFeature3'),
        t('operatorPanelFeature4')
      ]
    },
    {
      name: t('licensingServicesName'),
      icon: <i className="fa-solid fa-circle-check fa-xl"></i>,
      description: t('licensingServicesDesc'),
      features: [
        t('licensingServicesFeature1'),
        t('licensingServicesFeature2'),
        t('licensingServicesFeature3'),
        t('licensingServicesFeature4')
      ]
    },
    {
      name: t('maintenanceServicesName'),
      icon: <i className="fa-solid fa-hammer fa-xl"></i>,
      description: t('maintenanceServicesDesc'),
      features: [
        t('maintenanceServicesFeature1'),
        t('maintenanceServicesFeature2'),
        t('maintenanceServicesFeature3'),
        t('maintenanceServicesFeature4')
      ]
    },
    {
      name: t('projectManagementName'),
      icon: <i className="fa-solid fa-chart-simple fa-xl"></i>,
      description: t('projectManagementDesc'),
      features: [
        t('projectManagementFeature1'),
        t('projectManagementFeature2'),
        t('projectManagementFeature3'),
        t('projectManagementFeature4')
      ]
    },
    {
      name: t('smartWarehouseName'),
      icon: <i className="fa-solid fa-boxes-stacked fa-xl"></i>,
      description: t('smartWarehouseDesc'),
      features: [
        t('smartWarehouseFeature1'),
        t('smartWarehouseFeature2'),
        t('smartWarehouseFeature3'),
        t('smartWarehouseFeature4')
      ]
    },
    {
      name: t('technicalConsultingName'),
      icon: <i className="fa-solid fa-people-carry-box fa-xl"></i>,
      description: t('technicalConsultingDesc'),
      features: [
        t('technicalConsultingFeature1'),
        t('technicalConsultingFeature2'),
        t('technicalConsultingFeature3'),
        t('technicalConsultingFeature4')
      ]
    }
  ];

  return (
    <div className="services-page">
      <section className="hero">
        <div className="hero-content fade-in-up">
          <h1>{t('services')}</h1>
          <p>
            {t('servicesDescription')}
          </p>
          <div className="hero-chips">
            <span className="hero-chip">{t('importConsulting')}</span>
            <span className="hero-chip">{t('exportConsulting')}</span>
            <span className="hero-chip">{t('customsProcesses')}</span>
            <span className="hero-chip">{t('logisticsServices')}</span>
          </div>
        </div>
      </section>

      <section className="services" style={{ padding: '3rem 0' }}>
        <div className="container">
          <h2 className="section-title">{t('internationalTradeServices')}</h2>
          <div className="services-grid">
            {tradeServices.map((service, index) => (
              <div key={index} className="service-card fade-in-up">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.name}</h3>
                <p>{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about" style={{ padding: '3rem 0' }}>
        <div className="container">
          <h2 className="section-title">{t('technologyServices')}</h2>
          <div className="services-grid">
            {techServices.map((service, index) => (
              <div key={index} className="service-card fade-in-up">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.name}</h3>
                <p>{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="services" style={{ padding: '3rem 0' }}>
        <div className="container">
          <h2 className="section-title">{t('whyUs')}</h2>
          <div className="features-grid">
            <div className="feature-item fade-in-up">
              <div className="feature-icon">🎯</div>
              <h3>{t('expertTeam')}</h3>
              <p>{t('expertTeamDesc')}</p>
            </div>
            <div className="feature-item fade-in-up">
              <div className="feature-icon">⚡</div>
              <h3>{t('fastSolutions')}</h3>
              <p>{t('fastSolutionsDesc')}</p>
            </div>
            <div className="feature-item fade-in-up">
              <div className="feature-icon">🤝</div>
              <h3>{t('reliablePartner')}</h3>
              <p>{t('reliablePartnerDesc')}</p>
            </div>
            <div className="feature-item fade-in-up">
              <div className="feature-icon">💡</div>
              <h3>{t('innovativeApproach')}</h3>
              <p>{t('innovativeApproachDesc')}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about" style={{ padding: '3rem 0' }}>
        <div className="container">
          <h2 className="section-title">{t('expertiseAreas')}</h2>
          <div className="tech-grid">
            <div className="tech-item fade-in-up">
              <div className="tech-icon"><i className="fa-solid fa-earth-americas fa-lg"></i></div>
              <h3>{t('internationalTrade')}</h3>
              <p>{t('internationalTradeDesc')}</p>
            </div>
            <div className="tech-item fade-in-up">
              <div className="tech-icon"><i className="fa-solid fa-industry fa-lg"></i></div>
              <h3>{t('industrialAutomation')}</h3>
              <p>{t('industrialAutomationDesc')}</p>
            </div>
            <div className="tech-item fade-in-up">
              <div className="tech-icon"><i className="fa-solid fa-gear fa-lg"></i></div>
              <h3>{t('machineDesign')}</h3>
              <p>{t('machineDesignDesc')}</p>
            </div>
            <div className="tech-item fade-in-up">
              <div className="tech-icon"><i className="fa-solid fa-computer fa-lg"></i></div>
              <h3>{t('industrialPC')}</h3>
              <p>{t('industrialPCDesc')}</p>
            </div>
            <div className="tech-item fade-in-up">
              <div className="tech-icon"><i className="fa-solid fa-warehouse fa-lg"></i></div>
              <h3>{t('smartWarehouse')}</h3>
              <p>{t('smartWarehouseDesc')}</p>
            </div>
            <div className="tech-item fade-in-up">
              <div className="tech-icon"><i className="fa-solid fa-microchip fa-lg"></i></div>
              <h3>{t('maintenanceServices')}</h3>
              <p>{t('maintenanceServicesDesc')}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="services" style={{ padding: '3rem 0' }}>
        <div className="container">
          <div className="cta-content">
            <h2>{t('contactForProjects')}</h2>
            <p>
              {t('contactForProjectsDesc')}
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">
                {t('contactUs')}
              </Link>
              <Link to="/about" className="btn btn-secondary">
                {t('aboutUs')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
