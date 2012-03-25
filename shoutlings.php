<?php

$create = false;
if(!file_exists('db.sqlite'))
	$create = true;

$db = new PDO('sqlite:db.sqlite');

if($db === false)
	die('Shoutlings: Error creating database file.');

if($create) {
	$result = $db->exec("CREATE TABLE `shoutlings` (
		`id` INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
		`name` TEXT,
		`message` TEXT
	)");
	
	if($result === false)
		die('Shoutlings: Error creating database structure.');
}



if(isset($_POST['write'])) {
	$j = $_POST['write'];
	if(strlen($j[0]) < 1 || strlen($j[1]) < 1)
		die();
	$name = $db->quote($j[0]);
	$message = $db->quote($j[1]);
	$result = $db->query("INSERT INTO  `shoutlings` (`name`, `message`) VALUES($name, $message)");
	die();
}



$id = 0;
if(isset($_POST['id']))
	$id = (int) $_POST['id'];

$shouts = array();

$maxid = $id;
foreach($db->query("SELECT * FROM `shoutlings` WHERE `id`>$id ORDER BY `id` ASC") as $s) {
	$maxid = max($maxid, $s['id']);
	array_push($shouts, array($s['name'], $s['message']));
}

echo json_encode(array($maxid, $shouts));
