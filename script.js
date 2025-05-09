async function startCamera() {
    try {
        const videoElement = document.getElementById('video');
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        videoElement.srcObject = stream;
    } catch (error) {
        console.error('Error accessing the camera:', error);
    }
}

window.addEventListener('load', startCamera);