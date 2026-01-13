---
title: Stepped Foam Panel Calculator
layout: home
parent: MultiTool
nav-order: 3
---
{: .text-center }
### <u>Stepped Panel Foam Calculator</u>
--- 
<img
  style="display:block;margin-left:auto;margin-right:auto;"
  src="{{ site.baseurl }}/images/StepPanelDim3.png"
  alt="PIC Valve">

Stepped Panel design foam calcualtion. This calculator outputs the volume, costs, and shot times for a given panel design. The inputs are length, width, and depth. Depth is relagated to 2", 3", and 4", as there will be no deviation from these depths in production.


#### Variables
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
  defer src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js"
  async>
</script>
<!-- <script 
  defer src="https://cdn.jsdelivr.net/npm/mathjax@4/tex-mml-chtml.js">
</script> -->
The following are the current variables that are kept constant in the code:
- $\rho_{steel} = 0.284\frac{lb}{in^3}$, Density of steel 
- $\rho_{foam} = 2.5\frac{lb}{ft^3}$, Foam Density
- $22ga = 0.03\text{"}$, Steel gauge
- Gasket Cost: \$0.7 per ft
- Foam Price: \$3.01 per pound
- Unpainted Sheet Metal Cost: $1.05  \text{ per } ft^2$
- Painted Sheet Metal Cost: $ 1.47 \text{ per } ft^2$
- $\text{Thickness} = 2 * Gauge$, Both sides of panel to be subtracted from length  
- Foam Ratio: $ ratio = 0.47$
-  Flange Length:
$$
\text{Inner Flange} = \begin{cases}
    0.73\text{"} & \text{if } Depth = 2\text{"} \\ 
    1.64\text{"} & \text{if } Depth = 3\text{"} \\ 
    2.64\text{"} & \text{if } Depth = 4\text{"} 
\end{cases}
$$
- Depth of outer panel: $\text{outer\_depth} = 1.138\text{"}$. Because the inner panel is modular but not the outer, this value remains constant. 
- Offset $= 0.255$", Distance from inner to outer panel
- $\text{cut\_out} =  4 * 17.4 in^2$. Cutout of sheet metal, this is the total surface area of hypothetical rectangular sheet metal minus the true value. This is essentially the sheet metal minus the corners, represented in the shaded area of the following image:
<img
  style="display:block;margin-left:auto;margin-right:auto;"
  src="{{ site.baseurl }}/images/cutout.png"
  alt="Sheet Metal Cutout">




#### Formulas
---
<u>Interior Volume of Outer Panel</u><br>

$$ \text{Outer Length} = \text{Length} - \text{Thickness}$$

$$ \text{Outer Width} = \text{Width} - \text{Thickness}$$

$$ \text{Outer Volume} = \text{Outer Length} * \text{Outer Width} *  \text{Outer Depth}$$


<u>Interior Volume of Inner Panel</u>

$$ \text{Inner Length} = \text{Outer Length} - \text{Flange} -  \text{2 * Offset}$$ 

$$ \text{Inner Width} = \text{Width} - \text{Thickness}$$

$$ \text{Inner Depth} = \text{Depth} - \text{Outer Depth} -  \text{Gauge}$$

$$ \text{Inner Volume} = \text{Inner Length} * \text{Inner Width} *  \text{Inner Depth}$$


<u>Interior Volume of Whole Panel</u>

$$ \text{Volume} = \text{Outer Volume} + \text{Inner Volume}$$

<u>Surface Areas</u>

$$\text{Surface Outer} = (\text{Outer Length} + \text{Thickness}) * (\text{Outer Width} + \text{Thickness}) + (2 * 3.5 * \text{Inner Length}) + (2 * 3.5 * \text{Outer Width}) - \text{Flange Cut}$$

$$\text{Surface Inner} = (\text{Inner Length} + \text{Thickness}) * (\text{Inner Width} + \text{Thickness}) + (2 * \text{Inner Flange} * \text{Inner Length}) + (2 * \text{Inner Flange} * \text{Inner Width})$$

<u>Weights</u><br>

$$\text{Outer Weight} = \text{Surface Outer} * \rho_{steel} * \text{Gauge}$$

$$\text{Inner Weight} = \text{Surface Inner} * \rho_{steel} * \text{Gauge}$$

$$\text{Foam Weight} = \frac{Volume * \rho_{foam}}{\text{Price of Foam}}$$

<u>Prices</u><br>

$$\text{Panel Price} = \frac{\text{Surface Outer} * \text{Painted Price}}{144} + \frac{\text{Surface Inner} * \text{Unpainted Price}}{144}$$

$$\text{Total Cost} = \text{Foam} * \text{Panel Price} * \text{Gasket Cost}$$

<u>Shot Time</u><br>

$$\frac{Volume[in^3] * \rho_{foam} [lb/ft^3]}{Ratio[lb/lb] * (Throughput[lb/min]/60[s/min]) * 1728[in^3/ft^3]}$$

Where 1728 is for the conversion of $in^3$ to $ft^3$

