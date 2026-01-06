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

<img
  style="display:block;margin-left:auto;margin-right:auto;"
  src="{{ site.baseurl }}/images/valve.png"
  alt="PIC Valve">

The only allowable input is fluid GPM. Pipe size is outputted in the line box and the text browser displays the corresponding Griswold valve based on a search table.
IS THIS UPDATING

{: .warning }
>Check with the AD team when using GPMs outside of normal ranges, particularily with valve sizes above 10".


{: .note }
>Valve ranges are in the range of 0.5" to 10". Roughly this translate to 7.6-1600 GPM. 

#### Formulas
---

$$\text{Velocity} =\frac{Q * 144}{D^2 * \frac{\pi}{4} * 448.86}$$
Where Q = input GPM and D = pipe diameter. 
#### Code
--- 
Piping sizes are pulled based on the following table:
{: .code-example }
|Pipe Size      | Griswold Valve          | Griswold Rating | Ashrae Rating| 
|:-------------|:------------------|:---------|:--- |
|0.5 | PICV0 | 7  | 7.6 |
|0.75| PICV0 | 15 |   12.4|
|1.0 | PICV0 | 15 | 21.5 |
|1.0 | PICV1 | 30 | 21.5 |
|1.25| PICV1 | 35 | 50.8|
|1.5 | PICV1 | 35 | 50.8 |
|1.5 | PICV2 | 50 | 50.8 |
|2.0 | PICV2 | 80 | 84 |
|2.5 | PICV2 | 95 | 110 |
|2.5 | MVP31 | 113 | 110 |
|3.0 | PICV2 | 95 | 170 |
|3.0 | MVP31 | 113 | 170|
|3.0 | MVP32 | 157 | 170 |
|3.0 | MVP41 | 149 | 170 |
|3.0 |MVP42| 225|  170|
|4.0 | MVP41 | 149 | 320 |
|4.0 | MVP42 | 225 | 320 |
|4.0 | MVP43 | 320 | 320 |
|5.0 | MVP51 | 369 | 370 |
|5.0 | MVP52 | 468 | 370 |
|6.0 | MVP51 | 369 | 660 |
|6.0 | MVP52 | 468 | 660 |
|8.0 | MVP62 | 1220 | 1100 |
|10.0 | MVP62 | 1220 | 1600 |




::: mermaid
graph TD;
    A(Input GPM)
    A-->B{Is GPM less than current row ASHRAE value?};
    B-->|Yes|D{Is GPM less than current row Griswold value?};
    D-->|Yes|E(Select current row's pipe);
    B-->|No|F(Move to next row);
    F-->B;
    D-->|No|F;
:::