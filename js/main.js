    // navbar
    const navbar = document.getElementsByTagName('nav')[0];
    window.addEventListener('scroll', function() {
        console.log(window.scrollY); 
        if (window.scrollY > 1){
            navbar.classList.replace('bg-transparent', 'nav-color');
        } else if (this.window.scrollY <= 0) {
            navbar.classList.replace('nav-color', 'bg-transparent')
        }
    });

    // read more
    function buttonread() {
    var readmore = document.getElementById("readmore");
    var selengkapnyaText = document.getElementById("selengkapnya");
    var buttonMore = document.getElementById("more");

    if (readmore.style.display === "none") {
        readmore.style.display = "inline";
        buttonMore.innerHTML = "selengkapnya..."; 
        selengkapnyaText.style.display = "none";
    } else {
        readmore.style.display = "none";
        buttonMore.innerHTML = "lebih sedikit"; 
        selengkapnyaText.style.display = "inline";
    }
    }

