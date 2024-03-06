# API-dog-ceo

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Random Dog Image Generator</title>
    <style>
      body {
            background-image: url("https://i.pinimg.com/564x/a2/10/89/a21089e8db166648500ed1cc7b68b1f1.jpg");
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            flex-direction: column;
            margin: 0; /* Reset default margin */
        }
        #dogImageContainer {
            background-image: url("panel.png");
            background-size: cover; /* Resize the background image to cover the entire container */
            display: flex;
            justify-content: center;
            align-items: center;
            color:white;
            width: 550px;
            height: 550px;
            border: 8px solid rgb(255, 97, 6);
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
            overflow: hidden; /* Ensures the image doesn't spill out of the container */
            padding: 0; /* Remove padding if any */
        }
        img {
            display: block; /* Removes default inline spacing */
            width: 100%; /* Set width to fill the container */
            height: 100%; /* Set height to fill the container */
            object-fit: cover; /* Ensures the image covers the container */
        }
        #generateButton {
            cursor: pointer;
            background-color: #04AA6D; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
        }
    </style>
</head>
<body>
    <button id="generateButton">Generate</button>
    <div id="dogImageContainer"></div>

    <script>
       document.getElementById('generateButton').addEventListener('click', function() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json()) // Parse the JSON response
        .then(data => {
            // Extract the dog image URL from the JSON object
            const dogImageUrl = data.message;
            // Create an img element and set its src attribute to the dog image URL
            const img = document.createElement('img');
            img.src = dogImageUrl;
            img.alt = 'Random Dog';
            img.style.maxWidth = '550px';
            img.style.maxHeight = '550px';
            // Clear any existing images and append the new one to the container
            const dogImageContainer = document.getElementById('dogImageContainer');
            dogImageContainer.innerHTML = '';
            dogImageContainer.appendChild(img);
        })
        .catch(error => {
            console.error('Failed to fetch dog image:', error);
        });
});

    </script>
    <script src="app.js"></script>
</body>
</html>
