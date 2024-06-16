document.addEventListener('DOMContentLoaded', function () {
    function initializeSections(buttons, sections, defaultSection) {
        // Hide all sections and remove 'active' class from all buttons
        sections.forEach(section => document.getElementById(section).style.display = 'none');
        buttons.forEach(button => document.getElementById(button).classList.remove('active'));

        // Show the default section and set its button as 'active'
        document.getElementById(defaultSection).style.display = 'block';
        document.getElementById(buttons[sections.indexOf(defaultSection)]).classList.add('active');
        
        // Set up onclick events for each button
        buttons.forEach((button, index) => {
            document.getElementById(button).onclick = function () {
                sections.forEach(section => document.getElementById(section).style.display = 'none');
                buttons.forEach(btn => document.getElementById(btn).classList.remove('active'));
                
                document.getElementById(sections[index]).style.display = 'block';
                document.getElementById(button).classList.add('active');
            }
        });
    }

    // Initializing each set of sections and buttons
      initializeSections(['show-ASSASSINS', 'show-FIGHTERS', 'show-MAGES', 'show-MARKSMEN', 'show-SUPPORTS', 'show-TANKS'], 
                        ['ASSASSINS', 'FIGHTERS', 'MAGES', 'MARKSMEN', 'SUPPORTS', 'TANKS'], 'ASSASSINS');
});
