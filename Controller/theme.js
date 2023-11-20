
document.getElementById('changer-theme').addEventListener('click',
  function() {
    var body = document.body;
    if (body.classList.contains('thème-1')) {
      body.classList.remove('thème-1');
      body.classList.add('thème-2');
    } else {
      body.classList.remove('thème-2');
      body.classList.add('thème-1');
    }
  }
);

// document.getElementById('changer-theme').addEventListener('click', 

// function() {
//     var body = document.body;
//     if (body.classList.contains('thème-1')) {
//       body.classList.remove('thème-1');
//       body.classList.add('thème-2');
//     } else {
//       body.classList.remove('thème-2');
//       body.classList.add('thème-1');
//     }
  
//     // Appliquer le même thème aux enfants de body
//     var enfantsBody = body.querySelectorAll('*');
//     enfantsBody.forEach(function(enfant) {
//       if (enfant.classList) {
//         if (body.classList.contains('thème-1')) {
//           enfant.classList.remove('thème-1');
//           enfant.classList.add('thème-2');
//         } else {
//           enfant.classList.remove('thème-2');
//           enfant.classList.add('thème-1');
//         }
//       }
//     });
//   });


// document.getElementById('changer-theme').addEventListener('click', function() {
//     var body = document.body;
//     if (body.classList.contains('thème-1')) {
//       body.classList.remove('thème-1');
//       body.classList.add('thème-2');
//     } else {
//       body.classList.remove('thème-2');
//       body.classList.add('thème-1');
//     }
//   });


// document.getElementById('changer-theme').addEventListener('click', function() {
//     var box = document.getElementById('box');
//     if (box.classList.contains('thème-1')) {
//       box.classList.remove('thème-1');
//       box.classList.add('thème-2');
//     } else {
//       box.classList.remove('thème-2');
//       box.classList.add('thème-1');
//     }
//   });