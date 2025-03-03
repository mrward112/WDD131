let participantCount = 1;

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('add').addEventListener('click', function () {
        participantCount++;
        const newParticipantSection = participantTemplate(participantCount);
        const participantsFieldset = document.querySelector('.participants');
        participantsFieldset.insertBefore(newParticipantSection, document.getElementById('add'));
    });
});

function participantTemplate(count) {
    const section = document.createElement('section');
    section.className = `participant${count}`;
    section.innerHTML = `
        <p>Participant ${count}</p>
        <div class="item">
            <label for="fname${count}"> First Name<span>*</span></label>
            <input id="fname${count}" type="text" name="fname${count}" value="" required />
        </div>
        <div class="item activities">
            <label for="activity${count}">Activity #<span>*</span></label>
            <input id="activity${count}" type="text" name="activity${count}" />
        </div>
        <div class="item">
            <label for="fee${count}">Fee ($)<span>*</span></label>
            <input id="fee${count}" type="number" name="fee${count}" />
        </div>
        <div class="item">
            <label for="date${count}">Desired Date <span>*</span></label>
            <input id="date${count}" type="date" name="date${count}" />
        </div>
        <div class="item">
            <p>Grade</p>
            <select id="grade${count}" name="grade${count}">
                <option selected value="" disabled selected></option>
                <option value="1">1st</option>
                <option value="2">2nd</option>
                <option value="3">3rd</option>
                <option value="4">4th</option>
                <option value="5">5th</option>
                <option value="6">6th</option>
                <option value="7">7th</option>
                <option value="8">8th</option>
                <option value="9">9th</option>
                <option value="10">10th</option>
                <option value="11">11th</option>
                <option value="12">12th</option>
            </select>
        </div>
    `;
    return section;
}

function submitForm(event) {
    event.preventDefault();

    const form = document.getElementById('registerForm');
    const formData = new FormData(form);

    const participants = [];
    for (let i = 1; i <= participantCount; i++) {
        const participant = {
            name: formData.get(`fname${i}`),
            activity: formData.get(`activity${i}`),
            fee: formData.get(`fee${i}`),
            date: formData.get(`date${i}`),
            grade: formData.get(`grade${i}`)
        };
        participants.push(participant);
    }

}