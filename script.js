// let lastScrollPosition = window.pageYOffset;

// window.addEventListener('scroll', function() {
//     const currentScrollPosition = window.pageYOffset;

//     if (currentScrollPosition > lastScrollPosition) {
//         // Scrolling down, hide the banner
//         document.querySelector('.copyright-banner').style.bottom = '-50px';
//     } else {
//         // Scrolling up, show the banner
//         document.querySelector('.copyright-banner').style.bottom = '0';
//     }

//     lastScrollPosition = currentScrollPosition;
// });


document.addEventListener('DOMContentLoaded', document.addEventListener('DOMContentLoaded', function() {
    let currentImageUrl = '';

    function getRandomName() {
        const timestamp = new Date().getTime();
        const randomNumber = Math.floor(Math.random() * 1000);
        return `meme_${timestamp}_${randomNumber}.jpg`;
    }

    function fetchImageWithProxy(url) {
        return fetch(`https://example.com/proxy?url=${encodeURIComponent(url)}`)
            .then(response => response.blob())
            .catch(error => console.error('Error fetching image with proxy:', error));
    }

    document.getElementById('get-meme').addEventListener('click', function() {
        fetch('https://www.reddit.com/r/memes/random/.json')
            .then(response => response.json())
            .then(data => {
                const memeData = data[0].data.children[0].data;
                const imageUrl = memeData.url_overridden_by_dest;
                currentImageUrl = imageUrl;

                const memeContainer = document.getElementById('meme-container');
                memeContainer.innerHTML = `<img src="${imageUrl}" alt="Random Meme">`;
            })
            .catch(error => console.error('Error fetching meme:', error));
    });

    document.getElementById('download-meme').addEventListener('click', function() {
        if (currentImageUrl) {
            fetchImageWithProxy(currentImageUrl)
                .then(blob => {
                    const url = window.URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = getRandomName(); // Set the random name here
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                    window.URL.revokeObjectURL(url);
                })
                .catch(error => console.error('Error downloading meme:', error));
        }
    });

    // Get a random meme on page load
    document.getElementById('get-meme').click();
});
function() {
    let currentImageUrl = '';

    function getRandomName() {
        const timestamp = new Date().getTime();
        const randomNumber = Math.floor(Math.random() * 1000);
        return `meme_${timestamp}_${randomNumber}.jpg`;
    }

    document.getElementById('get-meme').addEventListener('click', function() {
        fetch('https://www.reddit.com/r/memes/random/.json')
            .then(response => response.json())
            .then(data => {
                const memeData = data[0].data.children[0].data;
                const imageUrl = memeData.url_overridden_by_dest;
                currentImageUrl = imageUrl;

                const memeContainer = document.getElementById('meme-container');
                memeContainer.innerHTML = `<img src="${imageUrl}" alt="Random Meme">`;
            })
            .catch(error => console.error('Error fetching meme:', error));
    });

    document.getElementById('download-meme').addEventListener('click', function() {
        if (currentImageUrl) {
            fetch(currentImageUrl)
                .then(response => response.blob())
                .then(blob => {
                    const url = window.URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = getRandomName(); // Set the random name here
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                    window.URL.revokeObjectURL(url);
                })
                .catch(error => console.error('Error downloading meme:', error));
        }
    });

    // Get a random meme on page load
    document.getElementById('get-meme').click();
});





