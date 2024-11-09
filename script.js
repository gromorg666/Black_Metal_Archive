document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.getElementById('gallery');
    const searchInput = document.getElementById('search');

    function displayAlbums(albums) {
        gallery.innerHTML = '';
        albums.forEach(album => {
            const albumDiv = document.createElement('div');
            albumDiv.classList.add('album');
            albumDiv.innerHTML = `
                <h1>${album.artist}</h1>
                <img src="${album.cover}" alt="${album.title}">
                <h2>${album.title}</h2>
                <h3>${album.year}</h3>
                <h4>${album.tracklist}</h4>
                <ul>
                    ${album.tracks.map(track => `<h5>${track}</h5>`).join('')}
                </ul>
            `;
            gallery.appendChild(albumDiv);
        });
    }

    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredAlbums = albums.filter(album => 
            album.title.toLowerCase().includes(searchTerm) ||
            album.artist.toLowerCase().includes(searchTerm)
        );
        displayAlbums(filteredAlbums);
    });

    displayAlbums(albums);
});
