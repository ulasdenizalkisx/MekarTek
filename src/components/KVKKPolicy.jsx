import { useTranslation } from 'react-i18next';

function KVKKPolicy() {
  const { t } = useTranslation();

  return (
    <section className="kvkk-policy">
      <div className="container">
        <div className="section-header fade-in-up">
          <h2>{t('kvkkTitle')}</h2>
          <p>{t('kvkkContent')}</p>
        </div>
        
        <div className="kvkk-content">
          <div className="kvkk-header fade-in-up">
            <h3>{t('kvkkLawTitle')}</h3>
            <h4>{t('kvkkWebsiteTitle')}</h4>
          </div>
          
          <div className="kvkk-intro fade-in-up">
            <p>{t('kvkkIntroText')}</p>
            <p>{t('kvkkProcessingText')}</p>
          </div>
          
          <div className="kvkk-sections">
            <div className="kvkk-section fade-in-up">
              <h4>{t('kvkkSectionA')}</h4>
              <p>{t('kvkkSectionAText')}</p>
            </div>
            
            <div className="kvkk-section fade-in-up">
              <h4>{t('kvkkSectionB')}</h4>
              <p>{t('kvkkSectionBText')}</p>
              <ul className="kvkk-purposes">
                {t('kvkkPurposes', { returnObjects: true }).map((purpose, index) => (
                  <li key={index}>{purpose}</li>
                ))}
              </ul>
            </div>
            
            <div className="kvkk-section fade-in-up">
              <h4>{t('kvkkSectionC')}</h4>
              <p>{t('kvkkSectionCText')}</p>
              <ul className="kvkk-transfers">
                {t('kvkkTransfers', { returnObjects: true }).map((transfer, index) => (
                  <li key={index}>{transfer}</li>
                ))}
              </ul>
            </div>
            
            <div className="kvkk-section fade-in-up">
              <h4>{t('kvkkSectionD')}</h4>
              <p>{t('kvkkSectionDText')}</p>
              <h5>{t('kvkkRightsTitle')}</h5>
              <ul className="kvkk-rights">
                {t('kvkkRights', { returnObjects: true }).map((right, index) => (
                  <li key={index}>{right}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default KVKKPolicy;


