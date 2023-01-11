const target = document.querySelectorAll(".is--animated");

const options = {
    threshold: 0.95,
    rootMargin: "500px 0px 500px 0px",
};

const observer = new IntersectionObserver(function (entries, observer) {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("is--active");

        } else {
            
            entry.target.classList.remove("is--active");
        };

    });
}, options);

target.forEach(entries => {
    observer.observe(entries);
});