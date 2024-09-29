document.addEventListener('DOMContentLoaded', function() {
    const deleteButtons = document.querySelectorAll('.btn-delete');

    deleteButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            const videoId = this.getAttribute('data-id');
            if (confirm('Are you sure you want to delete this video?')) {
                console.log(`Deleting video with ID: ${videoId}`);
                // Here you would typically send an AJAX request to delete the video
                // For now, we'll just remove the table row
                this.closest('tr').remove();
            }
        });
    });
});