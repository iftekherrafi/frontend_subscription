document.addEventListener('DOMContentLoaded', function() {
    const editForm = document.getElementById('editForm');
    const urlParams = new URLSearchParams(window.location.search);
    const videoId = urlParams.get('id');

    // Simulating fetching video data
    const videoData = {
        id: videoId,
        title: 'Sample Video Title',
        description: 'This is a sample video description.',
        subscription_level: 'premium',
        thumbnail: 'https://via.placeholder.com/200x112'
    };

    // Populate form with video data
    document.getElementById('title').value = videoData.title;
    document.getElementById('description').value = videoData.description;
    document.getElementById('subscription_level').value = videoData.subscription_level;
    document.getElementById('currentThumbnail').src = videoData.thumbnail;

    if (editForm) {
        editForm.addEventListener('submit', function(e) {
            e.preventDefault();
            if (validateForm()) {
                // Simulating form submission
                console.log('Form is valid. Submitting...');
                // In a real application, you would use AJAX to submit the form data
                alert('Information updated successfully!');
            }
        });
    }

    function validateForm() {
        let isValid = true;

        // Title validation
        const title = document.getElementById('title');
        if (title.value.trim() === '') {
            showError(title, 'Title is required');
            isValid = false;
        } else {
            clearError(title);
        }

        // Description validation
        const description = document.getElementById('description');
        if (description.value.trim() === '') {
            showError(description, 'Description is required');
            isValid = false;
        } else {
            clearError(description);
        }

        // Subscription level validation
        const subscriptionLevel = document.getElementById('subscription_level');
        if (subscriptionLevel.value === '') {
            showError(subscriptionLevel, 'Please select a subscription level');
            isValid = false;
        } else {
            clearError(subscriptionLevel);
        }

        return isValid;
    }

    function showError(input, message) {
        const formGroup = input.parentElement;
        let errorElement = formGroup.querySelector('.error');
        
        if (!errorElement) {
            errorElement = document.createElement('div');
            errorElement.className = 'error';
            formGroup.appendChild(errorElement);
        }
        
        errorElement.textContent = message;
    }

    function clearError(input) {
        const formGroup = input.parentElement;
        const errorElement = formGroup.querySelector('.error');
        
        if (errorElement) {
            formGroup.removeChild(errorElement);
        }
    }
});