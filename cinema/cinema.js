

function droplist() {
    let check = document.getElementById("burger");
    let droplist = document.getElementById("drop");
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop

    if (window.innerWidth <= 980) {
        if (check.checked) {
            droplist.classList.add("dropdown_menuRemover");
            droplist.style.top = scrollPosition+80+"px";
            

        }
        if (!check.checked) {
            droplist.classList.remove("dropdown_menuRemover");
        }

        droplist.style.display = "block";
    } else {
        droplist.style.display="none";
    }
}

window.addEventListener("scroll", droplist);
// Event listener for screen width change
window.addEventListener("resize", droplist);

window.addEventListener('scroll', function() {
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop
    var stickyDiv = document.getElementById("header");
    if (window.innerWidth>=588) {
    }
        if (scrollPosition >= 10.0) {
                stickyDiv.style.backgroundColor=" rgba(255, 255, 255, 1)";
        }else stickyDiv.style.backgroundColor="transparent";



});



//////CAROUSEL//////////////////////////////////////////////

const carousels = document.querySelectorAll(".carousel");

carousels.forEach(carousel => {
    const firstImg = carousel.querySelector(".content_img"),
        arrowIcons = carousel.parentElement.querySelectorAll("i");

    let isDragStart = false,
        isDragging = false,
        prevPageX,
        prevScrollLeft,
        positionDiff;
    arrowIcons[0].style.display = "none";

    const showHideIcons = () => {
        let scrollWidth = carousel.scrollWidth - carousel.clientWidth;
        arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
        arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
    };



    arrowIcons.forEach(icon => {
        icon.addEventListener("click", () => {
            let firstImgWidth = firstImg.clientWidth + (carousel.clientWidth - 400);
            carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
            setTimeout(() => showHideIcons(), 60);
        });

    });

    const autoSlide = () => {
        if (
            carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) > -1 ||
            carousel.scrollLeft <= 0
        )
            return;

        positionDiff = Math.abs(positionDiff);
        let firstImgWidth = firstImg.clientWidth + 14;
        let valDifference = firstImgWidth - positionDiff;

        if (carousel.scrollLeft > prevScrollLeft) {
            return (
                (carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff),
                    setTimeout(() => showHideIcons(), 60)
            );
        }

        carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
        setTimeout(() => showHideIcons(), 60);
    };

    const dragStart = (e) => {
        isDragStart = true;
        prevPageX = e.pageX || e.touches[0].pageX;
        prevScrollLeft = carousel.scrollLeft;
    };

    const dragging = (e) => {
        if (!isDragStart) return;
        e.preventDefault();
        isDragging = true;
        carousel.classList.add("dragging");
        positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
        carousel.scrollLeft = prevScrollLeft - positionDiff;
        showHideIcons();
    };

    const dragStop = () => {
        isDragStart = false;
        carousel.classList.remove("dragging");

        if (!isDragging) return;
        isDragging = false;
        autoSlide();
    };

    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener("touchstart", dragStart);

    document.addEventListener("mousemove", dragging);
    carousel.addEventListener("touchmove", dragging);

    document.addEventListener("mouseup", dragStop);
    carousel.addEventListener("touchend", dragStop);
});



// Step 1: Select image and icon elements
const images = document.querySelectorAll('.content_img');
const icons = document.querySelectorAll('.play_icon');

// Step 2: Iterate through the image elements
images.forEach((image, index) => {
    // Step 3: Add event listener for mouseover
    image.addEventListener('mouseover', () => {
        // Step 4: Access corresponding icon element
        const icon = icons[index];
        // Step 5: Modify icon opacity
        icon.style.opacity = '.8';
    });

    // Step 3: Add event listener for mouseout
    image.addEventListener('mouseout', () => {
        // Step 4: Access corresponding icon element
        const icon = icons[index];
        // Step 5: Set icon opacity back to default
        icon.style.opacity = '';
    });
});


var loader = document.querySelector(".spinner");

window.addEventListener("load", function() {
    // Code to be executed when the page has finished loading
    loader.style.display = "none"; // Hide the loader/spinner element
});

