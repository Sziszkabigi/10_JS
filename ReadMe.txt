At Anthropics, we currently produce 4 pieces of software: PortraitPro,
PortraitPro Body, LandscapePro and Smart Photo Editor.  Each of these
is identified internally by a "software id": PP, PPB, LP and SPE,
respectively. Each of these pieces of software is available in
different editions which is identified internally again by an id. The
edition id can be "Std" for "Standard Edition", "StdTrial" for the
trial version and "Studio" for the Studio version of the software
(which has more features). Each piece of software also has a version.
Versions always consistent of a sequence of numeric segments separated
by the '.' character e.g. 18.3.2

In this task, you will be working with javascript that provides a
facility for printing a user-readable description of the software.

Overall, this task should take you about half an hour but please take
as long as you want to ensure you are happy with the way your code looks
and functions.


Step 1
------

Navigate to the directory in which you downloaded the files index.html and index.txt,
rename index.txt to index.js and view its output by opening index.html with your browser.
(.js files often get blocked from being sent or received as email attachments.)

You should see the text:

	output here

Step 2
------

If you look in the developer's console of your browser you will see the error:

	Uncaught TypeError: Cannot set property 'innerHTML' of null

Fix this error so that within the browser window you see:

	to be written


Step 3
------

Look at the code in index.js. You will see there is a function
generate_software_description(). Given a software id like "PPB",
an edition id like "Std" and a version such as "2.3.1", it should
return the following:

	PortraitPro Body (Standard Edition) v2.3.1

Currently it returns the placeholder text "to be written" which you
saw in the previous step. Change the return value so that it works as
expected.

Step 4
------

Imagine that we are planning on releasing a new piece of software
called FoodscapePro which has a software id of "FP". Update the script
so that it provides support for this software id.

Step 5
------

When we are testing releases internally, we create a release that has
4 version 'segments' such as "2.3.0.3" instead of the usual 3 (such as
"2.3.1" above). Add a function to the script called
is_internal_release(). This should take a version string as a
parameter and return true or false depending on whether it represents
an internal release or not.

Step 6
------

Modify generate_software_description() so that when an internal
version string is used, the output is then:

	PortraitPro Body (Standard Edition) v2.3.0.3 [internal]

Task 7
------

Modify the script so that the three parameters, software id, edition id
and version for generate_software_description() are obtained from an html form.

Task 8
------

There are many deficiencies in the way in which the code currently
works. Please address as many of these as you can and modify the code
as you see fit.

You should spend at least 15 minutes on this task.


