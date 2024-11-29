var HTMLInclude = function() {
    var elements = document.querySelectorAll("[data-include]");
    elements.forEach(function(element) {
        var url = element.getAttribute("data-include");
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                element.outerHTML = this.responseText;
                if (url.includes('footer')) {
                    document.getElementById('validation_link_html').setAttribute('href', 
                        'https://validator.w3.org/check?uri=' + location.href);
                    document.getElementById('validation_link_css').setAttribute('href', 
                        'https://jigsaw.w3.org/css-validator/check?uri=' + location.href);
                }
            }
        };
        xhr.open('GET', url, true);
        xhr.send();
    });
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', HTMLInclude);
} else {
    HTMLInclude();
}