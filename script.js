$(function() {
    setTimeout(function() {
        bt('updateUser', {'user_id': 'nvranicar@zetaglobal.com'});
    }, 500);

    var timestamp = new Date();

    var user_json = {
        'user_id': 'nvranicar@zetaglobal.com',
        'button_last_clicked_at': timestamp,
        'has_clicked_button': 'Y'
    }

    $('#profile_btn').click(function() {
        bt('updateUser', user_json, {onSuccess: function() {
            alert('User update completed!');
        }, onFailure: function(error) {
            alert('User update failed. Error code: ' + error.status);
        }});
    });

    var event_json = {
        'timestamp': timestamp,
        'source': "Nathan's SA challenge site"
    }

    $('#event_btn').click(function() {
        bt('track', 'button_clicked', event_json, {onSuccess: function() {
            alert('Event track completed!');
        }, onFailure: function(error) {
            alert('Event track failed. Error code: ' + error.status);
        }});
    });
});