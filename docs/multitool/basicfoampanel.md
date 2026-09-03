---
title: Foam Panel Calculator
layout: home
parent: MultiTool
nav-order: 2
---

### Panel Foaming Calculator

{: .text-center }

**###** <u>**Basic Foam Panel Calculator**</u>

---

<img
style="display:block;margin-left:auto;margin-right:auto;"
src="{{ site.baseurl }}/images/panelsDims.png"
alt="Basic Foam Panel Dimensions">

Basic foam panel design calculator. This calculator estimates the panel volume, material weights, material costs, and foam shot time based on the panel length, width, depth, foam density, and chemical ratio.

---

**Variables**

---

<script>

window.MathJax = {
  tex: {
    inlineMath: [['$', '$'], ['\\(', '\\)']],
    displayMath: [['$$', '$$'], ['\\[', '\\]']]
  }
};

</script>

<script defer src="https://cdn.jsdelivr.net/npm/mathjax@4/tex-chtml.js"></script>

The following variables are kept constant in the current code:

* $\rho_{steel} = 0.284\frac{lb}{in^3}$, Density of carbon steel

* $\rho_{foam} = 2.3\frac{lb}{ft^3}$ by default. This value may be overridden by the user depending on foaming conditions.

* $Gauge = 0.03"$, Sheet metal thickness

* Bend Deduction $= 0.144"$

* Offset $= 0.124"$

* Foam Ratio:

$$
r = 0.47
$$

This represents the chemical ratio used in the foam shot calculation.

* Throughput:

$$
T = 60
$$

The current code uses a fixed throughput value of $60$.

* Foam Price:

$$
\$3.01 \text{ per pound}
$$

* Unpainted Sheet Metal Cost:

$$
\$0.98 \text{ per } ft^2
$$

* Painted Sheet Metal Cost:

$$
\$1.81 \text{ per } ft^2
$$

The painted price is used when the **Painted Panel** checkbox is selected. Otherwise, the calculator uses the unpainted price of $$0.98/ft^2$.

* Total Steel Thickness:

$$
Thickness = 2 \times Gauge
$$

Therefore:

$$
Thickness = 2(0.03) = 0.06"
$$

* Flange Cutout Area:

$$
A_{cut} = 2.657 \times 8
$$

Therefore:

$$
A_{cut} = 21.256\text{ in}^2
$$

---

**#### Input Constraints**

* Length must be greater than or equal to $0$

* Width must be greater than or equal to $0$

* Depth must be greater than or equal to $0$

* Foam Density must be greater than $0$

* Chemical Ratio must be greater than $0$

* All numeric inputs accept values up to:

$$
10,000,000
$$

* If Foam Density is left blank or entered as $0$, the calculator defaults to:

$$
\rho_{foam} = 2.3\frac{lb}{ft^3}
$$

* If Chemical Ratio is left blank or entered as $0$, the calculator defaults to:

$$
r = 0.47
$$

* If the calculated values result in invalid or negative results, the displayed material weights, costs, and shot time are reset to $0$.

---

**#### Formulas**

---

<u>Panel Volume</u>

The panel volume is calculated directly from the user-entered dimensions.

$$
Volume = Length \times Width \times Depth
$$

The resulting volume is:

$$
Volume\ [in^3]
$$

This volume is used for both the foam weight and shot time calculations.

---

<u>Outer Panel Dimensions</u>

The developed outer sheet dimensions account for the panel depth and bend deduction.

$$
Outer\ Length = Length + 2(Depth) - Bend\ Deduction
$$

$$
Outer\ Width = Width + 2(Depth) - Bend\ Deduction
$$

Where:

$$
Bend\ Deduction = 0.144"
$$

Therefore:

$$
Outer\ Length = Length + 2(Depth) - 0.144
$$

$$
Outer\ Width = Width + 2(Depth) - 0.144
$$

---

<u>Outer Panel Weight</u>

The outer panel weight is calculated using the developed sheet dimensions, steel density, and material gauge.

$$
Outer\ Weight =
Outer\ Length
\times
Outer\ Width
\times
\rho_{steel}
\times
Gauge
$$

Where:

$$
\rho_{steel} = 0.284\frac{lb}{in^3}
$$

and:

$$
Gauge = 0.03"
$$

Therefore:

$$
Outer\ Weight =
Outer\ Length
\times
Outer\ Width
\times
0.284
\times
0.03
$$

---

<u>Inner Panel Dimensions</u>

The inner panel dimensions are calculated from the developed outer panel dimensions.

$$
Inner\ Length = Outer\ Length - Offset
$$

$$
Inner\ Width = Outer\ Width - Offset
$$

Where:

$$
Offset = 0.124"
$$

Therefore:

$$
Inner\ Length = Outer\ Length - 0.124
$$

$$
Inner\ Width = Outer\ Width - 0.124
$$

---

<u>Inner Panel Weight</u>

The inner panel weight uses the calculated inner developed dimensions.

$$
Inner\ Weight =
Inner\ Length
\times
Inner\ Width
\times
\rho_{steel}
\times
Gauge
$$

Therefore:

$$
Inner\ Weight =
Inner\ Length
\times
Inner\ Width
\times
0.284
\times
0.03
$$

---

<u>Foam Weight</u>

The foam volume is initially calculated in cubic inches and must be converted to cubic feet.

Since:

$$
1ft^3 = 1728in^3
$$

The foam weight is:

$$
Foam\ Weight =
\left(
\frac{Volume}{1728}
\right)
\times
\rho_{foam}
$$

Where the default foam density is:

$$
\rho_{foam} =
2.3\frac{lb}{ft^3}
$$

The user may override this value to account for different foam densities.

---

<u>Total Panel Weight</u>

The total calculated weight is the combined weight of the outer panel, inner panel, and foam.

$$
Total\ Weight =
Outer\ Weight
+
Inner\ Weight
+
Foam\ Weight
$$

---

<u>Foam Cost</u>

The foam cost is calculated using the foam weight and the price per pound.

$$
Foam\ Cost =
Foam\ Weight
\times
Foam\ Price
$$

Where:

$$
Foam\ Price =
\$3.01/lb
$$

Therefore:

$$
Foam\ Cost =
Foam\ Weight
\times
3.01
$$

---

<u>Sheet Metal Surface Area</u>

The current calculator estimates the sheet metal surface area using the panel length, width, steel thickness, flange dimensions, and flange cutout area.

First:

$$
Thickness = 2 \times Gauge
$$

Then:

$$
Surface =
(Length + Thickness)
\times
(Width + Thickness)

+ 2(3.5)(Length)



+ 2(3.5)(Width)

- Flange\ Cut
$$



Where:

$$
Flange\ Cut = 21.256\text{ in}^2
$$

---

<u>Sheet Metal Cost</u>

The current implementation uses the same calculated surface area for both the outer and inner sheet material.

The surface area is converted from square inches to square feet by dividing by $144$.

$$
Panel\ Price =
\frac{Surface \times Painted\ Price}{144}
+
\frac{Surface \times Unpainted\ Price}{144}
$$

For an unpainted panel:

$$
Painted\ Price = 0.98
$$

$$
Unpainted\ Price = 0.98
$$

For a painted panel:

$$
Painted\ Price = 1.81
$$

$$
Unpainted\ Price = 0.98
$$

Therefore, selecting the painted option increases the cost of one side of the calculated sheet metal area.

---

<u>Total Material Cost</u>

The total cost is the sum of the sheet metal cost and foam cost.

$$
Total\ Cost =
Panel\ Price
+
Foam\ Cost
$$

Gasket cost is not currently included in the calculation.

---

<u>Shot Time</u>

Shot time estimates the amount of time required to inject the foam based on the panel volume, foam density, chemical ratio, and machine throughput.

The current implementation uses:

$$
Shot\ Time =
\frac{
Volume
\times
Density\ of\ Foam
}{
\left(
\frac{60}{Throughput}
\right)
\times
Ratio
}
\times
5.787 \times 10^{-4}
$$

The throughput is currently fixed at:

$$
Throughput = 60
$$

Therefore:

$$
Shot\ Time =
\frac{
Volume
\times
Density\ of\ Foam
}{
Ratio
}
\times
5.787 \times 10^{-4}
$$

The final result is displayed in:

$$
seconds
$$

---
