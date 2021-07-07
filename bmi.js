function bmi(){
    var Height=document.getElementById("Height").value;
    var Weight=document.getElementById("Weight").value;
   var height_in_m = Height/100;
   var  height_in_m_square = height_in_m * height_in_m;
   var BMI1 = Weight / height_in_m_square;
  var BMI= Math.round(BMI1);
   document.getElementById("BMI").value=BMI;
     
}

function ideal_weight(){
    var height=document.getElementById("ideal_Height").value;
    var idelWeight = height - 100;
    document.getElementById("ideal_weight_id").value=idelWeight;
}

function fat_percent_for_men(){
    var Abdoment_cm=document.getElementById("abdomen_id").value;
    console.log(typeof Abdoment_cm);
    var neck_cm=document.getElementById("Neck_fat_id").value;
    var height_in_cm=document.getElementById("Height_fat_id").value;
    var Abdomen_in_inch=(Abdoment_cm * 0.393701).toFixed(2);
    console.log(Abdomen_in_inch);
    var neck_in_inch=(neck_cm * 0.393701).toFixed(2);
    console.log(neck_in_inch);
    var height_in_inch = (height_in_cm * 0.393701).toFixed(2);
    console.log(height_in_inch);
    var Body_fat_Percent1 = (86.010 * Math.log(Abdomen_in_inch - neck_in_inch)/Math.log(10)).toFixed(2);
    console.log(Body_fat_Percent1);
      var Body_fat_Percent2= (70.041 * Math.log(height_in_inch)/Math.log(10)).toFixed(2);
      console.log(Body_fat_Percent2);
      var Body_fat_Percent3=  36.76;
      var Body_fat_Percentg=(Body_fat_Percent1 - Body_fat_Percent2 ).toFixed(2);
      console.log(Body_fat_Percentg);
      var g=(-Body_fat_Percentg - Body_fat_Percent3).toFixed(2);
      console.log(g);
    var Body_fat_Percent=Math.abs(g);
    console.log(Body_fat_Percent)
    document.getElementById("fat_id1").value=Body_fat_Percent;
    
}

function cgpa_to_percentage(){
    var cgpa;
    var percentage = cgpa * 9.5;
    document.write(percentage);
}




function fat_percent_for_women()
{
    var waist_cm=document.getElementById("waist_id").value;

    console.log(typeof waist_cm);
    var hip_cm=document.getElementById("hip_id").value;
    console.log(hip_cm);
    var neck_female_cm=document.getElementById("Neck_id").value;
    console.log(neck_female_cm);
    var height_female_cm=document.getElementById("Heightf_id").value;
    console.log(height_female_cm);
    
var neck_female_inch= (neck_female_cm * 0.393701).toFixed(2);
console.log(neck_female_inch);
    var waist_female_inch=(waist_cm * 0.393701).toFixed(2);
    console.log(waist_female_inch);
    var hip_female_inch=(hip_cm * 0.393701).toFixed(2);
    console.log(hip_female_inch);
    var height_female_inch = (height_female_cm * 0.393701).toFixed(2);
    console.log(height_female_inch);
    var Body_fat_percent_female1 =  hip_female_inch - neck_female_inch ;
    console.log(Body_fat_percent_female1);
    var k= -waist_female_inch -Body_fat_percent_female1;
    console.log(k);
    var ka=Math.abs(k);
    console.log(ka);
    var C=(Math.log(ka)/Math.log(10)).toFixed(2);
    console.log(C);
    var Ca=(163.205 * C).toFixed(2);
    console.log(Ca);

    var Body_fat_percent_female2 = (97.684 * Math.log(height_female_inch)/Math.log(10)).toFixed(2);
console.log(Body_fat_percent_female2);
    var Body_fat_percent_female3=  78.387;
    var Body_fat_percent_female4=( Ca - Body_fat_percent_female2 - Body_fat_percent_female3).toFixed(2);
    console.log(Body_fat_percent_female4);

  // var Body_fat_percent_female5=  Body_fat_percent_female3;
 //   console.log(Body_fat_percent_female5);

   // var Body_fat_percent_female6= (+Body_fat_percent_female4 - +Body_fat_percent_female5).toFixed(2);
    //console.log(Body_fat_percent_female6);

    var Body_fat_percent_female =Math.abs(Body_fat_percent_female4);
    console.log(Body_fat_percent_female);

    document.getElementById("fat_female").value=Body_fat_percent_female;
}

function Weightgaincalculator(){
   var Weightlast1= document.getElementById("BodyWeight1").value;
   var pound1=Weightlast1 * 2.205;
   //console.log(pound);
   var Weightgaink1=(pound1 *19).toFixed(2);
   var Weightgainll1= - Weightgaink1 -500;
   var Weightgainbb1=Math.abs(Weightgainll1);
   var Weightgain1=Math.trunc(Weightgainbb1);
   //console.log(Weightgain);
document.getElementById("CalorieIntake_karan").value=Weightgain1;

}

function Weightgaincalculator_karan2(){
    var Weightlast2= document.getElementById("BodyWeight2").value;
    var pound2=Weightlast2 * 2.205;
    //console.log(pound);
    var Weightgaink2=(pound2 *19).toFixed(2);
    var Weightgain2= Math.trunc(Weightgaink2);
    //console.log(Weightgain);
 document.getElementById("CalorieIntake_seri").value=Weightgain2;
 
 }
 function Weightgaincalculator_karan3(){
    var Weightlast3= document.getElementById("BodyWeight3").value;
    var pound3=Weightlast3 * 2.205;
   // console.log(pound);
    var Weightgaink3=(pound3 *19).toFixed(2);
    var Weightgainll3= Weightgaink3 - 500;
    var Weightgainbb3=Math.abs(Weightgainll3);
    var Weightgain3=Math.trunc(Weightgainbb3);
    //console.log(Weightgain);
 document.getElementById("CalorieIntake_poda").value=Weightgain3;
 
 }
 