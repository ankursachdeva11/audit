<?php header('Access-Control-Allow-Origin: *'); ?>
<?php
	################################
	#	start database connection
	################################
	include ("../wp-config.php");
	
	
	

	
	
	$user_login=$_REQUEST['user_name'];
	
	
	    global $wpdb, $wp_hasher;

    $user_login = sanitize_text_field($user_login);

    if ( empty( $user_login) ) {
        echo '<br><p>Please enter Email or Password</p>';
		exit();
    } else if ( strpos( $user_login, '@' ) ) {
        $user_data = get_user_by( 'email', trim( $user_login ) );
        //if ( empty( $user_data ) )
           //echo '<br><p>Entered email has not registered with us.</p>';
    } else {
        $login = trim($user_login);
        $user_data = get_user_by('login', $login);
    }




    if ( !$user_data ) echo '<br><p>Entered email has not registered with us.</p>';
	else{
    // redefining user_login ensures we return the right case in the email
    $user_login = $user_data->user_login;
    $user_email = $user_data->user_email;
	$user_id = $user_data->ID;
	$password = wp_generate_password( 10, false );
	wp_set_password( $password, $user_id );


    

    $message = __('Password has been reset for you account:') . "<br><br>";
    $message .= network_home_url( '/' ) . "<br><br>";
    $message .= sprintf(__('Username: %s'), $user_login) . "<br>";
  	$message .= sprintf(__('Username: %s'), $password) . "<br>";

    if ( is_multisite() )
        $blogname = $GLOBALS['current_site']->site_name;
    else
        $blogname = wp_specialchars_decode(get_option('blogname'), ENT_QUOTES);

    $title = sprintf( __('[%s] Password Reset'), $blogname );

    if ( $message && !wp_mail($user_email, $title, $message) )
        wp_die( __('The e-mail could not be sent.') . "<br />\n" . __('Possible reason: your host may have disabled the mail() function...') );

    echo '<br><p>New password has been emailed to you. Please check your email.</p>';;
	}
	
	?>
	