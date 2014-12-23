##Omniboard Code Challenge##
This is a code challenge I (jdunk) was given in Oct 2014. A description of my submission is immediately below. The original instructions are below that. For better context and chronological flow, read the original instructions first.

##My Submission##
Below is the original text that accompanied [my submission](https://github.com/jdunk/omniboard-sample-project/commit/ab9aaede66072f481c2da44fce9abcb02a50c240):

---
1. Since this is my own fork and it's not a project I'm working on with a team or supervisor, I took some liberties I would ordinarily first discuss / get clearance for.

 * Upgraded Angular from 1.2 to 1.3
 * Upgraded Firebase from v0 to 1.1.2
 * Upgraded AngularFire from 0.3.0 to 0.8.2 (this required rewriting almost all firebase-related code)
 * Upgraded Bootstrap from 3.0.2 to 3.2.0
 * Left FontAwesome alone (v3 is no longer supported, but a v4 upgrade broke things and I didn't feel the time to find new icon equivalents was worth it)
 * Prepended `data-` to all `ng-` html attributes since otherwise it is invalid html5 (yes, I know the docs all use "ng-" and it doesn't really matter, but I like to be able to use validators without tons of noise)
 * [Changed `<i>` elements used for icons to `<span>` elements](http://stackoverflow.com/questions/11135261/i-tag-for-icons)
 * replaced `isClean` function with Angular's built-in `.$pristine` property
 * probably a couple/few other things (I didn't keep a running list; wrote this up just now)

1. Aside from an overall upgrade, my "crazy" additions weren't terribly crazy (I lean toward practical, and my skill set is still new with Angular and Bootstrap), but they were:

 * Made the rating input a numeric integer between 0 and 5 via the html5 "numeric" input attributes
 * Added the rating column to the list table and instead of displaying the integer, I show a number of stars pulled from the fontawesome 3 library
 * When you search, I added a filter to highlight the fragments of the description that match the search term

3. Ideas I had for additional features that I didn't have the time for:

 * Show the form in a modal or row above the table so that the table can be visible for reference while a row is being added/edited
 * Make the stars clickable to change the rating instantly a la Netflix
 * Make the whole `ng-class="{error: myForm.name.$invalid}"` thing actually do something (but make the error class not present for the required fields for the new link (and not edit link) version of the form
 * Make links deletable from list view
 * Confirm before deletion
 * Create a more responsive / better mobile version of the table/list view

Hope this has given you a pretty good idea of what I can do, how I work, and how I think.

Original Instructions from Omniboard:
=====================================

sample-project
==============

*A sample project using AngularJS and Firebase*

This is a very simple HTTP link storage system. There are two views: a list of links and a form to create and edit links.


###Installation###
To get this sample project up and running on your computer just follow these quick steps.

 - Download the latest version of Node.js on your computer from http://nodejs.org/
 - Install Node.js on your local computer 
 - Clone this repository https://github.com/omniboard/sample-project into a folder on your computer
 - Browse to that directory using a Terminal or Command window
 - Start the webserver using the command: `node webserver.js`
 - Open your browser of choice and point it at http://localhost:8000/index.html
 - If all goes well, you should see a list of links from our sample database
 

###Customization###
Once you have the sample project working on your computer, you MUST perform the following modifications to demonstrate your basic familiarity with the involved frameworks.
 - Create your own Firebase at http://www.firebase.com.
 - Modify the sample application to point to your firebase instead of our sample database
 - Create a list of links in your Firebase using the sample application in your browser
 - Place a value at the top of the web page, dynamically linked to Firebase, that shows the total number of links in your Firebase
 - Clean up the insert/edit form in the application using Bootstrap's CSS classes for forms: http://www.getbootstrap.com
 - In addition to the Name, Website and Description columns, modify your form and your Firebase to store a Rating value. *This will be a simple integer value entered directly into the insert/edit form.*


###Get Crazy###
Once you have all of the mandatory customization steps down (*yawn*), it's time to get crazy. Come up with two or three more features or enhancements that prove your creativity and your basic knowledge of the involved frameworks.

###Show It Off###
Now that you've gone crazy, you need to show it to us. Create your own public repository on GitHub with your version of the sample project and share the link with us. It's time for us to see what you've come up with.

###Assessment Criteria###
 - **Creativity:** did you color between the lines or think outside the box?
 - **Attention to Detail:** did you leave bugs in the code or quirkiness in the UI?
 - **Adherence to Instruction:** did you follow all of our instructions listed above?
 - **Cool Factor:** did you impress us with your awesomeness?
