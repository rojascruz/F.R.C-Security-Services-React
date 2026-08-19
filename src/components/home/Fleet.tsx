import { useState } from 'react'

import fleet1 from '../../assets/images/fleet/Foto1.png'
import fleet2 from '../../assets/images/fleet/Foto2.png'
import fleet3 from '../../assets/images/fleet/Foto3.png'
import fleet4 from '../../assets/images/fleet/Foto4.png'

import { useLanguage } from '../../hooks/useLanguage'

import '../../styles/home/fleet.css'

function Fleet() {
  const { t } = useLanguage()
  const section = t.home.fleet

  const [selectedImage, setSelectedImage] =
    useState<string | null>(null)

  const images = [
    fleet1,
    fleet2,
    fleet3,
    fleet4,
  ]

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  return (
    <>
      <section className="fleet-section">
        <div className="section-container">
          <header className="split-section-header fleet-header">
            <div>
              <span className="section-eyebrow">
                {section.eyebrow}
              </span>

              <h2>
                {section.title}{' '}
                <span>
                  {section.titleHighlight}
                </span>
              </h2>
            </div>

            <p>{section.description}</p>
          </header>

          <div className="fleet-grid">
            {images.map((image, index) => (
              <figure
                key={image}
                className={`fleet-photo fleet-photo-${index + 1}`}
              >
                <button
                  type="button"
                  className="fleet-photo-button"
                  onClick={() =>
                    setSelectedImage(image)
                  }
                  aria-label={`${section.label} ${index + 1}`}
                >
                  <img
                    src={image}
                    alt={`${section.label} ${index + 1}`}
                    loading="lazy"
                  />

                  <div
                    className="fleet-photo-overlay"
                    aria-hidden="true"
                  />

                  <div
                    className="fleet-zoom-icon"
                    aria-hidden="true"
                  >
                    <i className="bi bi-arrows-fullscreen" />
                  </div>

                  <figcaption>
                    <i
                      className="bi bi-car-front"
                      aria-hidden="true"
                    />

                    <span>
                      {section.label}
                    </span>
                  </figcaption>
                </button>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div
          className="fleet-lightbox"
          role="dialog"
          aria-modal="true"
          onClick={closeLightbox}
        >
          <button
            type="button"
            className="fleet-lightbox-close"
            onClick={closeLightbox}
            aria-label="Cerrar imagen"
          >
            <i className="bi bi-x-lg" />
          </button>

          <img
            src={selectedImage}
            alt={section.label}
            onClick={(event) =>
              event.stopPropagation()
            }
          />
        </div>
      )}
    </>
  )
}

export default Fleet