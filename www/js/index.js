/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
		
		
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
		
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

/*function loadPanel(){
	$("#panellist").empty();
	$("#panellist").append('<li><a href="#pgProjects"><h4>Projects</h2></li>').trigger("create");
	$("#panellist").listview("refresh");
}*/

//	store logged in user id
var intUserId = "";

	
var strProjectId = "";	// store project id when any project is taped
var strProjectFormId = "";	// store project id  for importing when any project is taped
var strFormId = "";	// store Form id when any project is taped
var strModuleId = "";	// store module id to display sections
var strSectionId = "";	// store section id to display questions for each section
var strDetailId = "";

var router=new $.mobile.Router({
          "#pgAudit_Risk_Profiling": {handler: "localpage", events: "bc,c,i,bs,s,bh,h" },
         },{
          localpage: function(type,match,ui){
            //console.log("pgAudit_Risk_Profiling: "+type+" "+match[0]);
            //alert("pgAudit_Risk_Profiling: "+type+" "+match[0]);
			
			switch (type) {
				case "pagebeforeshow":
					var strQueryString = match[0].split("?")[1];
					strSectionId = strQueryString.replace("section_id=","");
					//alert(strSectionId);
					break	
			}
			/*var query = match[0].split("?")[1];;
			query = query.replace("id=","");
			var s = $(this).data("url");
			var categoryPart = s.split("&")[0];
			var idPart = s.split("&")[1];
			var category = categoryPart.split("=")[1];
			var id = idPart.split("=")[1];
			
			var params=router.getParams(match[1]);
            //params = params.replace("?section_id=","");

			//console.log(params);
			alert("param = " + param[0]);*/
          }
        }, { 
          defaultHandler: function(type, ui, page) {
            console.log("Default handler called due to unknown route (" 
              + type + ", " + ui + ", " + page + ")"
            );
          },
          defaultHandlerEvents: "s",
	  defaultArgsRe: true
        });
		
/*
#####################################
####	MODULES	#####################
#####################################
*/
var router=new $.mobile.Router({
          "#pgModules": {handler: "localpage", events: "bc,c,i,bs,s,bh,h" },
         },{
          localpage: function(type,match,ui){
            //console.log("pgAudit_Risk_Profiling: "+type+" "+match[0]);
            //alert("pgAudit_Risk_Profiling: "+type+" "+match[0]);
			
			switch (type) {
				case "pagebeforeshow":
					var strQueryString = match[0].split("?")[1];
					strProjectId = strQueryString.replace("id=","");
					//alert(strProjectId);
					break	
			}
          }
        }, { 
          defaultHandler: function(type, ui, page) {
            console.log("Default handler called due to unknown route (" 
              + type + ", " + ui + ", " + page + ")"
            );
          },
          defaultHandlerEvents: "s",
	  defaultArgsRe: true
        });
/*
#####################################
####	MODULES	#####################
#####################################
*/

/*
#####################################
####   INPROGRESS / COMPLETED	#####
#####################################
*/
var router=new $.mobile.Router({
          "#pgInprogressAndCompleted": {handler: "localpage", events: "bc,c,i,bs,s,bh,h" },
         },{
          localpage: function(type,match,ui){
            //console.log("pgAudit_Risk_Profiling: "+type+" "+match[0]);
            //alert("pgAudit_Risk_Profiling: "+type+" "+match[0]);
			
			switch (type) {
				case "pagebeforeshow":
					var strQueryString = match[0].split("?")[1];
					strModuleId = strQueryString.split("&")[0];
					strModuleId = strModuleId.replace("mid=","");
					strProjectId = strQueryString.split("&")[1];
					strProjectId = strProjectId.replace("pid=","");
					strFormId = strQueryString.split("&")[2];
					strFormId = strFormId.replace("pid=","");
					//alert(strProjectId);
					break	
			}
          }
        }, { 
          defaultHandler: function(type, ui, page) {
            console.log("Default handler called due to unknown route (" 
              + type + ", " + ui + ", " + page + ")"
            );
          },
          defaultHandlerEvents: "s",
	  defaultArgsRe: true
        });
/*
#####################################
####	MODULES	#####################
#####################################
*/

/*
#####################################
####	SECTION	#####################
#####################################
*/
var router=new $.mobile.Router({
          "#pgSection": {handler: "localpage", events: "bc,c,i,bs,s,bh,h" },
         },{
          localpage: function(type,match,ui){
            //console.log("pgAudit_Risk_Profiling: "+type+" "+match[0]);
            //alert("pgAudit_Risk_Profiling: "+type+" "+match[0]);
			
			switch (type) {
				case "pagebeforeshow":
					var strQueryString = match[0].split("?")[1];
					
					strModuleId = strQueryString.split("&")[0];
					strModuleId = strModuleId.replace("mid=","");
					strProjectFormId = strQueryString.split("&")[1];
					strProjectFormId = strProjectFormId.replace("pid=","");
					strFormId = strQueryString.split("&")[2];
					strFormId = strFormId.replace("fid=","");
					strDetailId = strQueryString.split("&")[3];
					strDetailId = strDetailId.replace("did=","");
					
					
					//alert(strModuleId);
					break	
			}
          }
        }, { 
          defaultHandler: function(type, ui, page) {
            console.log("Default handler called due to unknown route (" 
              + type + ", " + ui + ", " + page + ")"
            );
          },
          defaultHandlerEvents: "s",
	  defaultArgsRe: true
        });
/*
#####################################
####	SECTION	#####################
#####################################
*/	


/*
#####################################
####	SIGN IN	#####################
#####################################
*/
 

function onSuccess(data, status)
{
	//alert(data);
	data = $.trim(data);
	//alert(data);
	var strMessage = data.split("_")[0];	//	store success message
	intUserId = data.split("_")[1];	//	store logged in user id
	//
	//document.addEventListener("deviceready", onDeviceReady, true);	
	//alert('intUserId-'+intUserId);	
	if (strMessage == "success") {
		window.localStorage.setItem("userid", intUserId);
		//alert('intUserId-'+window.localStorage.getItem("userid"));
		//Adding the changeHash: false to avoid an issue with the iframe
		$.mobile.changePage( "#pgWelcome", { transition: "slideup", changeHash: false });
	
	}
	else {

		data = $.trim(data);
		alert (data);

	}	//	/ if (data == "success")
}	//	/ function onSuccess

function onError(data, status)
{
   data = $.trim(data);
   alert("Network error, Please try again.");
}        

$(document).on('pageinit', '#pgSignIn', function(){
	
	$("#submit").click(function(){
	
	   var formData = $("#frmCheckLogin").serialize();
		
	   $.ajax({
		   type: "GET",
		   url: "http://www.qhse-riskapplications.com/m/checklogin.php",
		   cache: false,
		   dataType: "text",
		   data: formData,
		   beforeSend: function() {
                    $.mobile.showPageLoadingMsg(true);
                },
                complete: function() {
                    $.mobile.hidePageLoadingMsg();
                },
				timeout: 5000,
		   success: onSuccess,
		   error: onError
	   });
	
	   return false;
	});
});
/*
#####################################
####	/ SIGN IN	#################
#####################################
*/


/*
#####################################
####	SIGN UP	#####################
#####################################
*/
 

function onRegister(data, status)
{
	alert(data);
}	//	/ function onSuccess

function onRegisterError(data, status)
{
   data = $.trim(data);
   alert("Network Error");
}        

$(document).on('pageinit', '#pgSignUp', function(){
	
	$("#frmSignUpRegister").click(function(){
	   var formData = $("#frmSignUp").serialize();
	   $.ajax({
		   type: "GET",
		   url: "http://qhse-riskapplications.com/m/registerUser.php",
		   cache: false,
		   dataType: "text",
		   data: formData,
		   beforeSend: function() {
                    $.mobile.showPageLoadingMsg(true);
                },
                complete: function() {
                    $.mobile.hidePageLoadingMsg();
                },
				timeout: 5000,
		   success: onRegister,
		   error: onRegisterError
	   });
	
	   return false;
	});
});
/*
#####################################
####	/ SIGN UP	#################
#####################################
*/


/*
#####################################
####  WELCOME	#####################
#####################################
*/
 

$(document).on('pageinit', '#pgWelcome', function(){
	
	$("#projectNew").click(function(){
			window.localStorage.setItem("mode", "new");
			$("#projectHeader").empty();
			$("#projectHeader").append("Start your new project");
	});
	$("#projectInUse").click(function(){
			window.localStorage.setItem("mode", "in_use");
			$("#projectHeader").empty();
			$("#projectHeader").append("View your inprogress projects");
	});
	$("#projectImport").click(function(){
			window.localStorage.setItem("mode", "import");
			$("#projectHeader").empty();
			$("#projectHeader").append("Import product for the project");
	});
	$("#projectCompleted").click(function(){
			window.localStorage.setItem("mode", "published");
			$("#projectHeader").empty();
			$("#projectHeader").append("View your completed projects");
	});
	
});
/*
#####################################
####	/ WELCOME	#################
#####################################
*/

/*
#####################################
####	PROJECTS	#################
#####################################
*/
$(document).on('pagebeforeshow', '#pgProjects', function(){
	 
	 var modeValue = window.localStorage.getItem("mode");
	 var value = window.localStorage.getItem("userid");
	 
	$.ajax({url: "http://www.qhse-riskapplications.com/m/show_projects.php?uid=" + value + "&mode=" + modeValue,
		dataType: "json",
		cache: false,
		jsonpCallback:'successCallback',
		async: true,
		beforeSend: function() {
                    $.mobile.showPageLoadingMsg(true);
                },
                complete: function() {
                    $.mobile.hidePageLoadingMsg();
                },
		success: showProjects,
		error: function (request,error) {
			alert('Network error has occurred please try again!');
		}
	});
	
	function showProjects(result) {
		var results = jQuery.parseJSON(JSON.stringify(result));
		$("#projectlist").empty();
		$.each(results, function(i, values){
			$("#projectlist").append('<li><a href="#pgModules?id=' + values.project_id + '"><h2>' + values.title + '</h2><p>' + values.location + '</p><p>' + values.project_registered + '</p></a><a href="#" data-icon="delete" onclick="deleteProject(' + values.project_id + ')">Some Text</a></li>');
		
		});
					
		$('#projectlist').listview('refresh');

	}		

});
/*
#####################################
####	/ PROJECTS	#################
#####################################
*/
/*
#####################################
####	REGISTER YOUR COMPANY	#####
#####################################
*/
$(document).on('pagebeforeshow', '#pgRegister', function(){
	 
	 var value = window.localStorage.getItem("userid");
	 
	
	$.ajax({url: "http://qhse-riskapplications.com/m/getCompanyDetails.php?uid=" + value,
		dataType: "json",
		cache: false,
		jsonpCallback:'successCallback',
		async: true,
		beforeSend: function() {
                    $.mobile.showPageLoadingMsg(true);
                },
                complete: function() {
                    $.mobile.hidePageLoadingMsg();
                },
		success: showCompanyDetails,
		error: function (request,error) {
			alert('Network error has occurred please try again!');
		}
	});
	
	function showCompanyDetails(result) {
		
		var objCompanies = jQuery.parseJSON(JSON.stringify(result));
				
		$.each(objCompanies, function(i, values) {
			
			
			
			$("#txtCompanyName").prop('value',values.company_name);
			$("#txtAddress").prop('value',values.address);
			$("#txtStreetAddress").prop('value',values.site_address_2);
			$("#txtCity").prop('value',values.city_name);
			$("#txtState").prop('value',values.state_name);
			
			var html='';
			var countryId = values.country_id;
			$.ajax({url: "http://qhse-riskapplications.com/m/getCountryList.php",
				dataType: "json",
				cache: false,
				jsonpCallback:'successCallback',
				async: true,
				beforeSend: function() {
							$.mobile.showPageLoadingMsg(true);
						},
						complete: function() {
							$.mobile.hidePageLoadingMsg();
						},
				success: function(countries,countryId){
					
					var objCountries = jQuery.parseJSON(JSON.stringify(countries));
				
					$.each(objCountries, function(i, value, countryId) {
						
						html += '';
						
						if(countryId == value.country_id){
							$("#txtCountry").append($("<option></option>").prop('value',value.country_id).prop('selected',true)
										.text(value.country_name));
										
							}
						else{	
						$("#txtCountry").append($("<option></option>").prop('value',value.country_id)
										.text(value.country_name));
						}
					
					});
					
					},
				error: function (request,error) {
					alert('Network error has occurred please try again!');
				}
			});
			//$("#txtCountry").prop('value',values.country_id);
			$("#txtZip").prop('value',values.zipcode);
			
			$("#oldCountry").html('<b>' +values.country_name +'</b>');
			
		});
		
	}		

});
/*
#####################################
####  / REGISTER YOUR COMPANY	#####
#####################################
*/

/*
#####################################
####       LOST PASSWORD       	#####
#####################################
*/
$(document).on('click','#btnLostPassword',function(){


   var formData = $("#frmForgotPassword").serialize();
		
	   $.ajax({
		   type: "GET",
		   url: "http://www.qhse-riskapplications.com/m/lostpassword.php",
		   cache: false,
		   dataType: "text",
		   data: formData,
		   beforeSend: function() {
                    $.mobile.showPageLoadingMsg(true);
                },
                complete: function() {
                    $.mobile.hidePageLoadingMsg();
                },
				timeout: 5000,
		   success: function(html){
			//alert(html);   
			$("#lostpassmessage").html(html);
		   },
		   error: onError
	   });
	
	   return false;


});

/*
#####################################
####      /LOST PASSWORD       	#####
#####################################
*/


/*
#####################################
####	MODULES	#####################
#####################################
*/
$(document).on('pagebeforeshow', '#pgModules', function(){
					
		var modeValue = window.localStorage.getItem("mode");
		var value = window.localStorage.getItem("userid");
		//alert(modeValue);
		//alert(value);
	$.ajax({url: "http://qhse-riskapplications.com/m/show_modules.php?pid=" + strProjectId + "&mode=" + modeValue + "&uid=" + value,
		dataType: "json",
		jsonpCallback: 'successCallback',
		async: true,
		beforeSend: function() {
			$.mobile.showPageLoadingMsg(true);
		},
		complete: function() {
			$.mobile.hidePageLoadingMsg();
		},
		success: showModules,
		error: function (request,error) {
			alert('Network error has occurred please try again!');
		}
	});
	
	function showModules(result) {
		var objModules = jQuery.parseJSON(JSON.stringify(result));
		
		//	check if no data return
		if (objModules.length == 0) {
			alert("No product associated with the selected project");
			$.mobile.changePage("#pgProjects", {transition: "slideup"});
		} else {
			//alert(objModules.length);
			$("#modulelist").empty();
			$.each(objModules, function(i, values) {
										
				if(i=='0'){
					$("#headingProduct").empty();
					$("#headingProduct").append(objModules[i].projectName);
					}				
				else{
				var htmlContent = '<li data-role="list-divider" style="white-space:normal">' + objModules[i].module_name + '</li>';
			
				htmlContent = htmlContent + '<li data-role="fieldcontain" style="white-space:normal">';
					
						if(modeValue=='new'){						
						htmlContent = htmlContent + '<a href="#pgSection?mid=' + objModules[i].form_module_id +'&pid=' + objModules[i].project_id + '&fid=' + objModules[i].form_id + '">';
						//htmlContent = htmlContent + objModules[i].sub_module_name + ' :: ' + objModules[i].form_name;
						htmlContent = htmlContent + objModules[i].form_name;
						htmlContent = htmlContent + '</a>';
						
						}
						else{
						htmlContent = htmlContent + '<a href="#pgInprogressAndCompleted?mid=' + objModules[i].form_module_id +'&pid=' + objModules[i].project_id + '&fid=' + objModules[i].form_id + '&uid=' + value +'">';
						//htmlContent = htmlContent + objModules[i].sub_module_name + ' :: ' + objModules[i].form_name;
						htmlContent = htmlContent + objModules[i].form_name;
						htmlContent = htmlContent + '</a>';	
												
						}
					
						
					
					
							
				htmlContent = htmlContent + '</li>';
				
			
				$("#modulelist").append(htmlContent);	
										}
			});
				
			$("#modulelist").listview("refresh");
		}
	}		
});

function displayPDF(execURL){
	window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onRequestFileSystemSuccess, null); 

			function onRequestFileSystemSuccess(fileSystem) { 
			        
			        var entry=fileSystem.root; 
			        
			        entry.getDirectory("qhse", {create: true, exclusive: false}, onGetDirectorySuccess, onGetDirectoryFail); 
			} 
			
			function onGetDirectorySuccess(dir) { 
			     // alert("Created dir "+dir.name); 
			} 
			
			function onGetDirectoryFail(error) { 
			     //alert("Error creating directory "+error.code); 
			}
			var ref = window.open(execURL, '_system', 'location=yes');
        	 //ref.addEventListener('loadstart', function(event) { console.log('start: ' + event.url); });
        	 //ref.addEventListener('loadstop', function(event) { console.log('stop: ' + event.url); });
			 ref.addEventListener('loaderror', function(event) { console.log('error: ' + event.message); });
         
			
			
         

}
/*
#####################################
####	/ MODULES	#################
#####################################
*/


/*
#####################################
####	PURCHASE PRODUCTS	#########
#####################################
*/
$(document).on('pagebeforeshow', '#pgPurchaseProducts', function(){
					
		var modeValue = window.localStorage.getItem("mode");
		var value = window.localStorage.getItem("userid");
		//alert(modeValue);
		//alert(value);
		
	$.ajax({url: "http://qhse-riskapplications.com/m/purchase_products.php?uid=" + value,
		dataType: "json",
		jsonpCallback: 'successCallback',
		async: true,
		beforeSend: function() {
			$.mobile.showPageLoadingMsg(true);
		},
		complete: function() {
			$.mobile.hidePageLoadingMsg();
		},
		success: showPurchaseProducts,
		error: function (request,error) {
			alert('Network error has occurred please try again!');
		}
	});
	
	function showPurchaseProducts(result) {
		
		var objPurchaseProduct = jQuery.parseJSON(JSON.stringify(result));
		
		//	check if no data return
		if (objPurchaseProduct.length == 0) {
			alert("No product associated with the selected project");
			$.mobile.changePage("#pgWelcome", {transition: "slideup"});
		} else {
			
			
			$("#purchaseProjectlist").empty();
			$.each(objPurchaseProduct, function(i, values) {
				
				var htmlContent = '';						
					if(objPurchaseProduct[i].category_name !=''){
							htmlContent = htmlContent + '<li data-role="list-divider" style="white-space:normal">' + objPurchaseProduct[i].category_name + '</li>';		
						}			
				
			
				htmlContent = htmlContent + '<li data-role="fieldcontain" style="white-space:normal">';
					
					//htmlContent = htmlContent + '<a  onclick="callPaypal()" href="#?product_id=' + objPurchaseProduct[i].product_id + '&project_id=' + objPurchaseProduct[i].project_id + '&price=' + objPurchaseProduct[i].product_price + '&form_id=' + objPurchaseProduct[i].product_form_id + '">';						
						htmlContent = htmlContent + '<a  onclick="callPaypal(\''+ objPurchaseProduct[i].product_name + '\',\''+ objPurchaseProduct[i].product_price + '\',\''+ objPurchaseProduct[i].product_form_id + '\',\''+ objPurchaseProduct[i].project_id + '\')"><h2>';
						
					
						//htmlContent = htmlContent + '<a  onclick="callPaypal(5,"My Product","USD","AV5QiRDedW59PSa86dZXuiQ9MWb2hIl5ieB_taqfFVTOIvf5yblQle4k3hvQ","mwnt.test10-facilitator@gmail.com")" >';
	
						
						
						//htmlContent = htmlContent + objModules[i].sub_module_name + ' :: ' + objModules[i].form_name;
						htmlContent = htmlContent + objPurchaseProduct[i].product_name;
						htmlContent = htmlContent + '</h2><p><img src="img/buy.png"/></p></a>';
					
							
				htmlContent = htmlContent + '</li>';
				
			
				$("#purchaseProjectlist").append(htmlContent);	
										
			});
				
			$("#purchaseProjectlist").listview("refresh");
		}
	}		
});

function displayPDF(execURL){
	window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onRequestFileSystemSuccess, null); 

			function onRequestFileSystemSuccess(fileSystem) { 
			        
			        var entry=fileSystem.root; 
			        
			        entry.getDirectory("qhse", {create: true, exclusive: false}, onGetDirectorySuccess, onGetDirectoryFail); 
			} 
			
			function onGetDirectorySuccess(dir) { 
			     // alert("Created dir "+dir.name); 
			} 
			
			function onGetDirectoryFail(error) { 
			     //alert("Error creating directory "+error.code); 
			}
			var ref = window.open(execURL, '_system', 'location=yes');
        	 //ref.addEventListener('loadstart', function(event) { console.log('start: ' + event.url); });
        	 //ref.addEventListener('loadstop', function(event) { console.log('stop: ' + event.url); });
			 ref.addEventListener('loaderror', function(event) { console.log('error: ' + event.message); });
         
			
			
         

}
/*
#####################################
####	/ MODULES	#################
#####################################
*/



/*
#####################################
####   INPROGRESS / COMPLETED	#####
#####################################
*/
$(document).on('pagebeforeshow', '#pgInprogressAndCompleted', function(){
		window.localStorage.setItem("moduleId", strModuleId);
		var module_id = window.localStorage.getItem("moduleId");
		var modeValue = window.localStorage.getItem("mode");
		var value = window.localStorage.getItem("userid");
		//alert(modeValue);
		//alert(value);
		
	$.ajax({url: "http://qhse-riskapplications.com/m/inprogressCompleted.php?pid=" + strProjectId + "&mode=" + modeValue + "&uid=" + value + "&mid=" + module_id,
		dataType: "json",
		jsonpCallback: 'successCallback',
		async: true,
		beforeSend: function() {
			$.mobile.showPageLoadingMsg(true);
		},
		complete: function() {
			$.mobile.hidePageLoadingMsg();
		},
		success: showModules,
		error: function (request,error) {
			alert('Network error has occurred please try again!');
		}
	});
	
	function showModules(result) {
	$("#uiInprogressAndCompleted").empty();
		var objModules = jQuery.parseJSON(JSON.stringify(result));
		
		//	check if no data return
		if (objModules.length == 0) {
			alert("No product associated with the selected project");
			$.mobile.changePage("#pgProjects", {transition: "slideup"});
		} else {
			//alert(objModules.length);
			$("#modulelist").empty();
			$.each(objModules, function(i, values) {
										
				if(i=='0'){
					$("#headingInprogressCompleted").empty();
					$("#headingInprogressCompleted").append(objModules[i].moduleName);
					}						
				else{
				
					if(modeValue=='published'){
					var htmlContent = '<li>';
					htmlContent = htmlContent + '<a href="#" onclick="displayPDF(\'http://qhse-riskapplications.com/generate_pdf/'+ objModules[i].pdfPage +'?pid='+ objModules[i].project_id +'&fid='+ objModules[i].form_id +'&did='+ objModules[i].did +'\')"><p> Initial Date : ' + objModules[i].timestamp +'</p><p> Published Date : '+objModules[i].completedTimestamp +'</p></a><a href="#" data-icon="delete" onclick="deleteProductInfo(' + objModules[i].project_id + ',' + objModules[i].form_id + ',' + objModules[i].did + ')">Some Text</a></li>';
					}
					else{
						var htmlContent = '<li data-theme="b"><a href="#">' + objModules[i].timestamp + '</a><a href="#" data-icon="delete" onclick="deleteProductInfo(' + objModules[i].project_id + ',' + objModules[i].form_id + ',' + objModules[i].did + ')">Some Text</a></li>';
						htmlContent = htmlContent + '<li data-role="fieldcontain" style="white-space:normal" ><a href="#pgSection?mid=' + objModules[i].module_id +'&pid=' + objModules[i].project_id + '&fid=' + objModules[i].form_id + '&did=' + objModules[i].did + '">';
						htmlContent = htmlContent + 'Inprogress' ;
						htmlContent = htmlContent + '</a></li>';
						htmlContent = htmlContent + '<li data-role="fieldcontain" style="white-space:normal"><a href="#" onclick="displayPDF(\'http://qhse-riskapplications.com/generate_pdf/'+ objModules[i].pdfPage +'?pid='+ objModules[i].project_id +'&fid='+ objModules[i].form_id +'&did='+ objModules[i].did +'\')">Current Risk Score</a></li>';
						
						
					}
					
						
					
					
							
				
				
				$("#uiInprogressAndCompleted").append(htmlContent);		
										}
			});
				
			$("#uiInprogressAndCompleted").listview("refresh");
		}
	}		
});


function deleteProject(pid){

		navigator.notification.confirm(
            'Do you realy want to delete ?', // message
              function(Button){
              
        		confirmDeleteProject(Button,pid);
              
              } ,            // callback to invoke with index of button pressed
            'Confirm',           // title
            'Yes,No'         // buttonLabels
        );
}

function confirmDeleteProject(Button,pid){

	if(Button == 1){
	 
	 var modeValue = window.localStorage.getItem("mode");
	 var value = window.localStorage.getItem("userid");
	 
	$.ajax({url: "http://qhse-riskapplications.com/m/deleteProject.php?uid=" + value + "&mode=" + modeValue + "&pid=" + pid,
		//dataType: "json",
		cache: false,
		//jsonpCallback:'successCallback',
	//	async: true,
		beforeSend: function() {
                    $.mobile.showPageLoadingMsg(true);
                },
                complete: function() {
                    
                },
		success: showProjectlist,
		error: function (request,error) {
			alert('Network error has occurred please try again!');
		}
	});
	
	function showProjectlist(result) {
	 
	 var modeValue = window.localStorage.getItem("mode");
	 var value = window.localStorage.getItem("userid");
	 
	$.ajax({url: "http://www.qhse-riskapplications.com/m/show_projects.php?uid=" + value + "&mode=" + modeValue,
		dataType: "json",
		cache: false,
		jsonpCallback:'successCallback',
		async: true,
		beforeSend: function() {
                    $.mobile.showPageLoadingMsg(true);
                },
                complete: function() {
                    $.mobile.hidePageLoadingMsg();
                },
		success: showProjects,
		error: function (request,error) {
			alert('Network error has occurred please try again!');
		}
	});
	
	function showProjects(result) {
		var results = jQuery.parseJSON(JSON.stringify(result));
		$("#projectlist").empty();
		$.each(results, function(i, values){
			$("#projectlist").append('<li><a href="#pgModules?id=' + values.project_id + '"><h2>' + values.title + '</h2><p>' + values.location + '</p><p>' + values.project_registered + '</p></a><a href="#" data-icon="delete" onclick="deleteProject(' + values.project_id + ')">Some Text</a></li>');
		
		});
					
		$('#projectlist').listview('refresh');

	}		

}		

	}

}


function deleteProductInfo(pid,fid,did){

		navigator.notification.confirm(
            'Do you realy want to delete ?', // message
              function(Button){
              
        		confirmDeleteProductInfo(Button,pid,fid,did);
              
              } ,            // callback to invoke with index of button pressed
            'Confirm',           // title
            'Yes,No'         // buttonLabels
        );
		
		
		
	

}


function confirmDeleteProductInfo(Button,pid,fid,did){

		if(Button == 1){
		var module_id = window.localStorage.getItem("moduleId");
		var modeValue = window.localStorage.getItem("mode");
		var value = window.localStorage.getItem("userid");

		$.ajax({url: "http://qhse-riskapplications.com/m/deleteProductRecods.php?pid=" + pid + "&mode=" + modeValue + "&uid=" + value + "&mid=" + module_id + "&fid=" + fid + "&did=" + did,
		dataType: "json",
		jsonpCallback: 'successCallback',
		async: true,
		beforeSend: function() {
			$.mobile.showPageLoadingMsg(true);
		},
		complete: function() {
			$.mobile.hidePageLoadingMsg();
		},
		success: function(result) {
	$("#uiInprogressAndCompleted").empty();
		var objModules = jQuery.parseJSON(JSON.stringify(result));
		
		//	check if no data return
		if (objModules.length == 0) {
			alert("No product associated with the selected project");
			$.mobile.changePage("#pgProjects", {transition: "slideup"});
		} else {
			//alert(objModules.length);
			$("#modulelist").empty();
			$.each(objModules, function(i, values) {
										
				if(i=='0'){
					$("#headingInprogressCompleted").empty();
					$("#headingInprogressCompleted").append(objModules[i].moduleName);
					}						
				else{
				
					if(modeValue=='published'){
					var htmlContent = '<li data-role="fieldcontain" style="white-space:normal">';
					htmlContent = htmlContent + '<a href="#" onclick="displayPDF(\'http://qhse-riskapplications.com/generate_pdf/'+ objModules[i].pdfPage +'?pid='+ objModules[i].project_id +'&fid='+ objModules[i].form_id +'&did='+ objModules[i].did +'\')"><p> Initial Date : ' + objModules[i].timestamp +'</p><p> Published Date : '+objModules[i].completedTimestamp +'</p></a></li>';
					}
					else{
						var htmlContent = '<li data-theme="b"><a href="#">' + objModules[i].timestamp + '</a><a href="#" data-icon="delete" onclick="deleteProductInfo(' + objModules[i].project_id + ',' + objModules[i].form_id + ',' + objModules[i].did + ')">Some Text</a></li>';
						htmlContent = htmlContent + '<li data-role="fieldcontain" style="white-space:normal" ><a href="#pgSection?mid=' + objModules[i].module_id +'&pid=' + objModules[i].project_id + '&fid=' + objModules[i].form_id + '&did=' + objModules[i].did + '">';
						htmlContent = htmlContent + 'Inprogress' ;
						htmlContent = htmlContent + '</a></li>';
						htmlContent = htmlContent + '<li data-role="fieldcontain" style="white-space:normal"><a href="#" onclick="displayPDF(\'http://qhse-riskapplications.com/generate_pdf/'+ objModules[i].pdfPage +'?pid='+ objModules[i].project_id +'&fid='+ objModules[i].form_id +'&did='+ objModules[i].did +'\')">Current Risk Score</a></li>';
						
						
					}
					
						
					
					
							
				
				
				$("#uiInprogressAndCompleted").append(htmlContent);		
										}
			});
				
			$("#uiInprogressAndCompleted").listview("refresh");
		}
	}	,
		error: function (request,error) {
			alert('Network error has occurred please try again!');
		}
	});

	}
}


function displayPDF(execURL){
	window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onRequestFileSystemSuccess, null); 

			function onRequestFileSystemSuccess(fileSystem) { 
			        
			        var entry=fileSystem.root; 
			        
			        entry.getDirectory("qhse", {create: true, exclusive: false}, onGetDirectorySuccess, onGetDirectoryFail); 
			} 
			
			function onGetDirectorySuccess(dir) { 
			     // alert("Created dir "+dir.name); 
			} 
			
			function onGetDirectoryFail(error) { 
			     //alert("Error creating directory "+error.code); 
			}
			var ref = window.open(execURL, '_system', 'location=yes');
        	 //ref.addEventListener('loadstart', function(event) { console.log('start: ' + event.url); });
        	 //ref.addEventListener('loadstop', function(event) { console.log('stop: ' + event.url); });
			 ref.addEventListener('loaderror', function(event) { console.log('error: ' + event.message); });
         
			
			/*
			var fileTransfer = new FileTransfer();
			fileTransfer.download(
			execURL,'file://sdcard/qhse/OHSAS_18001_2007_audit_checklist.pdf',
			function(entry) {
			    alert("download complete: " + entry.fullPath);
			},
			function(error) {
			    alert("download error source " + error.source);
			    alert("download error target " + error.target);
			    alert("upload error code" + error.code);
			});
			
			
			var reader = new FileReader();
			var fileSource = "file://sdcard/qhse/"+strFileName;
			
			reader.onloadend = function(evt) {
			
			    if(evt.target.result == null) {
			       // If you receive a null value the file doesn't exists
			    } else {
			        // Otherwise the file exists
			    }         
			};
			
			// We are going to check if the file exists
			reader.readAsDataURL(fileSource);   */
         

}



/*
#####################################
#### / INPROGRESS / COMPLETED #######
#####################################
*/



/*
#####################################
####	/ SECTION	#################
#####################################
*/
$(document).on('pagebeforeshow', '#pgSection', function(){
	//alert("http://projects.corewebconnections.com/audit/m/show_sections.php?mid=" + strModuleId);
	
	var modeValue = window.localStorage.getItem("mode");
	window.localStorage.setItem("moduleId", strModuleId);
	window.localStorage.setItem("detailId", strDetailId);
	
	$.ajax({url: "http://www.qhse-riskapplications.com/m/show_sections.php?mid=" + strModuleId + "&pid=" + strProjectFormId + "&fid=" + strFormId + "&mode=" + modeValue,
		dataType: "json",
		jsonpCallback: 'successCallback',
		async: true,
		beforeSend: function() {
			$.mobile.showPageLoadingMsg(true);
		},
		complete: function() {
			$.mobile.hidePageLoadingMsg();
		},
		success: showSections,
		error: function (request,error) {
			alert('Network error has occurred please try again!');
		}
	});
	
	function showSections(result) {
			
			var modeValue = window.localStorage.getItem("mode");
			if(modeValue=='import'){
			alert("Product is Added Successfully");
			$.mobile.changePage( "#pgWelcome", { transition: "slideup", changeHash: false });
			}
			else{
			//alert(JSON.stringify(result));
			var objSections = jQuery.parseJSON(JSON.stringify(result));
			//alert(objQuestion.length);
			$("#uiSection").empty();
			$.each(objSections, function(i, values) {
				if(i=='0'){
					$("#headingSections").empty();
					$("#headingSections").append(objSections[i].moduleName);
					}						
				else{
				//$("#uiAudit_Risk_Profiling").append('<li data-role="list-divider">' + objQuestion[i].section_title + ' [' + objQuestion[i].element + ']</li>');
				
				var htmlContent = '<li data-role="fieldcontain" style="white-space:normal">';
					
					htmlContent = htmlContent + '<a href="#pgAudit_Risk_Profiling?section_id=' + objSections[i].section_id + '">';
					
					if(objSections[i].section_element == 0)	//	hide element part if section title is zero
						htmlContent = htmlContent + objSections[i].section_title;
					else
						htmlContent = htmlContent + '<strong>' + objSections[i].section_element + '.</strong> ' + objSections[i].section_title;
					htmlContent = htmlContent + '</a>';
						
				htmlContent = htmlContent + '</li>';
				
				$("#uiSection").append(htmlContent);			
										 }
			});
			
			$("#uiSection").listview("refresh");
	}	
	}
	
});



/*
#####################################
####	/ SECTION	#################
#####################################
*/
	
	
/*
#################################################################
####	TMSA :: AUDIT AND RISK PROFILING FORM	#################
#################################################################
*/

//$(".score").on('click', function(){
$(document).on('click', '.score', function() {
	
			//$(".score").on('click',function(){
			
			var id=$(this).attr('id');
			
			var val=$(this).val();
			
			var gapArr = id.split('b');
			
			var qid = gapArr[1].split('_');
			
			var selectedVal=0;
			if(val==1){
				selectedVal=3;
			}
			else if(val==2){
				selectedVal=2;
			}
			else if(val==3){
				selectedVal=1;
			}
			
			
			if(gapArr[0]=='cm'){
				var another="#ccmb" + qid[0] + "_" + selectedVal;
				
			}
			else{
				var another="#cmb" + qid[0] + "_" + selectedVal;
			}
			
			//alert(another);
			
			
			$(another).attr("checked","checked") ;
	//	});
});

$(document).on('pagebeforeshow', '#pgAudit_Risk_Profiling', function(){
	//	strSectionId is coming from the router funtionc at the begining of this .js file
	 var uid=window.localStorage.getItem("userid");
	 var intModuleId = window.localStorage.getItem("moduleId");
	 var intDetailId = window.localStorage.getItem("detailId");
	 $.ajax({url: "http://qhse-riskapplications.com/m/get_questions.php?section_id=" + strSectionId + "&userid=" + uid + "&projectid=" + strProjectId + "&moduleid=" + intModuleId + "&did=" +intDetailId,
		dataType: "json",
		jsonpCallback: 'successCallback',
		async: true,
		beforeSend: function() {
			$.mobile.showPageLoadingMsg(true);
		},
		complete: function() {
			$.mobile.hidePageLoadingMsg();
		},
		success: getQuestions,
		error: function (request,error) {
			alert('Network error has occurred please try again!');
		}
			
	});
	
	function getQuestions(result) {
		
			//alert(JSON.stringify(result));
			var objQuestion = jQuery.parseJSON(JSON.stringify(result));
			$("#uiAudit_Risk_Profiling").empty();
			
			$.each(objQuestion, function(i, values) {
				//alert(objQuestion[i].question);
				if (objQuestion[i].section_title != '0') {
					if(objQuestion[i].section_id!=212 && objQuestion[i].section_id!=213 && objQuestion[i].section_id!=73 && objQuestion[i].section_id!=214 && objQuestion[i].section_id!=0 && objQuestion[i].section_id!=241 && objQuestion[i].section_id!=264 && objQuestion[i].section_id!=265){									
						$("#uiAudit_Risk_Profiling").append('<li data-role="list-divider">' + objQuestion[i].section_title + ' [' + objQuestion[i].section_id + ']</li>');
					}
					else if(objQuestion[i].section_id==212 || objQuestion[i].section_id==73 || objQuestion[i].section_id==0 || objQuestion[i].section_id==241 || objQuestion[i].section_id==264){
						$("#uiAudit_Risk_Profiling").append('<li data-role="list-divider">' + objQuestion[i].section_title + '</li>');
					}
					else if(objQuestion[i].section_id==213 || objQuestion[i].section_id==214 || objQuestion[i].section_id==265){
						$("#uiAudit_Risk_Profiling").append('<li data-role="list-divider">Corrective & Preventive Action Table</li>');
					}
				}
				
				var htmlContent = '<li data-role="fieldcontain">';
						if (objQuestion[i].stage != "" ) {	//	if stage is empty, do not show them on devices
							if(objQuestion[i].section_id!=212 && objQuestion[i].section_id!=213 && objQuestion[i].section_id!=73 && objQuestion[i].section_id!=214 && objQuestion[i].section_id!=0 && objQuestion[i].section_id!=264 && objQuestion[i].section_id!=241 && objQuestion[i].section_id!=265){
							htmlContent = htmlContent + '<h3>' + objQuestion[i].element + '.' + objQuestion[i].stage + '.' + objQuestion[i].sub_stage + '</h3>';
						}}
						htmlContent = htmlContent + '<p style="white-space:normal">' + objQuestion[i].question + '</p>';
						
						//if (objQuestion[i].guidance != "") {
						//	htmlContent = htmlContent + '<p style="white-space:normal"><br /><strong>Best Practice Guidance:</strong><br />' + objQuestion[i].guidance + '</p>';
						//}
						
						
						if(objQuestion[i].section_id==212 || objQuestion[i].section_id==213 || objQuestion[i].section_id==214 || objQuestion[i].section_id==73 || objQuestion[i].section_id==0 || objQuestion[i].section_id==241 || objQuestion[i].section_id==264 || objQuestion[i].section_id==265){
												
						}
						else if((objQuestion[i].section_id>=187 && objQuestion[i].section_id<=211) || objQuestion[i].section_id>=216){
						
							var status1='';
							var status2='';
							var status3='';
							var cret1='';
							var cret2='';
							var cret3='';
							switch (objQuestion[i].project_drop_down_value_id) {
                    			case '2':
                       			status2='checked="checked"';
                       			cret2='checked="checked"';
                        		break;
                    			case '3':
               					status3='checked="checked"';
               					cret1='checked="checked"';
                        		break;                       		
                    			default:
                    			status1='checked="checked"';
               					cret3='checked="checked"';
                    			break;
                        	}
						
							htmlContent = htmlContent + '<fieldset data-role="controlgroup" data-mini="true">';
							htmlContent = htmlContent + '<label for="cmb' + objQuestion[i].question_id + '" class="white-space:normal">Status: </label> <br />';
							htmlContent = htmlContent + '<input type="radio" class="score" name="scores[' + i +']" id="cmb' + objQuestion[i].question_id + '_1" value="1" ' + status1 + '>';
							htmlContent = htmlContent + '<label for="cmb' + objQuestion[i].question_id + '">Not at all / Not known</label> <br />';
							htmlContent = htmlContent + '<input type="radio" class="score" name="scores[' + i + ']" id="cmb' + objQuestion[i].question_id + '_2" value="2" ' + status2 + '>';
							htmlContent = htmlContent + '<label for="cmb' + objQuestion[i].question_id + '">Partially</label> <br />';
							htmlContent = htmlContent + '<input type="radio" class="score" name="scores[' + i +']" id="cmb' + objQuestion[i].question_id + '_3" value="3" ' + status3 + '>';
							htmlContent = htmlContent + '<label for="cmb' + objQuestion[i].question_id + '">Fully</label>';
							
						htmlContent = htmlContent + '</fieldset><br/>';
						
						
						htmlContent = htmlContent + '<fieldset data-role="controlgroup" data-mini="true">';
							htmlContent = htmlContent + '<label for="cmb' + objQuestion[i].question_id + '" class="white-space:normal">Gap Criteria: </label> <br />';
							htmlContent = htmlContent + '<input type="radio" class="score" name="Criteria[' + i + ']" id="ccmb' + objQuestion[i].question_id + '_1" value="1" ' + cret1 + '>';
							htmlContent = htmlContent + '<label for="cmb' + objQuestion[i].question_id + '">No Gap</label> <br />';
							htmlContent = htmlContent + '<input type="radio" class="score" name="Criteria[' + i + ']" id="ccmb' + objQuestion[i].question_id + '_2" value="2" ' + cret2 + '>';
							htmlContent = htmlContent + '<label for="cmb' + objQuestion[i].question_id + '">Criteria partially available</label> <br />';
							htmlContent = htmlContent + '<input type="radio" class="score" name="Criteria[' + i + ']" id="ccmb' + objQuestion[i].question_id + '_3" value="3" ' + cret3 + '>';
							htmlContent = htmlContent + '<label for="cmb' + objQuestion[i].question_id + '">Criteria missing / Not available </label>';
							
						htmlContent = htmlContent + '</fieldset>';
												
						}
						else{
							
							var radio1='';
							var radio2='';
							var radio3='';
							var radio4='';
							switch (objQuestion[i].project_drop_down_value_id) {
                    			case '2':
                       			radio2='checked="checked"';
                       			break;
                    			case '3':
               					radio3='checked="checked"';
               					break;
								case '4':
               					radio4='checked="checked"';
               					break;
                    			default:
                    			radio1='checked="checked"';
               					break;
                        	}
							
							
							htmlContent = htmlContent + '<fieldset data-role="controlgroup" data-mini="true">';
							htmlContent = htmlContent + '<label for="cmb' + objQuestion[i].question_id + '" class="white-space:normal">Score: </label> <br />';
							htmlContent = htmlContent + '<input type="radio" name="scores[' + i +']" id="cmb' + objQuestion[i].question_id + '" value="1" ' + radio1 + '>';
							htmlContent = htmlContent + '<label for="cmb' + objQuestion[i].question_id + '">Not Applicable</label> <br />';
							htmlContent = htmlContent + '<input type="radio" name="scores[' + i +']" id="cmb' + objQuestion[i].question_id + '" value="2" ' + radio2 + '>';
							htmlContent = htmlContent + '<label for="cmb' + objQuestion[i].question_id + '">Non Compliant</label> <br />';
							htmlContent = htmlContent + '<input type="radio" name="scores[' + i +']" id="cmb' + objQuestion[i].question_id + '" value="3" ' + radio3 + '>';
							htmlContent = htmlContent + '<label for="cmb' + objQuestion[i].question_id + '">Partially Compliant</label> <br />';
							htmlContent = htmlContent + '<input type="radio" name="scores[' + i +']" id="cmb' + objQuestion[i].question_id + '" value="4" ' + radio4 + '>';
							htmlContent = htmlContent + '<label for="cmb' + objQuestion[i].question_id + '">Fully Compliant</label>';
						htmlContent = htmlContent + '</fieldset>';
						
						}
						
						
						
						htmlContent = htmlContent + '<div data-role="fieldcontain">';
						//htmlContent = htmlContent + '<label for="txt' + objQuestion[i].question_id + '">Comments:</label>';
						htmlContent = htmlContent + '<textarea cols="30" rows="4" name="comments[]" id="txt' + objQuestion[i].question_id + '">' + objQuestion[i].comment + '</textarea>';
						
						if(objQuestion[i].section_id!=212 && objQuestion[i].section_id!=213 && objQuestion[i].section_id!=73 && objQuestion[i].section_id!=214 && objQuestion[i].section_id!=241 && objQuestion[i].section_id!=264 && objQuestion[i].section_id!=265 && objQuestion[i].section_id!=0){
						//htmlContent = htmlContent + '<div class="file_browse_wrapper" id="pop'+ objQuestion[i].question_id +'" data-rel="popup" onclick="selectSrc(' + objQuestion[i].question_id + ',' + objQuestion[i].detail_id + ',' + objQuestion[i].form_id +')"></div>';	
						htmlContent = htmlContent + '<div class="file_browse_wrapper" onclick="selectSrc('+ objQuestion[i].question_id +','+ objQuestion[i].detail_id +','+ objQuestion[i].form_id +')" data-rel="popup"></div>';
						htmlContent = htmlContent + '</div> <span id="uploadStatus'+ objQuestion[i].question_id +'"></span>';
						
						htmlContent = htmlContent + '<div data-role="popup" id="pop'+ objQuestion[i].question_id +'"></div>';
						
						if(objQuestion[i].media !=null && objQuestion[i].media !=''){
						
						htmlContent = htmlContent + '<a href="#" data-role="button" data-mini="true" onclick="window.open(\'http://qhse-riskapplications.com/wp-content/themes/twentytwelve/uploads/' + objQuestion[i].imgUploadFolder + '/' + objQuestion[i].detail_id + '/' + objQuestion[i].media + '\',\'_system\',\'location=yes\')">View Evidence</a>';
						
						}
						}
						
						htmlContent = htmlContent + '<input type="hidden" name="questionIds[]" value="' + objQuestion[i].question_id + '">';
						htmlContent = htmlContent + '<input type="hidden" name="section_id" value="' + strSectionId + '">';
						htmlContent = htmlContent + '<input type="hidden" name="project_id" value="' + strProjectId + '">';
						htmlContent = htmlContent + '<input type="hidden" name="user_id" value="' + intUserId + '">';
						
				htmlContent = htmlContent + '</li>';
				
				$("#uiAudit_Risk_Profiling").append(htmlContent);	
									
			});
			
			

			$("#uiAudit_Risk_Profiling").listview("refresh");
			//$("#project_content").content("refresh");
			
		
			
			//alert(strSectionId);
			//htmlContent = htmlContent + '<input type="hidden" name="section_id" value="' + strSectionId + '">';
							
	}

	
	
	/*
	 function getPicture(did,media)
            {
            
            window.open("http://qhse-riskapplications.com/wp-content/themes/twentytwelve/uploads/iso_14001_2004_audit_checklist/" + did + "/" + media ,'_blank' , 'location=yes');
            
            }
	 
      */ 


	


	$("#btnTMSASubmit").off().on('click',function(e){
	   //alert(flag);
	 	e.preventDefault();
		
		var d = new Date();
			var Y = d.getFullYear();
			var m = d.getMonth()+1;
			var dy = d.getDate();
			var H = d.getHours();
			var i = d.getMinutes();
			var s = d.getSeconds();
			if(m<=9){
				m = '0' + m ;
			}
			if(dy<=9){
				dy = '0' + dy ;
			}
			if(H<=9){
				H = '0' + H ;
			}
			if(i<=9){
				i = '0' + i ;
			}
			if(s<=9){
				s = '0' + s ;
			}
			var curTime = Y +'-'+ m +'-'+ dy +' '+ H +':'+i+':'+s;
			
       var intModuleId = window.localStorage.getItem("moduleId");
       var varMode = window.localStorage.getItem("mode");
       var intDetailId = window.localStorage.getItem("detailId");
       
	   var formData = $("#frmTMSASubmit").serialize();
	   			
		$.ajax({
			type: "post",
			url: "http://qhse-riskapplications.com/m/save_questions_answers.php?is_publish=0&moduleid="+intModuleId + "&mode=" + varMode + "&did=" +intDetailId + "&currentTime=" + curTime,
			cache: false,
			dataType: "text",
			async: true,
			data: formData,
			beforeSend: function() {
				$.mobile.showPageLoadingMsg(true);
			},
			complete: function() {
				$.mobile.hidePageLoadingMsg();
			},
			success: function (data) {
				var modeValue = window.localStorage.getItem("mode");
				alert("Added sucessfully and product will be visible in inprogress products.");
				if(modeValue=='new'){
				$.mobile.changePage( "#pgWelcome", { transition: "slideup", changeHash: false });
				}
				else{
				$.mobile.changePage( "#pgSection", { transition: "slideup", changeHash: false });
				}
				
			},
			error: function (request,error) {
                        // This callback function will trigger on unsuccessful action 
						//alert(request + " - " + error);
						alert("Submit Again.");               
                        //alert('Network error has occurred please try again!');
						
                    }
		});
	   
	 
       
		return false;
	});
	$("#btnTMSASPSubmit").off().on('click', function(e){
	
	
		  e.preventDefault();
		
		 navigator.notification.confirm(
            'You would not be able to edit this form. Do you wish to publish the form now?', // message
              onConfirm ,            // callback to invoke with index of button pressed
            'Save and Publish',           // title
            'Yes,No'         // buttonLabels
        );
		 
		 
        
	   //alert(flag);
	 
     
	});
	
	function onConfirm(button){

		var d = new Date();
			var Y = d.getFullYear();
			var m = d.getMonth()+1;
			var dy = d.getDate();
			var H = d.getHours();
			var i = d.getMinutes();
			var s = d.getSeconds();
			if(m<=9){
				m = '0' + m ;
			}
			if(dy<=9){
				dy = '0' + dy ;
			}
			if(H<=9){
				H = '0' + H ;
			}
			if(i<=9){
				i = '0' + i ;
			}
			if(s<=9){
				s = '0' + s ;
			}
			var curTime = Y +'-'+ m +'-'+ dy +' '+ H +':'+i+':'+s;	

		if (button == 1) {
		
               var intModuleId = window.localStorage.getItem("moduleId");
       var varMode = window.localStorage.getItem("mode");
       var intDetailId = window.localStorage.getItem("detailId");
	   var formData = $("#frmTMSASubmit").serialize();
	  $.ajax({
			type: "post",
			url: "http://qhse-riskapplications.com/m/save_questions_answers.php?is_publish=1&moduleid="+intModuleId + "&mode=" + varMode + "&did=" +intDetailId + "&currentTime=" + curTime,
			cache: false,
			dataType: "text",
			async: true,
			data: formData,
			beforeSend: function() {
				$.mobile.showPageLoadingMsg(true);
			},
			complete: function() {
				$.mobile.hidePageLoadingMsg();
			},
			success: function (data) {
				alert("Added sucessfully and product will be visible in completed products.");
				$.mobile.changePage( "#pgWelcome", { transition: "slideup", changeHash: false });
			},
			error: function (request,error) {
                        // This callback function will trigger on unsuccessful action 
						//alert(request + " - " + error);
						alert("Submit Again.");               
                        //alert('Network error has occurred please try again!');
						
                    }
		});
	   
	   
       
		return false;
             
		}
		else{
			return false;
			}
			 }
	
	// #################
	    /*$(document).on('click', '#submit', function() { // catch the form's submit event
        if($('#username').val().length > 0 && $('#password').val().length > 0){
            // Send data to server through ajax call
            // action is functionality we want to call and outputJSON is our data
                $.ajax({url: 'check.php',
                    data: {action : 'login', formData : $('#check-user').serialize()}, // Convert a form to a JSON string representation
                        type: 'post',                   
                    async: true,
                    beforeSend: function() {
                        // This callback function will trigger before data is sent
                        $.mobile.showPageLoadingMsg(true); // This will show ajax spinner
                    },
                    complete: function() {
                        // This callback function will trigger on data sent/received complete
                        $.mobile.hidePageLoadingMsg(); // This will hide ajax spinner
                    },
                    success: function (result) {
                            resultObject.formSubmitionResult = result;
                                        $.mobile.changePage("#second");
                    },
                    error: function (request,error) {
                        // This callback function will trigger on unsuccessful action                
                        alert('Network error has occurred please try again!');
                    }
                });                   
        } else {
            alert('Please fill all nececery fields');
        }           
            return false; // cancel original event to prevent form submitting
        });    
});*/
/*
$(document).on('pagebeforeshow', '#second', function(){     
    $('#second [data-role="content"]').append('This is a result of form submition: ' + resultObject.formSubmitionResult);  
});

var resultObject = {
    formSubmitionResult : null  
}*/

// #################
	
	function onTMSAFormSubmit(data) {
		if(data.state == 1) {
			$.mobile.changePage("page1", {transition: "slideup"});
		}else {
			$.mobile.changePage("page2", {transition: "pop", role: "dialog"});
		}
	}

});


  

/*
#################################################################
####	/ TMSA :: AUDIT AND RISK PROFILING FORM	#################
#################################################################
*/

/*
#################################################################
####              Register Your Company              ############
#################################################################
*/

$(document).on('click','#btnRegister',function(e){
		//alert("Form Data ");	
		var formData = $("#frmRegister").serialize();
		
			
        var uid = window.localStorage.getItem("userid");
	   			
		//alert(uid);		
		$.ajax({
			type: "post",
			url: "http://qhse-riskapplications.com/m/registerCompany.php?uid=" + uid,
			cache: false,
			dataType: "text",
			async: true,
			data: formData,
			beforeSend: function() {
				$.mobile.showPageLoadingMsg(true);
			},
			complete: function() {
				$.mobile.hidePageLoadingMsg();
			},
			success: function (data) {
				alert("Company Registered Successfully.");
				
			},
			error: function (request,error) {
                        // This callback function will trigger on unsuccessful action 
						//alert(request + " - " + error);
						alert("Submit Again.");               
                        //alert('Network error has occurred please try again!');
						
                    }
		});
	   
		return false;
	
		
	});
	
/*
#################################################################
####            / Register Your Company              ############
#################################################################
*/
	