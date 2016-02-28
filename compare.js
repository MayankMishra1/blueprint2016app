function conflicts(person1) {
    var str1 = 'https://flickering-inferno-2070.firebaseio.com/users/' + person1.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '');
    var ref1 = new Firebase(str1);
    ref1.once("value", function(snapshot) {
        // The callback function will only get called once since we return true
    snapshot.forEach(function(childSnapshot) {
    var key = childSnapshot.val();
    console.log((key.start).substring(0,10) + ' from ' + (key.start).substring(11, 16) + ' until ' + (key.end).substring(11, 16));
        });
    });
}
