## Name

Thao Vang

## Date

3/14/25

## Assignment

Tip Calculator

## Brief Description

Description:
Create a tip Calculator from the FrontEndMentor starter
Requirements:
React
Tailwind CSS
Desktop and Mobile Versions

## Peer Review

by: Aaron Robinson
everything works as intended and meets the project requirements, design is a near 1:1 replica. I would add the ability for the input values to stay in the input field when a new tip amount is pressed instead of clearing. For added user clarity, it would be a nice feature to disable typing in the billField when there is two characters after the decimal point, adding this sort of function in a useEffect(() => {},[bill]) should work correctly, im sure theres an easier way

billField.addEventListener("input", function (e) {
const value = e.target.value;

      if (value.includes(".")) {
        const parts = value.split(/[.]/);

        if (parts.length > 1 && parts[1].length > 2) {
          e.target.value =
            parts[0] +
            (value.includes(",")) +
            parts[1].substring(0, 2);
        }
      }
    });
