
/** Variables **/

const seeMoreButton = document.querySelector('#seeMoreButton');
const company_about = document.querySelector('.company_about');

/** Functions **/

function goToFirstSection () {
    window.scrollTo({
        left: 0,
        top: company_about.offsetTop
    });
}

/** Event listeners **/

seeMoreButton.addEventListener('click', goToFirstSection)