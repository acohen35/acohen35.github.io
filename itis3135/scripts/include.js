var HTMLInclude = function() {
    var elements = document.querySelectorAll("[data-include]");
    elements.forEach(function(element) {
        var url = element.getAttribute("data-include");
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                element.outerHTML = this.responseText;
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