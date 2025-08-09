import { useTranslation } from 'react-i18next';

function QualityPolicies() {
  const { t } = useTranslation();

  return (
    <section className="quality-policies">
      <div className="container">
        <div className="section-header fade-in-up">
          <h2>{t('qualityPoliciesTitle')}</h2>
          <p>{t('qualityPoliciesContent')}</p>
        </div>
        
        <div className="policies-grid">
          <div className="policy-item fade-in-up">
            <div className="policy-number">1</div>
            <p>{t('qualityPolicy1')}</p>
          </div>
          
          <div className="policy-item fade-in-up">
            <div className="policy-number">2</div>
            <p>{t('qualityPolicy2')}</p>
          </div>
          
          <div className="policy-item fade-in-up">
            <div className="policy-number">3</div>
            <p>{t('qualityPolicy3')}</p>
          </div>
          
          <div className="policy-item fade-in-up">
            <div className="policy-number">4</div>
            <p>{t('qualityPolicy4')}</p>
          </div>
          
          <div className="policy-item fade-in-up">
            <div className="policy-number">5</div>
            <p>{t('qualityPolicy5')}</p>
          </div>
          
          <div className="policy-item fade-in-up">
            <div className="policy-number">6</div>
            <p>{t('qualityPolicy6')}</p>
          </div>
          
          <div className="policy-item fade-in-up">
            <div className="policy-number">7</div>
            <p>{t('qualityPolicy7')}</p>
          </div>
        </div>
        
        <div className="policy-note fade-in-up">
          <p>{t('qualityPoliciesNote')}</p>
        </div>
      </div>
    </section>
  );
}

export default QualityPolicies;


