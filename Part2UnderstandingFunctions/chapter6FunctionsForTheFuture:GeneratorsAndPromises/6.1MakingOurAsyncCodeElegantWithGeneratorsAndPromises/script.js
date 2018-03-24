async (function () {
    try {
        const ninjas                = yield getJSON("ninjas.json");
        const missions              = yield getJSON(ninjas[0].missionUrl);
        const missionDescription    = yield getJSON(missions[0].detailsUrl);
        // Study the mission details
    }
    catch(e) {
        // Oh no, we weren't able to get the mission details.
    }
});