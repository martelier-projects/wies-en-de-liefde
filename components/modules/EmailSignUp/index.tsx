import type EmailSignUpInterface from './interface'

import styles from './styles.module.scss'

export default function EmailSignUp({
  title,
  text,
  label,
  submit,
}: EmailSignUpInterface) {
  const action =
    'https://wiesendeliefde.us13.list-manage.com/subscribe/post?u=c9de28e8236a6b661ba2832ad&amp;id=8ec8abe12c'

  return (
    <div id="mc_embed_signup" className={styles['email-sign-up']}>
      <form
        action={action}
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        className="validate"
        target="_blank"
        noValidate={true}
      >
        <div id="mc_embed_signup_scroll">
          {title && <h3>{title}</h3>}
          {text && <p>{text}</p>}

          <div className={styles['email-sign-up__inner']}>
            <div className="mc-field-group">
              <label htmlFor="mce-EMAIL">{label}</label>
              <input
                type="email"
                name="EMAIL"
                className="required email"
                id="mce-EMAIL"
                placeholder="Email adres"
              />
            </div>
            <div id="mce-responses" className="clear">
              <div
                className="response"
                id="mce-error-response"
                style={{ display: 'none' }}
              />
              <div
                className="response"
                id="mce-success-response"
                style={{ display: 'none' }}
              />
            </div>
            {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
            <div
              style={{
                position: 'absolute',
                left: '-5000px',
              }}
              aria-hidden="true"
            >
              <input
                type="text"
                name="b_c9de28e8236a6b661ba2832ad_8ec8abe12c"
                tabIndex={-1}
                defaultValue=""
              />
            </div>
            <button
              type="submit"
              name="subscribe"
              id="mc-embedded-subscribe"
              className="button"
            >
              {submit}
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
