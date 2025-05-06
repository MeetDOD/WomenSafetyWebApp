const gmailContent = (verificationToken) => {
    return `
      <h1 style="color: #008080; font-family: 'Arial', sans-serif; text-align: center;">Email Verification</h1>
      
      <div style="background-color: #f0f0f0; padding: 20px; border-radius: 8px;">
        <p style="font-size: 16px; font-family: 'Arial', sans-serif; color: #444; text-align: center;">Click the button below to verify your email:</p>
        <div style="text-align: center; margin-top: 20px;">
          <a href="${process.env.BACKEND_URL}/api/v1/users/emailverify/${verificationToken}" style="display: inline-block; background-color: #008080; color: #fff; font-size: 18px; font-family: 'Arial', sans-serif; text-decoration: none; padding: 10px 20px; border-radius: 5px; border: 2px solid #008080; transition: background-color 0.3s ease-in-out;">
            Verify Email
          </a>
        </div>
      </div>
      `;
  
  }

  const successFullVerification = () => {
    return `
    <h1 style="color: #008080; font-family: 'Arial', sans-serif; text-align: center;">Congratulations!</h1>
    <div style="background-color: #f0f0f0; padding: 20px; border-radius: 8px;">
      <p style="font-size: 16px; font-family: 'Arial', sans-serif; color: #444; text-align: center;">You have successfully verified your email.</p>
      <div style="text-align: center; margin-top: 20px;">
        <a href="${process.env.BACKEND_URL}/api/v1/users/login" style="display: inline-block; background-color: #008080; color: #fff; font-size: 18px; font-family: 'Arial', sans-serif; text-decoration: none; padding: 10px 20px; border-radius: 5px; border: 2px solid #008080; transition: background-color 0.3s ease-in-out;">
          Go to Home Page
        </a>
      </div>
    </div>
  `;
  }
  

const mapLocation = (lat,long,username,pincode,formatted_address) => `<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <style>
        .abc {
            background-color: #d3d3d3;
            max-width: 768px;
            color: black;

        }

        b {
            color: red;
        }

        .custom-btn {
            width: 130px;
            height: 40px;
            color: #fff;
            border-radius: 5px;
            padding: 10px 25px;
            font-family: 'Lato', sans-serif;
            font-weight: 500;
            background: transparent;
            cursor: pointer;
            transition: all 0.3s ease;
            position: relative;
            display: inline-block;
            box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, .5),
                7px 7px 20px 0px rgba(0, 0, 0, .1),
                4px 4px 5px 0px rgba(0, 0, 0, .1);
            outline: none;
        }

        .btn-1 {
            background: rgb(96, 9, 240);
            background: linear-gradient(0deg, rgba(96, 9, 240, 1) 0%, rgba(129, 5, 240, 1) 100%);
            border: none;
        }

        .btn-1:before {
            height: 0%;
            width: 2px;
        }

        .btn-1:hover {
            box-shadow: 4px 4px 6px 0 rgba(255, 255, 255, .5),
                -4px -4px 6px 0 rgba(116, 125, 136, .5),
                inset -4px -4px 6px 0 rgba(255, 255, 255, .2),
                inset 4px 4px 6px 0 rgba(0, 0, 0, .4);
        }
    </style>
    <center>
        <div class="abc" style="
            background-image: linear-gradient(to right top, #940915, #7c0916, #650b16, #4d0c14, #370b0f)">
                    <img src="https://safesiren.vercel.app/static/media/logo.7f997af41092472d096a.png" style="width: 30%; margin-top: 25px; " alt="">

            <h1 style="color: red;">Alert</h1> <br />
            <p style="color:white;font-size: 18px;">Hey user you are recieving this mail because one of your close member added you as
                emergency contact</p>
            <p style="color:white;font-size: 18px;">Hey user you are recieving this mail because one of your close member added you as
                <p style="color: white;"> <b>${username}</b> seems to be in danger as he/she has triggered alarm<br /><br />
                <b>${username}</b> sent an emergency message to you at <b>11:00 am</b></p>
            <p></p>
            <br />
            <div style="color: white;font-size: 18px;">
                <p>The Location from where alert was sent is :</p>

                <p>FORMATED ADDRESS: ${formatted_address}</p>
                <p>POSTAL CODE : ${pincode}</p>

                <a style="text-decoration: none" href="https://maps.google.com/maps?q=${lat},${long}&hl=en&z=14&amp">
                    <button class="" style="background-color: blueviolet; font-size: 28px; color: white; border-radius: 5px; padding: 12px;">Check Location</button>
                </a>
                <br />
                <br />
            </div>
        </div>
    </center>

</body>

</html>`

const mapLocationNearby = (lat,long,username,pincode,formatted_address) => `<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <style>
        .abc {
            background-color: #d3d3d3;
            max-width: 768px;
            color: black;

        }

        b {
            color: red;
        }

        .custom-btn {
            width: 130px;
            height: 40px;
            color: #fff;
            border-radius: 5px;
            padding: 10px 25px;
            font-family: 'Lato', sans-serif;
            font-weight: 500;
            background: transparent;
            cursor: pointer;
            transition: all 0.3s ease;
            position: relative;
            display: inline-block;
            box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, .5),
                7px 7px 20px 0px rgba(0, 0, 0, .1),
                4px 4px 5px 0px rgba(0, 0, 0, .1);
            outline: none;
        }

        .btn-1 {
            background: rgb(96, 9, 240);
            background: linear-gradient(0deg, rgba(96, 9, 240, 1) 0%, rgba(129, 5, 240, 1) 100%);
            border: none;
        }

        .btn-1:before {
            height: 0%;
            width: 2px;
        }

        .btn-1:hover {
            box-shadow: 4px 4px 6px 0 rgba(255, 255, 255, .5),
                -4px -4px 6px 0 rgba(116, 125, 136, .5),
                inset -4px -4px 6px 0 rgba(255, 255, 255, .2),
                inset 4px 4px 6px 0 rgba(0, 0, 0, .4);
        }
    </style>
    <center>
        <div class="abc" style="
            background-image: linear-gradient(to right top, #940915, #7c0916, #650b16, #4d0c14, #370b0f)">
                    <img src="https://safesiren.vercel.app/static/media/logo.7f997af41092472d096a.png" style="width: 30%; margin-top: 25px; " alt="">

            <h1 style="color: red;">Emergency Situation In Your Area</h1> <br />
            <p style="color:white;font-size: 18px;">Hey user you are recieving this mail because Emergency triggered in your area</p>
                <p style="color: white;"> <b>${username}</b> seems to be in danger as he/she has triggered alarm<br /><br />
                <b>${username}</b> sent an emergency message to you at <b>11:00 am</b> If possible try to help them</p>
            <p></p>
            <br />
            <div style="color: white;font-size: 18px;">
                <p>The Location from where alert was sent is :</p>

                <p>FORMATED ADDRESS: ${formatted_address}</p>
                <p>POSTAL CODE : ${pincode}</p>

                <a style="text-decoration: none" href="https://maps.google.com/maps?q=${lat},${long}&hl=en&z=14&amp">
                    <button class="" style="background-color: blueviolet; font-size: 28px; color: white; border-radius: 5px; padding: 12px;">Check Location</button>
                </a>
                <br />
                <br />
            </div>
        </div>
    </center>

</body>

</html>`



module.exports = {gmailContent, successFullVerification,mapLocation,mapLocationNearby}