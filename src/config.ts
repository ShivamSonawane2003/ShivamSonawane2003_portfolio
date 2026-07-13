/**
 * Runtime configuration.
 *
 * CONTACT FORM
 * ------------
 * The contact form posts to Web3Forms (https://web3forms.com) — a free,
 * static-site-friendly service that needs no backend. To activate it:
 *
 *   1. Go to https://web3forms.com and enter your email to get an Access Key.
 *   2. Paste the key below (or set VITE_WEB3FORMS_KEY in a .env file).
 *
 * Until a real key is set, the form gracefully falls back to opening the
 * visitor's email client (mailto) so it never looks broken.
 */
export const WEB3FORMS_ACCESS_KEY: string =
  import.meta.env.VITE_WEB3FORMS_KEY || 'YOUR_WEB3FORMS_ACCESS_KEY';

export const isFormConfigured = (): boolean =>
  !!WEB3FORMS_ACCESS_KEY && WEB3FORMS_ACCESS_KEY !== 'YOUR_WEB3FORMS_ACCESS_KEY';

/** Absolute URL to an asset in /public, respecting the GitHub Pages base path. */
export const asset = (path: string): string =>
  `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;
