const moodData = {
    happy: {
        color: "#FFD700",
        message: "Keep shining! Your joy is contagious. ✨"
    },
    sad: {
        color: "#A9D6E5",
        message: "It's okay to feel this way. Better days are coming. 🌧️"
    },
    calm: {
        color: "#B8E0D2",
        message: "Peace starts from within. Take a deep breath. 🌿"
    },
    angry: {
        color: "#FF6B6B",
        message: "Take a moment to breathe. You are in control. 🌪️"
    },
    anxious: {
        color: "#D8BFD8",
        message: "Focus on the present moment. You are safe. ⚓"
    },
    excited: {
        color: "#FF9F43",
        message: "Harness that energy! Something great is happening. 🎉"
    },
    lonely: {
        color: "#D1D1D1",
        message: "You are never truly alone. Reach out to someone today. 🫂"
    },
    birthday: {
        color: "linear-gradient(45deg, #f093fb 0%, #f5576c 100%)",
        message: "Happy Birthday, Krishna Priya! Have a magical day! 🎂✨"
    },
    default: {
        color: "#f0f2f5",
        message: "That's an interesting mood! Embrace it today. 🌈"
    }
};

const generateBtn = document.getElementById('generate-btn');
const moodInput = document.getElementById('mood-input');
const affirmationText = document.getElementById('affirmation');
const body = document.body;

function updateMood() {
    const mood = moodInput.value.toLowerCase().trim();
    const selectedMood = moodData[mood] || moodData.default;
    
    // Use .background instead of .backgroundColor so gradients work!
    body.style.background = selectedMood.color;
    affirmationText.textContent = selectedMood.message;
    
    moodInput.value = "";
    moodInput.focus();
}

generateBtn.addEventListener('click', updateMood);

moodInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        updateMood();
    }
});