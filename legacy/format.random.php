<?php
  function fyShuffle($array) {
    $i = count($array);
  
    while(--$i) {
      $j = mt_rand(0,$i);
      if ($i != $j) {
        $tmp = $array[$j];
        $array[$j] = $array[$i];
        $array[$i] = $tmp;
      }
    }     
    return $array;
  }

  $namehref = fyShuffle($dirArray)[0];
  $gifurl = $libraryUrl . $currentDir . rawurlencode($namehref);
  header('Location: ' . $gifurl);
?>
