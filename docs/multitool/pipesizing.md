---
title: Valve Sizing Tool
layout: default
parent: MultiTool
nav-order: 4
---
{: .text-center }
### Valve Sizing Tool

---
Tool for choosing piping and valve sizing based on fluid GPM. This is intended to be used by sales as a means of providing AD-approved valve sizing.  
<div class = "code-example" markdown = "1">
<img 
    style="display: block; 
           margin-left: auto;
           margin-right: auto;"
    src="/images/valve.png" 
    alt="PIC Valve">
</img>
</div>
The only allowable input is fluid GPM. Pipe size is outputted in the line box and the text browser displays the corresponding Griswold valve based on a search table.


{: .warning }
>Check with the AD team when using GPMs outside of normal ranges, particularily with valve sizes above 10".


{: .note }
>Valve ranges are in the range of 0.5" to 10". Roughly this translate to 7.6-1600 GPM. 

#### Formulas
---

$$\text{Inner Diameter} = \sqrt{\frac{Q * 144}{v * \frac{\pi}{4} * 448.86}}$$

#### Code
--- 
Piping sizes are pulled based on the following table:
<div class = "code-example" markdown = "1">
|Pipe Size      | Griswold Valve          | Griswold Rating | Ashrae Rating| 
|:-------------|:------------------|:---------|:--- |
|0.5 | PICV0 | 7 | 7.6 |
|1.0 | PICV0 | 15 | 21.5 |
|1.0 | PICV0 | 30 | 21.5 |
|1.5 | PICV0 | 35 | 50.8 |
|1.5 | PICV0 |  50| 50.8 |
|2.0 | PICV0 | 80 | 84 |
|2.5 | PICV0 | 95 | 110 |
|2.5 | PICV0 | 113 | 110 |
|3.0 | PICV0 | 95 | 170 |
|3.0 | PICV0 | 113 | 170|
|3.0 | PICV0 | 157 | 170 |
|3.0 | PICV0 | 149 | 170 |
|4.0 | PICV0 | 149 | 320 |
|4.0 | PICV0 | 225 | 320 |
|4.0 | PICV0 | 320 | 370 |
|5.0 | PICV0 | 369 | 670 |
|6.0 | PICV0 | 369 | 660 |
|6.0 | PICV0 | 468 | 660 |
|8.0 | PICV0 | 1220 | 1100 |
|10.0 | PICV0 | 1220 | 1600 |

</div>

```meraid
graph TD;
    accTitle: the diamond pattern
    accDescr: a graph with four nodes: A points to B and C, while B and C both point to D
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```