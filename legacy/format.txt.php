<?php
  header("Content-type:text/plain; charset=utf-8");

  // Loops through the array of files
  for($index=0; $index < $indexCount; $index++) {
    // Gets File Names
    $name=$dirArray[$index];
    $namehref=$dirArray[$index];
    $nameFormated = $name;

    // Gets Extensions
    $extn=findexts($dirArray[$index]);

    // Separates directories
    if(is_dir($dirArray[$index])) {
      $extn="dir";
      $class="dir";
    } else {
      $class="file";
      $nameFormated = substr($name,0,-4);

      if (strlen($nameFormated) == 0) {
        $nameFormated = $name;
      }
    }

    // Print 'em
    $gifurl = $libraryUrl . $currentDir . rawurlencode($namehref);

    print($gifurl . "\n");
  }
?>
