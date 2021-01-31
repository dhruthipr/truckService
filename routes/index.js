const router =  require('express').Router();
const {
    addTruck,
    addLoad,
    removeLoad,
    getParcelCount,
    getWeightOfTruck
}= require('./truck_service/truckService');

router.post('/add/truck',addTruck);
router.post('/load/:truck_id',addLoad);
router.put('/unload/:truck_id/:parcel_id',removeLoad);
router.get('/get/:truck_id',getParcelCount);
router.get('/get/weight/:truck_id',getWeightOfTruck);


module.exports = router;