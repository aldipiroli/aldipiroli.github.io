---
layout: page
title: 
permalink: /notes
---
<h2 style="text-align:left">Notes On Papers</h2>
<p style="text-align:justify"> Here I share some notes that I have taken  while reading some interesting papers.
These notes represent my understanding of the papers, and they may not always be correct. 
If you notice any issue with copyrighted content, please kindly inform me via email, and I will promptly address the issue.
<br>
<table style="width:100%;border:0px;border-spacing:0px;border-collapse:separate;margin-right:auto;margin-left:auto;">
  <tr>
    <td style="padding:0%;width:75%;vertical-align:middle;min-width:120px;text-align:left">
     <h3>Title </h3>
    </td>
    <td style="padding:0%;width:20%;vertical-align:middle;min-width:120px;text-align:left">
     <h3>Tags </h3>
    </td>
    <td style="padding:0%;width:5%;vertical-align:middle;min-width:120px;text-align:center">
     <h3>Source </h3>
    </td>
    <td style="padding:1%;width:5%;vertical-align:middle;min-width:120px;text-align:center">
     <h3>Published </h3>
    </td>
  </tr>
  {% assign publications = site.pages | where_exp: "item" , "item.path contains 'notes'"| sort: 'date_read'|reverse %}
  {% for post in publications %}
  <tr>
    <td style="padding-top:1%;width:75%;vertical-align:middle;min-width:120px;text-align:left">
    <!-- TITLE -->
     <a href="{{ site.github.url }}{{ post.url }}"> {{post.title}} </a>
    </td>
    <td style="padding-top:1%;width:20%;vertical-align:middle;min-width:120px;text-align:left">
    <!-- Tags -->
      {% for tag in post.tags %}
     {{tag}} <br>
    {% endfor %}
    </td>
    <td style="padding-top:1%;width:5%;vertical-align:middle;min-width:120px;text-align:center">
    <!-- Source -->
     <a href=" {{post.source_url}}" >link</a>
    </td>
  <td style="padding-top:1%;width:5%;vertical-align:middle;min-width:120px;text-align:center">
    <!-- Published Date -->
     {{post.date_pub}}
    </td>
  </tr>
  {% endfor %}
</table>