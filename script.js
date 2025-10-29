document.getElementById('feedbackForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const feedback = document.getElementById('feedback').value;

  // ❌ Vulnerable: Directly inserting user input into innerHTML (XSS possible)
  const preview = document.getElementById('preview');
  preview.innerHTML = `<strong>${name}</strong>: ${feedback}`;
});
