function changer_mon_theme(new_theme) {
  document.documentElement.style.setProperty('--ma-couleur-principale-mon-theme', getComputedStyle(document.documentElement).getPropertyValue('--ma-couleur-principale-' + new_theme).trim());
  document.documentElement.style.setProperty('--ma-couleur-secondaire-mon-theme', getComputedStyle(document.documentElement).getPropertyValue('--ma-couleur-secondaire-' + new_theme).trim());
  document.documentElement.style.setProperty('--ma-couleur-tertiaire-mon-theme', getComputedStyle(document.documentElement).getPropertyValue('--ma-couleur-tertiaire-' + new_theme).trim());

  document.documentElement.style.setProperty('--ma-couleur-bordure-mon-theme', getComputedStyle(document.documentElement).getPropertyValue('--ma-couleur-bordure-' + new_theme).trim());

  document.documentElement.style.setProperty('--ma-couleur-patrimoine-mon-theme', getComputedStyle(document.documentElement).getPropertyValue('--ma-couleur-patrimoine-' + new_theme).trim());
  document.documentElement.style.setProperty('--ma-couleur-depenses-mon-theme', getComputedStyle(document.documentElement).getPropertyValue('--ma-couleur-depenses-' + new_theme).trim());
  document.documentElement.style.setProperty('--ma-couleur-ratios-mon-theme', getComputedStyle(document.documentElement).getPropertyValue('--ma-couleur-ratios-' + new_theme).trim());
  document.documentElement.style.setProperty('--ma-couleur-revenus-mon-theme', getComputedStyle(document.documentElement).getPropertyValue('--ma-couleur-revenus-' + new_theme).trim());

  document.documentElement.style.setProperty('--ma-couleur-element_1-mon-theme', getComputedStyle(document.documentElement).getPropertyValue('--ma-couleur-element_1-' + new_theme).trim());
  document.documentElement.style.setProperty('--ma-couleur-element_2-mon-theme', getComputedStyle(document.documentElement).getPropertyValue('--ma-couleur-element_2-' + new_theme).trim());

  localStorage.setItem('theme', new_theme);
}


function charger_theme_enregistre() {
  const themeEnregistre = localStorage.getItem('theme');
  if (themeEnregistre) {
    changer_mon_theme(themeEnregistre);
  }
}

charger_theme_enregistre();

document.getElementById('changer-theme-1').addEventListener('click', function () { changer_mon_theme('theme1'); });
document.getElementById('changer-theme-2').addEventListener('click', function () { changer_mon_theme('theme2'); });
document.getElementById('changer-theme-dark_blue').addEventListener('click', function () { changer_mon_theme('dark_blue'); });


