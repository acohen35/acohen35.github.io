$(document).ready(function () {
    // Data for slideshow: update paths with your image file names and captions
    const images = [
        { letter: "A", item: "Action-figure", src: "images/AA.jpg" },
        { letter: "A", item: "Anubis", src: "images/A.jpg" },
        { letter: "R", item: "Remote", src: "images/R.jpg" },
        { letter: "O", item: "Onion", src: "images/O.jpg" },
        { letter: "N", item: "Nozzle", src: "images/N.jpg" },
        { letter: "C", item: "Cat", src: "images/C.jpg" },
        { letter: "O", item: "Orange", src: "images/OO.jpg" },
        { letter: "H", item: "Hat", src: "images/H.jpg" },
        { letter: "E", item: "Engine", src: "images/E.jpg" },
        { letter: "N", item: "Nizoral", src: "images/NN.jpg" }
    ];

    // Dynamically populate slides and navigation
    let slideIndex = 0;
    images.forEach((img, index) => {
        // Add slide
        $(".slides-container").append(`
            <div class="slide ${index === 0 ? 'active' : ''}">
                <img src="${img.src}" alt="${img.item}">
                <p>${img.letter} - ${img.item}</p>
            </div>
        `);

        // Add navigation button
        if (index === 5) { // Add space before "COHEN"
            $(".navigation").append('<button style="width: 20px; background: none; border: none;"></button>');
        }
        $(".navigation").append(`
            <button class="${index === 0 ? 'active-btn' : ''}" data-index="${index}">${img.letter}</button>
        `);
    });

    // Handle navigation clicks
    $(".navigation button").on("click", function () {
        if ($(this).data("index") !== undefined) {  // Only handle clicks on actual letter buttons
            const index = $(this).data("index");
            $(".slide").removeClass("active").eq(index).addClass("active");
            $(".navigation button[data-index]").removeClass("active-btn");
            $(this).addClass("active-btn");
        }
    });
});
