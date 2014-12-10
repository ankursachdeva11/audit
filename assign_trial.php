<?php header('Access-Control-Allow-Origin: *'); ?>
<?php
	
	################################
	#	start database connection
	################################
	include ("../beta/wp-config.php");

	$connect = @mysql_connect(DB_HOST, DB_USER, DB_PASSWORD)
		or die('Our database is currently down for updates, please check back later.'); 
	
	$db = @mysql_select_db(DB_NAME, $connect)
		or die('Our database is currently down for updates, please check back later.');
	################################
	#	end database connection
	################################
	
	#	check if section id has been received
	
	global $wpdb;
	extract($_POST);
	$table_name='ac_assign_free_trial';
	$wpdb->insert($table_name,array('user_id' => $_REQUEST['uid'], 'product_id' => $_REQUEST['pid'], 'first_name' => $fldFirstName, 'last_name' => $fldLastName, 'address' => $fldAddressLine,'name_of_country' => $fldCountry, 'name_of_company' => $fldCompanyName, 'email_id' => $fldEmail, 'area_code' => $fldAreaCode, 'country_code' => $fldCountryCode, 'phone_number' => $fldPhone));
	
	
	     	 
	$strEmail=$wpdb->get_var("select user_email from ac_users where ID=3");
	$to =$strEmail;
	$product_name = $wpdb->get_var('SELECT post_title FROM `ac_posts` WHERE `ID` = '.$_REQUEST['pid'].'');
	$subject = 'Free Trial of Product : App '.$product_name;
	$message.='First Name: '.$fldFirstName.'</span><br><br><br>';
	$message.='Last Name: '.$fldLastName.'</span><br><br><br>';
	$message.='Address: '.$fldAddressLine.'</span><br><br><br>';
	$message.='Country: '.$fldCountry.'</span><br><br><br>';
	$message.='Company Name: '.$fldCompanyName.'</span><br><br><br>';
	$message.='Email: '.$fldEmail.'</span><br><br><br>';
	$message.='Area Code: '.$fldAreaCode.'</span><br><br><br>';
	$message.='Country Code: '.$fldCountryCode.'</span><br><br><br>';
	$message.='Phone Number: '.$fldPhone.'</span><br><br><br>';
	$headers .= "X-Mailer: PHP v".phpversion()." \r\n";
	$headers .= 'MIME-Version: 1.0' . "\r\n";
	$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
	$headers .= 'Content-Transfer-Encoding: base64' . "\r\n";
	$q = wp_mail($strEmail, $subject, $message);
	echo 'done';
?>