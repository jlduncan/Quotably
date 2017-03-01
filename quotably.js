/* quotably.js 1.0
created 02/15/2017 by John L. Duncan
permission granted for free use */

function quotably()
{


    var SOURCE_FILE = "quotably.xml";

    //what we're using to hold all elements on the Web page to which we can add quotes (those with the 'quotably' class)

    var elements = document.getElementsByClassName("quotably");


    if(elements.length > 0)
    {

      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200)
        {
          myFunction(this, elements);
        }
      };
  xhttp.open("GET", SOURCE_FILE, true);
  xhttp.send();

  }//end if
  else
    {

    }

}//end function quotably

function myFunction(xml, elements) {


  //getting our doc...
  var xmlDoc = xml.responseXML;

  //building the array of quotes
  var quoteArray = xmlDoc.getElementsByTagName("QUOTE");
  //creating an array of previously used quotes so that we don't use the same quote more than once on a page
  var usedQuotes = new Array();
  var randomNumber=0;
  var isUnused = true;

  //iterating through each quotably element to add quotes
  for (var i=0; i<elements.length; i++)
  {
    //resetting the value of quotation for each iteration
    var quotation ="";


    do
    {
      isUnused=true;
      //clearing usedQuotes if there are more quotably-attribute tags to fill than quotes available in the xml file - we're just cycling back
      //through used quotes again....

      if (usedQuotes.length == quoteArray.length)
      {
        usedQuotes.length = 0;
      }

      randomNumber = getRandomInt(0, quoteArray.length);

      //the check to ensure we're not using the same quote again...
      for(var j=0; j<usedQuotes.length; j++)
      {

        var compareANumber = usedQuotes[j];
        if (randomNumber === compareANumber)
        {
          isUnused = false;

        }//end if
      }//end for

    } while (isUnused == false);
    usedQuotes.push(randomNumber);

    //retrvieve quote components
    var quoteBody = quoteArray[randomNumber].getElementsByTagName("BODY")[0].childNodes[0].nodeValue;
    var quoteAuthor = quoteArray[randomNumber].getElementsByTagName("AUTHOR")[0].childNodes[0].nodeValue;

    if (elements[i].nodeName == "BLOCKQUOTE")
    {
      quotation += "<p>&quot;" + quoteBody  +
      "&quot;</p><footer>&nbsp;" + quoteAuthor +
      "</footer>";
    }//end if
    else
    {
      quotation += "<p>&quot;" + quoteBody  +
      "&quot;<br/>-&nbsp;" + quoteAuthor +
      "</p>";
    }//end else

    //finally, we can now add the quote to the element
    elements[i].innerHTML = quotation;

  }//end for


}//end function quotably

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}//end function getRandomInt
