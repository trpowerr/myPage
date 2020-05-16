const menuBtn = document.getElementById('menu-btn');
console.log(menuBtn);
menuBtn.addEventListener('click', (e) => {
  e.preventDefault();
  console.log('meto');
  const menu = document.getElementsByClassName('menu');
  console.log(menu);

  for (let i=0; i < menu.length; i++) {
    menu[i].classList.toggle('menu_active');
  }
})
