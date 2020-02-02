<?php
  header("Content-type:application/json; charset=utf-8");

    $imageArray = array();

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

      array_push($imageArray, array(
          "url" => $gifurl,
          "keywords" => $namehref
        )
      );
    }

  $jsonArray = array(
    "images" => $imageArray,
    "version" => 1
  );

  print(json_encode($jsonArray));
?>
