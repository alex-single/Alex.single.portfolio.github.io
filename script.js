
/* Reset some default browser styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Styling for the body */
body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    background-color: white;
    color: #333;
}

/* Header and navigation */
header {
    background-color: #333;
    padding: 10px 0;
    text-align: center;
}

header ul {
    list-style: none;
}

header ul li {
    display: inline;
    margin: 0 15px;
}

header ul li a {
    color: #fff;
    text-decoration: none;
    font-weight: bold;
}

header ul li a:hover {
    text-decoration: underline;
}

/* Hero section */
.hero {
    background-color: white;
    color: #333;
    text-align: center;
    padding: 100px 20px;
}

.hero h1 {
    font-size: 3em;
    margin-bottom: 20px;
}

.hero p {
    font-size: 1.2em;
    margin-bottom: 40px;
}

#ctaButton {
    background-color: #333;
    color: white;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    font-size: 1.1em;
}

#ctaButton:hover {
    background-color: #555;
}

/* Footer */
footer {
    background-color: #333;
    color: white;
    text-align: center;
    padding: 10px 0;
    position: fixed;
    width: 100%;
    bottom: 0;
}
