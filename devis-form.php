<?php 
if(isset($_POST['submit'])){
    $to = "pierrej0312@gmail.com"; // this is your Email address
    $from = $_POST['email']; // this is the sender's Email address &
    $name = $_POST['FirstName'] . $_POST['LastName'];
    $subject = "DEVIS BALABULLE DE" . $name;
    $subject2 = "COPIE DE VOTRE DEVIS BALABULLE";
    $device = $_POST['device'];
    $type = "Type de devis:" . $device; //this
    $amountquantity = $_POST['AmountQuantity'];
    $quantity = "Quantité:" . $amountquantity; //this
    $datebegins = $_POST['datebegins'];
    $dateend = $_POST['dateend'];
    $date = $_POST['date'];
    $dates = "Du: " . $datebegins . "\n\n" . "Au: " . $dateend . "\n\n" . "Le: " . $date; //this

    if (isset($_POST['cleaning-device']) && $_POST['cleaning-device'] == 'Yes') 
    {
        $option = "Bonus Nettoyage selectionné";
    }
    else
    {
        $option = "Aucun bonus selectionné";
    }
    
    $company = $_POST['company'];
    $phone = $_POST['phone'];

    $contact = "CONTACT" . "\n\n" . "Nom: " . $name . "\n\n" . "email: " . $form . "\n\n" . "Société: " . $company . "\n\n" . "Téléphone: " . $phone; //this

    $text = "Message:" . "\n\n" . $_POST['message'];
    $message = $type . "\n\n" . $quantity . "\n\n" . $dates . "\n\n" . $option . "\n\n" . $contact . "\n\n" . $text;

    $message2 = "Voici la copie de votre devis " . $name . "\n\n" . $message;

    $headers = "From:" . $from;
    $headers2 = "To:" . $to;
    mail($to,$subject,$message,$headers);
    mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender
    //echo "message envoyé. Merci ! " . $name . ", Nous vous recontacterons dans les plus bref délais.";
    // You can also use header('Location: thank_you.php'); to redirect to another page.
    echo '<style>
            #congratulations { display:flex;}
        </style>';
    }
?>