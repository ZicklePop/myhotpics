<?php
/*
  # Gif Library
  Apache Directory Index for Gifs
  by [Jake Bilbrey](http://jakebilbrey.com)
*/

/*
  Configurations
*/
  $libraryName = 'myhot.pics';
  $libraryUrl = 'https://myhot.pics/';
  $librarySearchText = 'HOT PICS';


  header("Access-Control-Allow-Origin: *");

  preg_match_all("/\/.+\//uim", $_SERVER['REQUEST_URI'], $currentDir);
  $currentDir = $currentDir[0][0];
  $currentDirFormatted = substr($currentDir, 1, -1);

  $myDirectory=opendir("." . $currentDir);
  while($entryName=readdir($myDirectory)) {
    $dirArray[]=$entryName;
  }

  function findexts ($filename) {
    $filename=strtolower($filename);
    $exts=split("[/\\.]", $filename);
    $n=count($exts)-1;
    $exts=$exts[$n];
    return $exts;
  }

  closedir($myDirectory);

  // Remove hidden files
  $dirArray = array_filter($dirArray, function($el) {
    if (substr($el,0,1) === ".") {
      return false;
    } else {
      return true;
    }
  });

  sort($dirArray);


  // Filter
  if (isset($_GET["q"]) && strlen($_GET["q"]) > 0) {
    $dirArray = array_filter($dirArray, function($el) {
      $el = strtolower($el);
      $filter = strtolower($_GET["q"]);
      return strstr($el,$filter);
    });
  }

  // Limit and Offset
  $limit = null;
  $offset = 0;

  if (isset($_GET["limit"]) && $_GET["limit"] > 0) {
    $limit = (int) $_GET["limit"];
  }

  if (isset($_GET["offset"]) && $_GET["offset"] >= 0) {
    $offset = (int) $_GET["offset"];
  }

  if (is_null($limit)) {
    $dirArray = array_slice($dirArray, $offset);
  } else {
    $dirArray = array_slice($dirArray, $offset, $limit);
  }

  // Counts elements in array
  $indexCount=count($dirArray);

  // Route and return the correct format
  require("./.routes.php");
?>
