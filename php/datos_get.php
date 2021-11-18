<?php
  if (isset($_GET)){
    if (isset($_GET['param']))
      if ($_GET['param'] == 42)
        echo 'Conoces el sentido del Universo';
      else
        echo 'NO conoces el sentido del Universo';
    die();
  }
