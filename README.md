<h1>A versatile fundraising thermometer</h1>
<h3>a jQuery plugin that uses no images</h3>
<ul>
	<li>No images used, CSS3 only</li>
	<li>the fundraiser only needs to type the goal amount and the curent status,</li>
	<li>the script does the rest.</li>
</ul>

<p><strong>See it in action:</strong> <a href="http://rayhyde.github.io/thermometer/">http://rayhyde.github.io/thermometer/</a></p>

<h2>How to use this plugin</h2>
<h3>1. Link the files you need</h3>
<p>Include the jQuery script at the bottom of your page, e.g. through a CDN:</p>
<p><code>	&lt;script src="//code.jquery.com/jquery-2.1.3.min.js"&gt;&lt;/script&gt;</code></p>
<p>Then include the minimized version of the script:</p>
<p><code>&lt;script src="[path to your script]/jquery.thermometer.min.js"&gt;&lt;/script&gt;</code></p>

<p>Change [path to your script] to where it resides, eg "js".</p>
<h3>2. Create your HTML markup</h3>
<p>This is very simple: create an element that contains the thermometer plus a couple of spans that the plugin uses to get the numbers it needs:</p>
<pre>&lt;div id="thermometer"&gt;
  &lt;span class="current"&gt;&euro; 12.000&lt;/span&gt;
  &lt;span class="goal"&gt;&euro; 16.000&lt;/span&gt;
&lt;/div&gt;</pre>
							
<p>That way the text is visible when Javascript is not around and the information stays legible for screen readers and search engines. Also the amounts can be changed easily in CMS systems like Wordpress.</p>
<h3>3. Call the plugin</h3>
<p>Then initialize the plugin, telling it in which element it needs to run:</p>
<pre>
&lt;script&gt;
  $(&lt;containing element here, e.g. "#thermometer"&gt;).thermometer();
&lt;/script&gt;
	</pre>
<h2>My Playground</h2>

<p>This project is part of my Playground - a collection of fun (and <em>ahem</em>, dare I say it: clever) stuff I made in the past, from jQuery games and plugins to CSS animation tricks.</p>

<p>Please drop in on my portfolio site <a href="http://www.rayhyde.nl">www.rayhyde.nl</a>!</p>