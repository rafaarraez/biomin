<?php

//Reseteamos variables a 0.  
   $nombre = $apellido = $dir = $estado = $email = $Telefono = NULL;

if (isset($_POST['submit'])) {
   //Obtenemos valores input formulario
   $nombre = $_POST['nonbre'];
   $apellido = $_POST['Apellido'];
   $dir = $_POST['Direccion'];   
   $estado = $_POST['Estado'];
   $email = $_POST['Correo'];
   $Telefono = $_POST['Telefono'];
   $para = 'rafa.spam12@gmail.com';


   //Creamos cabecera.
   $headers = 'From' . " " . $email . "\r\n";
   $headers .= "Content-type: text/html; charset=utf-8";

   //Componemos cuerpo correo.
   $msjCorreo = "Nombre: " . $nombre;
   $msjCorreo .= "\r\n";
   $msjCorreo .= "allido: " . $allido;
   $msjCorreo .= "\r\n";
   $msjCorreo .= "Direccion: " . $dir;
   $msjCorreo .= "\r\n";
   $msjCorreo .= "Estado: " . $estado;
   $msjCorreo .= "\r\n";
   $msjCorreo .= "email: " . $email;
   $msjCorreo .= "\r\n";
   $msjCorreo .= "Telefono: " . $Telefono;
   $msjCorreo .= "\r\n";

 if (mail($para, $subject, $msjCorreo, $headers)) {
     echo 'Enviado';
      echo "<script language='javascript'>
         alert('Mensaje enviado, muchas gracias.');
      </script>";
 } else {
     echo 'No enviado';
      echo "<script language='javascript'>
         alert('fallado');
      </script>";
 }
}

// if(isset($_POST['email'])) {

//     // Debes editar las próximas dos líneas de código de acuerdo con tus preferencias
//     $email_to = "rafa.spam12@gmail.com";
//     $email_subject = "Contacto desde el sitio web";

//     // Aquí se deberían validar los datos ingresados por el usuario
//     if(!isset($_POST['nonbre']) ||
//         !isset($_POST['Apellido']) ||
//         !isset($_POST['Direccion']) ||
//         !isset($_POST['Estado']) ||
//         !isset($_POST['Correo']) ||
//         !isset($_POST['Telefono']) ) {

//         echo " <script language='javascript'>
//                     alert('<b>Ocurrió un error y el formulario no ha sido enviado. </b><br Por favor, vuelva atrás y verifique la información ingresada<br />');
//                 </script>";
//         die();
//     }

//     $email_message = "Detalles del formulario de contacto:\n\n";
//     $email_message .= "Nombre: " . $_POST['nonbre'] . "\n";
//     $email_message .= "Apellido: " . $_POST['Apellido'] . "\n";
//     $email_message .= "Direccion: " . $_POST['Direccion'] . "\n";
//     $email_message .= "Estado: " . $_POST['Estado'] . "\n";
//     $email_message .= "Correo: " . $_POST['Correo'] . "\n\n";
//     $email_message .= "Telefono: " . $_POST['Telefono'] . "\n\n";

//     // Ahora se envía el e-mail usando la función mail() de PHP

//     $headers = 'From: '.$email_from."\r\n".
//     'Reply-To: '.$email_from."\r\n" .
//     'X-Mailer: PHP/' . phpversion();
//     if(@mail($email_to, $email_subject, $email_message, $headers)){
//         echo "<script language='javascript'>
//         alert('Mensaje enviado, muchas gracias.');
//      </script>";
//     }else {
//         echo "<script language='javascript'>
//            alert('fallado');
//         </script>";
//    }

    
// }
?>