<?php

$recepient = ".......@mail.ru, anshakirov@mail.ru";
$sitename = "www.........ru";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$text = trim($_POST["text"]);
$message = "Имя: $name \nТелефон: $phone ";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

//этот скрипт отправляет на почту заявку на обратную связь
