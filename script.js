function volume_sphere() {
  // Get the radius value from the input field
  let radius = document.getElementById("radius").value;

  // Calculate the volume of the sphere
  let volume = (4/3) * Math.PI * Math.pow(radius, 3);

  // Set the calculated volume in the volume input field
  document.getElementById("volume").value = volume;

  // Prevent form submission
  return false;
}

window.onload = function() {
  document.getElementById('MyForm').onsubmit = volume_sphere;
};
