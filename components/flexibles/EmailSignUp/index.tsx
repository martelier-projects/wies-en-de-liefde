import type EmailSignUpInterface from './interface'

import EmailSignUpModule from '../../modules/EmailSignUp'

import styles from './styles.module.scss'

export default function EmailSignUp({
  title,
  text,
  emailLabel,
  submitLabel,
}: EmailSignUpInterface) {
  return (
    <div className={styles['email-sign-up']}>
      <div className={styles['email-sign-up__inner']}>
        <div className={styles['email-sign-up__love-letter']}>
          <svg
            className={styles['email-sign-up__love-letter-svg']}
            xmlns="http://www.w3.org/2000/svg"
            width="299.726"
            height="299.726"
            viewBox="0 0 299.726 299.726"
          >
            <path
              d="M295.469 241.954c-1.837-33.049-2.448-66.708-5.509-100.369.611-.612 1.225-1.836.611-3.06-1.836-7.344-6.12-14.076-12.852-17.748-.612 0-1.226-.612-1.226-.612 1.837-17.748 1.837-36.108-.611-53.856-2.447-14.688-7.955-54.468-23.256-62.424-11.017-5.508-36.107-1.836-48.96-2.448C185.918.825 168.17.213 150.422.213c-41.616-.612-82.62 0-124.236 3.06-3.06 0-6.12 3.06-4.896 6.732 8.568 29.376 14.688 59.364 20.196 89.352-5.508 4.896-10.404 11.016-14.688 16.524-4.896 6.12-9.792 11.628-14.688 18.36-.612 1.224-.612 2.448 0 3.06-4.896 25.705-5.508 51.409-6.732 77.724-.612 17.137-7.956 48.349 3.672 63.035 7.956 10.404 23.868 8.568 35.496 9.181 33.66 2.448 67.32 4.896 100.368 7.345 30.6 2.447 61.812 6.12 92.412 4.896 14.688-.611 39.78 0 51.408-11.017 12.242-11.627 7.958-32.436 6.735-46.511zm-13.465-105.265c-.611.612-.611.612-.611 1.224-.612 0-1.225.612-2.448 1.224-1.836 1.836-4.284 3.672-6.12 5.508 1.225-4.896 1.836-9.792 3.061-14.688 1.833 1.836 4.282 3.672 6.118 6.732zM32.92 13.677c55.08-1.224 109.548-2.448 164.627-.612 12.239.612 29.987-2.448 41.615 1.836 16.524 5.508 20.196 23.868 24.48 39.168 9.18 31.212 9.18 63.036 1.836 94.248v1.836c-21.42 18.359-42.84 34.885-65.484 52.021-.611.611-1.224 1.225-1.224 1.836-13.464-14.688-34.272-38.556-54.468-39.779-17.748-.612-31.824 17.747-43.452 28.765-1.836 1.836-4.284 3.672-6.12 5.508 0-.612 0-1.836-.612-2.448-9.792-11.016-23.256-19.584-34.884-28.764-1.224-1.225-2.448-1.836-3.672-3.061 1.224 0 2.448-.612 2.448-1.837-1.834-50.185-14.074-99.756-25.09-148.717zM12.724 259.701c-4.896-14.688.612-40.393.612-56.305.612-22.031 2.448-43.451 2.448-65.483 0 0 .612 0 .612-.612 6.12-5.508 11.628-12.24 17.136-18.36 3.06-3.672 6.12-6.732 9.18-10.404 3.06 18.36 6.732 36.108 10.404 54.468-11.628-8.568-22.644-17.749-35.496-25.092-1.224-.612-2.448 1.224-1.224 1.836 11.628 12.24 25.092 22.644 37.332 33.048 11.628 9.792 22.644 20.195 36.108 27.54.612 0 1.224.611 1.836.611-24.48 22.645-50.184 44.677-72.828 69.156-1.836-3.058-4.284-6.119-6.12-10.403zm132.804 26.317c-19.584-1.224-39.78-3.06-59.364-4.283-18.36-1.225-47.736 1.836-63.648-9.181 17.748-13.464 33.66-28.151 50.184-43.452 18.972-17.136 55.08-62.424 84.456-50.184 20.196 8.567 40.393 37.943 55.08 53.855 17.136 18.359 33.66 37.332 50.796 55.691-34.272 10.405-95.472-.61-117.504-2.446zm141.984-19.584c-1.837 7.956-7.345 14.076-15.301 17.748-22.645-26.315-45.899-51.407-69.769-76.5h.612c28.15-14.688 54.468-34.884 77.11-56.916.612 18.36 1.837 36.721 3.062 55.08 2.45 17.748 7.958 42.84 4.286 60.588z"
              fill="currentColor"
            />
            <path
              d="M214.072 59.578c-42.84-1.224-86.292 2.448-128.52 7.956-1.836 0-1.836 3.06 0 3.06 42.84-1.224 86.292-3.06 128.52-7.344 3.06.611 3.06-3.672 0-3.672zM229.372 88.954c-41.004-10.404-83.23-3.06-123.624 3.672-2.448.612-1.224 4.284 1.224 3.672 41.004-5.508 80.783-8.568 122.398-3.672 1.838 1.224 1.838-3.061.002-3.672zM217.132 120.777c-39.779-4.284-82.619.612-122.399 2.448-3.06 0-3.06 4.896 0 4.896 40.392.612 83.231 4.284 123.011-1.836 3.672-.612 2.448-5.508-.612-5.508zM84.328 25.917c-4.896 1.224-8.568 4.284-11.628 7.956-2.448-1.836-5.508-2.448-9.18-3.06-2.448 0-4.896 2.448-4.896 4.896.612 4.284 2.448 7.344 5.508 9.792.612 1.224 1.224 2.448 2.448 3.06 2.448 1.836 7.344 1.836 10.404.612h.612C84.328 47.95 88 38.158 89.224 32.038c1.836-3.672-1.224-6.732-4.896-6.121z"
              fill="currentColor"
            />
          </svg>
        </div>

        <div className={styles['email-sign-up__form']}>
          {title && <h2 className={styles['email-sign-up__title']}>{title}</h2>}
          {text && <p className={styles['email-sign-up__text']}>{text}</p>}

          <EmailSignUpModule label={emailLabel} submit={submitLabel} />
        </div>
      </div>
    </div>
  )
}