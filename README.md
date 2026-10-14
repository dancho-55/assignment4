# Assignment 4 — Forms and Validation

**Student:** Dancho  
**Group:** 55

A static educational website demonstrating semantic HTML forms, HTML5 constraint validation, Bootstrap styling, and custom validation feedback. Every task has a separate page and all pages share navigation.

## Run locally

Open `index.html` in a modern browser. No installation, build, or internet connection is needed: Bootstrap 5.3.3 is included locally.

Alternatively, run `python3 -m http.server 8000` from this folder and visit http://localhost:8000.

## Pages and requirements

| Page | Task | Implementation |
| --- | --- | --- |
| `index.html` | Overview | Links to all exercises, student and group |
| `task0.html` | Basic contact form | Name, email, message, submit; associated labels |
| `task1.html` | HTML5 validation | Required fields, email type, minimum and maximum lengths; native browser messages |
| `task2.html` | Bootstrap styling | Form classes, responsive grid, placeholders, helper text |
| `task3.html` | Bootstrap feedback | Explicit `is-valid` and `is-invalid` classes; field-specific errors and success messages |
| `task4.html` | Registration | First and last name, email, password and confirmation, gender radios, hobby checkboxes, country select, submit and reset |

## Validation behavior

- Contact forms in tasks 1–3 require a name of 2–60 characters, a valid email (up to 254 characters), and a message of 10–1,000 characters.
- Registration requires names of 2–60 characters, a valid email, passwords of 8–128 characters, matching passwords, a gender option, and a country. Hobbies are optional.
- Tasks 1 and 2 retain native browser validation. Task 0 intentionally omits required and length constraints; `type="email"` still checks nonempty email values.
- Tasks 3 and 4 use `novalidate` to replace native popups with custom feedback while retaining the Constraint Validation API. Errors are linked with `aria-describedby`; controls expose `aria-invalid`. Invalid submissions focus the first invalid field.
- Password confirmation uses `setCustomValidity()`. Changing either password updates the comparison.
- Reset removes values, custom validity, validation classes, feedback, and status messages.
- Successful submissions show a local demonstration message. There is no backend: no email is sent, no account is created, and no data or password is stored.

## Project structure

```text
assignment4/
  index.html
  task0.html ... task4.html
  assets/
    bootstrap.min.css
    styles.css
    forms.js
  README.md
  DEFENSE_RU.md
  .nojekyll
  netlify.toml
```

## Publish with GitHub Pages

1. Create a GitHub repository such as `assignment4-forms`.
2. Upload the **contents** of this folder to the repository root, including `assets/`, `README.md`, and `.nojekyll`. `index.html` must be at the root.
3. Open the repository's **Settings → Pages**.
4. Select **Deploy from a branch**, the `main` branch, and the root folder, then save.
5. Wait for deployment and open the site URL shown in Pages settings. Test the navigation and forms on the published site.
6. Submit the **GitHub repository URL** to Moodle and include the published website URL in the submission or add it to this README.

## Alternative publication with Netlify

Import the GitHub repository into Netlify. Leave the build command empty and use `.` as the publish directory (`netlify.toml` supplies these settings). You may also upload this folder through Netlify's manual deploy interface. Keep the GitHub repository available because the assignment requires submitting its link.

## Verification

Browser checks performed: empty registration errors, password mismatch, corrected registration success, reset clearing values and feedback, malformed contact email, and successful contact submission after correction. JavaScript syntax and local page/asset links were also checked. See `DEFENSE_RU.md` for additional manual checks and preparation.

Publication is not included in the local deliverable; add the actual deployed URL after publishing. Oral defense and live coding must be completed by the student.

## References and license

- [Bootstrap form overview](https://getbootstrap.com/docs/5.3/forms/overview/)
- [Bootstrap validation](https://getbootstrap.com/docs/5.3/forms/validation/)
- [MDN web forms](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms)

Bootstrap 5.3.3 is distributed under the MIT license; its license notice is retained in `assets/BOOTSTRAP-LICENSE.txt`. Project markup, styling, and interactions are prepared for this assignment.
