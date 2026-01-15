---
title: QPac Electrical Wiring
layout: home
parent: MultiTool
nav-order: 9
---

### Electrical Wiring Tool

---

#### MAS EC Electrical Calculator
This tool calculates various wiring type sizes based on MAS system inputs.  


<script>
window.MathJax = {
  tex: {
    inlineMath: [['$', '$'], ['\\(', '\\)']],
    displayMath: [['$$', '$$'], ['\\[', '\\]']]
  }
};
</script>
<script defer src="https://cdn.jsdelivr.net/npm/mathjax@4/tex-chtml.js"></script>


<u>Inputs</u>
- **Quanity of Fans**: Total number of fans needed.
- **Full Load Current (Each)**: Full Load Ampere or FLA. Current draw of a fan under maximum load.
  - As a good rule of thumb, $\text{FLA} = 0.8 * \text{MCA}$ or $\text{FLA} = 0.44 * \text{MOCP}$
- **Voltage**: Total voltage drop across all fans.
- **EC+**: Additional control and monitoring capabilities. 
- **Field Mounted**: Whether the unit is mounted in the field.
- **Indoor/Outdoor**: Whether a unit is a vision or skyline model, respectfully.
  
<u>Outputs</u>
- **MCA**: Minimum Current Amps. Helps determine the minimum wire size to ensure that the wire should not overheat under normal operating conditions.
- **MOCP**: Maximum Over-Current Protection. Determines the maximum size of the overcurrent protection devices such as circuit breaker or fuse that is used to protect the wire and equipment under fault conditions.
- **XFMR**: Transformer Power. In Volt-Amps or VA. 
- **XFMR Switch**: Power Rating of Transformer Switch. In Volt-Amps or VA.
- **Junction Box**: Whether or not a junction box will be required.


<u>Reference Calculations</u>

$$
\text{MCA}[\text{A}] = 1.25 * \text{FLA} + (\text{QTY FANS} - 1) * \text{FLA} + (\text{VA Transformer Loads})\\
\text{MOCP}[\text{A}] = 2.25 * \text{FLA} + (\text{QTY FANS} - 1) * \text{FLA} + (\text{VA Transformer Loads})
$$


$$
\text{XFMR}[\text{kW}] = \begin{cases}
    \frac{75VA + 75VA}{Voltage}, & \text{if Basic Controls and if }[(\text{FLA} * \text{QTY FANS}) + \frac{75VA}{Voltage} + (\text{FLA} * 0.25)] \leq 40\\ 
    \frac{75VA + 250VA}{Voltage}, & \text{if Basic Controls and if }[(\text{FLA} * \text{QTY FANS}) + \frac{75VA}{Voltage} + (\text{FLA} * 0.25)] \gt 40\\
    \frac{75VA + 100VA}{Voltage}, & \text{if MAS EC+}\\
\end{cases}
$$

$$
\text{XFMR Switch} = (\text{QTY FANS} * \text{FLA}) + \frac{75}{Voltage} + (0.25 * FLA) 
$$


$$
\text{Junction Box} = \begin{cases} 
    \text{CSP}, & \text{if (Field-Mounted)} \text{ AND } (\text{EC+}) \\
    \text{MSP}, & \text{if (EC+)} \text{ AND } \neg \text{(Field-Mounted)} \\
    \text{Basic}, & \text{if (Field-Mounted)} \text{ AND } \neg(\text{EC+})
\end{cases}
$$

$$
\text{Number of Junction Boxes (Controls)} = \begin{cases} 
    \text{1}, & \text{if (CSP)} \text{ OR (MSP) AND (QTY FANS} \leq 10) \\
    \geq 2, & \text{if QTY FANS} \geq 10 \text{. See below for calculating control boxes for large fan numbers.}
\end{cases}
$$


If the unit is MSP, QTY FANS $\geq 10$, and the unit is EC+, we use the following calculation:

$$
\text{Connection Sets } = \frac{n + 4}{5}\\ 
\\
\text{Large Boxes } = \frac{\text{Connection Sets}}{2}\\
\\
\text{Small Boxes } =  \text{Connection Sets} \bmod 2 \\
\\
\text{Number of Junction Boxes (Control Boxes)} = \text{Large Boxes } + \text{Small Boxes}
$$







$$
\text{Number of Junction Boxes (Power)} = ceil(\frac{\text{QTY FANS}}{2})
$$



<u>Wiring Outputs</u>

Power and Ground junction fan connections are found from the references tables. The value given in FLA is searched in "Derate for 4-6 Conductors, 78-86F" in table 3 for power connections and "Ground Wire Rating" in table 4 for ground connections.

Control connections will always be 18 AWG as long as a junction box is present. 

Fan Conduit type will be "Plenum" as long as there is power.
Array Conduit will be 

#### VFD and Miscellaneous Calculator

#### Q-PAC Electrical Calculator


### <u>Reference Tables</u>

|Number of Conductors|Amp Derate Value|
|:----------|:------------|
|1-3|1|
|4-6|0.8|
|7-9|0.7|	
|10-20|0.5|
|21-30|0.45|	
|31-40|0.4|
|41 and Above|0.35| 



|Ambient Temperature Correction|Amp Derate Value|
|:----------|:------------|
|<50|1.15|
|51-59|1.12|
|60-68|1.08|	
|69-77|1.04|
|78-86|1|	
|87-95|0.96|
|96-104|0.91|
|105-113|0.87|
|114-122|0.82|
|123-131|0.76|  



|Wire Size (AWG)|90 Degree C Copper Amp Rating| Derate For 4-6 Conductors, 78-86F|
|:----------|:------------|:------------|
|14|25|20|
|12|30|24|
|10|40|32|
|8|55|44|
|6|75|60|
|4|95|76|
|3|110|88|
|2|130|104|
|1|150|120|
|1/0|170|136|
|2/0|195|156|
|3/0|225|180|


|Wire Size (AWG)|Ground Wire Rating|
|:----------|:------------|
|14|15|
|12|20|
|10|60|	
|8|100|
|6|200|	
|4|300|
|3|400|
|2|500|
|1|600|
  