document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('setting');
    link.addEventListener('click', function() {
        setWebhook();
    });

    var link2 = document.getElementById('mainbutton');
    link2.addEventListener('click', function() {
        remindMe();
    });

});


function setWebhook() {

    var webentry = prompt('Webhook (Channel destination):');
    
    localStorage.setItem("webhook", webentry);

}

function remindMe() {

    var webhook = localStorage.getItem("webhook");

    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
	  
        var url = tabs[0].url;

        var xhr = new XMLHttpRequest();
        xhr.open("POST", webhook, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        var params = {
            username: "Discord Reminder",
            avatar_url: "https://cdn.icon-icons.com/icons2/2220/PNG/512/discord_game_gaming_voice_chat_icon_134331.png",
            content: url
          }
        xhr.send(JSON.stringify(params));
    });
         
}
