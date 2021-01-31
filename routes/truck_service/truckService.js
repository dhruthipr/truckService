const data=[];

exports.addTruck = async(req,res)=>{
    try{
        data.push(req.body);
        res.status(200).json({success:true,result:req.body.truck_id});
    
    }catch(e){
        res.status(500).json({success:false,error:e.message});
    }
}


exports.addLoad = async(req,res)=>{
    try{
        const {truck_id} = req.params;
        for(let i=0;i<data.length;i++){
            if(data[i].truck_id === truck_id){
              data[i].parcels.push(req.body);
            }
          }
        res.status(200).json({success:true});
    
    }catch(e){
        res.status(500).json({success:false,error:e.message});
    }

}
exports.removeLoad = async(req,res)=>{
    try{
         const {truck_id,parcel_id}=req.params;
         for(let i=0;i<data.length;i++){
            if(data[i].truck_id === truck_id){
              for(let j=0;j<data[i].parcels.length;j++){
                if(data[i].parcels[j].id=== parcel_id){
                  data[i].parcels.splice(j,1);
                }
              }
            }
          }
          res.status(200).json({success:true});

    }catch(e){
        res.status(500).json({success:false,error:e.message});
    }
}
exports.getParcelCount = async(req,res)=>{
    try{
        const {truck_id}=req.params;
        for(let i=0;i<data.length;i++){
            if(data[i].truck_id===truck_id){
              res.status(200).json({success:true,result:data[i].parcels.length});
            }
          }res.status(200).json({success:true,result:0});
    }catch(e){
        res.status(500).json({success:false,error:e.message});
    }
}

exports.getWeightOfTruck = async(req,res)=>{
    try{
        const {truck_id} = req.params;
        for(let i=0;i<data.length;i++){
          let weight = 0;
          if(data[i].truck_id === truck_id){
            for(let j=0;j<data[i].parcels.length;j++){
              weight+=data[i].parcels[j].weight;
            }
            res.status(200).json({success:true,result:weight});
          }
        }
        res.status(200).json({success:true,result:0});
    }catch(e){
      res.status(500).json({success:false,error:e.message});
    }
}