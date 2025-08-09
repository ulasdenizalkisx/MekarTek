import { useTranslation } from 'react-i18next';
import { useTheme } from './context/ThemeContext';
import { useEffect } from 'react';

function Contact() {
  const { t } = useTranslation();
  const { isDarkMode } = useTheme();

  return (
    <div className="contact-page">
      <section className="hero">
        <div className="hero-content fade-in-up">
          <h1>{t('contactTitle')}</h1>
          <p>{t('contactDescription')}</p>
          <div className="hero-chips">
            <span className="hero-chip">{t('address')}</span>
            <span className="hero-chip">{t('email')}</span>
            <span className="hero-chip">{t('phone')}</span>
            <span className="hero-chip">{t('workingHours')}</span>
          </div>
        </div>
      </section>

      <section className="contact-wrapper">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-left">
              <div className="contact-card">
                <h2 className="contact-section-title">{t('contactInfo')}</h2>
                <div className="contact-methods">
                  <div className="contact-method">
                    <span className="method-label">{t('address')}</span>
                    <p className="method-value">{t('addressValue')}</p>
                  </div>
                  <div className="contact-method">
                    <span className="method-label">{t('phone')}</span>
                    <p className="method-value">{t('phoneValue')}</p>
                  </div>
                  <div className="contact-method">
                    <span className="method-label">{t('email')}</span>
                    <p className="method-value">{t('emailAddress')}</p>
                  </div>
                  <div className="contact-method">
                    <span className="method-label">{t('workingHours')}</span>
                    <p className="method-value">{t('workingHoursValue')}</p>
                  </div>
                </div>
              </div>

              <div className="map-card">
                <div className="map-embed">
                  <iframe
                    title="Office Location"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    src={`https://www.google.com/maps?q=${encodeURIComponent(t('addressValue'))}&output=embed`}
                    allowFullScreen
                  />
                </div>
              </div>
            </div>

            <div className="contact-right">
              <div className="contact-form-modern">
                <h2 className="contact-section-title">{t('sendMessage')}</h2>
                <form>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">{t('name')}</label>
                      <input type="text" id="name" name="name" required placeholder={t('name')} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">{t('email')}</label>
                      <input type="email" id="email" name="email" required placeholder="name@company.com" />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">{t('subject')}</label>
                    <input type="text" id="subject" name="subject" required placeholder={t('subject')} />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">{t('message')}</label>
                    <textarea id="message" name="message" required rows={6} placeholder={t('message')} />
                  </div>

                  <div className="form-actions">
                    <button type="submit" className="btn btn-primary">
                      {t('send')}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;