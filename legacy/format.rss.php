<?php
  header("Content-type:application/rss+xml; charset=utf-8");
?>
<rss xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
  <channel>
    <title>
      <?php echo $libraryName; ?>
      <?php
        if (strlen($currentDirFormatted) > 0) {
          echo ' - ' . $currentDirFormatted;
        }
        if (isset($_GET["q"])) {
          echo ' - ' . $_GET["q"];
        }
      ?>
    </title>
    <link><?php echo $libraryUrl; ?></link>
    <description><?php echo $libraryName; ?></description>
    <generator><?php echo $libraryName; ?></generator>
    <docs>http://blogs.law.harvard.edu/tech/rss</docs>
    <language>en</language>
    <atom:link href="<?php echo $libraryUrl; ?>?format=rss" rel="self" type="application/rss+xml" />
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

    print("<item><title><![CDATA[$namehref]]></title><link>$gifurl</link><description><![CDATA[<img src='$gifurl' title='$namehref'>]]></description><enclosure url='$gifurl' type='image/gif' /><guid isPermaLink='true'>$gifurl</guid></item>");
  }
?>
  </channel>
</rss>
