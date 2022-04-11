To run the project:
- npm install
- npm run dev
<p>###</p>
<ul>
 <li>The project has the following setup vue, vuetify and typescript</li>
 <li>Endpoints have been tested with Postman</li>
<li>Global variables are exported</li>
<li>Helper feature that is used in several places</li>
<li>Routing that is dynamic</li>
</ul>

First page covers APOD api,
as here you can choose from the calendar or a date or a range of dates
in one case it will update the photo of the day, in the date range it will create a timeLine with the photos for those days of the period.

The second page covers the Earth api,
here again you can select only one date from the calendar, but most of them aren't have a photo, so there is an option with a selector for the same date,
but for the previous five years to choose

Third page covers Epic api,
here you have a selector with all possible dates, when choosing which you will find a photo

The fourth and fifth pages cover login and registration,
here I have a problem with the import of firebases which at first glance I'm not sure why, and I did not have time to investigate, but I tried the simplest options (whitout any success),
I left the code for them because as a functionality with firebases it is quite simple, and I have done it many times in quite complex applications, but in general because of
importing firebases these functionalities do not work and also the ability to crude via firebases (which I have also done hundreds of times)

Things I haven't taken the time to do, but it could get better:
- css,
- api key is good to be secured by some backend (easiest in the current version is node js)
- cardImage can be exported as well as a date selector
- and it is much better to use typescript as functionalities that it gives as interfaces and type of data and methods
- reduce dependency like that for date picker
- I haven't followed any git flow where I have a dev and everything is separate in branches
