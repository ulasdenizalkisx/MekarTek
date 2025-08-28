import { useTranslation } from 'react-i18next';
import { useTheme } from './context/ThemeContext';
import { useEffect, useState } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
  const { t } = useTranslation();
  const { isDarkMode } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    website: '' // honeypot
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const EMAILJS_PUBLIC = import.meta?.env?.VITE_EMAILJS_PUBLIC_KEY || 'afC6UbjlgeiImRbXG';
  const EMAILJS_SERVICE = import.meta?.env?.VITE_EMAILJS_SERVICE_ID || 'service_5980kye';
  const EMAILJS_TEMPLATE = import.meta?.env?.VITE_EMAILJS_TEMPLATE_ID || 'template_o410biq';

  // EmailJS'i başlat
  useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC);
  }, []);

  const stripHtml = (value) => {
    if (typeof value !== 'string') return '';
    // Sadece HTML etiketlerini temizle, boşlukları koru
    return value.replace(/<[^>]*>/g, '');
  };

  const trimValue = (value) => (typeof value === 'string' ? value.trim() : '');

  const isValidEmail = (value) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
  };

  const rateLimitOk = () => {
    try {
      const key = 'contact_last_submit_at';
      const last = parseInt(localStorage.getItem(key) || '0', 10);
      const now = Date.now();
      if (now - last < 30000) { // 30s cooldown
        return false;
      }
      localStorage.setItem(key, String(now));
      return true;
    } catch {
      return true;
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const sanitized = stripHtml(value);
    setFormData(prev => ({
      ...prev,
      [name]: sanitized
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus(null);

    // Honeypot: bot doldurursa iptal
    if (formData.website) {
      setSubmitStatus('error');
      return;
    }

    // Trimlenmiş değerlerle doğrula ve gönder
    const name = trimValue(formData.name);
    const email = trimValue(formData.email);
    const subject = trimValue(formData.subject);
    const message = trimValue(formData.message);

    if (!name || name.length > 100) { setSubmitStatus('error'); return; }
    if (!isValidEmail(email) || email.length > 150) { setSubmitStatus('error'); return; }
    if (!subject || subject.length > 140) { setSubmitStatus('error'); return; }
    if (!message || message.length > 4000) { setSubmitStatus('error'); return; }

    // Rate limit
    if (!rateLimitOk()) { setSubmitStatus('error'); return; }

    setIsSubmitting(true);

    try {
      const templateParams = {
        // Template fields per screenshots
        name,              // {{name}}
        title: subject,    // {{title}} (used in Subject)
        message,           // {{message}}
        // Extra fields used in template meta
        from_name: name,
        from_email: email,
        reply_to: email,
        // To is static in template, keep for flexibility
        to_email: 'info@mekarteknoloji.com.tr'
      };

      const response = await emailjs.send(
        EMAILJS_SERVICE,
        EMAILJS_TEMPLATE,
        templateParams
      );

      if (response?.status === 200) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          website: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Email gönderme hatası:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const socials = [
    { key: 'instagram', url: 'https://www.instagram.com/mekarteknoloji/', className: 'instagram', icon: 'fa-brands fa-instagram' },
    { key: 'linkedin', url: 'https://www.linkedin.com/company/mekarteknoloji/', className: 'linkedin', icon: 'fa-brands fa-linkedin' },
    { key: 'facebook', url: 'https://www.facebook.com/mekarteknoloji', className: 'facebook', icon: 'fa-brands fa-facebook' },
    { key: 'whatsapp', url: 'https://wa.me/902323320620', className: 'whatsapp', icon: 'fa-brands fa-whatsapp' }
  ];

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

              <div className="contact-card social-card">
                <h2 className="contact-section-title">{t('followUs')}</h2>
                <ul className="social-links">
                  {socials.map((s) => (
                    <li key={s.key}>
                      <a
                        className={`social-link ${s.className}`}
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={t(s.key)}
                      >
                        <span className="icon"><i className={s.icon} aria-hidden="true"></i></span>
                        <span className="label">{t(s.key)}</span>
                      </a>
                    </li>
                  ))}
                </ul>
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
                
                {submitStatus === 'success' && (
                  <div className="alert alert-success">
                    {t('messageSentSuccess')}
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="alert alert-error">
                    {t('messageSentError')}
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  {/* Honeypot field (gizli) */}
                  <input type="text" name="website" value={formData.website} onChange={handleInputChange} style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">{t('name')}</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        required 
                        maxLength={100}
                        placeholder={t('name')}
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">{t('email')}</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        required 
                        maxLength={150}
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">{t('subject')}</label>
                    <input 
                      type="text" 
                      id="subject" 
                      name="subject" 
                      required 
                      maxLength={140}
                      placeholder={t('subject')}
                      value={formData.subject}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">{t('message')}</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      required 
                      rows={6} 
                      maxLength={4000}
                      placeholder={t('message')}
                      value={formData.message}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="form-actions">
                    <button 
                      type="submit" 
                      className="btn btn-primary"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? t('sending') : t('send')}
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