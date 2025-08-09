import { useTranslation } from 'react-i18next';
import { useTheme } from './context/ThemeContext';
import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import QualityCertificates from './components/QualityCertificates';
import QualityPolicies from './components/QualityPolicies';
import InfoSecurityPolicies from './components/InfoSecurityPolicies';
import Memberships from './components/Memberships';
import KVKKPolicy from './components/KVKKPolicy';

function Corporate() {
  const { t } = useTranslation();
  const { isDarkMode } = useTheme();
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('all');

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const section = searchParams.get('section');
    if (section) {
      setActiveSection(section);
    } else {
      setActiveSection('all');
    }
  }, [location]);

  const renderSection = () => {
    switch (activeSection) {
      case 'quality-certificates':
        return <QualityCertificates />;
      case 'quality-policies':
        return <QualityPolicies />;
      case 'info-security-policies':
        return <InfoSecurityPolicies />;
      case 'memberships':
        return <Memberships />;
      case 'kvkk-policy':
        return <KVKKPolicy />;
      default:
        return (
          <>
            <QualityCertificates />
            <QualityPolicies />
            <InfoSecurityPolicies />
            <Memberships />
            <KVKKPolicy />
          </>
        );
    }
  };

  return (
    <div className="corporate-page">
      <section className="hero">
        <div className="hero-content fade-in-up">
          <h1>{t('corporateTitle')}</h1>
          <p>{t('corporateDescription')}</p>
          <div className="hero-chips">
            <Link to="/corporate?section=quality-certificates" className="hero-link-chip">{t('corporateQualityCertificates')}</Link>
            <Link to="/corporate?section=quality-policies" className="hero-link-chip">{t('corporateQualityPolicies')}</Link>
            <Link to="/corporate?section=info-security-policies" className="hero-link-chip">{t('corporateInfoSecurityPolicies')}</Link>
            <Link to="/corporate?section=memberships" className="hero-link-chip">{t('corporateMemberships')}</Link>
            <Link to="/corporate?section=kvkk-policy" className="hero-link-chip">{t('corporateKVKKPolicy')}</Link>
          </div>
        </div>
      </section>

      {renderSection()}
    </div>
  );
}

export default Corporate;
