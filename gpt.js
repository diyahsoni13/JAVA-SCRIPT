 <!DOCTYPE html>
<html>
<head>
    <title>Change Background</title>
    <style>
        body {
            font-family: Arial;
            background-image: url('yourimage.jpg'); /* your image stays */
            background-size: cover;
            background-repeat: no-repeat;
        }

        .content {
            padding: 30px;
            color: white;
        }
    </style>
</head>

<body>

<div class="content">
    <h1>My Page</h1>
    <p>This page has an image background. JavaScript will add color over it.</p>

    <button onclick="changeBg()">Change Background Color</button>
</div>

<script>
function changeBg() {
    document.body.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    document.body.style.backgroundBlendMode = "multiply";
}
</script>

