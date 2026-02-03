<div class="modal" id="successModal">
    <div class="modal-content">
        <h3>🎉 Congratulations!</h3>
        <p>Your form has been submitted successfully.</p>
        <button class="close-btn" onclick="closeModal()">OK</button>
    </div>
</div>
const form = document.getElementById("regForm");
const modal = document.getElementById("successModal");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    modal.style.display = "flex";
});

function closeModal() {
    modal.style.display = "none";
    form.reset();
}
