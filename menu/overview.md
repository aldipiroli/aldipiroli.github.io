---
layout: page
title: 
permalink: /notes
---
<h2 style="text-align:left">Notes On Papers</h2>
<p style="text-align:justify"> Here I share notes I have taken while reading interesting papers.
The notes represent my own understanding of the topic and may not always be correct. 
If you notice any issue with copyrighted content, please kindly inform me via email, and I will promptly address the issue.
<br>
<table style="width:100%;border:0px;border-spacing:0px;border-collapse:separate;margin-right:auto;margin-left:auto;">
  <tr>
    <td style="padding-left:1%;width:75%;vertical-align:middle;min-width:120px;text-align:left; border-bottom: 2px solid black;  border-top: 2px solid black;">
     <h3>Title </h3>
    </td>
    <td style="padding:0%;width:20%;vertical-align:middle;min-width:120px;text-align:left; border-bottom: 2px solid black;  border-top: 2px solid black;">
     <h3>Tags </h3>
    </td>
    <td style="padding:0%;width:5%;vertical-align:middle;min-width:120px;text-align:center; border-bottom: 2px solid black;  border-top: 2px solid black;">
     <h3>Source </h3>
    </td>
    <td style="padding:1%;width:5%;vertical-align:middle;min-width:120px;text-align:center; border-bottom: 2px solid black;  border-top: 2px solid black;">
     <h3>Publishing Date</h3>
    </td>
  </tr>
  {% assign publications = site.pages | where_exp: "item" , "item.path contains 'notes'"| sort: 'date_read'|reverse %}
  {% for post in publications %}
  <tr>
    <td style="padding-top:1%;padding-bottom:1%;padding-left:1%;padding-right:2%;width:75%;vertical-align:middle;min-width:120px;text-align:left; border-bottom: 1px solid black;">
    <!-- TITLE -->
     <a href="{{ site.github.url }}{{ post.url }}"> {{post.title}} </a>
    </td>
    <td style="padding-top:1%;width:20%;vertical-align:middle;min-width:120px;text-align:left; border-bottom: 1px solid black;">
    <!-- Tags -->
      {% for tag in post.tags %}
     {{tag}} <br>
    {% endfor %}
    </td>
    <td style="padding-top:1%;width:5%;vertical-align:middle;min-width:120px;text-align:center; border-bottom: 1px solid black;">
    <!-- Source -->
     <a href=" {{post.source_url}}" >link</a>
    </td>
  <td style="padding-top:1%;width:5%;vertical-align:middle;min-width:120px;text-align:center; border-bottom: 1px solid black;">
    <!-- Published Date -->
     {{post.date_pub}}
    </td>
  </tr>
  {% endfor %}
</table>