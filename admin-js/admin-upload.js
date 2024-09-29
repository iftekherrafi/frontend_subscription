document.addEventListener('DOMContentLoaded', function() {
    const uploadForm = document.getElementById('uploadForm');

    if (uploadForm) {
        uploadForm.addEventListener('submit', function(e) {
            e.preventDefault();
            if (validateForm()) {
                // Simulating form submission
                console.log('Form is valid. Submitting...');
                // In a real application, you would use AJAX to submit the form data
                // and handle the file upload
                alert('Video uploaded successfully!');
                uploadForm.reset();
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

        // Video file validation
        const videoFile = document.getElementById('video_file');
        if (videoFile.files.length === 0) {
            showError(videoFile, 'Please select a video file');
            isValid = false;
        } else {
            clearError(videoFile);
        }

        // Thumbnail validation
        const thumbnail = document.getElementById('thumbnail');
        if (thumbnail.files.length === 0) {
            showError(thumbnail, 'Please select a thumbnail image');
            isValid = false;
        } else {
            clearError(thumbnail);
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