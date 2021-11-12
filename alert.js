var native_alert = window.alert;

alert = function(msg) {
    window.postMessage({ type: "switch_tab_alert", msg }, "*");
    setTimeout(function() {
        native_alert(msg);
    }, 500);

    notifyMe(msg);
};

function notifyMe(body) {
    if (Notification.permission !== 'granted') {
        Notification.requestPermission();
        return;
    }

    new Notification(document.title, {body});
}
