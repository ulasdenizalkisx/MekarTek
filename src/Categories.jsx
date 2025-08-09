import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

function Categories() {
  const { t } = useTranslation();
  const [query, setQuery] = useState('');
  const [openKey, setOpenKey] = useState(null);

  const categories = useMemo(() => ([
    {
      key: 'kazan-makine',
      title: t('catTitle.boilersMachines'),
    },
    {
      key: 'elektrikli-makine',
      title: t('catTitle.electricalMachines'),
    },
    {
      key: 'plastikler',
      title: t('catTitle.plastics'),
    },
    {
      key: 'orme-giyim',
      title: t('catTitle.knitwear'),
    },
    {
      key: 'demir-celik',
      title: t('catTitle.ironSteel'),
    },
    {
      key: 'demir-celik-esya',
      title: t('catTitle.ironSteelGoods'),
    },
    {
      key: 'tarim-gida',
      title: t('catTitle.agriFood'),
    },
    {
      key: 'kimyasallar',
      title: t('catTitle.chemicals'),
    },
    {
      key: 'mobilya',
      title: t('catTitle.furniture'),
    },
    {
      key: 'tekstil-ev',
      title: t('catTitle.textilesHome'),
    },
  ]), [t]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const withItems = categories.map(cat => {
      const items = (t(`catItems.${cat.key}`, { returnObjects: true }) || []).map(x => String(x));
      return { ...cat, items };
    });
    if (!q) return withItems;
    return withItems
      .map(cat => ({
        ...cat,
        items: cat.items.filter(it => it.toLowerCase().includes(q))
      }))
      .filter(cat => cat.title.toLowerCase().includes(q) || cat.items.length > 0);
  }, [categories, query, t]);

  return (
    <div className="categories-page">
      <section className="hero">
        <div className="hero-content fade-in-up">
          <h1>{t('categoriesTitle')}</h1>
          <p>{t('categoriesIntro')}</p>
          <div className="hero-chips">
            <span className="hero-chip">{t('categoriesChipB2B')}</span>
            <span className="hero-chip">{t('categoriesChipImportExport')}</span>
            <span className="hero-chip">{t('categoriesChipMarketResearch')}</span>
          </div>
        </div>
      </section>

      <section className="categories-wrapper">
        <div className="container">
          <div className="categories-toolbar">
            <input
              type="text"
              className="categories-search"
              value={query}
              placeholder={t('categoriesSearchPlaceholder')}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>

          <div className="categories-accordion">
            {filtered.map((cat) => {
              const isOpen = openKey === cat.key;
              return (
                <div key={cat.key} className={`category-item ${isOpen ? 'open' : ''}`}>
                  <button className="category-header" onClick={() => setOpenKey(isOpen ? null : cat.key)}>
                    <span className="category-title">{cat.title}</span>
                    <span className="category-meta">{t('categoriesItemCount', { count: cat.items.length })}</span>
                    <span className="category-toggle" aria-hidden>▼</span>
                  </button>
                  {isOpen && (
                    <div className="category-body">
                      {cat.items.length > 0 ? (
                        <>
                          <ul className="category-list">
                            {cat.items.map((it) => (
                              <li key={it} className="category-list-item">
                                <span>{it}</span>
                              </li>
                            ))}
                          </ul>
                          <div className="category-footer">
                            <a className="category-cta-large" href={`/contact?subject=${encodeURIComponent(cat.title)}`}>
                              {t('categoriesCta')}
                            </a>
                          </div>
                        </>
                      ) : (
                        <div className="category-empty">{t('categoriesEmptyInCategory')}</div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
            {filtered.length === 0 && (
              <div className="categories-empty">{t('categoriesEmptyGlobal')}</div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Categories;



