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
    // Get value, convert to lowercase and remove extra spaces
    const mood = moodInput.value.toLowerCase().trim();
    
    // Check if the mood exists in our map, otherwise use default
    const selectedMood = moodData[mood] || moodData.default;
    
    // Apply changes
    body.style.backgroundColor = selectedMood.color;
    affirmationText.textContent = selectedMood.message;
    
    // Clear input for a better user experience
    moodInput.value = "";
    moodInput.focus();
}

// Click event
generateBtn.addEventListener('click', updateMood);

// Allow "Enter" key to trigger the button
moodInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        updateMood();
    }
});