var popap = document.querySelector('.popup');
var switchOn = document.querySelector('.switch-on');
switchOn.addEventListener('click', function(evt) {
    evt.preventDefault();
    popap.classList.add('popup-show');
});
var switchOff = document.querySelector('.switch-off');
switchOff.addEventListener('click', function(evt) {
    evt.preventDefault();
    popap.classList.remove('popup-show');
});
