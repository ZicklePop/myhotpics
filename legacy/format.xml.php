<?php
  header("Content-type:text/xml; charset=utf-8");
?>
<GifLibrary
  size="<?php echo $indexCount; ?>"
  dir="<?php echo $currentDir; ?>" >
<?php
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

    print("<GifItem><image>$gifurl</image><keywords>$namehref</keywords></GifItem>");
  }
?>
</GifLibrary>
