async function startCamera() {
  try {
    const videoElement = document.getElementById('video');
    const stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: "user" } // Use front camera on mobile
    });
    videoElement.srcObject = stream;
  } catch (error) {
    console.error('Error accessing the camera:', error);
    alert('Camera access failed. Please check your browser permissions.');
  }
}

window.addEventListener('load', startCamera);