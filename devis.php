<?php 
if(isset($_POST['submit'])){
    $to = "pierrej0312@gmail.com"; // this is your Email address
    $from = $_POST['email']; // this is the sender's Email address
    $name = $_POST['name'];
    $subject = "DEVIS BALABULLE DE" . $name;
    $subject2 = "Copie du message envoyé à pjdesign";
    $message = $name . " a écrit:" . "\n\n" . $_POST['text'];
    $message2 = "Voici la copie de votre message " . $name . "\n\n" . $_POST['text'];

    $headers = "From:" . $from;
    $headers2 = "From:" . $to;
    mail($to,$subject,$message,$headers);
    mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender
    echo "message envoyé. Merci ! " . $name . ", Nous vous recontacterons dans les plus bref délais.";
    // You can also use header('Location: thank_you.php'); to redirect to another page.
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
    <meta name="description" content="Gobelet écologique pour votre événement ou festivité"/>
    <title>Accueil - Balabulle</title>
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
        <div class="ham-button home" aria-hidden="true">
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
<footer>
    <section class="newsletterandsocial">
    <section class="newsletter">
        
        <form method="get" class="newsletter-form">
            <label for="email"><h2>Toujours informé</h2>
        <h3>Toutes les news sur les gobelets et services par mail</h3></label>
            <input
                type="email"
                id="email"
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