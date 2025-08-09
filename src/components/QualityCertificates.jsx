import { useTranslation } from 'react-i18next';
import iso10002 from '../assets/belg1.avif';
import belge2 from '../assets/belge2.avif';
import iso14001 from '../assets/iso-1400l-2015---aevre-yapnetim-sistemi-1-mjEvJ1p448uoKV5q.avif';
import iso45001 from '../assets/iso-45001-2018-adega-saala--aa---ve-ga1-4venliai-yapnetim-sistemi-1-YKb6RBV6lnCkOqe1.avif';
import iso26000 from '../assets/iso-26000-2021---sosyal-sorumluluk-yapnetim-sistemi-1-m6Lwp6KjalcEJL6J.avif';
import iso31000 from '../assets/iso-31000-2018---kurumsal-radegsk-yapnetimi-sistemi-1-mv0DgvMDJNcyV4Q7.avif';
import iso22301 from '../assets/iso-22301-2019-adega-sa1-4rekliliai-yapnetim-sistemi-1-Yg2WNDEWj2T6oMEz.avif';
import ceCertificate from '../assets/ce-uygunluk-belgesadeg-1-YBgrRPDrb0tQEoNX.avif';
import doayaCertificate from '../assets/doaaya-saygi-sertadegfadegkasi-1-AQEyl56yejU9o5ZX.avif';

function QualityCertificates() {
  const { t } = useTranslation();

  return (
    <section className="quality-certificates">
      <div className="container">
        <div className="section-header fade-in-up">
          <h2>{t('corporateSection1Title')}</h2>
          <p>{t('corporateSection1Content')}</p>
        </div>
        
        <div className="certificates-grid">
           <div className="certificate-item fade-in-up">
             <div className="certificate-image">
               <img src={iso10002} alt={t('iso10002Alt')} />
             </div>
             <h3>{t('iso10002Title')}</h3>
             <p>{t('iso10002Description')}</p>
           </div>
           
           <div className="certificate-item fade-in-up">
             <div className="certificate-image">
               <img src={belge2} alt={t('belge2Alt')} />
             </div>
             <h3>{t('belge2Title')}</h3>
             <p>{t('belge2Description')}</p>
           </div>
          
          <div className="certificate-item fade-in-up">
            <div className="certificate-image">
              <img src={iso14001} alt={t('iso14001Alt')} />
            </div>
            <h3>{t('iso14001Title')}</h3>
            <p>{t('iso14001Description')}</p>
          </div>
          
          <div className="certificate-item fade-in-up">
            <div className="certificate-image">
              <img src={iso45001} alt={t('iso45001Alt')} />
            </div>
            <h3>{t('iso45001Title')}</h3>
            <p>{t('iso45001Description')}</p>
          </div>
          
          <div className="certificate-item fade-in-up">
            <div className="certificate-image">
              <img src={iso26000} alt={t('iso26000Alt')} />
            </div>
            <h3>{t('iso26000Title')}</h3>
            <p>{t('iso26000Description')}</p>
          </div>
          
          <div className="certificate-item fade-in-up">
            <div className="certificate-image">
              <img src={iso31000} alt={t('iso31000Alt')} />
            </div>
            <h3>{t('iso31000Title')}</h3>
            <p>{t('iso31000Description')}</p>
          </div>
          
          <div className="certificate-item fade-in-up">
            <div className="certificate-image">
              <img src={iso22301} alt={t('iso22301Alt')} />
            </div>
            <h3>{t('iso22301Title')}</h3>
            <p>{t('iso22301Description')}</p>
          </div>
          
          <div className="certificate-item fade-in-up">
            <div className="certificate-image">
              <img src={ceCertificate} alt={t('ceCertificateAlt')} />
            </div>
            <h3>{t('ceCertificateTitle')}</h3>
            <p>{t('ceCertificateDescription')}</p>
          </div>
          
          <div className="certificate-item fade-in-up">
            <div className="certificate-image">
              <img src={doayaCertificate} alt={t('doayaCertificateAlt')} />
            </div>
            <h3>{t('doayaCertificateTitle')}</h3>
            <p>{t('doayaCertificateDescription')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default QualityCertificates;


