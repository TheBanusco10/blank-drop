<?php

  require '../../vendor/autoload.php';

  $options = array(
    'cluster' => 'eu',
    'forceTLS' => true // Cambiado de useTLS a forceTLS (Fallaba en Windows)
  );
  
  $pusher = new Pusher\Pusher(
    'xxxxxxxxxxxxxxxxxxxx', // Key
    'yyyyyyyyyyyyyyyyyyyy', // Secret
    'aaaaaaa', // App id
    $options
  );

  $pusher->trigger('imagenes', 'nueva-imagen', $_POST['data']);

?>
