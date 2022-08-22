let submit = document.getElementById("form_button")

submit.addEventListener("click", function(){
  swal.fire({
    background: '#111',
    width: '60rem',
    icon: 'success',
    title: '¡Mensaje enviado!',
    color: '#fff',
    text: '¡Gracias por comunicarte conmigo!',
    button: 'Ok',
    
  
    customClass: {
      title: 'title-alert',
      popup: 'text-alert',
    }
  });
})

