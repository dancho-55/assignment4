'use strict';
document.querySelectorAll('form').forEach((form) => {
  const custom = form.dataset.mode === 'custom';
  const status = form.querySelector('.form-status');
  const controls = [...form.querySelectorAll('input, textarea, select')];
  let attempted = false;
  function syncPasswords() {
    const password = form.querySelector('#password');
    const confirmation = form.querySelector('#confirm-password');
    if (confirmation) confirmation.setCustomValidity(
      confirmation.value && confirmation.value !== password.value ? 'Passwords must match.' : ''
    );
  }
  function errorMessage(field) {
    const label = field.labels?.[0]?.textContent.replace(' *', '').trim() || 'This field';
    if (field.validity.valueMissing) return `${label} is required.`;
    if (field.validity.typeMismatch) return 'Enter a valid email address, such as name@example.com.';
    if (field.validity.tooShort) return `${label} must have at least ${field.minLength} characters.`;
    if (field.validity.tooLong) return `${label} must have no more than ${field.maxLength} characters.`;
    return field.validationMessage || `Please check ${label.toLowerCase()}.`;
  }
  function showField(field) {
    if (field.type === 'checkbox') return;
    const group = field.type === 'radio' ? controls.filter(c => c.type === 'radio' && c.name === field.name) : [field];
    const valid = group.every(c => c.validity.valid);
    group.forEach(c => {
      c.classList.toggle('is-valid', valid);
      c.classList.toggle('is-invalid', !valid);
      c.setAttribute('aria-invalid', String(!valid));
    });
    const feedback = document.getElementById(field.type === 'radio' ? `${field.name}-error` : `${field.id}-error`);
    if (feedback) {
      feedback.textContent = field.type === 'radio' ? 'Please choose a gender option.' : errorMessage(field);
      if (field.type === 'radio') feedback.classList.toggle('d-block', !valid);
    }
  }
  if (custom) controls.forEach(field => {
    field.addEventListener('blur', () => { syncPasswords(); showField(field); });
    field.addEventListener('input', () => {
      status.textContent = '';
      syncPasswords();
      if (attempted || field.classList.contains('is-invalid') || field.classList.contains('is-valid')) showField(field);
      const confirmation = form.querySelector('#confirm-password');
      if (field.id === 'password' && confirmation && (attempted || confirmation.classList.contains('is-invalid') || confirmation.classList.contains('is-valid'))) showField(confirmation);
    });
    field.addEventListener('change', () => { syncPasswords(); showField(field); });
  });
  form.addEventListener('submit', event => {
    event.preventDefault();
    syncPasswords();
    attempted = true;
    if (custom) controls.forEach(showField);
    if (!form.checkValidity()) {
      status.classList.add('error');
      status.textContent = 'Please correct the highlighted fields and try again.';
      controls.find(c => !c.validity.valid)?.focus();
      return;
    }
    status.classList.remove('error');
    status.textContent = form.id === 'registration-form'
      ? 'Registration form validated successfully. This demo does not create an account.'
      : 'Your form was submitted successfully in this demo. No message was sent.';
  });
  form.addEventListener('reset', () => {
    attempted = false;
    status.textContent = '';
    status.classList.remove('error');
    controls.forEach(field => {
      field.classList.remove('is-valid', 'is-invalid');
      field.removeAttribute('aria-invalid');
      field.setCustomValidity('');
    });
    form.querySelectorAll('.group-feedback').forEach(el => el.classList.remove('d-block'));
  });
});
