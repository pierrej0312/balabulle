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
    if (isset($_POST['device']) && $_POST['device'] == 'achat') 
    {
        $dates = "Le: " . $date;
    }
    else
    {
        $dates = "Du: " . $datebegins . "\n\n" . "Au: " . $dateend;
    }

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
    echo '<section class="devis-form congratulations" id="congratulations">' . '<div class="allright-bubble" aria-hidden="true">' . '<span>' . '</span>' . '<span>' . '</span>' . '</div>' . '<h3>Demande de devis envoyée</h3>' . '<h4>Nous vous répondrons dans les plus brefs délais</h4>' . '<a href="/index.html" class="CTA"> Retour sur Acceuil</a>' . '<span class="congrat-effect"></span>' . '</section>';
    }
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="style.css" />
    <meta name="name" content="Balabulle - gobelet réutilisable"/>
    <meta name="description" content="Demander un devis sur mesure - Gobelet écologique pour votre événement ou festivité"/>
    <title>Devis - Balabulle</title>
</head>
<body>
    <header>
        <div class="menu-nav">
        <!--logo principal-->
        <a href="index.html" class="main-logo"><!--position relative-->
            <h1>Balabulle - Gobelet réutilisable - La solution écologique</h1><!--masquer-->
            <img src="/img/logo/logo.svg" alt="logo balabulle">
        </a>

        <!--Hamburger-->
        <div class="ham-button darkversion" aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
        </div>
        <!--menu principal-->
        <nav class="main-nav">
            <ul class="main-nav-list">

                <!--
                <li class="search">
                    <span class="search-button"></span>
                    <form method="get" class="search-form">
                        <label for="search">Entrez votre recherche</label>
                        <input
                            type="search"
                            id="search"
                            name="q"
                            aria-label="rechercher"
                            placeholder="Entrez votre recherche"
                            class="search-text"
                        />
                        <button class="submit-search">rechercher</button>
                        <div class="close-search"><div>annuler</div></div>
                    </form>
                </li>
                -->

                <li class="nav-link">
                    <a href="index.html">Acceuil</a>
                </li>
                <li class="nav-link">
                    <a href="decouvrir.html">Découvrir</a>
                </li>
                <li class="nav-link">
                    <a href="contact.html">Contact</a>
                </li>
                <li class="nav-link CTA active">
                    <a href="">Devis</a>
                </li>
            </ul>
        </nav>
        <!--menu principal fin-->
        </div>
        <!--Hamburger fin-->
    <!--header texte-->
</header>
<h2 class="page-title">Devis</h2>
<ul class="info-suivi-devis">
    <span class="devis-bar-steps" aria-hidden="true"></span>
    <li class="devis-step step-1"><span></span><h4>Service</h4></li>
    <li class="devis-step step-2"><span></span><h4>Quantités</h4></li>
    <li class="devis-step step-3"><span></span><h4>Dates</h4></li>
    <li class="devis-step step-4"><span></span><h4>Bonus</h4></li>
    <li class="devis-step step-5"><span></span><h4>Coordonnées</h4></li>
    <li class="devis-step step-6"><span></span><h4>Message</h4></li>
    <li class="devis-step step-7"><span></span><h4>Récapitulatif</h4></li>
</ul>
<form action="" method="post" id="devis-form" name="devis-form" class="devis-form">
    
    <fieldset class="devis-fieldset type">
        <h3>J'ai besoin de gobelets en</h3>
        <div class="input-container">
            <div class="radio-container">
                <input type="radio" id="achat" name="device" value="achat" onclick="javascript:achatlocCheck();"><label for="device">Achat</label>
            </div>
            
            <div class="radio-container">
                <input type="radio" id="location" name="device" value="location " onclick="javascript:achatlocCheck();"><label for="device">Location</label>
            </div>
        </div>
    </fieldset>
    <fieldset class="devis-fieldset quantity">
        <h3>J'en prend</h3>
        <div class="form-conatiner">
            <div class="Quantity-animation" aria-hidden="true">
                
                
                <div class="container-movement">
                    <span class="container-inside"></span>
                    <span class="boxes-1"></span>
                    <div class="cup-box">
                        <span class="cup-box-inside"></span>
                        <span class="cups-1"></span>
                        <span class="theCup"></span>
                        <span class="cups-2"></span>
                        <span class="cup-box-outside"></span>
                </div>
                    <span class="boxes-2"></span>
                    <span class="container-outside"></span>
                </div>
            </div>
            <div class="input-container">
                <input type="range" id="CupQuantityRange" name="CupQuantity" max="2000" min="50" step="50" onchange="this.nextElementSibling.value=this.value">
                <input type="number" name="AmountQuantity" min="50" max="2000" value="1000" id="cupQuantityNumber" onchange="this.previousElementSibling.value=this.value">
            </div>
        </div>
    </fieldset>
    <fieldset class="devis-fieldset dates">
        <h3>Je choisis mes dates</h3>
        <div class="form-conatiner dates-form achat">
        <div class="begins">
            <label for="datebegins">Du</label>
            <input type ="date" name="datebegins" value="" id="begins" class="dateInputBegin">
            
        </div>

        <div class="end">
            <label for="dateend">Au</label>
            <input type ="date" name="dateend" value="" id="end" class="dateInputEnd">
            
        </div>
        
        <div class="Achat-date">
            <label for="date">Le</label>
            <input type ="date" name="date" value="" id="the" class="dateInputDate">
            
        </div>
        </div>
    </fieldset>
    <fieldset class="devis-fieldset bonus">
        <h3>Et en bonus ?</h3>
        <input type="checkbox" name="cleaning-device" id="nettoyage" onclick="NetWrited()" value="Yes">
        <label for="cleaning-device">
            <span class="cleaning-illustration" aria-hidden="true">
            </span>
            <strong>Nettoyage</strong>
            <p>Pour garder vos gobelets propres pendant la location ou à tout moment suite à l'achat</p>
            <div class="add-button">
                <p>AJOUTER</p>
                <span></span>
                <span></span>
            </div>
        </label>
    </fieldset>
    <fieldset class="devis-fieldset informations">
        <h3>Mes coordonnées</h3>
        <section class="form-contact">
        <!--first name-->
        <label for="firstName" class="required">Prénom</label>
        <input type="text" name="FirstName" id="firstName" placeholder="Petite" class="input-contact" required onchange="FirstNameoutput()">

        <!--last name-->
        <label for="lastName" class="required">Nom</label>
        <input type="text" name="LastName" id="lastName" placeholder="Bulle" class="input-contact" required onchange="LastNameoutput()">

        <!--Company-->
        <label for="company">Société</label>
        <input type="text" name="company" id="company" placeholder="" class="input-contact" onchange="Companyoutput()">

        <!--email-->
        <label for="email" class="required">Email</label>
        <input type="email" name="email" id="email" placeholder="petite.bulle@mail.com" class="input-contact" required onchange="Emailoutput()">

        <!--Phone-->
        <label for="phone" class="required">GSM / Fixe</label>
        <input type="tel" name="phone" id="phone" placeholder="" class="input-contact" pattern="^[0-9]{10}$" required onchange="Phoneoutput()">
        </section>
    </fieldset>
    <fieldset class="devis-fieldset message">
        <!--message-->
        <label for="message" class="message-label">Message</label>
        <textarea name="message" id="message" cols="40" rows="10" placeholder="Mon message" class="input-message" onchange="Messageoutput()"></textarea>
    </fieldset>
    <section class="devis-fieldset summary">
        
        <section class="device">
            <h4>Type de devis</h4>
            <p class="device-selected">Achat</p>
        </section>
        <section class="quantity">
            <h4>Quantités</h4>
            <p class="quantity-selected"></p>
        </section>
        <section class="dates">
            <h4>Dates</h4>
            <p class="dates-begin-writed">Du :</p>
            <p class="date-end-writed">Au :</p>
            <p class="date-writed">Le :</p>
        </section>
        <section class="bonus">
            <h4>Bonus</h4>
            <p class="bonus-checked"></p>
        </section>
        <section class="personal-informations">
            <h4>Coordonnées</h4>
            <p class="firstname-writed">Prénom :</p>
            <p class="lastname-writed">Nom :</p>
            <p class="company-writed">Société :</p>
            <p class="email-writed">Email :</p>
            <p class="phone-writed">Téléphone :</p>
        </section>
        <section class="message">
            <h4>Message</h4>
            <p class="message-writed"></p>
        </section>
        <section class="form-buttons-summary">
            <button type="submit" name="submit" class="devis-button submit">Valider</button>
            <button class="devis-button previous" onclick="nextPrev(-1)">Annuler</button>
        </section>
    </section>
</form>

<section class="form-buttons">
    <button class="devis-button next" onclick="nextPrev(1)"></button>
    <button class="devis-button previous" onclick="nextPrev(-1)">Précédent</button>
</section>


<footer>
    <section class="newsletterandsocial">
    <section class="newsletter">
        
        <form method="get" class="newsletter-form">
            <label for="email"><h2>Toujours informé</h2>
        <h3>Toutes les news sur les gobelets et services par mail</h3></label>
            <input
                type="email"
                id="email-newsletter"
                placeholder="monemail@mail.com"
                class="newsletter-input"
            />
            <button class="submit-email">S'inscrire</button>
        </form>
    </section>
    
    
    <section class="socialmedia"></section>
    </section>
    <section class="countryandnav">
        <div class="country">
            <select name="" id="">
                <option value="BE">Belgique</option>
                <option value="NL">Netherland</option>
                <option value="LU">Luxembourg</option>
                <option value="FR">France</option>
                <option value="DE">Allemagne</option>
                <option value="GB">United Kingdom</option>
                <option value="US">United States</option>
                <option value="INT">International</option>
            </select>
        </div>
    
        <nav class="secondnav">
            <ul class="secondary-nav-list">
                <li class="nav-link">
                    <a href="index.html">Home</a>
                </li>
                <li class="nav-link">
                    <a href="contact.html">Découvrir</a>
                </li>
                <li class="nav-link">
                    <a href="contact.html">Contact</a>
                </li>
                <li class="nav-link CTA">
                    <a href="">Devis</a>
                </li>
                <li class="nav-link">
                    <a href="">FAQ</a>
                </li>
            </ul>
        </nav>
    
</section>
    <nav class="footermenu">
        <ul class="footer-nav-list">
            <li class="nav-link">
                @balabulle - 2020 by Wallcom & pjdesign
            </li>
            <li class="nav-link">
                <a href="contact.html">Conditions Générales de Vente</a>
            </li>
            <li class="nav-link">
                <a href="contact.html">Conditions Générales de Location</a>
            </li>
            <li class="nav-link CTA">
                <a href="">Nos partenaires</a>
            </li>
            <li class="nav-link">
                <a href="">Informations légales</a>
            </li>
        </ul>
    </nav>
</footer>
<script src="animations.js"></script>
</body>
</html>