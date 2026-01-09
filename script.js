// document.getElementById('contact-form').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent default form submission

//     // Get form values
//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const message = document.getElementById('message').value;

//     // Basic validation
//     if (!name || !email || !message) {
//         document.getElementById('status').innerText = 'All fields are required.';
//         return;
//     }

//     // Send email via EmailJS
//     emailjs.send("service_lahai", "template_pzy24wp", {
//         name: name,
//         email: email,
//         message: message
//     })
//     .then(function(response) {
//         console.log('SUCCESS!', response.status, response.text);
//         document.getElementById('status').innerText = 'Message sent successfully!';
//         document.getElementById('contact-form').reset(); // Clear form
//         window.location.href = 'result.html';
//     }, function(error) {
//         console.log('FAILED...', error);
//         document.getElementById('status').innerText = 'Failed to send message. Please try again.';
//     });
// });

const form = document.getElementById("contact-form");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const data = new FormData(form);

    const response = await fetch(form.action, {
      method: "POST",
      body: data,
      headers: {
        "Accept": "application/json"
      }
    });

    if (response.ok) {
      window.location.href = "result.html";
    } else {
      alert("Submission failed. Please try again.");
    }
  });


