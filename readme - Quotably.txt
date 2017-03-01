Quotably - add random quotes to a Webpage
v. 1.0
Created by: John L. Duncan (duncan.john.lawrence@gmail.com)
*********************************************************************

This is just a little AJAX-powered widget to add one or more random quotes to a blockquote, <p>, or other text-based tag in one's webpage.

How it works: For each html element (blockquote, paragraph, header, etc) which has the "quotably" class, the quotably.js will insert a random quote from an XML file. The program will not insert the same quote twice on the page unless the number of "quotably" elements exceeds the number of quotes in the XML file. If the element is a blockquote, the body of the quote will be framed by <p> elements and the source will be enclosed by <footer> elements prior to being inserted into the blockquote - works especially well with Boostrap. Feel free to edit quotably.js if need to alter the presentation to fit your style and you're comfortable with JavaScript

How to use:

1.) Add some of your favorite quotes to the quotably.xml file. Do not use quotation marks around the body of the quote - those will be added automatically. Please escape any HTML entities beforehand. Place the quotably.xml file in the same folder as the page where the quotes will be used.

2.) Add the quotably.js file wherever is most convenient - perhaps the same folder where the rest of the scripts for the site are stored. Don't forget to include in the Web page a <script> tag referencing the the .js file. 

3.) Add the following- onload = "quotably()" - to the <body> tag of your webpage like so: <body onload = "quotably()">.

4.) Add the "quotably" class to any blockquote (preferred), paragraph, div, header, etc. where you'd like to display a random quote - for instance: <blockquote class="quotably">.


That's it; you're good to go. In the next version, I'll add a minified script you can add right in the header for those who would rather not mess with a separate .js file, and an editor to make it easier to add quotes to the xml file. If you have any questions, difficulties, problems, suggestions, complaints, whatever - please feel free to send me an email.

Regarding the XML file - each quote should be framed in a <QUOTE> block within the parent <QUOTES>, like so:

<QUOTES>
  <QUOTE>
    <BODY>Body of the first quote</BODY>
    <AUTHOR>Quote Author</AUTHOR>
  </QUOTE>
  <QUOTE>
    <BODY>The next quote</BODY>
    <AUTHOR>Other Author</AUTHOR>
  </QUOTE>
  etc...
</QUOTES>