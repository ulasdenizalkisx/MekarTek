import { useTranslation } from 'react-i18next';

function InfoSecurityPolicies() {
  const { t } = useTranslation();

  return (
    <section className="info-security-policies">
      <div className="container">
        <div className="section-header fade-in-up">
          <h2>{t('infoSecurityPoliciesTitle')}</h2>
          <p>{t('infoSecurityPoliciesContent')}</p>
        </div>
        
        <div className="info-security-content">
          <div className="info-security-section fade-in-up">
            <h3>{t('infoSecurityPurpose')}</h3>
            <p>{t('infoSecurityPurposeText')}</p>
          </div>
          
          <div className="info-security-section fade-in-up">
            <h3>{t('infoSecurityScope')}</h3>
            <p>{t('infoSecurityScopeText')}</p>
          </div>
          
          <div className="info-security-section fade-in-up">
            <h3>{t('infoSecurityResponsibility')}</h3>
            <p>{t('infoSecurityResponsibilityText')}</p>
          </div>
          
          <div className="info-security-section fade-in-up">
            <h3>{t('infoSecurityPolicy')}</h3>
            <p>{t('infoSecurityPolicyText1')}</p>
            <p>{t('infoSecurityPolicyText2')}</p>
            <p>{t('infoSecurityPolicyText3')}</p>
            
            <ul className="info-security-requirements">
              {t('infoSecurityRequirements', { returnObjects: true }).map((requirement, index) => (
                <li key={index}>{requirement}</li>
              ))}
            </ul>
            
            <p>{t('infoSecurityPolicyText4')}</p>
            <p>{t('infoSecurityPolicyText5')}</p>
            <p>{t('infoSecurityPolicyText6')}</p>
            <p>{t('infoSecurityPolicyText7')}</p>
            <p>{t('infoSecurityPolicyText8')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InfoSecurityPolicies;


