---
title: Valve Sizing Tool
layout: default
parent: MultiTool
nav-order: 4
---
{: .text-center }
### <u>Valve Sizing Tool</u>

---
Tool for choosing piping and valve sizing based on fluid GPM. This is intended to be used by sales as a means of providing AD-approved valve sizing.  

<img
  style="display:block;margin-left:auto;margin-right:auto;"
  src="{{ site.baseurl }}/images/valve.png"
  alt="PIC Valve">

The only allowable input is fluid GPM. Pipe size is outputted in the line box and the text browser displays the corresponding Griswold valve based on a search table.


{: .warning }
>Check with the AD team when using GPMs outside of normal ranges, particularily with valve sizes above 10". The velocity output will turn yellow to indicate a value of above 8fps or below 3fps as this is the recommended range for pipe flow.


{: .note }
>Valve ranges are in the range of 0.5" to 10". Roughly this translate to 0-1220 GPM. 

#### Formulas
---
<script>
window.MathJax = {
  tex: {
    inlineMath: [['$', '$'], ['\\(', '\\)']],
    displayMath: [['$$', '$$'], ['\\[', '\\]']]
  }
};
</script>

<script
  src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js"
  async>
</script>
$$
\text{Velocity} = \frac{Q * 144}{D^2 * \frac{\pi}{4} * 448.86}
$$


Where:  
- **Q** = flow rate (GPM)  
- **D** = pipe diameter (inches)  
The constants **144** and **448.86** convert the result from gallons per minute to feet per second.
#### Code
--- 
Piping sizes are pulled based on the following table:

|Pipe Size|	Griswold Valve	|Griswold Rating	|ASHRAE Rating|
|:----------|:------------|:---------|:--- |
|0.5|	PICV0|	7	|5.75|
|0.75	|PICV0	|15	|12.3|
|1.0|	PICV0|	15	|20.5|
|1.0|	PICV1|	30|	20.5|
|1.25|	PICV1|	35|	31.2|
|1.5|PICV1	|35	|44.2|
|1.5|PICV2	|85	|44.2|
|2.0|PICV2	|85	|76.2|
|2.5|	PICV2	|95	|110|
|2.5|MVP31	|113	|110|
|3.0|PICV2	|95	|170|
|3.0|MVP31	|113|	170|
|3.0|MVP32	|157|	170|
|3.0|MVP41	|149|	170|
|3.0|MVP42	|225	|170|
|4.0|MVP41	|149	|320|
|4.0|MVP42	|225	|320|
|4.0|MVP43	|320|320|
|5.0|MVP51	|369	|370|
|5.0|MVP52	|468	|370|
|6.0|MVP51	|369	|660|
|6.0|MVP52	|468	|660|
|8.0|MVP62	|1220|	1100|
|10.0|MVP62	|1220|	1600|


The following logic is used to determine which pipe size to use:
<script type="module">
  import mermaid from "https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs";
  mermaid.initialize({ startOnLoad: true });
</script>

{% mermaid %}
flowchart TD;
    A(Input GPM);
    A-->G(Start at first row);
    G-->B([Is GPM less than current row ASHRAE value?]);
    B-->|Yes|D([Is GPM less than current row Griswold value?]);
    D-->|Yes|E(Select current row's pipe);
    B-->|No|F(Move to next row);
    F-->B;
    D-->|No|F;
{% endmermaid %}


#### Input Constraints
---
• Input must be a positive GPM value (> 0).  
• Zero or negative values are not valid and will not return a recommendation.  
• Values exceeding the maximum table capacity will prompt a warning to consult AD.