//Ex 1
function reverseNr(nr) 
{
    nr=nr+"";
    return nr.split("").reverse().join("");
}
console.log(reverseNr(123));

function reverseStr(str) 
{
    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    return joinArray; 
}
console.log(reverseStr("abcd"));


//Ex 2
function removeChar(str, char_position)
{
	str1 = str.substring(0, char_position);
  	str2 = str.substring(char_position + 1, str.length);
 	return (str1 + str2);
}
console.log(removeChar("String", 0));
console.log(removeChar("String", 4));


//Ex 3
function div37(number)
{
	if(number%3 == 0 || number%7 == 0)
	{
		return true;
	}
		else
		{
			return false;
		}
} 
console.log(div37(12));
console.log(div37(14));
console.log(div37(10));
console.log(div37("@,/,!,?,+,-"));


//Ex 4
function isNumeric(str)
{
	if(isNaN(str))
	{
		return false;
	}
	else
		return true;
}
console.log(isNumeric(1));
console.log(isNumeric("asd"));
console.log(div37("@,/,!,?,+,-"));


//Ex 5
function sum(array)
{
	suma=0;

	for(i=0; i<array.length; i++)
	{
		if(!isNaN(array[i]))
		{
			suma+=array[i];
		}
	}
	return suma;
}
console.log(sum([1,2,3]));
console.log(sum([1,2,"a",3]));
console.log(sum("asd"));


//Ex 6
function checkProperty(argum, prop)
{
	if(argum.hasOwnProperty(prop))
	{
		return true;
	}
	else
		return false;
}
console.log(checkProperty({red: "red", green: "green", white: "white"}, "green"));
console.log(checkProperty({red: "red", green: "green", white: "white"}, "black"));

//Bonus
function IntegerInRoman(nr) 
{
	var romanNr = 
[
  [1000, 'M'],
  [900, 'CM'],
  [500, 'D'],
  [400, 'CD'],
  [100, 'C'],
  [90, 'XC'],
  [50, 'L'],
  [40, 'XL'],
  [10, 'X'],
  [9, 'IX'],
  [5, 'V'],
  [4, 'IV'],
  [1, 'I']
];

  if (nr === 0) 
  {
    return '';
  }
  
  if(!isNaN(nr))
  {
  	  for (var i = 0; i < romanNr.length; i++) 
  	  {
		    if (nr >= romanNr[i][0]) 
		    {
      		return romanNr[i][1] + IntegerInRoman(nr - romanNr[i][0]);
    	  }
  	  }
  }
  else
  	{
  		romanNr="Nu este un numar!";
  	}
  	return romanNr;
}
console.log(IntegerInRoman(4120));
console.log(IntegerInRoman("asd"));
console.log(IntegerInRoman("@,/,!,?,+,-"));