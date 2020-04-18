const chk = document.getElementById('chl');
if(chk){
    chk.addEventListener('change', () => {
	document.body.classList.toggle('dark');
});
}