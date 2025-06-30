const form = document.querySelector('.text-subtitle.apuntarse');
const email = document.querySelector('.text-sub');

document.addEventListener('click', (e) => {
    const clickedInsideForm = form.contains(e.target);
    const clickedInsideEmail = email.contains(e.target);

    if (clickedInsideForm) {
      form.classList.add('active');
    } else if (form.classList.contains('active') && !clickedInsideEmail) {
      form.classList.remove('active');
    }
  });