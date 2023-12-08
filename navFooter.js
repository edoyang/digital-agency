document.addEventListener('DOMContentLoaded', function() {
    function loadHTML(url, element) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onreadystatechange = function() {
            if (this.readyState !== 4) return;
            if (this.status !== 200) return; // or whatever error handling you want
            element.innerHTML = this.responseText;

            var scripts = Array.from(element.getElementsByTagName('script'));
            for (var script of scripts) {
                var newScript = document.createElement('script');
                Array.from(script.attributes).forEach(attr => newScript.setAttribute(attr.name, attr.value));
                newScript.appendChild(document.createTextNode(script.innerHTML));
                script.parentNode.replaceChild(newScript, script);
            }
        };
        xhr.send();
    }
    loadHTML('navbar.html', document.querySelector('nav'));
    loadHTML('footer.html', document.querySelector('footer'));
});