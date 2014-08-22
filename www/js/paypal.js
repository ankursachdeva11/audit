function verifyPayment(type,amt,appId,key)
{
    var siteName = localStorage.getItem("siteName");
    var user_id = localStorage.getItem("userId");
    
    siteUrl=  siteName+"/wp-content/plugins/dsp_dating/m/dsp_verify_payment.php";
    
    formData= {'type':type,'amt':amt,'appId':appId,'key':key,'user_id':user_id };
     
   
     siteUrl=siteName+"/wp-content/plugins/dsp_dating/m/dsp_verify_payment.php";
     $.ajax({
         type: "GET",
         data: formData,
         url: siteUrl,
         cache: false,
         dataType: "text",
         beforeSend: function() {
             $.mobile.showPageLoadingMsg(true);
         },
         complete: function() {
             $.mobile.hidePageLoadingMsg();
         },
         success: function (data, status)
         {
             data = $.trim(data);
           //  alert('data=='+data);
             if(data=="success")
                 {
                 alert('Thankyou for your payment.');
                 }
             else
                 {
                 alert('Payment could not completed successfully');
                 }
             
          },
         timeout: 5000,
         error: function (data, status)
         {
             alert('Network error has occurred please try again!');
          }
         
         });
    
}

 
            
//we defined a on click function in our button click 
//function callPaypal(amt,productName,currencyCode,clientID,Business)
var fid='';
var pid='';
function callPaypal( productName , product_price , form_id , project_id)
{
//alert('start payment'+amt+productName+currencyCode+'  '+clientID+' ' +Business);
   //------------------ start paypal process------------------
           
            
             
           //	   var productName="My Product";
        	fid = form_id;
			pid = project_id;
			
			var amt= product_price ;
            var currencyCode='USD';
			
             clientID="AV5QiRDedW59PSa86dZXuiQ9MWb2hIl5ieB_taqfFVTOIvf5yblQle4k3hvQ";
          Business="mwnt.test10-facilitator@gmail.com";
                   
				   
             // set environment you want to use
             window.plugins.PayPalMobile.setEnvironment("PayPalEnvironmentSandbox");

             // create a PayPalPayment object, usually you would pass parameters dynamically
             var payment = new PayPalPayment(amt, currencyCode, productName);
           
             // define a callback when payment has been completed
             var completionCallback = function(proofOfPayment) {
				 
				 
             $.ajax({url: "http://qhse-riskapplications.com/m/purchaseSuccess.php?pfid=" + fid + "&pid=" + pid,
				dataType: "text",
				beforeSend: function() {
					$.mobile.showPageLoadingMsg(true);
				},
				complete: function() {
					$.mobile.hidePageLoadingMsg();
				},
				success: function (request) {
					alert("Product Added.");
				},
				error: function (request,error) {
					alert('Network error has occurred please try again!');
				}
				});
				 
             //  Send this result to the server for verification;
             // see https://developer.paypal.com/webapps/developer/docs/integration/mobile/verify-mobile-payment/ 
             var res=JSON.stringify(proofOfPayment);
             var obj =  JSON.parse(res); 
                  
              //alert("Proof of payment: " + JSON.stringify(proofOfPayment));
               // check payment type
               if(obj.proof_of_payment['adaptive_payment']!=null)
                   {
                       var status=obj.proof_of_payment['adaptive_payment'].payment_exec_status;
                       if(status=="COMPLETED")
                       {
                           var type="adaptive_payment";
                           var amt=obj.payment['amount'];
                           var appID=obj.proof_of_payment['adaptive_payment'].app_id;
                           var payKey=obj.proof_of_payment['adaptive_payment'].pay_key;
                       alert('paypal Payment completed successfully'+ 'type=='+type+ ' amt=='+amt+' appid=='+ appID+' paykey=='+payKey);
                      // verifyPayment(type,amt,appID,payKey);
                       }
                       else
                           {
                           alert('Payment could not completed successfully');
                           }
                   }
               else if(obj.proof_of_payment['rest_api']!=null)
                   {
                   alert('rest_api');
                       var status=obj.proof_of_payment['rest_api'].state;
                       if(status=="approved")
                       {
                       alert('approve');
                           var type="rest_api";
                           var amt=obj.payment['amount'];
                           var payment_id=obj.proof_of_payment['rest_api'].payment_id;
                         //  verifyPayment(type,amt,payment_id,1);
                       }
                       else
                       {
                       alert('Payment could not completed successfully');
                       }
                   }
               else
                   {
                   alert('Payment could not completed successfully');
                   }
               
          }

           // define a callback if payment has been canceled
           var cancelCallback = function(reason) {
               alert("Payment cancelled: " + reason);
             console.log("Payment cancelled: " + reason);
           }
           
           // launch UI, the PayPal UI will be present on screen until user cancels it or payment completed
                                                       //RECEIVER clientId
         //  window.plugins.PayPalMobile.presentPaymentUI("AV5QiRDedW59PSa86dZXuiQ9MWb2hIl5ieB_taqfFVTOIvf5yblQle4k3hvQ", "mwnt.test10-facilitator@gmail.com", "someuser@somedomain.com", payment, completionCallback, cancelCallback);
                    
            
          window.plugins.PayPalMobile.presentPaymentUI(clientID, Business, "someuser@somedomain.com", payment, completionCallback, cancelCallback);

          
    
   }
