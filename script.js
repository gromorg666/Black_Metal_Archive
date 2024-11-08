document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modal-img');
  const albumTitle = document.getElementById('album-title');
  const albumYear = document.getElementById('album-year');
  const trackList = document.getElementById('track-list');
  const closeBtn = document.querySelector('.close');
  const albumImgs = document.querySelectorAll('.album-img');

  albumImgs.forEach(img => {
    img.addEventListener('click', () => {
      const albumArticle = img.closest('article');
      const albumName = albumArticle.getAttribute('data-name');
      const albumYearData = albumArticle.getAttribute('data-year');
      const tracks = albumArticle.getAttribute('data-tracks').split(', ');

      modal.style.display = 'flex';
      modalImg.src = img.src;
      albumTitle.textContent = albumName;
      albumYear.textContent = `Year: ${albumYearData}`;
      trackList.innerHTML = ''; // Limpiar lista
      tracks.forEach(track => {
        const li = document.createElement('li');
        li.textContent = track;
        trackList.appendChild(li);
      });

      anime({
        targets: '#modal-img',
        scale: [0.8, 1],
        duration: 500,
        easing: 'easeOutElastic(1, .8)'
      });
    });
  });

  closeBtn.addEventListener('click', () => {
    anime({
      targets: '#modal-img',
      scale: [1, 0.8],
      duration: 300,
      easing: 'easeInOutQuad',
      complete: () => {
        modal.style.display = 'none';
      }
    });
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      anime({
        targets: '#modal-img',
        scale: [1, 0.8],
        duration: 300,
        easing: 'easeInOutQuad',
        complete: () => {
          modal.style.display = 'none';
        }
      });
    }
  });
});