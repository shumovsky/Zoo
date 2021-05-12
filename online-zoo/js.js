window.onload = function() {
    console.log('hi');

    addNavClickHandler();
}

const addNavClickHandler = () => {
    document.querySelectorAll('.navigation').forEach(nav => nav.addEventListener('click', (e) => {
        if (e.target.classList.contains('nav_link')) {
            let clickedLink = e.target;
            removeActiveLinks();
            selectActiveLink(clickedLink);
        }
    }))
}

const removeActiveLinks = () => {
    let tags = document.querySelectorAll('.navigation_list .nav_link');
    tags.forEach(link => {
        link.classList.remove('link_active');
    })
}

const selectActiveLink = (clickedLink) => {
    clickedLink.classList.add('link_active');
}