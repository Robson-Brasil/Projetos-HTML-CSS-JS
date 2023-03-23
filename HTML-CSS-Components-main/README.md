<h1 align="center">
  <a href="https://www.youtube.com/@LearnWithSazzad">YouTube Channel</a> | 
  <a href="https://github.com/sazzadhossain1623/">Github</a> |
  <a href="https://www.facebook.com/LWS01">Facebook</a> |
  <a href="https://react-hook-form.com/faqs">FAQs</a> |
</h1>

### Animated Neon Text Glow by HTML & CSS

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Animated Neon Text Glow</title>
    <style>
        body {
            margin: 0;
            height: 100vh;
            align-items: center;
            justify-content: center;
            background-color: black;
        }

        .neon {
            position: relative;
            overflow: hidden;
            filter: brightness(200%);
        }

        .text {
            background-color: black;
            color: #fff;
            font-size: 180px;
            font-weight: bold;
            text-transform: uppercase;
            position: relative;
            user-select: none;
        }

        .text::before {
            content: attr(data-text);
            position: absolute;
            color: #fff;
            filter: blur(0.02em);
            mix-blend-mode: difference;
        }

        .gradient {
            position: absolute;
            background: linear-gradient(
                45deg, 
                red,gold, lightgreen, gold, 
                red);
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            mix-blend-mode: multiply;
        }

        .spotlight {
            position: absolute;
            top: -100%;
            left: -100%;
            right: 0;
            bottom: 0;
            background: radial-gradient(circle, white, transparent 25%) center/25% 25%, radial-gradient(circle, white, black 25%)center/12.5% 12.5%;
            animation: light 5s linear infinite;
            mix-blend-mode: color-dodge;
        }

        @keyframes light {
            to {
                transform: translate(50%, 50%);
            }
        }
    </style>
</head>

<body>
    <div class="neon">
        <span class="text" data-text="sazzad">Sazzad</span>
        <span class="gradient"></span>
        <span class="spotlight"></span>
    </div>
</body>

</html>
```

### Glass Animation by HTML & CSS

```html

<!DOCTYPE html>
<html>
<head>
    <title>CSS Glass Animation</title>
    <style>
        * {
    margin: 0;
    padding: 0;
}
body {
    background-color: #800080;
}
.bg {
    width: 100%;
    height: 100vh;
    background-image: linear-gradient(45deg, #800080 0%, 
    #E90207 46%, 
    #ff8c00 100%);
}
.glass {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
}
.glass li {
    position: absolute;
    display: block;
    list-style: none;
    width: 20px;
    height: 20px;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.18);
    animation: spin 5s linear infinite;
    bottom: -150px;
}
.glass li:nth-child(1) {
    left: 35%;
    width: 150px;
    height: 150px;
    animation-delay: 0s;
}
.glass li:nth-child(2) {
    left: 10%;
    width: 20px;
    height: 20px;
    animation-delay: 2s;
    animation-duration: 12s;
}
.glass li:nth-child(3) {
    left: 70%;
    width: 20px;
    height: 20px;
    animation-delay: 4s;
}
.glass li:nth-child(4) {
    left: 40%;
    width: 60px;
    height: 60px;
    animation-delay: 0s;
    animation-duration: 18s;
}
.glass li:nth-child(5) {
    left: 65%;
    width: 20px;
    height: 20px;
    animation-delay: 0s;
}
.glass li:nth-child(6) {
    left: 75%;
    width: 110px;
    height: 110px;
    animation-delay: 3s;
}
.glass li:nth-child(7) {
    left: 35%;
    width: 150px;
    height: 150px;
    animation-delay: 7s;
}
.glass li:nth-child(8) {
    left: 50%;
    width: 25px;
    height: 25px;
    animation-delay: 15s;
    animation-duration: 45s;
}
.glass li:nth-child(9) {
    left: 20%;
    width: 15px;
    height: 15px;
    animation-delay: 2s;
    animation-duration: 35s;
}
.glass li:nth-child(10) {
    left: 85%;
    width: 150px;
    height: 150px;
    animation-delay: 0s;
    animation-duration: 11s;
}
@keyframes spin {
    0% {
        transform: translateY(0) rotate(0deg);
        opacity: 1;
        border-radius: 0;
    }
    100% {
        transform: translateY(-1000px) rotate(720deg);
        opacity: 0;
        border-radius: 50%;
    }
}
    </style>
</head>
<body>
    <div class="bg">
        <ul class="glass">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
</body>
</html>

```

### Text Hover Blur Animation by HTMLS & CSS

```html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Text Hover Blur Animation</title>
    <style>
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: monospace;
        }
        .container{
            width: 100%;
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background: linear-gradient(45deg, #ff0057, #2196f3);
        }
        h2{
            position: relative;
            display: flex;
            gap: 25px;
            font-size: 4em;
            cursor: pointer;
        }
        
        h2 span{
            position: relative;
            filter: blur(5px);
            padding: 0 5px;
            transition: 0.5s;
        }

        h2 span:hover{
            filter: blur(0);
            transition: 0;
        }


        h2 span i{
            position: absolute;
            inset: 0;
            background: transparent;
        }
        h2 span:hover i::before{
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 2px;
            height: 8px;
            background-color: #fff;
            box-shadow: 0 53px #fff, 36px 53px #fff, 36px 0 #fff;
        }

        h2 span:hover i:after{
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 0;
            height: 2px;
            box-shadow: 0 60px #fff, 30px 60px #fff, 30px 0 #fff;
            background-color: #fff;

        }
    </style>
</head>
<body>
    <div class="container">
        <h2>
            <span><i>F</i></span>
            <span><i>O</i></span>
            <span><i>C</i></span>
            <span><i>U</i></span>
            <span><i>S</i></span>
        </h2>
    </div>
</body>
</html>

```

<h1>Thank You!!!</h1>
