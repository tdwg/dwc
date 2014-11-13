
// format date as dd-mmm-yy
// example: 12-Jan-99

function date_ddmmmyy(date)
{
  var d = date.getDate();
  var m = date.getMonth() + 1;
  var y = date.getYear();

  // handle different year values 
  // returned by IE and NS in 
  // the year 2000.
  
  if(y >= 2000)
  {
    y -= 2000;
  }
  if(y >= 100)
  {
    y -= 100;
  }

  // could use splitString() here 
  // but the following method is 
  // more compatible
  var mmm = 
    ( 1==m)?'1':( 2==m)?'2':(3==m)?'3':
    ( 4==m)?'4':( 5==m)?'5':(6==m)?'6':
    ( 7==m)?'7':( 8==m)?'8':(9==m)?'9':
    (10==m)?'10':(11==m)?'11':'12';

   return "" + "20" + (y<10?"0"+y:y) + "-" + mmm +  "-" + (d<10?"0"+d:d);

}


//
// get last modified date of the 
// current document.
//
function date_lastmodified()
{
  var lmd = document.lastModified;
  var s   = "Unknown";
  var d1;

  // check if we have a valid date
  // before proceeding
  if(0 != (d1=Date.parse(lmd)))
  {
    s = "" + date_ddmmmyy(new Date(d1));
  }

  return s;
}

