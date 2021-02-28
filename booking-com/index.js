
    const showRegions = function(){
  let elem = document.getElementById('regions');
  let hiddenElements = document.querySelectorAll('.ia-section');
  hiddenElements.forEach(elem => {
    elem.style.display = 'none';
  })
  // console.log(elem)
  elem.style.display = 'flex'
  
  let tabElements = document.querySelectorAll('.ia-tab-btn')
  tabElements.forEach(elem =>  {
    elem.classList.remove('active')
  })
  event.target.classList.add('active')
}
const showCities = function(){
  let elem = document.getElementById('cities');
  let hiddenElements = document.querySelectorAll('.ia-section');
  hiddenElements.forEach(elem => {
    elem.style.display = 'none';
  })
  // console.log(elem)
  elem.style.display = 'flex'
  let tabElements = document.querySelectorAll('.ia-tab-btn')
  tabElements.forEach(elem =>  {
    elem.classList.remove('active')
  })
  event.target.classList.add('active')
}
const showDirections = function(){
  let elem = document.getElementById('directions');
  let hiddenElements = document.querySelectorAll('.ia-section');
  hiddenElements.forEach(elem => {
    elem.style.display = 'none';
  })
  // console.log(elem)
  elem.style.display = 'flex'
  let tabElements = document.querySelectorAll('.ia-tab-btn')
  tabElements.forEach(elem =>  {
    elem.classList.remove('active')
  })
  event.target.classList.add('active')
}