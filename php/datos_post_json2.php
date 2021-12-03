<?php
    header('Content-Type : application/json');
    $obj=new stdClass();
    $obj->loquesea='Viva mi abuela';
    $json=json_encode($obj);
    echo $json;