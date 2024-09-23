window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    const headerDiv=this.document.getElementById('headerDiv');
    if (window.scrollY) { // Adjust the scroll value as needed
        header.classList.add('backdrop-blur-lg');
        headerDiv.classList.add('bg-opacity-20');
       
       
      
    } else {
        header.classList.remove('backdrop-blur-lg');
        headerDiv.classList.remove('bg-opacity-20');
    }
    
});