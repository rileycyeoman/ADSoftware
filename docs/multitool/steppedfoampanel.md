---
title: Stepped Foam Panel Calculator
layout: home
parent: MultiTool
nav-order: 3
---
### <p style="text-align: center;">Stepped Panel Foam Calculator</p>
--- 
![Alt text](/images\StepPanelDim3.png "3\" Stepped Panel")


Stepped Panel design foam calcualtion. This calculator outputs the volume, costs, and shot times for a given panel design. The inputs are length, width, and depth. Depth is relagated to 2", 3", and 4", as there will be no deviation from these depths in production.


#### Variables
---
The following are the current variables that are kept constant in the code:
+ $\rho_{steel} = 0.284\frac{lb}{in^3}$, Density of steel 
+ $22ga = 0.03in$, Steel gauge
+ $\text{Thickness} = 2 * Gauge$, Both sides of panel to be subtracted from length  
+ $\rho_{Foam} = 2.5$, Foam Density
+ Foam Ratio: 0.47


#### Formulas
$$ \text{Outer Length} = \text{Length} - \text{Thickness} -  \text{Bend Deduction}$$