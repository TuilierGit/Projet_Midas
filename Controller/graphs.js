

///////////////////// Graphique 1 : 

// Données de l'évolution mensuelle
var mois = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc'];
var valeursEnEuros = [100, 150, 200, 180, 250, 300, 280, 320, 350, 400, 380, 420];

// Créer le graphique
var ctx = document.getElementById('monGraphique').getContext('2d');
var monGraphique = new Chart(ctx, {
    type: 'line',
    data: {
    labels: mois,
    datasets: [{
        label: 'Évolution en Euros',
        data: valeursEnEuros,
        fill: true, // Remplir la zone sous la courbe
        backgroundColor: 'rgba(0, 123, 255, 0.3)', // Couleur de fond pour la zone sous la courbe
        borderColor: 'rgba(0, 123, 255, 1)', // Couleur de la ligne de la courbe
    }]
    },
    options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        y: {
        beginAtZero: true
        }
    }
    }
});


///////////////////// Graphique 2 : monDoughnutChart



// Données de la composition du portefeuille
var labels = ['Actions', 'Obligations', 'Liquidités'];
var valeurs = [50, 30, 20]; // Pourcentages correspondants à chaque catégorie

// Créer le graphique en forme de "Doughnut Chart"
var ctx = document.getElementById('monDoughnutChart').getContext('2d');
var monDoughnutChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: labels,
    datasets: [{
      data: valeurs,
      backgroundColor: ['#FF5733', '#33FF57', '#5733FF'], // Couleurs pour chaque catégorie
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    tooltips: {
      callbacks: {
        label: function (tooltipItem, data) {
          var dataset = data.datasets[tooltipItem.datasetIndex];
          var total = dataset.data.reduce(function (previousValue, currentValue, currentIndex, array) {
            return previousValue + currentValue;
          });
          var currentValue = dataset.data[tooltipItem.index];
          var percentage = Math.floor(((currentValue / total) * 100) + 0.5);
          return percentage + "%";
        }
      }
    }
  }
});




//////////////// graphique 3 :
//  // Données de composition du portefeuille par mois
//  var mois = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc'];
//  var liquidites = [20, 25, 22, 18, 15, 20, 23, 26, 30, 28, 25, 22];
//  var immobilier = [30, 28, 25, 22, 20, 18, 15, 20, 25, 30, 28, 25];
//  var crypto = [15, 18, 20, 25, 28, 30, 32, 28, 25, 22, 20, 18];
//  var bourse = [35, 29, 33, 35, 37, 32, 30, 26, 20, 20, 27, 35];

//  // Créer le graphique à barres horizontales
//  var ctx = document.getElementById('monGraphiqueBarresHorizontales').getContext('2d');
//  var monGraphiqueBarresHorizontales = new Chart(ctx, {
//    type: 'bar',
//    data: {
//      labels: mois,
//      datasets: [
//        {
//          label: 'Liquidités',
//          data: liquidites,
//          backgroundColor: 'rgba(255, 99, 132, 0.6)', // Rouge
//        },
//        {
//          label: 'Immobilier',
//          data: immobilier,
//          backgroundColor: 'rgba(54, 162, 235, 0.6)', // Bleu
//        },
//        {
//          label: 'Crypto',
//          data: crypto,
//          backgroundColor: 'rgba(255, 206, 86, 0.6)', // Jaune
//        },
//        {
//          label: 'Bourse',
//          data: bourse,
//          backgroundColor: 'rgba(75, 192, 192, 0.6)', // Vert
//        },
//      ]
//    },
//    options: {
//      responsive: true,
//      maintainAspectRatio: false,
//      scales: {
//        x: {
//          beginAtZero: true,
//          max: 100,
//        },
//        y: {
//          stacked: true,
//        }
//      }
//    }
//  });

// Données de composition du portefeuille par mois
var mois = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc'];
var liquidites = [20, 25, 22, 18, 15, 20, 23, 26, 30, 28, 25, 22];
var immobilier = [30, 28, 25, 22, 20, 18, 15, 20, 25, 30, 28, 25];
var crypto = [15, 18, 20, 25, 28, 30, 32, 28, 25, 22, 20, 18];
var bourse = [35, 29, 33, 35, 37, 32, 30, 26, 20, 20, 27, 35];

// Créer le graphique à barres horizontales
var ctx = document.getElementById('monGraphiqueBarresHorizontales').getContext('2d');
var monGraphiqueBarresHorizontales = new Chart(ctx, {
  type: 'horizontalBar',
  data: {
    labels: mois,
    datasets: [
      {
        label: 'Liquidités',
        data: liquidites,
        backgroundColor: 'rgba(255, 99, 132, 0.6)', // Rouge
      },
      {
        label: 'Immobilier',
        data: immobilier,
        backgroundColor: 'rgba(54, 162, 235, 0.6)', // Bleu
      },
      {
        label: 'Crypto',
        data: crypto,
        backgroundColor: 'rgba(255, 206, 86, 0.6)', // Jaune
      },
      {
        label: 'Bourse',
        data: bourse,
        backgroundColor: 'rgba(75, 192, 192, 0.6)', // Vert
      },
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        ticks: {
          beginAtZero: true,
          max: 100,
        },
        stacked: true,
      }],
      yAxes: [{
        stacked: true,
      }]
    }
  }
});