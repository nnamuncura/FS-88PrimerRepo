//cuando el documento este listo
//(no necesariamente el contenido de las etiquetas)
$(document).ready(function(){
    //ejecuta esto
    console.time('jquery')
    $('form').on("submit", function(){
        console.log('formulario1 enviado...')
    })
    console.timeEnd('jquery')

    $('#agrandarTexto').on('click', function(){
        console.log('click')
        // Element.css('propiedad', 'valor')
        $('#parrafoObjetivoAgrandar').css({
            'color': 'red',
             'fontSize': '50px'
            })
    })

    $('#targetThis').on('mouseenter').css({
        'color': 'blue',
        'fontSize': '40px'
    })

    $('#targetThis').on('mouseenter', function() {
        console.log(this)
      $(this).css({
        'color': 'blue',
        'fontSize': '4rem'
      })
    })
  
})


//console.log('funcionando...')
/**
 * Vanilla JS
 * hace lo mismo de arriba
 */
document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('form').addEventListener('submit', function(){
        console.log('formulario2 enviado...')
    })
})

