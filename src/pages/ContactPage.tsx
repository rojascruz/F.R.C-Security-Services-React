import {
  useState,
  type FormEvent,
} from 'react'

import { siteConfig } from '../config/siteConfig'
import { useLanguage } from '../hooks/useLanguage'

import '../styles/pages/contact.css'

type InquiryType =
  | 'service'
  | 'employment'

type ContactFormData = {
  inquiryType: InquiryType
  name: string
  email: string
  phone: string
  service: string
  message: string
}

const initialFormData: ContactFormData = {
  inquiryType: 'service',
  name: '',
  email: '',
  phone: '',
  service: '',
  message: '',
}

function ContactPage() {
  const { language, t } = useLanguage()

  const page = t.contactPage

  const [formData, setFormData] =
    useState<ContactFormData>(
      initialFormData,
    )

  const isEmployment =
    formData.inquiryType === 'employment'

  const serviceOptions = [
    page.form.services.quote,
    page.form.services.information,
    page.form.services.other,
  ]

  const trustItems = [
    {
      key: 'response',
      icon: 'bi-chat-dots',
      content: page.trust.response,
    },
    {
      key: 'personalized',
      icon: 'bi-person-check',
      content: page.trust.personalized,
    },
    {
      key: 'tailored',
      icon: 'bi-sliders',
      content: page.trust.tailored,
    },
    {
      key: 'reliable',
      icon: 'bi-shield-check',
      content: page.trust.reliable,
    },
  ]

  const whatsappUrl =
    `https://wa.me/${siteConfig.whatsapp.number}` +
    `?text=${encodeURIComponent(
      t.whatsapp.message,
    )}`

  const handleChange = (
    field: keyof ContactFormData,
    value: string,
  ) => {
    setFormData((current) => ({
      ...current,
      [field]: value,
    }))
  }

  const handleInquiryTypeChange = (
    inquiryType: InquiryType,
  ) => {
    setFormData((current) => ({
      ...current,
      inquiryType,
      service: '',
      message: '',
    }))
  }

  const scrollToForm = (
    inquiryType: InquiryType,
  ) => {
    handleInquiryTypeChange(
      inquiryType,
    )

    window.setTimeout(() => {
      document
        .getElementById(
          'contact-form-card',
        )
        ?.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        })
    }, 50)
  }

  const handleSubmit = (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault()

    const notProvided =
      language === 'es'
        ? 'No provisto'
        : 'Not provided'

    const notSpecified =
      language === 'es'
        ? 'No especificado'
        : 'Not specified'

    const fallbackService =
      language === 'es'
        ? 'Solicitud de información'
        : 'Information Request'

    const labels =
      language === 'es'
        ? {
            name: 'Nombre',
            email: 'Correo electrónico',
            phone: 'Teléfono',
            service: 'Servicio solicitado',
            message: 'Mensaje',
            employment:
              'SOLICITUD DE EMPLEO',
            experience:
              'Experiencia e interés laboral',
          }
        : {
            name: 'Name',
            email: 'Email',
            phone: 'Phone',
            service: 'Requested service',
            message: 'Message',
            employment:
              'EMPLOYMENT INQUIRY',
            experience:
              'Experience and employment interest',
          }

    const subject = isEmployment
      ? `${siteConfig.businessName} - ${
          language === 'es'
            ? 'Solicitud de Empleo'
            : 'Employment Inquiry'
        } - ${formData.name}`
      : `${siteConfig.businessName} - ${
          formData.service ||
          fallbackService
        }`

    const body = isEmployment
      ? [
          labels.employment,
          '',
          `${labels.name}: ${formData.name}`,
          `${labels.email}: ${formData.email}`,
          `${labels.phone}: ${
            formData.phone ||
            notProvided
          }`,
          '',
          `${labels.experience}:`,
          formData.message,
        ].join('\n')
      : [
          `${labels.name}: ${formData.name}`,
          `${labels.email}: ${formData.email}`,
          `${labels.phone}: ${
            formData.phone ||
            notProvided
          }`,
          `${labels.service}: ${
            formData.service ||
            notSpecified
          }`,
          '',
          `${labels.message}:`,
          formData.message,
        ].join('\n')

    window.location.href =
      `mailto:${siteConfig.email}` +
      `?subject=${encodeURIComponent(
        subject,
      )}` +
      `&body=${encodeURIComponent(
        body,
      )}`
  }

  return (
    <main className="contact-page">

      {/* =====================================================
          HERO
          ===================================================== */}
      <section className="contact-hero">

        <div
          className="contact-hero-grid"
          aria-hidden="true"
        />

        <div className="contact-hero-container">

          <div className="contact-hero-copy">

            <span className="section-eyebrow light">
              <i
                className="bi bi-chat-dots"
                aria-hidden="true"
              />

              {page.hero.eyebrow}
            </span>

            <h1>
              {page.hero.title}{' '}

              <span>
                {page.hero.titleHighlight}
              </span>
            </h1>

            <p>
              {page.hero.description}
            </p>

            <div className="contact-hero-options">

              <button
                type="button"
                onClick={() =>
                  scrollToForm('service')
                }
              >
                <span className="contact-hero-option-icon">
                  <i
                    className="bi bi-shield-check"
                    aria-hidden="true"
                  />
                </span>

                <span>
                  <strong>
                    {page.hero.serviceContact}
                  </strong>

                  <small>
                    {
                      page.hero
                        .serviceContactDescription
                    }
                  </small>
                </span>
              </button>

              <button
                type="button"
                onClick={() =>
                  scrollToForm(
                    'employment',
                  )
                }
              >
                <span className="contact-hero-option-icon">
                  <i
                    className="bi bi-person-workspace"
                    aria-hidden="true"
                  />
                </span>

                <span>
                  <strong>
                    {
                      page.hero
                        .employmentContact
                    }
                  </strong>

                  <small>
                    {
                      page.hero
                        .employmentContactDescription
                    }
                  </small>
                </span>
              </button>

            </div>

          </div>

          {/* =================================================
              CONTACTO DIRECTO
              ================================================= */}
          <div className="contact-hero-direct">

            <span className="contact-hero-direct-label">
              {page.hero.directContact}
            </span>

            <a
              href={`tel:${siteConfig.phone.href}`}
            >
              <div
                className="contact-hero-direct-icon"
                aria-hidden="true"
              >
                <i className="bi bi-telephone" />
              </div>

              <div>
                <small>
                  {page.hero.callUs}
                </small>

                <strong>
                  {siteConfig.phone.display}
                </strong>
              </div>

              <i
                className="bi bi-arrow-up-right contact-direct-arrow"
                aria-hidden="true"
              />
            </a>

            <a
              href={`mailto:${siteConfig.email}`}
            >
              <div
                className="contact-hero-direct-icon"
                aria-hidden="true"
              >
                <i className="bi bi-envelope" />
              </div>

              <div>
                <small>
                  {page.hero.emailUs}
                </small>

                <strong>
                  {siteConfig.email}
                </strong>
              </div>

              <i
                className="bi bi-arrow-up-right contact-direct-arrow"
                aria-hidden="true"
              />
            </a>

          </div>

        </div>

      </section>

      {/* =====================================================
          CONTENIDO
          ===================================================== */}
      <section className="contact-main-section">

        <div className="section-container contact-main-grid">

          {/* =================================================
              INFORMACIÓN
              ================================================= */}
          <aside className="contact-info-panel">

            <span className="section-eyebrow">
              <i
                className="bi bi-chat-square-text"
                aria-hidden="true"
              />

              {page.info.eyebrow}
            </span>

            <h2>
              {page.info.title}{' '}

              <span>
                {page.info.titleHighlight}
              </span>
            </h2>

            <p>
              {page.info.description}
            </p>

            {/* ===============================================
                ACCIONES
                =============================================== */}
            <div className="contact-direct-actions">

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-direct-action"
              >
                <div
                  className="contact-direct-action-icon whatsapp"
                  aria-hidden="true"
                >
                  <i className="bi bi-whatsapp" />
                </div>

                <div>
                  <strong>
                    {
                      page.directActions
                        .whatsapp.title
                    }
                  </strong>

                  <span>
                    {
                      page.directActions
                        .whatsapp.description
                    }
                  </span>
                </div>

                <i
                  className="bi bi-arrow-up-right contact-action-arrow"
                  aria-hidden="true"
                />
              </a>

              <a
                href={`mailto:${siteConfig.email}`}
                className="contact-direct-action"
              >
                <div
                  className="contact-direct-action-icon"
                  aria-hidden="true"
                >
                  <i className="bi bi-envelope" />
                </div>

                <div>
                  <strong>
                    {
                      page.directActions
                        .email.title
                    }
                  </strong>

                  <span>
                    {
                      page.directActions
                        .email.description
                    }
                  </span>
                </div>

                <i
                  className="bi bi-arrow-up-right contact-action-arrow"
                  aria-hidden="true"
                />
              </a>

            </div>

            {/* ===============================================
                EMPLEO
                =============================================== */}
            <div
              id="careers"
              className="contact-careers-card"
            >

              <div
                className="contact-careers-icon"
                aria-hidden="true"
              >
                <i className="bi bi-person-plus" />
              </div>

              <span className="contact-careers-eyebrow">
                {page.careers.eyebrow}
              </span>

              <h3>
                {page.careers.title}{' '}

                <strong>
                  {
                    page.careers
                      .titleHighlight
                  }
                </strong>
              </h3>

              <p>
                {page.careers.description}
              </p>

              <button
                type="button"
                className="contact-careers-button"
                onClick={() =>
                  scrollToForm(
                    'employment',
                  )
                }
              >
                {page.careers.button}

                <i
                  className="bi bi-arrow-right"
                  aria-hidden="true"
                />
              </button>

            </div>

          </aside>

          {/* =================================================
              FORMULARIO
              ================================================= */}
          <div
            id="contact-form-card"
            className={`contact-form-card ${
              isEmployment
                ? 'is-employment'
                : ''
            }`}
          >

            <div className="contact-form-header">

              <div
                className="contact-form-header-icon"
                aria-hidden="true"
              >
                <i
                  className={
                    isEmployment
                      ? 'bi bi-person-badge'
                      : 'bi bi-send'
                  }
                />
              </div>

              <div>

                <span className="section-eyebrow">
                  {isEmployment
                    ? page.form
                        .employmentEyebrow
                    : page.form.eyebrow}
                </span>

                <h2>
                  {isEmployment
                    ? page.form
                        .employmentTitle
                    : page.form.title}
                </h2>

              </div>

            </div>

            <p className="contact-form-description">
              {isEmployment
                ? page.form
                    .employmentDescription
                : page.form.description}
            </p>

            {/* ===============================================
                TIPO DE SOLICITUD
                =============================================== */}
            <div className="contact-inquiry-selector">

              <button
                type="button"
                className={
                  !isEmployment
                    ? 'is-active'
                    : ''
                }
                onClick={() =>
                  handleInquiryTypeChange(
                    'service',
                  )
                }
              >
                <i
                  className="bi bi-shield-check"
                  aria-hidden="true"
                />

                {page.form.inquiry.service}
              </button>

              <button
                type="button"
                className={
                  isEmployment
                    ? 'is-active'
                    : ''
                }
                onClick={() =>
                  handleInquiryTypeChange(
                    'employment',
                  )
                }
              >
                <i
                  className="bi bi-person-workspace"
                  aria-hidden="true"
                />

                {page.form.inquiry.employment}
              </button>

            </div>

            <form
              onSubmit={handleSubmit}
              className="contact-form"
            >

              <div className="contact-form-grid">

                {/* Nombre */}
                <label>
                  <span>
                    {page.form.fields.name}

                    <strong aria-hidden="true">
                      *
                    </strong>
                  </span>

                  <div className="contact-input-wrapper">
                    <i
                      className="bi bi-person"
                      aria-hidden="true"
                    />

                    <input
                      type="text"
                      value={formData.name}
                      onChange={(event) =>
                        handleChange(
                          'name',
                          event.target.value,
                        )
                      }
                      placeholder={
                        page.form
                          .placeholders.name
                      }
                      autoComplete="name"
                      required
                    />
                  </div>
                </label>

                {/* Email */}
                <label>
                  <span>
                    {page.form.fields.email}

                    <strong aria-hidden="true">
                      *
                    </strong>
                  </span>

                  <div className="contact-input-wrapper">
                    <i
                      className="bi bi-envelope"
                      aria-hidden="true"
                    />

                    <input
                      type="email"
                      value={formData.email}
                      onChange={(event) =>
                        handleChange(
                          'email',
                          event.target.value,
                        )
                      }
                      placeholder={
                        page.form
                          .placeholders.email
                      }
                      autoComplete="email"
                      required
                    />
                  </div>
                </label>

                {/* Teléfono */}
                <label
                  className={
                    isEmployment
                      ? 'contact-field-full'
                      : ''
                  }
                >
                  <span>
                    {page.form.fields.phone}
                  </span>

                  <div className="contact-input-wrapper">
                    <i
                      className="bi bi-telephone"
                      aria-hidden="true"
                    />

                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(event) =>
                        handleChange(
                          'phone',
                          event.target.value,
                        )
                      }
                      placeholder={
                        page.form
                          .placeholders.phone
                      }
                      autoComplete="tel"
                    />
                  </div>
                </label>

                {/* Servicio */}
                {!isEmployment && (
                  <label>
                    <span>
                      {
                        page.form.fields
                          .service
                      }
                    </span>

                    <div className="contact-input-wrapper">

                      <i
                        className="bi bi-shield-check"
                        aria-hidden="true"
                      />

                      <select
                        value={formData.service}
                        onChange={(event) =>
                          handleChange(
                            'service',
                            event.target.value,
                          )
                        }
                      >
                        <option value="">
                          {
                            page.form
                              .placeholders
                              .service
                          }
                        </option>

                        {serviceOptions.map(
                          (option) => (
                            <option
                              key={option}
                              value={option}
                            >
                              {option}
                            </option>
                          ),
                        )}

                      </select>

                    </div>
                  </label>
                )}

                {/* Mensaje */}
                <label className="contact-field-full">
                  <span>
                    {isEmployment
                      ? page.form.fields
                          .employmentMessage
                      : page.form.fields
                          .message}

                    <strong aria-hidden="true">
                      *
                    </strong>
                  </span>

                  <textarea
                    rows={7}
                    value={formData.message}
                    onChange={(event) =>
                      handleChange(
                        'message',
                        event.target.value,
                      )
                    }
                    placeholder={
                      isEmployment
                        ? page.form
                            .placeholders
                            .employmentMessage
                        : page.form
                            .placeholders
                            .message
                    }
                    required
                  />
                </label>

              </div>

              <div className="contact-form-footer">

                <div className="contact-form-privacy">

                  <i
                    className="bi bi-lock"
                    aria-hidden="true"
                  />

                  <small>
                    {page.form.privacy}
                  </small>

                </div>

                <button
                  type="submit"
                  className="button button-primary contact-submit-button"
                >
                  {isEmployment
                    ? page.form
                        .employmentSubmit
                    : page.form.submit}

                  <i
                    className="bi bi-send"
                    aria-hidden="true"
                  />
                </button>

              </div>

            </form>

          </div>

        </div>

      </section>

      {/* =====================================================
          TRUST
          ===================================================== */}
      <section className="contact-trust-section">

        <div className="section-container contact-trust-grid">

          {trustItems.map((item) => (
            <article key={item.key}>

              <div
                className="contact-trust-icon"
                aria-hidden="true"
              >
                <i
                  className={`bi ${item.icon}`}
                />
              </div>

              <h3>
                {item.content.title}
              </h3>

              <p>
                {item.content.description}
              </p>

              <div
                className="contact-trust-accent"
                aria-hidden="true"
              />

            </article>
          ))}

        </div>

      </section>

    </main>
  )
}

export default ContactPage