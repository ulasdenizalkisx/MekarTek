import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import eeibLogo from '../assets/electric-electronic-exporters-logo.png';

function Memberships() {
  const { t } = useTranslation();
  const [logoOk, setLogoOk] = useState(true);

  return (
    <section className="memberships">
      <div className="container">
        <div className="section-header fade-in-up">
          <h2>{t('membershipsTitle')}</h2>
          <p>{t('membershipsContent')}</p>
        </div>
        
        <div className="membership-content">
          <div className="membership-card fade-in-up">
            <div className="membership-header">
              <div className="membership-icon" aria-hidden={!logoOk}>
                {logoOk ? (
                  <img
                    src={eeibLogo}
                    alt={t('electricElectronicTitle')}
                    className="membership-logo"
                    loading="lazy"
                    decoding="async"
                    onError={() => setLogoOk(false)}
                  />
                ) : (
                  <span className="membership-logo-fallback">EEİB</span>
                )}
              </div>
              <h3>{t('electricElectronicTitle')}</h3>
            </div>
            
            <div className="membership-body">
              <p>{t('electricElectronicContent')}</p>
              <p>{t('electricElectronicDescription')}</p>
              <p>{t('electricElectronicGoals')}</p>
            </div>
            
            <div className="membership-footer">
              <div className="membership-benefits">
                <div className="benefit-item">
                  <i className="fas fa-globe"></i>
                  <span>Uluslararası Pazar Erişimi</span>
                </div>
                <div className="benefit-item">
                  <i className="fas fa-handshake"></i>
                  <span>Sektörel İş Birliği</span>
                </div>
                <div className="benefit-item">
                  <i className="fas fa-chart-line"></i>
                  <span>İhracat Ağı Genişletme</span>
                </div>
                <div className="benefit-item">
                  <i className="fas fa-lightbulb"></i>
                  <span>Yenilikçi Çözümler</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Memberships;


