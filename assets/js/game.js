document.addEventListener('DOMContentLoaded', function () {

    function show(id) {
        // Hide both sections first
        document.getElementById('your-nexus').style.display = 'none';
        document.getElementById('enemy-nexus').style.display = 'none';

        // Show the clicked section
        document.getElementById(id).style.display = 'block';
    }

    document.getElementById('show-your-nexus').onclick = function () {
        show('your-nexus');
    }

    document.getElementById('show-enemy-nexus').onclick = function () {
        show('enemy-nexus');
    }
    show('your-nexus');
});
