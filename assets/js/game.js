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



    function show1(id) {
        // Hide both sections first
        document.getElementById('TURRETS').style.display = 'none';
        document.getElementById('INHIBITORS').style.display = 'none';

        // Remove active class from both buttons
        document.getElementById('show-TURRETS').classList.remove('active');
        document.getElementById('show-INHIBITORS').classList.remove('active');

        // Show the clicked section
        document.getElementById(id).style.display = 'block';

        // Add active class to the clicked button
        if (id === 'TURRETS') {
            document.getElementById('show-TURRETS').classList.add('active');
        } else if (id === 'INHIBITORS') {
            document.getElementById('show-INHIBITORS').classList.add('active');
        }
    }

    document.getElementById('show-TURRETS').onclick = function () {
        show1('TURRETS');
    }

    document.getElementById('show-INHIBITORS').onclick = function () {
        show1('INHIBITORS');
    }

    // Initialize by showing 'your-nexus'
    show1('TURRETS');
});
