<?php
  $format = "html";
  if (isset($_GET["format"])) {
    $format = strtolower($_GET["format"]);
  }

  switch($format) {
    case "xml":
      require("./.format.xml.php");
      break;
    case "json":
      require("./.format.json.php");
      break;
    case "txt":
      require("./.format.txt.php");
      break;
    case "csv":
      require("./.format.csv.php");
      break;
    case "rss":
      require("./.format.rss.php");
      break;
    case "random.gif":
      require("./.format.random.php");
      break;
    default:
      require("./.format.html.php");
      break;
  }
?>
