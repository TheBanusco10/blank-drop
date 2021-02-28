$(function () {

    // Enable pusher logging - don't include this in production
        Pusher.logToConsole = true;
    
        let pusher = new Pusher('xxxxxxxxxxxxxxx', {
        cluster: 'eu'
        });
    
        let channel = pusher.subscribe('imagenes');
        channel.bind('nueva-imagen', function(data) {

            data = JSON.parse(data);

            $('#imagenes').append(`

                <article id="${data.id}">
                    <a href="${data.link}" target="_blank">
                        <img src="${data.thumbnail}" alt="${data.name}">
                    </a>
                    <p>${data.name}</p>
                    <p>${data.comentario}</p>
                </article>
            
            `);
        });

})
