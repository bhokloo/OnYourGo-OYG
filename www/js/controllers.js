angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  $scope.loginData = {};
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  $scope.login = function() {
    $scope.modal.show();
  };


  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope,$ionicActionSheet, $timeout) {
 

 
$scope.snap= $scope.tum = $scope.fb = $scope.insta= $scope.twitter= $scope.gplus= $scope.google= $scope.micro= $scope.skpe= $scope.youtube = $scope.what= $scope.break1= $scope.demo= $scope.slide = $scope.lin = true;
$scope.count=1;

 
$scope.goTo = function()
{ 
    alert("");
}

$scope.func = function(i)
{
    if(i == 1)
    {
        if($scope.count == 1)
        {
            $scope.fb = true;            
            $scope.insta= false;
            $scope.twitter= false;
            $scope.gplus= false;
            $scope.google= false;
            $scope.micro= false;
            $scope.skpe= false;
            $scope.youtube= false; 
            $scope.what= false; 
            $scope.break1=false;
            $scope.demo=false;
            $scope.slide = false;
            $scope.lin= false;
            $scope.tum = false;
            $scope.snap = false;
            $scope.count= 2;
            
        }
        else
        {
           
            window.location.reload();
        }
            
    }
    else if(i == 2)
    {
     if($scope.count == 1)
        {
            $scope.fb = false;            
            $scope.insta= true;
            $scope.twitter= false;
            $scope.gplus= false;
            $scope.google= false;
            $scope.micro= false;
            $scope.skpe= false;
            $scope.youtube= false; 
            $scope.what= false; 
            $scope.break1=false;
            $scope.demo=false;
            $scope.slide = false;
            $scope.lin= false;
            $scope.tum = false;
            $scope.snap = false;
            $scope.count= 2;
            
        }
        else
        {
           
            window.location.reload();
        }   
    }
    
     else if(i == 3)
    {
     if($scope.count == 1)
        {
            $scope.fb = false;            
            $scope.insta= false;
            $scope.twitter= true;
            $scope.gplus= false;
            $scope.google= false;
            $scope.micro= false;
            $scope.skpe= false;
            $scope.youtube= false; 
            $scope.what= false; 
            $scope.break1=false;
            $scope.slide = false;
            $scope.demo=false;
            $scope.lin= false;
            $scope.tum = false;
            $scope.snap = false;
            $scope.count= 2;
            
        }
        else
        {
           
            window.location.reload();
        }   
    }
    
     else if(i == 4)
    {
     if($scope.count == 1)
        {
            $scope.fb = false;            
            $scope.insta= false;
            $scope.twitter= false;
            $scope.gplus= true;
            $scope.google= false;
            $scope.micro= false;
            $scope.skpe= false;
            $scope.youtube= false; 
            $scope.what= false;
            $scope.break1=false;
            $scope.demo=false;
            $scope.lin= false;
            $scope.tum = false;
            $scope.slide = false;
            $scope.snap = false;
            $scope.count= 2;
            
        }
        else
        {
           
            window.location.reload();
        }   
    }
    
     else if(i == 5)
    {
     if($scope.count == 1)
        {
            $scope.fb = false;            
            $scope.insta= false;
            $scope.twitter= false;
            $scope.gplus= false;
            $scope.google= false;
            $scope.micro= true;
            $scope.skpe= false;
            $scope.youtube= false; 
            $scope.what= false; 
            $scope.break1=false;
            $scope.demo=false;
            $scope.slide = false;
            $scope.lin= false;
            $scope.tum = false;
            $scope.snap = false;
            $scope.count= 2;
            
        }
        else
        {
           
            window.location.reload();
        }   
    }
    
     else if(i == 6)
    {
     if($scope.count == 1)
        {
            $scope.fb = false;            
            $scope.insta= false;
            $scope.twitter= false;
            $scope.gplus= false;
            $scope.google= false;
            $scope.micro= false;
            $scope.skpe= true;
            $scope.youtube= false; 
            $scope.what= false;
            $scope.break1=false;
            $scope.demo=false;
            $scope.slide = false;
            $scope.lin= false;
            $scope.tum = false;
            $scope.snap = false;
            $scope.count= 2;
            
        }
        else
        {
           
            window.location.reload();
        }   
    }
    
     else if(i == 7)
    {
     if($scope.count == 1)
        {
            $scope.fb = false;            
            $scope.insta= false;
            $scope.twitter= false;
            $scope.gplus= false;
            $scope.google= false;
            $scope.micro= false;
            $scope.skpe= false;
            $scope.youtube= true; 
            $scope.what= false;
            $scope.break1=false;
            $scope.demo=false;
            $scope.slide = false;
            $scope.lin= false;
            $scope.tum = false;
            $scope.snap = false;
            $scope.count= 2;
            
        }
        else
        {
           
            window.location.reload();
        }   
    }
    
     else if(i == 8)
    {
     if($scope.count == 1)
        {
            $scope.fb = false;            
            $scope.insta= false;
            $scope.twitter= false;
            $scope.gplus= false;
            $scope.google= false;
            $scope.micro= false;
            $scope.skpe= false;
            $scope.youtube= false; 
            $scope.what= true;
            $scope.break1=false;
            $scope.demo=false;
            $scope.slide = false;
            $scope.lin= false;
            $scope.tum = false;
            $scope.snap = false;
            $scope.count= 2;
            
        }
        else
        {
           
            window.location.reload();
        }   
    }
     else if(i == 9)
    {
     if($scope.count == 1)
        {
            $scope.fb = false;            
            $scope.insta= false;
            $scope.twitter= false;
            $scope.gplus= false;
            $scope.google= true;
            $scope.micro= false;
            $scope.skpe= false;
            $scope.youtube= false; 
            $scope.what= false;
            $scope.break1=false;
            $scope.demo=false;
            $scope.slide = false;
            $scope.lin= false;
            $scope.tum = false;
            $scope.snap = false;
            $scope.count= 2;
            
        }
        else
        {
           
            window.location.reload();
        }   
    }
    
     else if(i == 11)
    {
     if($scope.count == 1)
        {
            $scope.fb = false;            
            $scope.insta= false;
            $scope.twitter= false;
            $scope.gplus= false;
            $scope.google= false;
            $scope.micro= false;
            $scope.skpe= false;
            $scope.youtube= false; 
            $scope.what= false;
            $scope.break1=false;
            $scope.demo=false;
            $scope.slide = false;
            $scope.lin= false;
            $scope.tum = true;
            $scope.snap = false;
            $scope.count= 2;
            
        }
        else
        {
           
            window.location.reload();
        }   
    }
      else if(i == 12)
    {
     if($scope.count == 1)
        {
            $scope.fb = false;            
            $scope.insta= false;
            $scope.twitter= false;
            $scope.gplus= false;
            $scope.google= false;
            $scope.micro= false;
            $scope.skpe= false;
            $scope.youtube= false; 
            $scope.what= false;
            $scope.break1=false;
            $scope.demo=false;
            $scope.slide = false;
            $scope.lin= false;
            $scope.tum = false;
            $scope.snap = true;
            $scope.count= 2;
            
        }
        else
        {
           
            window.location.reload();
        }   
    }
        
   else
    {
     if($scope.count == 1)
        {
            $scope.fb = false;            
            $scope.insta= false;
            $scope.twitter= false;
            $scope.gplus= false;
            $scope.google= false;
            $scope.micro= false;
            $scope.skpe= false;
            $scope.youtube= false; 
            $scope.what= false;
            $scope.break1=false;
            $scope.demo=false;
            $scope.slide = false;
            $scope.lin= false;
            $scope.tum = false;
            $scope.snap = false;
            $scope.lin= true;
            $scope.count= 2;
            
        }
        else
        {
           
            window.location.reload();
        }   
    }
     
};

function loadStopCallBack() {

    if (inAppBrowserRef !== undefined) {

        inAppBrowserRef.close();
    }

}

 

$scope.openFb = function(i)




{

 function exitCallback() {
            ref.close();
            
           //console.log('Browser is closed...')
       }   
    
    
    
    
  if(i==1)
  {
    alert("To reuse your current @username, change them before deleting this account.");  
    var ref = window.open('https://www.facebook.com/help/delete_account','_blank');  

    ref.addEventListener('exit', exitCallback);
    //    setTimeout(function() {
//             ref.close();
//         }, 5000);
       
   }

   else if(i==2)
   {
       
    var ref = window.open('https://www.facebook.com/deactivate/','_blank');  
    ref.addEventListener('exit', exitCallback);
   
    }
   else if(i==3)
   {
   var ref = window.open('https://www.facebook.com/login/identify','_blank');     
   ref.addEventListener('exit', exitCallback);
   }
   else
   {
   var ref = window.open('https://www.facebook.com/login/identify','_blank');      
   ref.addEventListener('exit', exitCallback);
   }
};


$scope.openInsta = function(i)
{
     function exitCallback() {
            ref.close();
            
           //console.log('Browser is closed...')
       }   
    
    
  if(i==0)
  {
    var ref = window.open('https://www.instagram.com/accounts/edit/?hl=en','_blank');    
    ref.addEventListener('exit', exitCallback);
  }
   else if(i==1)
   {
     alert("To reuse your current @username, change them before deleting this account (Open Account Info).");
    var ref = window.open('https://www.instagram.com/accounts/login/?next=/accounts/remove/request/permanent/','_blank');   
    ref.addEventListener('exit', exitCallback); 
   }
  else if(i==2)
  {
    var ref = window.open('https://www.instagram.com/accounts/remove/request/temporary/?hl=en','_blank');   
ref.addEventListener('exit', exitCallback);
}
  else if(i==3)
  {
    var ref = window.open('https://www.instagram.com/accounts/password/change/?hl=en','_blank');    
ref.addEventListener('exit', exitCallback);
}
  else
  {
    var ref = window.open('https://www.instagram.com/accounts/password/reset/?hl=en','_blank');    
ref.addEventListener('exit', exitCallback);

  }

    
};
$scope.openTwitter = function(i)
{
     function exitCallback() {
            ref.close();
            
           //console.log('Browser is closed...')
       }   
    
    
 if(i==1)
    {
    alert("To reuse your current @username, change them before deleting this account."); 
    var ref = window.open('https://twitter.com/settings/accounts/confirm_deactivation','_blank');   
    ref.addEventListener('exit', exitCallback); 
   }
else if(i==2)
{
    var ref = window.open('https://twitter.com/settings/password?lang=en','_blank');    
ref.addEventListener('exit', exitCallback); 
}
else if(i==3)
{
    var ref = window.open('https://twitter.com/account/begin_password_reset','_blank');    
ref.addEventListener('exit', exitCallback);
}
else if(i==4)
{
    var ref = window.open('https://help.twitter.com/forms/feature_report?feature=messages','_blank');   
ref.addEventListener('exit', exitCallback); 
}
else if(i==6){
    var ref = window.open('https://twitter.com/account/begin_password_reset','_blank');   
ref.addEventListener('exit', exitCallback);
}
else{
    var ref = window.open('https://help.twitter.com/forms/restore','_blank');    
ref.addEventListener('exit', exitCallback); 
}

    
};
$scope.openGp = function(i)
{
     function exitCallback() {
            ref.close();
            
           //console.log('Browser is closed...')
       }   
    
 // Open in app browser
    if(i==1){
    var ref = window.open('https://accounts.google.com/ServiceLogin/signinchooser?service=oz&passive=1209600&continue=https%3A%2F%2Fplus.google.com%2Fdowngrade%3Fgpsrc%3Dgplp0&rart=ANgoxceOuTdVmkB56325L5gaBXYykersANGxogXlgC_DCo_HT5MlWxEDHlAee70hfwRIvK7-ZO_fNvGaPvUYH7lXaejTv06M1A&flowName=GlifWebSignIn&flowEntry=ServiceLogin','_blank');   
ref.addEventListener('exit', exitCallback); 
    }
    else
    {
    alert("Note that this will change your password for all Google services you use, like Gmail, Youtube, Google+,  Blogger, Calendar, and so on.");
    var ref = window.open('https://myaccount.google.com/intro/signinoptions/password','_blank');  
    ref.addEventListener('exit', exitCallback); 
    }
};
$scope.openMs = function()
{
     function exitCallback() {
            ref.close();
            
           //console.log('Browser is closed...')
       }   
    
 if(i==1)
   {
     alert('Your account is linked to other accounts such as Skype, Office Online, Outlook, OneNote, OneDrive, Xbox, and more. Deleting your Microsoft account will delete all the other accounts as well.');
     var ref = window.open('https://account.live.com/closeaccount.aspx','_blank');    
     ref.addEventListener('exit', exitCallback); 
 }
 else if(i==2)
 {
     var ref = window.open('https://account.live.com/password/reset','_blank');   
     ref.addEventListener('exit', exitCallback);
 }
 else if(i==3)
 {
    var ref = window.open('https://account.live.com/ACSR','_blank');    
ref.addEventListener('exit', exitCallback);
}};
$scope.openSk = function(i)
{
    
     function exitCallback() {
            ref.close();
            
           //console.log('Browser is closed...')
       }   
    
   if(i==1)
   {
     alert('If your account is already linked to Microsoft Account, once you delete your Skype account the associated Microsoft account will be deleted as well.');
     var ref = window.open('https://account.live.com/closeaccount.aspx','_blank');   
     ref.addEventListener('exit', exitCallback); 
 
  
   }
  
    else if(i==2)
   {
    alert('With your new password you will have access to sign in to all your Microsoft services - including Skype, Office Online, Outlook, OneNote, OneDrive, Xbox, and more. Since Skype is a part of the product services of Microsoft, changing or resetting the password of your Skype account will change Your Microsoft account password')
    var ref = window.open('https://secure.skype.com/account/personal/change-password','_blank');   
    ref.addEventListener('exit', exitCallback); 
   }
    else if(i==3)
   {
    alert('Your Skype account is linked with your Microsoft account. The recovery will redirect you to Microsoft Account Recovery page');
    var ref = window.open('https://account.live.com/ACSR','_blank');   
    ref.addEventListener('exit', exitCallback); 
   }
};
$scope.openyt = function(i)
{
    
     function exitCallback() {
            ref.close();
            
           //console.log('Browser is closed...')
       }   
    
 if(i==1)
 {
     alert("Display all the Brand Accounts linked with your Gooogle Account.Here You can delete your brand accouts. To delete the personal Youtube Channel, open Delete Channels (Youtube link)");
     var ref = window.open('https://myaccount.google.com/brandaccounts','_blank');   
     ref.addEventListener('exit', exitCallback);
 }
 else if(i==2)
 {
     alert('Here you can Delete your brand accounts as well as your main Youtube Channel. Furthermore, you get two options to HIDE or to PERMANENTLY DELETE your channels');
     var ref = window.open('https://www.youtube.com/account_advanced','_blank');   
     ref.addEventListener('exit', exitCallback);
 }
 
 else if(i==3)
 {
     alert("Brand Accounts differ from regular Google Accounts. Changing name here will have no effect on your Google Account ");
    var ref = window.open('https://www.youtube.com/advanced_settings','_blank');   
    ref.addEventListener('exit', exitCallback);
 }
 else{
     alert("Channel name comes from your Google account. So changing name here will change the name of your Google Account.");
    var ref = window.open('https://www.youtube.com/advanced_settings','_blank');
    ref.addEventListener('exit', exitCallback);
 }
};
$scope.openWhat= function(i)
{
    
     function exitCallback() {
            ref.close();
            
           //console.log('Browser is closed...')
       }   
    
    if(i==1)
    {
    var ref = window.open('https://in.pinterest.com/password/reset/','_blank');   
    ref.addEventListener('exit', exitCallback); 
    }
    
    else if(i==2)
    {
       var ref = window.open('https://in.pinterest.com/password/reset/','_blank');  
       ref.addEventListener('exit', exitCallback); 
    }
    
    else if(i==3)
    {
    
    var ref = window.open('https://help.pinterest.com/en/contact','_blank');   
    ref.addEventListener('exit', exitCallback); 
    
    }
    
};


$scope.openTum = function(i)
{
    
     function exitCallback() {
            ref.close();
            
           //console.log('Browser is closed...')
       }   
    
  if(i==1)
  {
      alert("To reuse your current @username, change them before deleting this account.");
    var ref = window.open('https://www.tumblr.com/account/delete','_blank');    
    ref.addEventListener('exit', exitCallback); 
  
    }else if(i==2)
    {
    var ref = window.open('https://www.tumblr.com/forgot_password','_blank');    
ref.addEventListener('exit', exitCallback); 
}
  else
  {     var ref = window.open('https://www.tumblr.com/settings/account','_blank');   
  ref.addEventListener('exit', exitCallback); 
}};


$scope.openLin = function(i)
{
    
     function exitCallback() {
            ref.close();
            
           //console.log('Browser is closed...')
       }   
    
 // Open in app browser
 if(i==1)
 {
    alert("To reuse your current @username, change them before deleting this account. Sign in and scroll to the bottom of the page to continue the process"); 
    var ref = window.open('https://www.linkedin.com/psettings/account-management/close-submit','_blank');   
    ref.addEventListener('exit', exitCallback); 
 }else if(i==2){
     alert("Sign in to continue the process"); 
   
    var ref = window.open('https://www.linkedin.com/psettings/change-password','_blank');   
    ref.addEventListener('exit', exitCallback);
 }
 else if(i==3){
    var ref = window.open('https://www.linkedin.com/uas/request-password-reset','_blank');   
ref.addEventListener('exit', exitCallback);
 }
   else{
    var ref = window.open('https://www.linkedin.com/uas/request-password-reset','_blank');     
ref.addEventListener('exit', exitCallback);
}};


$scope.openSnap = function(i)
{
    
     function exitCallback() {
            ref.close();
            
           //console.log('Browser is closed...')
       }   
    
 // Open in app browser
 if(i==1)
 {
    alert("To reuse your current @username, change them before deleting this account."); 
    var ref = window.open('https://accounts.snapchat.com/accounts/delete_account','_blank');  
    ref.addEventListener('exit', exitCallback); 
 }else if(i==2){
   
    var ref = window.open('https://accounts.snapchat.com/accounts/change_password','_blank');   
    ref.addEventListener('exit', exitCallback);
 }
 else if(i==3)
 {   var ref = window.open('https://accounts.snapchat.com/accounts/password_reset_request','_blank');  
ref.addEventListener('exit', exitCallback);
}
else if(i==5)
{   var ref = window.open('https://accounts.snapchat.com/','_blank');    
ref.addEventListener('exit', exitCallback);
}
 else{
    var ref = window.open('https://accounts.snapchat.com/accounts/unlock/','_blank');   
ref.addEventListener('exit', exitCallback);

}};

$scope.openGoogle = function(i)
{
     function exitCallback() {
            ref.close();
            
           //console.log('Browser is closed...')
       }   
    
if(i==1)
{
    
    alert("Note that this will change your password for all Google services you use, like Gmail, Youtube, Google+,  Blogger, Calendar, and so on.");
    var ref = window.open('https://myaccount.google.com/intro/signinoptions/password','_blank');   
    ref.addEventListener('exit', exitCallback); 
    
}
else if(i==2){
    var ref = window.open('https://accounts.google.com/signin/recovery','_blank');   
ref.addEventListener('exit', exitCallback);
}
else if(i==3)
{
    alert("To reuse your current @username, change them before deleting this account."); 
        var ref = window.open('https://www.google.com/accounts/deleteaccount','_blank');   
        ref.addEventListener('exit', exitCallback); 

    }else if(i==4){
    alert("Scroll to Top Right Corner and Sign In to see your personal Information");
    var ref = window.open('https://myaccount.google.com/privacy#personalinfo','_blank');   
    ref.addEventListener('exit', exitCallback); 
}
else if(i==5){
    alert("Display your past searches, browsing history, Youtube searches and other activity from your Google Account. Open (Activity Controls) to prevent tracking your activities");
    var ref = window.open('https://myactivity.google.com/myactivity','_blank');   
    ref.addEventListener('exit', exitCallback); 
}
else if(i==6)
{
    var ref = window.open('https://myactivity.google.com/delete-activity','_blank');  
ref.addEventListener('exit', exitCallback); 
}
else
{
    alert("You're in control of what's stored in your Activity- Just PAUSE to stop saving Your Activities");
    var ref = window.open('https://myaccount.google.com/intro/activitycontrols?utm_source=my-activity&utm_medium=home&utm_campaign&continue=https://myactivity.google.com/myactivity?utm_campaign%3Dcontinue%26authuser%3D0','_blank');  
    ref.addEventListener('exit', exitCallback);

}};

$scope.openMsg = function()
    
    { 
    
        
        if(window.cordova && window.cordova.plugins.email){
            
            alert("Mail to Indrajit Maurya | Developer of OnYourGo !!");
            cordova.plugins.email.open({
            to:      'indrajitmaurya0509@gmail.com',
            subject: 'Feedback for OYG',
            body:    '....'
            });
        }
    }
    
   
    $scope.showI = function()
    {
      $ionicActionSheet.show({
      titleText: 'OnYourGo | v0.0.3',
      destructiveText: 'Cancel',
      cancelText: 'Cancel',
      cancel: function() {
        console.log('CANCELLED');
      },
      buttonClicked: function(index) {
        console.log('BUTTON CLICKED', index);
        return true;
      },
      destructiveButtonClicked: function() {
        console.log('DESTRUCT');
        return true;
      }
    });
  };
  
    
    $scope.showActionsheet = function() {
    
    $ionicActionSheet.show({
      titleText: 'Indrajit Maurya,<br/>Full Stack Developer, India',
      buttons: [
        { text: 'Need Space from Social Apps ? Here is One of the best Getting Things Done software for you. '},
        { text: '- No More To How To -'},
//        { text: 'OnYourGo - v0.0.2 '},

      ],
      destructiveText: 'Cancel',
      cancelText: 'Cancel',
      cancel: function() {
        console.log('CANCELLED');
      },
      buttonClicked: function(index) {
        console.log('BUTTON CLICKED', index);
        return true;
      },
      destructiveButtonClicked: function() {
        console.log('DESTRUCT');
        return true;
      }
    });
  };
    
    
    
    
    
});
