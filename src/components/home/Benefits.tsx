import { useLanguage } from '../../hooks/useLanguage'

import '../../styles/home/benefits.css'

function Benefits() {
  const { t } = useLanguage()
  const section = t.home.benefits

  const benefits = [
    {
      key: 'experience',
      content: section.items.experience,
      icon: 'bi-award',
    },
    {
      key: 'reliability',
      content: section.items.reliability,
      icon: 'bi-shield-check',
    },
    {
      key: 'presence',
      content: section.items.presence,
      icon: 'bi-geo-alt',
    },
    {
      key: 'professional',
      content: section.items.professional,
      icon: 'bi-person-badge',
    },
  ]

  return (
    <section className="benefits-section">
      <div className="section-container">
        <header className="centered-section-header benefits-header">
          <span className="section-eyebrow">
            {section.eyebrow}
          </span>

          <h2>
            {section.title}{' '}
            <span>{section.titleHighlight}</span>
          </h2>

          <p>{section.description}</p>
        </header>

        <div className="benefits-grid">
          {benefits.map((benefit) => (
            <article
              key={benefit.key}
              className="benefit-card"
            >
              <div className="benefit-card-top">
                <div
                  className="benefit-icon"
                  aria-hidden="true"
                >
                  <i className={`bi ${benefit.icon}`} />
                </div>
              </div>

              <div className="benefit-card-content">
                <h3>{benefit.content.title}</h3>

                <p>{benefit.content.description}</p>
              </div>

              <div
                className="benefit-card-accent"
                aria-hidden="true"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits