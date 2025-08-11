import { useTranslation } from 'react-i18next';
import { useTheme } from './context/ThemeContext';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import logoSrc from './assets/siteicon.png';
import './css/navbar.css';

function NavBar() {
    const { t, i18n } = useTranslation();
    const { isDarkMode, toggleTheme } = useTheme();
    const [isCorporateDropdownOpen, setIsCorporateDropdownOpen] = useState(false);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    const toggleCorporateDropdown = () => {
        setIsCorporateDropdownOpen(!isCorporateDropdownOpen);
    };

    return (
        <nav className={`navbar ${isDarkMode ? 'dark' : 'light'}`}>
            <div className='topContainer'>
                <div className="logo">
                    <img src={logoSrc} alt={t('companyName')} className="logo-icon" />
                    <Link to="/">{t('companyName')}</Link>
                </div>
                
                <div className="controls">
                    <div className="language-selector">
                        <select 
                            value={i18n.language} 
                            onChange={(e) => changeLanguage(e.target.value)}
                            className="language-select"
                        >
                            <option value="tr">TR</option>
                            <option value="en">EN</option>
                            <option value="ar">AR</option>
                            <option value="es">ES</option>
                            <option value="fr">FR</option>
                            <option value="ru">RU</option>
                        </select>
                    </div>
                    
                    <div className="toggle-switch">
                        <label className="switch-label">
                            <input 
                                type="checkbox" 
                                className="checkbox"
                                checked={isDarkMode}
                                onChange={toggleTheme}
                            />
                            <span className="slider"></span>
                        </label>
                    </div>
                </div>
            </div>
            
            <div className='linksCont'>
                <Link to="/">{t('home')}</Link>
                <Link to="/services">{t('services')}</Link>
                <Link to="/categories">{t('categoriesNav')}</Link>
                <Link to="/about">{t('about')}</Link>
                <div 
                    className="corporate-dropdown"
                    onMouseEnter={() => setIsCorporateDropdownOpen(true)}
                    onMouseLeave={() => setIsCorporateDropdownOpen(false)}
                >
                    <Link to="/corporate" className="corporate-link">
                        {t('corporate')} <i className="fa-solid fa-chevron-down"></i>
                    </Link>
                    {isCorporateDropdownOpen && (
                        <div className="dropdown-menu">
                            <Link to="/corporate?section=quality-certificates" className="dropdown-item">
                                {t('corporateQualityCertificates')}
                            </Link>
                            <Link to="/corporate?section=quality-policies" className="dropdown-item">
                                {t('corporateQualityPolicies')}
                            </Link>
                            <Link to="/corporate?section=info-security-policies" className="dropdown-item">
                                {t('corporateInfoSecurityPolicies')}
                            </Link>
                            <Link to="/corporate?section=memberships" className="dropdown-item">
                                {t('corporateMemberships')}
                            </Link>
                            <Link to="/corporate?section=kvkk-policy" className="dropdown-item">
                                {t('corporateKVKKPolicy')}
                            </Link>
                        </div>
                    )}
                </div>
                <Link to="/references">{t('businessPartners')}</Link>
                <Link to="/contact">{t('contact')}</Link>
            </div>
        </nav>
    );
}

export default NavBar;