document.addEventListener('DOMContentLoaded', function () {
    function show(id) {
        // Hide both sections first
        document.getElementById('your-nexus').style.display = 'none';
        document.getElementById('enemy-nexus').style.display = 'none';

        // Remove active class from both buttons
        document.getElementById('show-your-nexus').classList.remove('active');
        document.getElementById('show-enemy-nexus').classList.remove('active');

        // Show the clicked section
        document.getElementById(id).style.display = 'block';

        // Add active class to the clicked button
        if (id === 'your-nexus') {
            document.getElementById('show-your-nexus').classList.add('active');
        } else if (id === 'enemy-nexus') {
            document.getElementById('show-enemy-nexus').classList.add('active');
        }
    }

    document.getElementById('show-your-nexus').onclick = function () {
        show('your-nexus');
    }

    document.getElementById('show-enemy-nexus').onclick = function () {
        show('enemy-nexus');
    }

    // Initialize by showing 'your-nexus'
    show('your-nexus');
});
