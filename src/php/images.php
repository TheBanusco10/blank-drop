<?php

  require '../../vendor/autoload.php';

  $options = array(
    'cluster' => 'eu',
    'forceTLS' => true // Cambiado de useTLS a forceTLS (Fallaba en Windows)
  );
  
  $pusher = new Pusher\Pusher(
    'b4f3bcc25b6fc08d1f22',
    'd0868e51baba0aa60571',
    '1162930',
    $options
  );

  $pusher->trigger('imagenes', 'nueva-imagen', $_POST['data']);

?>
