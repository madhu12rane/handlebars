exports.home=function(req,res){
  res.render('home',{title:"home",
                     headline :'City can be displayed'
                     });
}

exports.city=function(req,res){
    var city=req.params.city;
    var imgArray=[1,2];
    var headline ,title;
    if(city=="mumbai"){
    console.log(city);
      title="MUMBAI";
      headline="MUMBAI CITY";
    } else if(city =="bangalore"){
    title="BANGALORE";
    headline="BANGALORE CITY";
    } else if(city =="delhi"){
    title="DELHI";
    headline="DELHI CITY";
    }

   res.render('city',{
    title:title,
    headline:headline,
    imgArray:imgArray,
    city:city
    });

}
