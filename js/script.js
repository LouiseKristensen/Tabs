const tabs = document.querySelectorAll('.tab'); 
const content = document.querySelectorAll('.tab-content')

tabs.forEach((tab, index) =>{
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('selected')); 
        tab.classList.add('selected'); 
        
        content.forEach(c => c.classList.remove('selected')); 
        content[index].classList.add('selected'); 
    }); 
}); 