let participantCount = 1;

document.getElementById('add').addEventListener('click', function () {
    participantCount++;
    const participantSection = document.querySelector('.participant1');
    const newParticipantSection = participantSection.cloneNode(true);

    newParticipantSection.className = `participant${participantCount}`;
    newParticipantSection.querySelector('p').textContent = `Participant ${participantCount}`;

    const inputs = newParticipantSection.querySelectorAll('input, select');
    inputs.forEach(input => {
        const id = input.id;
        if (id) {
            input.id = id + participantCount;
        }
        input.value = '';
    });

    participantSection.parentNode.insertBefore(newParticipantSection, document.getElementById('add'));
});

function submitForm(event) {
    event.preventDefault();

    const form = document.getElementById('registerForm');
    const formData = new FormData(form);

    const participants = [];
    for (let i = 1; i <= participantCount; i++) {
        const participant = {
            name: formData.get(`name${i}`),
            email: formData.get(`email${i}`),
            phone: formData.get(`phone${i}`),
}
    }
}