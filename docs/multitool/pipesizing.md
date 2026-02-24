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
>Check with the AD team when using GPMs outside of normal ranges, particularily with valve sizes above 4". The velocity output will turn yellow to indicate a value of above 8fps or below 3fps as this is the recommended range for pipe flow.


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
- **D** = pipe inner diameter (in)  
The constants **144** and **448.86** convert the result from gallons per minute to feet per second.

{: .note }
>Pipe sizes are shown in nominal size, but for calculations, inner diameter is used. Nominal size is what the manufacturer specifies first, inner diameter is what calculates flow and velocity.


The nominal size and respective inner and outer diameters are shown below: 
<img
  style="display:block;margin-left:auto;margin-right:auto;"
  src="{{ site.baseurl }}/images/pipesizing.png"
  alt="Pipe Sizing">

|Copper Nominal Size|	Inner Diameter	|Outer Diameter| Weight of Tube (lb/ft)|Weight of Tube & Water (lb/ft)|
|:----------|:------------|:---------| :------|
|0.5|	0.545|	0.625	| 0.285| 0.386|
|0.75	|	.785| .875	|0.455 |0.664|
|1.0|	1.025|	1.125	|0.655|1.01|
|1.25|1.265	|1.625	|	0.884|1.43|
|1.5|1.505	| 1.625	|1.14|1.91|
|2.0|	1.985|2.125	|1.75|3.09|
|2.5|	2.465	|2.625	|2.48|4.54|
|3.0|	2.945|	3.125|3.33|6.27|
|4.0|	3.905|4.125|5.38|10.1|
|5.0|	4.875|5.125|7.61|15.7|
|6.0|	5.845|6.125|10.2|21.8|
|8.0|	7.725|8.125|19.3|39.6|
|10.0|9.625|10.125|30.1|61.6|







#### Code
--- 
Piping sizes are pulled based on the following table:

|Pipe Size|	Griswold Valve	| Griswold Min Flow|Griswold Max Flow	|ASHRAE Max Flow| Butterfly Valve | Accessory|
|:----------|:------------|:---------|:--- |:--- |:--- |:--- |
|0.5 |PICV0|  0  | 7	|5.75 |             N/A               |Isolator S - IS0 |  
|0.75|PICV0|  0	 | 15	|12.3 |             N/A               |Isolator S - IS1 | 
|1.0 |PICV0|  0  | 15	|20.5 |             N/A               |Isolator S - IS1 | 
|1.0 |PICV1|  0  | 30 |	20.5|             N/A               |Isolator S - IS1 | 
|1.25|PICV1|  0  | 35 |	31.2|             N/A               |Isolator S - IS2 | 
|1.5 |PICV1|  0  | 35	|44.2 |             N/A               |Isolator S - IS2 | 
|1.5 |PICV2|  0  | 85	|44.2 |             N/A               |Isolator S - IS2 |  
|2.0 |PICV2|  0  | 85	|76.2 |             N/A               |Isolator S - IS3 | 
|2.5 |PICV2|  0  | 95	|110  |             N/A               |Isolator S - IS4 | 
|2.5 |MVP31|40.7 | 113|110  |Griswold Butterfly Valve - 2.5"|Isolator S - IS4 | 
|3.0 |PICV2|  0  | 95	|170  |             N/A               |Isolator S - IS4 | 
|3.0 |MVP31|40.7 | 113|	170 |Griswold Butterfly Valve - 3"  |Isolator S - IS4 | 
|3.0 |MVP32|56.3 |157 |	170 |Griswold Butterfly Valve - 3"  |Isolator S - IS4 | 
|3.0 |MVP41|55.4 |149 |	170 |Griswold Butterfly Valve - 3"  |Isolator S - IS4 | 
|3.0 |MVP42|75   |225	|170  |Griswold Butterfly Valve - 3"  |Isolator S - IS4 | 
|4.0 |MVP41|55.4 |149	|320  |Griswold Butterfly Valve - 4"  |Y Strainer  - 4" | 
|4.0 |MVP42|75   |225	|320  |Griswold Butterfly Valve - 4"  |Y Strainer  - 4" | 
|4.0 |MVP43|103  |320 |320  |Griswold Butterfly Valve - 4"  |Y Strainer  - 4" |
|5.0 |MVP51|103  |369	|370  |             TBD               |Y Strainer  - 5" | 
|5.0 |MVP52|103  |468	|370  |             TBD               |Y Strainer  - 5" |  
|6.0 |MVP51|113  |369	|660  |             TBD               |Y Strainer  - 6" | 
|6.0 |MVP52|113  |468	|660  |             TBD               |Y Strainer  - 6" | 
|8.0 |MVP62|146  |1220|1100 |             TBD               |Y Strainer  - 8" | 
|10.0|MVP62|146  |1220|1600 |             TBD               |Y Strainer  - 10" | 


The following logic is used to determine which pipe size to use:
<script type="module">
  import mermaid from "https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs";
  mermaid.initialize({ startOnLoad: true });
</script>

{% mermaid %}
flowchart TD;
    A(Input GPM);
    A-->|GPM > Max GPM|L(Too High Warning);
    A-->G(Start at first row);
    G-->B([Is GPM less than current row ASHRAE value?]);
    B-->|Yes|D([Is GPM less than current row Griswold value?]);
    D-->|Yes|E(Select current row's pipe);
    B-->|No|F(Move to next row);
    F-->B;
    D-->|No|F;
    E-->H(Calculate FPS);
    E-->M(Recommended Selected Row Valve);
    H-->|FPS>8|I(Too High Warning);
    H-->|FPS<3|J(Too Low Warning);
    H-->|FPS>=3 & FPS<=8|K(OK);
{% endmermaid %}


#### Input Constraints
---
• Input must be a positive GPM value (> 0).  
• Zero or negative values are not valid and will not return a recommendation.  
• Values exceeding the maximum table capacity will prompt a warning to consult AD.